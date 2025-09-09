export * from './types'
export { LoadBalancerShapeUtil } from './LoadBalancerShape'
export { DatabaseShapeUtil } from './DatabaseShape'
export { MicroserviceShapeUtil } from './MicroserviceShape'

// Array for easy registration with tldraw
import { LoadBalancerShapeUtil } from './LoadBalancerShape'
import { DatabaseShapeUtil } from './DatabaseShape'
import { MicroserviceShapeUtil } from './MicroserviceShape'

export const architectureShapes = [
  LoadBalancerShapeUtil,
  DatabaseShapeUtil,
  MicroserviceShapeUtil,
]
