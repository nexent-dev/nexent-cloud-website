export interface AppSpecs {
  vcpu: number
  ram: number
  storage: number
  bandwidth: number
}

export interface MarketplaceApp {
  id: string
  name: string
  description: string
  longDescription: string
  icon: string
  category: string
  specs: AppSpecs
  monthlyPrice: number
  installTime: string
  features: string[]
  tags: string[]
  popularity: number
}

export const apps: MarketplaceApp[] = [
  {
    id: 'wordpress',
    name: 'WordPress',
    description: 'The world\'s most popular CMS platform',
    longDescription: 'Create beautiful websites, blogs, and applications with WordPress. Includes automatic updates, security patches, and optimized performance.',
    icon: '📝',
    category: 'CMS',
    specs: { vcpu: 1, ram: 2, storage: 20, bandwidth: 1000 },
    monthlyPrice: 12,
    installTime: '< 2 min',
    features: ['Auto SSL', 'Daily Backups', 'CDN Included', 'Plugin Support'],
    tags: ['cms', 'blog', 'website', 'php'],
    popularity: 95
  },
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    description: 'Self-hosted cloud storage and collaboration',
    longDescription: 'Your own private cloud storage solution with file sharing, calendar, contacts, and collaboration tools.',
    icon: '☁️',
    category: 'Storage',
    specs: { vcpu: 2, ram: 3, storage: 100, bandwidth: 3000 },
    monthlyPrice: 28,
    installTime: '< 3 min',
    features: ['End-to-End Encryption', 'File Sharing', 'Calendar & Contacts', 'Mobile Apps'],
    tags: ['storage', 'cloud', 'collaboration', 'privacy'],
    popularity: 88
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    description: 'Complete DevOps platform',
    longDescription: 'Integrated DevOps platform with Git repository management, CI/CD pipelines, issue tracking, and more.',
    icon: '🦊',
    category: 'DevOps',
    specs: { vcpu: 4, ram: 8, storage: 100, bandwidth: 5000 },
    monthlyPrice: 75,
    installTime: '< 5 min',
    features: ['Git Repository', 'CI/CD Pipelines', 'Issue Tracking', 'Container Registry'],
    tags: ['git', 'devops', 'ci/cd', 'development'],
    popularity: 92
  },
  {
    id: 'grafana',
    name: 'Grafana',
    description: 'Analytics and monitoring platform',
    longDescription: 'Visualize and monitor your applications with beautiful dashboards and alerting capabilities.',
    icon: '📊',
    category: 'Monitoring',
    specs: { vcpu: 2, ram: 4, storage: 50, bandwidth: 2000 },
    monthlyPrice: 32,
    installTime: '< 3 min',
    features: ['Custom Dashboards', 'Alerting', 'Data Sources', 'Team Collaboration'],
    tags: ['monitoring', 'analytics', 'dashboard', 'metrics'],
    popularity: 85
  },
  {
    id: 'odoo',
    name: 'Odoo',
    description: 'Complete business management suite',
    longDescription: 'All-in-one business software including CRM, eCommerce, accounting, inventory, and project management.',
    icon: '💼',
    category: 'Business',
    specs: { vcpu: 2, ram: 4, storage: 50, bandwidth: 2000 },
    monthlyPrice: 35,
    installTime: '< 4 min',
    features: ['CRM', 'eCommerce', 'Accounting', 'Inventory Management'],
    tags: ['business', 'crm', 'erp', 'ecommerce'],
    popularity: 78
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Workflow automation platform',
    longDescription: 'Automate your workflows with a visual interface. Connect different services and create powerful automations.',
    icon: '🔄',
    category: 'Automation',
    specs: { vcpu: 1, ram: 2, storage: 30, bandwidth: 1500 },
    monthlyPrice: 18,
    installTime: '< 2 min',
    features: ['Visual Workflow Editor', '200+ Integrations', 'Custom Functions', 'Webhook Support'],
    tags: ['automation', 'workflow', 'integration', 'no-code'],
    popularity: 82
  },
  {
    id: 'ghost',
    name: 'Ghost',
    description: 'Modern publishing platform',
    longDescription: 'Professional publishing platform focused on speed, simplicity, and beautiful design for creators.',
    icon: '👻',
    category: 'CMS',
    specs: { vcpu: 1, ram: 1, storage: 25, bandwidth: 2000 },
    monthlyPrice: 15,
    installTime: '< 2 min',
    features: ['SEO Optimized', 'Newsletter Integration', 'Membership Support', 'Modern Editor'],
    tags: ['blog', 'publishing', 'newsletter', 'seo'],
    popularity: 76
  },
  {
    id: 'mattermost',
    name: 'Mattermost',
    description: 'Self-hosted team communication',
    longDescription: 'Secure, private team messaging and collaboration platform with enterprise-grade features.',
    icon: '💬',
    category: 'Communication',
    specs: { vcpu: 2, ram: 3, storage: 40, bandwidth: 2500 },
    monthlyPrice: 25,
    installTime: '< 3 min',
    features: ['Team Messaging', 'File Sharing', 'Voice Calls', 'Integrations'],
    tags: ['chat', 'communication', 'team', 'collaboration'],
    popularity: 71
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    description: 'Automation server for CI/CD',
    longDescription: 'Leading open-source automation server with hundreds of plugins to support building and deploying projects.',
    icon: '🔧',
    category: 'DevOps',
    specs: { vcpu: 3, ram: 6, storage: 80, bandwidth: 3000 },
    monthlyPrice: 45,
    installTime: '< 4 min',
    features: ['Pipeline as Code', '1000+ Plugins', 'Distributed Builds', 'Blue Ocean UI'],
    tags: ['ci/cd', 'automation', 'build', 'deployment'],
    popularity: 89
  },
  {
    id: 'portainer',
    name: 'Portainer',
    description: 'Container management platform',
    longDescription: 'Lightweight management UI for Docker environments with support for Docker Swarm and Kubernetes.',
    icon: '🐳',
    category: 'DevOps',
    specs: { vcpu: 1, ram: 1, storage: 20, bandwidth: 1000 },
    monthlyPrice: 10,
    installTime: '< 2 min',
    features: ['Docker Management', 'Swarm Support', 'User Management', 'Template Library'],
    tags: ['docker', 'containers', 'management', 'kubernetes'],
    popularity: 84
  }
]
