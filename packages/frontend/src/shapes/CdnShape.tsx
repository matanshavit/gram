import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  resizeBox,
} from '@tldraw/tldraw'
import type { TLResizeInfo } from '@tldraw/tldraw'
import type { CdnShape } from './types'

export class CdnShapeUtil extends ShapeUtil<CdnShape> {
  static override type = 'cdn' as const

  getDefaultProps(): CdnShape['props'] {
    return {
      w: 120,
      h: 85,
      label: 'CDN',
    }
  }

  getGeometry(shape: CdnShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  component(shape: CdnShape) {
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
          backgroundColor: '#00BCD4',
          borderRadius: '8px',
          border: '2px solid #0097A7',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '11px',
          textAlign: 'center',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ fontSize: '20px', marginBottom: '4px' }}>🌐</div>
        <div>{label}</div>
      </HTMLContainer>
    )
  }

  indicator(shape: CdnShape) {
    const { w, h } = shape.props
    return <rect width={w} height={h} rx={8} />
  }

  onResize = (shape: CdnShape, info: TLResizeInfo<CdnShape>) => {
    return resizeBox(shape, info)
  }

  override canResize = () => true
  override canEdit = () => true
}
