import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  resizeBox,
} from '@tldraw/tldraw'
import type { TLResizeInfo } from '@tldraw/tldraw'
import type { LoadBalancerShape } from './types'

export class LoadBalancerShapeUtil extends ShapeUtil<LoadBalancerShape> {
  static override type = 'loadBalancer' as const

  getDefaultProps(): LoadBalancerShape['props'] {
    return {
      w: 120,
      h: 80,
      label: 'Load Balancer',
    }
  }

  getGeometry(shape: LoadBalancerShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  component(shape: LoadBalancerShape) {
    const { w, h, label } = shape.props

    return (
      <HTMLContainer
        style={{
          width: w,
          height: h,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4CAF50',
          borderRadius: '8px',
          border: '2px solid #45a049',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '12px',
          textAlign: 'center',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div>
          <div style={{ fontSize: '20px', marginBottom: '4px' }}>⚖️</div>
          <div>{label}</div>
        </div>
      </HTMLContainer>
    )
  }

  indicator(shape: LoadBalancerShape) {
    const { w, h } = shape.props
    return <rect width={w} height={h} rx={8} />
  }

  onResize = (
    shape: LoadBalancerShape,
    info: TLResizeInfo<LoadBalancerShape>
  ) => {
    return resizeBox(shape, info)
  }

  override canResize = () => true
  override canEdit = () => true
}
