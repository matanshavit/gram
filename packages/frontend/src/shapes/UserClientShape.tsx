import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  resizeBox,
} from '@tldraw/tldraw'
import type { TLResizeInfo } from '@tldraw/tldraw'
import type { UserClientShape } from './types'

export class UserClientShapeUtil extends ShapeUtil<UserClientShape> {
  static override type = 'userClient' as const

  getDefaultProps(): UserClientShape['props'] {
    return {
      w: 120,
      h: 85,
      label: 'User Client',
      userCount: 1,
    }
  }

  getGeometry(shape: UserClientShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  component(shape: UserClientShape) {
    const { w, h, label, userCount } = shape.props

    return (
      <HTMLContainer
        style={{
          width: w,
          height: h,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#607D8B',
          borderRadius: '8px',
          border: '2px solid #455A64',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '11px',
          textAlign: 'center',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ fontSize: '20px', marginBottom: '4px' }}>👤</div>
        <div style={{ marginBottom: '2px' }}>{label}</div>
        {userCount && userCount > 1 && (
          <div style={{ fontSize: '9px', opacity: 0.8 }}>
            ({userCount} users)
          </div>
        )}
      </HTMLContainer>
    )
  }

  indicator(shape: UserClientShape) {
    const { w, h } = shape.props
    return <rect width={w} height={h} rx={8} />
  }

  onResize = (shape: UserClientShape, info: TLResizeInfo<UserClientShape>) => {
    return resizeBox(shape, info)
  }

  override canResize = () => true
  override canEdit = () => true
}
