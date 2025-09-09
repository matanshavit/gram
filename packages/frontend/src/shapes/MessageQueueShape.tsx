import {
  HTMLContainer,
  Rectangle2d,
  ShapeUtil,
  resizeBox,
} from '@tldraw/tldraw'
import type { TLResizeInfo } from '@tldraw/tldraw'
import type { MessageQueueShape } from './types'

export class MessageQueueShapeUtil extends ShapeUtil<MessageQueueShape> {
  static override type = 'messageQueue' as const

  getDefaultProps(): MessageQueueShape['props'] {
    return {
      w: 125,
      h: 85,
      label: 'Message Queue',
    }
  }

  getGeometry(shape: MessageQueueShape) {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  component(shape: MessageQueueShape) {
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
          backgroundColor: '#F44336',
          borderRadius: '8px',
          border: '2px solid #D32F2F',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '11px',
          textAlign: 'center',
          padding: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ fontSize: '20px', marginBottom: '4px' }}>📬</div>
        <div>{label}</div>
      </HTMLContainer>
    )
  }

  indicator(shape: MessageQueueShape) {
    const { w, h } = shape.props
    return <rect width={w} height={h} rx={8} />
  }

  onResize = (
    shape: MessageQueueShape,
    info: TLResizeInfo<MessageQueueShape>
  ) => {
    return resizeBox(shape, info)
  }

  override canResize = () => true
  override canEdit = () => true
}
