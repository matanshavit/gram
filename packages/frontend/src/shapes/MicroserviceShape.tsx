import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  resizeBox,
} from '@tldraw/tldraw'
import type { TLResizeInfo } from '@tldraw/tldraw'
import type { MicroserviceShape } from './types'

export class MicroserviceShapeUtil extends ShapeUtil<MicroserviceShape> {
  static override type = 'microservice' as const

  getDefaultProps(): MicroserviceShape['props'] {
    return {
      w: 140,
      h: 90,
      label: 'Microservice',
      purpose: 'API',
    }
  }

  getGeometry(shape: MicroserviceShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  component(shape: MicroserviceShape) {
    const { w, h, label, purpose } = shape.props

    return (
      <HTMLContainer
        style={{
          width: w,
          height: h,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FF9800',
          borderRadius: '6px',
          border: '2px solid #f57c00',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '11px',
          textAlign: 'center',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ fontSize: '20px', marginBottom: '4px' }}>📦</div>
        <div style={{ marginBottom: '2px' }}>{label}</div>
        <div style={{ fontSize: '9px', opacity: 0.8 }}>({purpose})</div>
      </HTMLContainer>
    )
  }

  indicator(shape: MicroserviceShape) {
    const { w, h } = shape.props
    return <rect width={w} height={h} rx={6} />
  }

  onResize = (
    shape: MicroserviceShape,
    info: TLResizeInfo<MicroserviceShape>
  ) => {
    return resizeBox(shape, info)
  }

  override canResize = () => true
  override canEdit = () => true
}
