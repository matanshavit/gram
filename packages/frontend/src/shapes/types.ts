import type { TLBaseShape } from '@tldraw/tldraw'

// Load Balancer Shape
export type LoadBalancerShape = TLBaseShape<
  'loadBalancer',
  {
    w: number
    h: number
    label: string
  }
>

// Database Shape
export type DatabaseShape = TLBaseShape<
  'database',
  {
    w: number
    h: number
    label: string
    variant: 'SQL' | 'NoSQL' | 'Cache'
  }
>

// Microservice Shape
export type MicroserviceShape = TLBaseShape<
  'microservice',
  {
    w: number
    h: number
    label: string
    purpose: string
  }
>

// API Gateway Shape
export type ApiGatewayShape = TLBaseShape<
  'apiGateway',
  {
    w: number
    h: number
    label: string
  }
>

// Message Queue Shape
export type MessageQueueShape = TLBaseShape<
  'messageQueue',
  {
    w: number
    h: number
    label: string
  }
>

// CDN Shape
export type CdnShape = TLBaseShape<
  'cdn',
  {
    w: number
    h: number
    label: string
  }
>

// User Client Shape
export type UserClientShape = TLBaseShape<
  'userClient',
  {
    w: number
    h: number
    label: string
    userCount?: number
  }
>

export type ArchitectureShape =
  | LoadBalancerShape
  | DatabaseShape
  | MicroserviceShape
  | ApiGatewayShape
  | MessageQueueShape
  | CdnShape
  | UserClientShape
