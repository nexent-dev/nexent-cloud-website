import React, { useState } from 'react'
import './Documentation.css'

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('introduction')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="documentation">
      <div className="docs-container">
        <aside className="docs-sidebar">
          <div className="sidebar-content">
            <h3>Documentation</h3>
            <nav className="sidebar-nav">
              <button 
                className={activeSection === 'introduction' ? 'active' : ''} 
                onClick={() => scrollToSection('introduction')}
              >
                Introduction
              </button>
              <button 
                className={activeSection === 'getting-started' ? 'active' : ''} 
                onClick={() => scrollToSection('getting-started')}
              >
                Getting Started
              </button>
              <button 
                className={activeSection === 'one-click-hosting' ? 'active' : ''} 
                onClick={() => scrollToSection('one-click-hosting')}
              >
                One-Click App Hosting
              </button>
              <button 
                className={activeSection === 'advanced-deployment' ? 'active' : ''} 
                onClick={() => scrollToSection('advanced-deployment')}
              >
                Advanced Deployment
              </button>
              <button 
                className={activeSection === 'notifications' ? 'active' : ''} 
                onClick={() => scrollToSection('notifications')}
              >
                Notifications Service
              </button>
              <button 
                className={activeSection === 'marketplace' ? 'active' : ''} 
                onClick={() => scrollToSection('marketplace')}
              >
                App Marketplace
              </button>
              <button 
                className={activeSection === 'custom-hosting' ? 'active' : ''} 
                onClick={() => scrollToSection('custom-hosting')}
              >
                Custom App Hosting
              </button>
              <button 
                className={activeSection === 'faq' ? 'active' : ''} 
                onClick={() => scrollToSection('faq')}
              >
                FAQ & Troubleshooting
              </button>
            </nav>
          </div>
        </aside>

        <main className="docs-content">
          <section id="introduction" className="docs-section">
            <h1>Nexent Cloud Documentation</h1>
            <p className="lead">
              Welcome to Nexent Cloud - the zero-downtime, Kubernetes-powered platform that makes cloud deployment simple and reliable.
            </p>
            
            <h2>What is Nexent Cloud?</h2>
            <p>
              Nexent Cloud is a modern cloud platform built on Kubernetes that provides zero-downtime deployments for your applications. 
              Our platform automatically manages scaling, load balancing, and high availability so you can focus on building great software.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <h3>🚀 App Hosting</h3>
                <p>Deploy applications with zero downtime using our automated Kubernetes infrastructure.</p>
              </div>
              <div className="feature-card">
                <h3>📱 Notifications</h3>
                <p>Send emails and SMS messages at scale with our reliable notification APIs.</p>
              </div>
              <div className="feature-card">
                <h3>🏪 App Marketplace</h3>
                <p>One-click installation of popular open-source applications like WordPress, Odoo, and more.</p>
              </div>
              <div className="feature-card">
                <h3>⚡ Zero Downtime</h3>
                <p>All applications run with minimum 2 replicas for guaranteed high availability.</p>
              </div>
            </div>
          </section>

          <section id="getting-started" className="docs-section">
            <h1>Getting Started</h1>
            
            <h2>1. Sign Up and Access Dashboard</h2>
            <p>
              To get started with Nexent Cloud, visit <a href="https://console.cloud.nexent.dev/register" target="_blank" rel="noopener noreferrer">console.cloud.nexent.dev/register</a> and create your account.
            </p>
            
            <div className="code-block">
              <div className="code-header">Steps to Get Started</div>
              <ol>
                <li>Create your Nexent Cloud account</li>
                <li>Verify your email address</li>
                <li>Access the dashboard at console.cloud.nexent.dev</li>
                <li>Complete your profile setup</li>
              </ol>
            </div>

            <h2>2. Dashboard Navigation</h2>
            <p>Once logged in, you'll find the main sections of the dashboard:</p>
            
            <ul>
              <li><strong>App Hosting:</strong> Deploy and manage your applications</li>
              <li><strong>Notifications:</strong> Send emails and SMS messages</li>
              <li><strong>Marketplace:</strong> Install one-click applications</li>
              <li><strong>Settings:</strong> Manage your account and billing</li>
              <li><strong>Support:</strong> Get help and view documentation</li>
            </ul>

            <div className="info-box">
              <strong>💡 Pro Tip:</strong> Start with the App Marketplace to quickly deploy popular applications, then explore custom deployments as you become more familiar with the platform.
            </div>
          </section>

          <section id="one-click-hosting" className="docs-section">
            <h1>One-Click App Hosting</h1>
            
            <h2>Available Applications</h2>
            <p>
              Our marketplace includes popular open-source applications that can be deployed instantly:
            </p>

            <div className="app-grid">
              <div className="app-item">
                <strong>WordPress</strong> - Content management system
              </div>
              <div className="app-item">
                <strong>Odoo</strong> - Business management suite
              </div>
              <div className="app-item">
                <strong>n8n</strong> - Workflow automation
              </div>
              <div className="app-item">
                <strong>Ghost</strong> - Publishing platform
              </div>
              <div className="app-item">
                <strong>Nextcloud</strong> - File sharing platform
              </div>
              <div className="app-item">
                <strong>Grafana</strong> - Analytics platform
              </div>
            </div>

            <h2>Installing an Application</h2>
            <div className="code-block">
              <div className="code-header">Installation Steps</div>
              <ol>
                <li>Navigate to the App Marketplace in your dashboard</li>
                <li>Browse or search for your desired application</li>
                <li>Click "Install" on the application card</li>
                <li>Configure basic settings (domain, admin credentials)</li>
                <li>Click "Deploy" to start the installation</li>
              </ol>
            </div>

            <h2>Managing Deployed Apps</h2>
            <p>
              Once deployed, you can manage your applications from the App Hosting section:
            </p>
            <ul>
              <li><strong>View Status:</strong> Monitor health and uptime</li>
              <li><strong>Scale Resources:</strong> Adjust CPU and memory allocation</li>
              <li><strong>Update Settings:</strong> Modify environment variables</li>
              <li><strong>View Logs:</strong> Debug issues and monitor performance</li>
              <li><strong>Custom Domains:</strong> Connect your own domain names</li>
            </ul>

            <div className="warning-box">
              <strong>⚠️ Important:</strong> All applications run with a minimum of 2 replicas for zero downtime. This ensures your application stays online even during updates or node maintenance.
            </div>
          </section>

          <section id="advanced-deployment" className="docs-section">
            <h1>Advanced App Deployment</h1>
            
            <h2>GitHub/GitLab Integration</h2>
            <p>
              Connect your repositories for automatic deployments when you push code:
            </p>

            <div className="code-block">
              <div className="code-header">Repository Setup</div>
              <ol>
                <li>Go to App Hosting → Custom Deployment</li>
                <li>Connect your GitHub or GitLab account</li>
                <li>Select the repository you want to deploy</li>
                <li>Choose the branch for deployments (usually 'main' or 'production')</li>
                <li>Configure build settings and deployment YAML</li>
              </ol>
            </div>

            <h2>YAML Configuration</h2>
            <p>
              Create a <code>nexent.yaml</code> file in your repository root to configure deployments:
            </p>

            <div className="code-block">
              <div className="code-header">nexent.yaml</div>
              <pre><code>{`# Nexent Cloud Deployment Configuration
apiVersion: v1
kind: Application
metadata:
  name: my-app
  
spec:
  # Number of replicas (minimum 2 for zero downtime)
  replicas: 3
  
  # Container configuration
  container:
    image: node:18-alpine
    port: 3000
    
  # Build configuration
  build:
    command: |
      npm install
      npm run build
      npm start
      
  # Environment variables
  environment:
    NODE_ENV: production
    DATABASE_URL: $\{DATABASE_URL}
    API_KEY: $\{API_KEY}
    
  # Resource allocation
  resources:
    cpu: "500m"      # 0.5 CPU cores
    memory: "1Gi"    # 1 GB RAM
    
  # Health checks
  healthCheck:
    path: "/health"
    port: 3000
    initialDelaySeconds: 30
    
  # Custom domain (optional)
  domain: myapp.example.com`}</code></pre>
            </div>

            <h2>Environment Variables</h2>
            <p>
              Manage sensitive configuration through the dashboard:
            </p>
            <ul>
              <li>Navigate to your app in App Hosting</li>
              <li>Go to Settings → Environment Variables</li>
              <li>Add variables like database URLs, API keys, etc.</li>
              <li>Reference them in your YAML using <code>${'{VARIABLE_NAME}'}</code></li>
            </ul>

            <div className="info-box">
              <strong>💡 Best Practice:</strong> Always use environment variables for sensitive data like passwords and API keys. Never commit these to your repository.
            </div>
          </section>

          <section id="notifications" className="docs-section">
            <h1>Notifications Service</h1>
            
            <h2>Email & SMS APIs</h2>
            <p>
              Send transactional emails and SMS messages using our reliable APIs:
            </p>

            <h3>Email API Example (cURL)</h3>
            <div className="code-block">
              <div className="code-header">Send Email</div>
              <pre><code>{`curl -X POST https://api.nexent.dev/v1/email \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "user@example.com",
    "subject": "Welcome to our service",
    "html": "<h1>Welcome!</h1><p>Thanks for signing up.</p>",
    "from": "noreply@yourapp.com"
  }'`}</code></pre>
            </div>

            <h3>Email API Example (Python)</h3>
            <div className="code-block">
              <div className="code-header">Python Example</div>
              <pre><code>{`import requests

def send_email(to, subject, html_content):
    url = "https://api.nexent.dev/v1/email"
    headers = {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    }
    data = {
        "to": to,
        "subject": subject,
        "html": html_content,
        "from": "noreply@yourapp.com"
    }
    
    response = requests.post(url, headers=headers, json=data)
    return response.json()

# Usage
result = send_email(
    to="user@example.com",
    subject="Welcome!",
    html_content="<h1>Welcome to our service!</h1>"
)`}</code></pre>
            </div>

            <h3>SMS API Example (Node.js)</h3>
            <div className="code-block">
              <div className="code-header">Node.js Example</div>
              <pre><code>{`const axios = require('axios');

async function sendSMS(to, message) {
  try {
    const response = await axios.post('https://api.nexent.dev/v1/sms', {
      to: to,
      message: message
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('SMS sending failed:', error);
  }
}

// Usage
sendSMS('+1234567890', 'Your verification code is: 123456');`}</code></pre>
            </div>

            <h2>Notification Dashboard</h2>
            <p>
              Use the web interface for bulk operations and scheduling:
            </p>
            <ul>
              <li><strong>Bulk Send:</strong> Upload CSV files to send to multiple recipients</li>
              <li><strong>Templates:</strong> Create reusable email and SMS templates</li>
              <li><strong>Scheduling:</strong> Schedule messages for future delivery</li>
              <li><strong>Analytics:</strong> Track delivery rates and engagement</li>
            </ul>

            <h2>Best Practices</h2>
            <div className="info-box">
              <ul>
                <li><strong>Rate Limits:</strong> Default limit is 1000 emails/hour, 100 SMS/hour</li>
                <li><strong>Retries:</strong> Failed messages are automatically retried up to 3 times</li>
                <li><strong>Validation:</strong> Email addresses and phone numbers are validated before sending</li>
                <li><strong>Compliance:</strong> Include unsubscribe links in marketing emails</li>
              </ul>
            </div>
          </section>

          <section id="marketplace" className="docs-section">
            <h1>App Marketplace</h1>
            
            <h2>Current Available Apps</h2>
            <p>
              Our marketplace features carefully curated open-source applications:
            </p>

            <div className="marketplace-grid">
              <div className="marketplace-item">
                <h3>WordPress</h3>
                <p>The world's most popular content management system</p>
                <span className="category">CMS</span>
              </div>
              <div className="marketplace-item">
                <h3>Odoo</h3>
                <p>Complete business management suite with CRM, accounting, and more</p>
                <span className="category">Business</span>
              </div>
              <div className="marketplace-item">
                <h3>n8n</h3>
                <p>Workflow automation tool for connecting different services</p>
                <span className="category">Automation</span>
              </div>
              <div className="marketplace-item">
                <h3>Ghost</h3>
                <p>Modern publishing platform for blogs and newsletters</p>
                <span className="category">Publishing</span>
              </div>
            </div>

            <h2>Future Vision</h2>
            <p>
              We're building an ecosystem where developers can publish and monetize their applications:
            </p>
            <ul>
              <li><strong>Developer Portal:</strong> Submit your applications for review</li>
              <li><strong>Revenue Sharing:</strong> Earn money from your published apps</li>
              <li><strong>App Store Model:</strong> Users can discover and install apps with one click</li>
              <li><strong>Automatic Updates:</strong> Keep apps secure with automated updates</li>
            </ul>

            <div className="info-box">
              <strong>🚀 Coming Soon:</strong> Developer application submission portal. Join our waitlist to be notified when it launches!
            </div>
          </section>

          <section id="custom-hosting" className="docs-section">
            <h1>Custom App Hosting</h1>
            
            <h2>Deployment Workflow</h2>
            <p>
              Deploy your custom applications using our streamlined process:
            </p>

            <div className="workflow-steps">
              <div className="workflow-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Connect Repository</h3>
                  <p>Link your GitHub or GitLab repository to Nexent Cloud</p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Configure YAML</h3>
                  <p>Add nexent.yaml to define build and deployment settings</p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Set Replicas</h3>
                  <p>Choose number of instances (minimum 2 for zero downtime)</p>
                </div>
              </div>
              <div className="workflow-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Deploy</h3>
                  <p>Push to your repository to trigger automatic deployment</p>
                </div>
              </div>
            </div>

            <h2>Example: Node.js Application</h2>
            <div className="code-block">
              <div className="code-header">Package.json</div>
              <pre><code>{`{
  "name": "my-node-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "build": "npm install --production"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}`}</code></pre>
            </div>

            <div className="code-block">
              <div className="code-header">nexent.yaml</div>
              <pre><code>{`apiVersion: v1
kind: Application
metadata:
  name: my-node-app
  
spec:
  replicas: 2
  container:
    image: node:18-alpine
    port: 3000
  build:
    command: |
      npm install --production
      npm start
  resources:
    cpu: "250m"
    memory: "512Mi"
  healthCheck:
    path: "/health"
    port: 3000`}</code></pre>
            </div>

            <h2>Supported Languages & Frameworks</h2>
            <ul>
              <li><strong>Node.js:</strong> Express, Next.js, Nuxt.js, Nest.js</li>
              <li><strong>Python:</strong> Django, Flask, FastAPI</li>
              <li><strong>PHP:</strong> Laravel, Symfony, CodeIgniter</li>
              <li><strong>Ruby:</strong> Rails, Sinatra</li>
              <li><strong>Go:</strong> Gin, Echo, Fiber</li>
              <li><strong>Java:</strong> Spring Boot, Quarkus</li>
              <li><strong>Static Sites:</strong> React, Vue, Angular, HTML/CSS/JS</li>
            </ul>
          </section>

          <section id="faq" className="docs-section">
            <h1>FAQ & Troubleshooting</h1>
            
            <h2>Common Issues</h2>
            
            <div className="faq-item">
              <h3>Q: My deployment is failing during the build step</h3>
              <p><strong>A:</strong> Check the build logs in your dashboard. Common causes include:</p>
              <ul>
                <li>Missing dependencies in package.json or requirements.txt</li>
                <li>Incorrect build commands in nexent.yaml</li>
                <li>Environment variables not set properly</li>
                <li>Build timeout (increase resources if needed)</li>
              </ul>
            </div>

            <div className="faq-item">
              <h3>Q: My app is running but returning 502 errors</h3>
              <p><strong>A:</strong> This usually indicates your app isn't listening on the correct port:</p>
              <ul>
                <li>Ensure your app listens on the port specified in nexent.yaml</li>
                <li>Use environment variable PORT if available: <code>process.env.PORT || 3000</code></li>
                <li>Check that your health check endpoint is responding</li>
              </ul>
            </div>

            <div className="faq-item">
              <h3>Q: How do I scale my application?</h3>
              <p><strong>A:</strong> You can scale both horizontally and vertically:</p>
              <ul>
                <li><strong>Horizontal:</strong> Increase replicas in nexent.yaml or dashboard</li>
                <li><strong>Vertical:</strong> Increase CPU/memory resources in your configuration</li>
                <li>Auto-scaling based on CPU/memory usage (coming soon)</li>
              </ul>
            </div>

            <div className="faq-item">
              <h3>Q: Can I use a custom domain?</h3>
              <p><strong>A:</strong> Yes! Add your domain in the dashboard:</p>
              <ul>
                <li>Go to your app settings → Custom Domain</li>
                <li>Add your domain (e.g., myapp.example.com)</li>
                <li>Update your DNS to point to our load balancer</li>
                <li>SSL certificates are automatically provisioned</li>
              </ul>
            </div>

            <div className="faq-item">
              <h3>Q: How do I access my application logs?</h3>
              <p><strong>A:</strong> Logs are available in real-time through the dashboard:</p>
              <ul>
                <li>Navigate to App Hosting → Your App → Logs</li>
                <li>Filter by log level (info, warn, error)</li>
                <li>Download logs for offline analysis</li>
                <li>Set up log alerts for critical errors</li>
              </ul>
            </div>

            <h2>Getting Support</h2>
            <p>Need help? We're here to assist you:</p>
            <ul>
              <li><strong>Documentation:</strong> Check this documentation first</li>
              <li><strong>Community Forum:</strong> Ask questions and share solutions</li>
              <li><strong>Email Support:</strong> support@nexent.dev for technical issues</li>
              <li><strong>Live Chat:</strong> Available in your dashboard during business hours</li>
              <li><strong>Status Page:</strong> Check system status at status.nexent.dev</li>
            </ul>

            <div className="info-box">
              <strong>💡 Pro Tip:</strong> When contacting support, include your app name, deployment logs, and steps to reproduce the issue for faster resolution.
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Documentation
