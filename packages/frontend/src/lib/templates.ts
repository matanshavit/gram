export interface TemplateShape {
  type: string
  x: number
  y: number
  props?: Record<string, unknown>
}

export interface Template {
  id: string
  name: string
  description: string
  category: 'messaging' | 'web' | 'social' | 'ecommerce'
  shapes: TemplateShape[]
}

export const templates: Template[] = [
  {
    id: 'chat-app',
    name: 'Chat Application',
    description:
      'Real-time messaging with WebSocket, message queue, and user management',
    category: 'messaging',
    shapes: [
      // Users
      {
        type: 'userClient',
        x: 100,
        y: 100,
        props: { label: 'Mobile App', userCount: 1000 },
      },
      {
        type: 'userClient',
        x: 100,
        y: 250,
        props: { label: 'Web App', userCount: 500 },
      },

      // Gateway and Load Balancing
      { type: 'loadBalancer', x: 350, y: 175 },
      {
        type: 'apiGateway',
        x: 550,
        y: 175,
        props: { label: 'WebSocket Gateway' },
      },

      // Core Services
      {
        type: 'microservice',
        x: 750,
        y: 100,
        props: { label: 'Auth Service', purpose: 'Authentication' },
      },
      {
        type: 'microservice',
        x: 750,
        y: 175,
        props: { label: 'Chat Service', purpose: 'Message Routing' },
      },
      {
        type: 'microservice',
        x: 750,
        y: 250,
        props: { label: 'User Service', purpose: 'User Management' },
      },

      // Message Queue
      {
        type: 'messageQueue',
        x: 950,
        y: 175,
        props: { label: 'Message Queue' },
      },

      // Databases
      {
        type: 'database',
        x: 950,
        y: 100,
        props: { label: 'User DB', variant: 'SQL' },
      },
      {
        type: 'database',
        x: 950,
        y: 250,
        props: { label: 'Message DB', variant: 'NoSQL' },
      },
      {
        type: 'database',
        x: 1150,
        y: 175,
        props: { label: 'Redis Cache', variant: 'Cache' },
      },
    ],
  },

  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'High-scale URL shortening service with caching and analytics',
    category: 'web',
    shapes: [
      // Users
      {
        type: 'userClient',
        x: 100,
        y: 175,
        props: { label: 'Web Users', userCount: 10000 },
      },

      // CDN and Load Balancing
      { type: 'cdn', x: 300, y: 175, props: { label: 'Global CDN' } },
      { type: 'loadBalancer', x: 500, y: 175 },

      // API Gateway
      { type: 'apiGateway', x: 700, y: 175, props: { label: 'API Gateway' } },

      // Core Services
      {
        type: 'microservice',
        x: 900,
        y: 100,
        props: { label: 'URL Service', purpose: 'Shortening' },
      },
      {
        type: 'microservice',
        x: 900,
        y: 175,
        props: { label: 'Analytics Service', purpose: 'Click Tracking' },
      },
      {
        type: 'microservice',
        x: 900,
        y: 250,
        props: { label: 'Cache Service', purpose: 'Fast Lookup' },
      },

      // Databases
      {
        type: 'database',
        x: 1100,
        y: 100,
        props: { label: 'URL Mappings', variant: 'SQL' },
      },
      {
        type: 'database',
        x: 1100,
        y: 175,
        props: { label: 'Analytics DB', variant: 'NoSQL' },
      },
      {
        type: 'database',
        x: 1100,
        y: 250,
        props: { label: 'Redis Cache', variant: 'Cache' },
      },
    ],
  },

  {
    id: 'social-feed',
    name: 'Social Media Feed',
    description: 'Timeline service with content delivery and real-time updates',
    category: 'social',
    shapes: [
      // Users
      {
        type: 'userClient',
        x: 100,
        y: 100,
        props: { label: 'Mobile Users', userCount: 5000 },
      },
      {
        type: 'userClient',
        x: 100,
        y: 250,
        props: { label: 'Web Users', userCount: 3000 },
      },

      // Content Delivery
      { type: 'cdn', x: 300, y: 175, props: { label: 'Media CDN' } },
      { type: 'loadBalancer', x: 500, y: 175 },

      // Gateway
      {
        type: 'apiGateway',
        x: 700,
        y: 175,
        props: { label: 'Social API Gateway' },
      },

      // Core Services
      {
        type: 'microservice',
        x: 900,
        y: 75,
        props: { label: 'Feed Service', purpose: 'Timeline Generation' },
      },
      {
        type: 'microservice',
        x: 900,
        y: 125,
        props: { label: 'Post Service', purpose: 'Content Management' },
      },
      {
        type: 'microservice',
        x: 900,
        y: 175,
        props: { label: 'User Service', purpose: 'Profiles & Auth' },
      },
      {
        type: 'microservice',
        x: 900,
        y: 225,
        props: { label: 'Notification Service', purpose: 'Push Notifications' },
      },
      {
        type: 'microservice',
        x: 900,
        y: 275,
        props: { label: 'Media Service', purpose: 'Image/Video Upload' },
      },

      // Message Queue
      {
        type: 'messageQueue',
        x: 1100,
        y: 200,
        props: { label: 'Event Queue' },
      },

      // Databases
      {
        type: 'database',
        x: 1100,
        y: 75,
        props: { label: 'User DB', variant: 'SQL' },
      },
      {
        type: 'database',
        x: 1100,
        y: 125,
        props: { label: 'Posts DB', variant: 'NoSQL' },
      },
      {
        type: 'database',
        x: 1100,
        y: 275,
        props: { label: 'Media Storage', variant: 'NoSQL' },
      },
      {
        type: 'database',
        x: 1300,
        y: 175,
        props: { label: 'Feed Cache', variant: 'Cache' },
      },
    ],
  },
]
