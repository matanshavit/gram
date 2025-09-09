import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  resizeBox,
} from '@tldraw/tldraw'
import type { TLResizeInfo } from '@tldraw/tldraw'
import type { DatabaseShape } from './types'

export class DatabaseShapeUtil extends ShapeUtil<DatabaseShape> {
  static override type = 'database' as const

  getDefaultProps(): DatabaseShape['props'] {
    return {
      w: 100,
      h: 100,
      label: 'Database',
      variant: 'SQL',
    }
  }

  getGeometry(shape: DatabaseShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  component(shape: DatabaseShape) {
    const { w, h, label, variant } = shape.props

    const getVariantColor = (variant: string) => {
      switch (variant) {
        case 'NoSQL':
          return '#FF9800'
        case 'Cache':
          return '#9C27B0'
        default:
          return '#2196F3'
      }
    }

    const backgroundColor = getVariantColor(variant)

    return (
      <HTMLContainer
        style={{
          width: w,
          height: h,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor,
          borderRadius: '12px',
          border: '2px solid rgba(0,0,0,0.1)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '11px',
          textAlign: 'center',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ fontSize: '24px', marginBottom: '4px' }}>🗄️</div>
        <div>{label}</div>
        <div style={{ fontSize: '9px', opacity: 0.8 }}>{variant}</div>
      </HTMLContainer>
    )
  }

  indicator(shape: DatabaseShape) {
    const { w, h } = shape.props
    return <rect width={w} height={h} rx={12} />
  }

  onResize = (shape: DatabaseShape, info: TLResizeInfo<DatabaseShape>) => {
    return resizeBox(shape, info)
  }

  override canResize = () => true
  override canEdit = () => true
}
