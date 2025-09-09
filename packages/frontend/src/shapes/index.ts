export * from './types'
export { LoadBalancerShapeUtil } from './LoadBalancerShape'
export { DatabaseShapeUtil } from './DatabaseShape'
export { MicroserviceShapeUtil } from './MicroserviceShape'
export { ApiGatewayShapeUtil } from './ApiGatewayShape'
export { MessageQueueShapeUtil } from './MessageQueueShape'
export { CdnShapeUtil } from './CdnShape'
export { UserClientShapeUtil } from './UserClientShape'

// Array for easy registration with tldraw
import { LoadBalancerShapeUtil } from './LoadBalancerShape'
import { DatabaseShapeUtil } from './DatabaseShape'
import { MicroserviceShapeUtil } from './MicroserviceShape'
import { ApiGatewayShapeUtil } from './ApiGatewayShape'
import { MessageQueueShapeUtil } from './MessageQueueShape'
import { CdnShapeUtil } from './CdnShape'
import { UserClientShapeUtil } from './UserClientShape'

export const architectureShapes = [
  LoadBalancerShapeUtil,
  DatabaseShapeUtil,
  MicroserviceShapeUtil,
  ApiGatewayShapeUtil,
  MessageQueueShapeUtil,
  CdnShapeUtil,
  UserClientShapeUtil,
]
