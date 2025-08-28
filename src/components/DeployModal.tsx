import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useApi } from '../hooks/useApi'
import './DeployModal.css'
import type API from '../services/api.services'
import { Divider } from 'rsuite'

// Interface for API response
interface AppTemplate {
    uid: string
    name: string
    logo_url: string
    description: string
    short_description: string
    is_active: boolean
    is_public: boolean
    setup_time_minutes: number
    repository: string
    billing_cycle: string
    price: number
    created_at: string
    updated_at: string
    minimum_requirements: {
        name: string
        quantity: number
        unit: string
        display_name: string
        cost: number
    }[]
    categories: string[]
    features: {
        name: string
        description: string
    }[]
}

interface DeploymentConfig {
    vcpu: number
    ram: number
    storage: number
    bandwidth: number
}

interface EnvironmentVariable {
    key: string
    value: string
    description?: string
}

const DeployModal: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const api: API = useApi()

    const action = searchParams.get('action')
    const appId = searchParams.get('id')
    const isOpen = action === 'deploy' && !!appId

    const [isAdvancedMode, setIsAdvancedMode] = useState(false)
    const [httpAccess, setHttpAccess] = useState(true)
    const [appName, setAppName] = useState('')
    const [config, setConfig] = useState<DeploymentConfig>({
        vcpu: 1,
        ram: 1,
        storage: 5,
        bandwidth: 50
    })
    const [envVars, setEnvVars] = useState<EnvironmentVariable[]>([
        { key: 'NODE_ENV', value: 'production', description: 'Application environment' }
    ])
    const [isLoggedIn] = useState(false) // Mock auth state

    // Fetch app template details
    const { data: appTemplates = [], isLoading, error } = useQuery({
        queryKey: ['appTemplates'],
        queryFn: () => api.getAppTemplates() as Promise<AppTemplate[]>,
        enabled: isOpen
    })

    const appTemplate = useMemo(() => {
        return appTemplates.find(template => template.uid === appId)
    }, [appTemplates, appId])

    const minimumRequirements = useMemo(() => {
        if (!appTemplate) return { vcpu: 1, ram: 1, storage: 5, bandwidth: 50 }

        const cpuReq = appTemplate.minimum_requirements.find(req => req.name === 'cpu')
        const memoryReq = appTemplate.minimum_requirements.find(req => req.name === 'memory')
        const storageReq = appTemplate.minimum_requirements.find(req => req.name === 'storage')
        const bandwidthReq = appTemplate.minimum_requirements.find(req => req.name === 'bandwidth')

        return {
            vcpu: cpuReq?.quantity || 1,
            ram: memoryReq?.quantity || 1,
            storage: storageReq?.quantity || 5,
            bandwidth: bandwidthReq?.quantity || 50
        }
    }, [appTemplate])

    const calculatePrice = () => {
        const vcpuPrice = config.vcpu * 10
        const ramPrice = config.ram * 5
        const storagePrice = config.storage * 0.5
        const bandwidthPrice = config.bandwidth * 0.05
        return vcpuPrice + ramPrice + storagePrice + bandwidthPrice
    }

    const handleConfigChange = (key: keyof DeploymentConfig, value: number) => {
        const minValue = minimumRequirements[key]
        setConfig(prev => ({ ...prev, [key]: Math.max(value, minValue) }))
    }

    const addEnvVar = () => {
        setEnvVars(prev => [...prev, { key: '', value: '' }])
    }

    const updateEnvVar = (index: number, field: 'key' | 'value', value: string) => {
        setEnvVars(prev => prev.map((env, i) =>
            i === index ? { ...env, [field]: value } : env
        ))
    }

    const removeEnvVar = (index: number) => {
        setEnvVars(prev => prev.filter((_, i) => i !== index))
    }

    const handleClose = () => {
        const newSearchParams = new URLSearchParams(searchParams)
        newSearchParams.delete('action')
        newSearchParams.delete('id')
        setSearchParams(newSearchParams)
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose()
        }
    }

    if (!isOpen) return null

    if (isLoading) {
        return (
            <div className="deploy-modal-overlay" onClick={handleBackdropClick}>
                <div className="deploy-modal">
                    <div className="deploy-modal-content">
                        <div className="deploy-header">
                            <h1>Loading deployment details...</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (error || !appTemplate) {
        return (
            <div className="deploy-modal-overlay" onClick={handleBackdropClick}>
                <div className="deploy-modal">
                    <button onClick={handleClose} className="modal-close-btn">
                        ×
                    </button>
                    <div className="deploy-modal-content">
                        <div className="deploy-header">
                            <h1>App not found</h1>
                            <p>The requested application could not be found.</p>
                            <button onClick={handleClose} className="btn btn-primary">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="deploy-modal-overlay" onClick={handleBackdropClick}>
            <div className="deploy-modal">
                <button onClick={handleClose} className="modal-close-btn">
                    ×
                </button>
                <div className="deploy-modal-content">
                    <div className="deploy-header">
                        <button onClick={handleClose} className="back-btn">
                            ← Back
                        </button>
                    </div>

                    <div className="deploy-content">
                        {/* Left Section - Configuration */}
                        <div className="deploy-config">
                            <div>
                                <h1>Deploy {appTemplate.name}</h1>
                                <p>Configure your application deployment</p>
                            </div>
                            <Divider />
                            <div className="config-section">
                                <div className="section-header">
                                    <h2>Application Configuration</h2>
                                    <div className="advanced-toggle">
                                        <label className="toggle-switch">
                                            <input
                                                type="checkbox"
                                                checked={isAdvancedMode}
                                                onChange={(e) => setIsAdvancedMode(e.target.checked)}
                                            />
                                            <span className="toggle-slider"></span>
                                        </label>
                                        <span className="toggle-label">Advanced Mode</span>
                                        <span className="technical-chip">TECHNICAL</span>
                                    </div>
                                </div>

                                {!isAdvancedMode && (
                                    <div className="simple-mode-notice">
                                        <p>🚀 <strong>Quick Deploy:</strong> Using recommended settings for optimal performance. Enable Advanced Mode to customize.</p>
                                    </div>
                                )}

                                {/* App Name */}
                                <div className="config-group">
                                    <h3>Application Name</h3>
                                    <div className="app-name-input">
                                        <input
                                            type="text"
                                            placeholder={`Enter name for your ${appTemplate.name} instance`}
                                            value={appName}
                                            onChange={(e) => setAppName(e.target.value)}
                                            className="app-name-field"
                                            maxLength={50}
                                        />
                                        <div className="input-hint">
                                            <span className="char-count">{appName.length}/50</span>
                                            <span className="hint-text">This will be your app's display name</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Resource Requirements */}
                                <div className="config-group">
                                    <h3>Resource Requirements</h3>
                                    <div className="resource-grid">
                                        <div className="resource-item">
                                            <label>vCPU Cores</label>
                                            <div className="slider-group">
                                                <div className="slider-header">
                                                    <span className="current-value">{config.vcpu} cores</span>
                                                    <span className="min-label">Min: {minimumRequirements.vcpu}</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min={minimumRequirements.vcpu}
                                                    max={Math.max(minimumRequirements.vcpu * 4, 16)}
                                                    value={config.vcpu}
                                                    onChange={(e) => handleConfigChange('vcpu', parseInt(e.target.value))}
                                                    disabled={!isAdvancedMode}
                                                    className="resource-slider"
                                                />
                                            </div>
                                        </div>
                                        <div className="resource-item">
                                            <label>RAM (GB)</label>
                                            <div className="slider-group">
                                                <div className="slider-header">
                                                    <span className="current-value">{config.ram}GB</span>
                                                    <span className="min-label">Min: {minimumRequirements.ram}GB</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min={minimumRequirements.ram}
                                                    max={Math.max(minimumRequirements.ram * 8, 64)}
                                                    value={config.ram}
                                                    onChange={(e) => handleConfigChange('ram', parseInt(e.target.value))}
                                                    disabled={!isAdvancedMode}
                                                    className="resource-slider"
                                                />
                                            </div>
                                        </div>
                                        <div className="resource-item">
                                            <label>Storage (GB)</label>
                                            <div className="slider-group">
                                                <div className="slider-header">
                                                    <span className="current-value">{config.storage}GB</span>
                                                    <span className="min-label">Min: {minimumRequirements.storage}GB</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min={minimumRequirements.storage}
                                                    max={Math.max(minimumRequirements.storage * 10, 500)}
                                                    value={config.storage}
                                                    onChange={(e) => handleConfigChange('storage', parseInt(e.target.value))}
                                                    disabled={!isAdvancedMode}
                                                    className="resource-slider"
                                                />
                                            </div>
                                        </div>
                                        <div className="resource-item">
                                            <label>Bandwidth (GB/month)</label>
                                            <div className="slider-group">
                                                <div className="slider-header">
                                                    <span className="current-value">{config.bandwidth}GB</span>
                                                    <span className="min-label">Min: {minimumRequirements.bandwidth}GB</span>
                                                </div>
                                                <input
                                                    type="range"
                                                    min={minimumRequirements.bandwidth}
                                                    max={Math.max(minimumRequirements.bandwidth * 20, 1000)}
                                                    value={config.bandwidth}
                                                    onChange={(e) => handleConfigChange('bandwidth', parseInt(e.target.value))}
                                                    disabled={!isAdvancedMode}
                                                    className="resource-slider"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* HTTP Access */}
                                <div className="config-group">
                                    <h3>Network Configuration</h3>
                                    <div className="http-access">
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                checked={httpAccess}
                                                onChange={(e) => setHttpAccess(e.target.checked)}
                                                disabled={!isAdvancedMode}
                                            />
                                            <span className="checkmark"></span>
                                            Enable HTTP Access
                                        </label>
                                        <p className="help-text">Allow external access to your application via HTTP/HTTPS</p>
                                    </div>
                                </div>

                                {/* Environment Variables */}
                                {isAdvancedMode && (
                                    <div className="config-group">
                                        <div className="section-header">
                                            <h3>Environment Variables</h3>
                                            <button onClick={addEnvVar} className="btn btn-secondary btn-sm">
                                                + Add Variable
                                            </button>
                                        </div>
                                        <div className="env-vars">
                                            {envVars.map((env, index) => (
                                                <div key={index} className="env-var-item">
                                                    <input
                                                        type="text"
                                                        placeholder="Variable name"
                                                        value={env.key}
                                                        onChange={(e) => updateEnvVar(index, 'key', e.target.value)}
                                                        className="env-key"
                                                    />
                                                    <input
                                                        type="text"
                                                        placeholder="Value"
                                                        value={env.value}
                                                        onChange={(e) => updateEnvVar(index, 'value', e.target.value)}
                                                        className="env-value"
                                                    />
                                                    <button
                                                        onClick={() => removeEnvVar(index)}
                                                        className="remove-env-btn"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Section - Summary */}
                        <div className="deploy-summary">
                            <div className="deploy-summary-card">
                                {/* App Info */}
                                <div className="app-summary">
                                    <div className="app-header">
                                        <div className="app-icon">
                                            {appTemplate.logo_url ? (
                                                <img src={appTemplate.logo_url} alt={appTemplate.name} />
                                            ) : (
                                                <span>📦</span>
                                            )}
                                        </div>
                                        <div className="app-info">
                                            <h3>{appTemplate.name}</h3>
                                            <p>{appTemplate.short_description}</p>
                                        </div>
                                    </div>
                                    <div className="app-features">
                                        <h4>Features:</h4>
                                        <ul>
                                            {appTemplate.features.slice(0, 3).map((feature, index) => (
                                                <li key={index}>{feature.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="pricing-summary">
                                    <h4>Monthly Cost</h4>
                                    <div className="price-breakdown">
                                        <div className="price-item">
                                            <span>vCPU ({config.vcpu} cores)</span>
                                            <span>${(config.vcpu * 10).toFixed(2)}</span>
                                        </div>
                                        <div className="price-item">
                                            <span>RAM ({config.ram}GB)</span>
                                            <span>${(config.ram * 5).toFixed(2)}</span>
                                        </div>
                                        <div className="price-item">
                                            <span>Storage ({config.storage}GB)</span>
                                            <span>${(config.storage * 0.5).toFixed(2)}</span>
                                        </div>
                                        <div className="price-item">
                                            <span>Bandwidth ({config.bandwidth}GB)</span>
                                            <span>${(config.bandwidth * 0.05).toFixed(2)}</span>
                                        </div>
                                        <div className="price-total">
                                            <span>Total</span>
                                            <span>${calculatePrice().toFixed(2)}/month</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="deploy-action-buttons">
                                    {/* User/Billing Section */}
                                    {isLoggedIn ? (
                                        <div className="user-info">
                                            <h4>Account Information</h4>
                                            <div className="user-details">
                                                <p><strong>Email:</strong> user@example.com</p>
                                                <p><strong>Plan:</strong> Pro</p>
                                                <p><strong>Payment Method:</strong> •••• 4242</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="auth-section">
                                            <h4>Account Required</h4>
                                            <p>Sign in or create an account to deploy applications</p>
                                            <div className="auth-buttons">
                                                <button className="btn btn-primary">Sign In</button>
                                                <button className="btn btn-secondary">Create Account</button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Deploy Button */}
                                    <div className="deploy-action">
                                        <button
                                            className="btn btn-primary btn-lg deploy-btn"
                                            disabled={!isLoggedIn}
                                        >
                                            <span>Deploy Application</span>
                                            <span className="deploy-icon">🚀</span>
                                        </button>
                                        <p className="deploy-time">
                                            ⚡ Estimated setup time: {appTemplate.setup_time_minutes} minutes
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeployModal
