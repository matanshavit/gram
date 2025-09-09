import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  resizeBox,
} from '@tldraw/tldraw'
import type { TLResizeInfo } from '@tldraw/tldraw'
import type { ApiGatewayShape } from './types'

export class ApiGatewayShapeUtil extends ShapeUtil<ApiGatewayShape> {
  static override type = 'apiGateway' as const

  getDefaultProps(): ApiGatewayShape['props'] {
    return {
      w: 130,
      h: 85,
      label: 'API Gateway',
    }
  }

  getGeometry(shape: ApiGatewayShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  component(shape: ApiGatewayShape) {
    const { w, h, label } = shape.props

    return (
      <HTMLContainer
        style={{
          width: w,
          height: h,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#9C27B0',
          borderRadius: '8px',
          border: '2px solid #7B1FA2',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '11px',
          textAlign: 'center',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ fontSize: '20px', marginBottom: '4px' }}>🚪</div>
        <div>{label}</div>
      </HTMLContainer>
    )
  }

  indicator(shape: ApiGatewayShape) {
    const { w, h } = shape.props
    return <rect width={w} height={h} rx={8} />
  }

  onResize = (shape: ApiGatewayShape, info: TLResizeInfo<ApiGatewayShape>) => {
    return resizeBox(shape, info)
  }

  override canResize = () => true
  override canEdit = () => true
}
