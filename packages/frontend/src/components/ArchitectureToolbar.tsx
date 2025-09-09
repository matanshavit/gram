import { useEditor } from '@tldraw/tldraw'

interface ShapeButton {
  type: string
  label: string
  icon: string
  color: string
}

const architectureShapes: ShapeButton[] = [
  {
    type: 'loadBalancer',
    label: 'Load Balancer',
    icon: '⚖️',
    color: '#4CAF50',
  },
  { type: 'database', label: 'Database', icon: '🗄️', color: '#2196F3' },
  { type: 'microservice', label: 'Microservice', icon: '📦', color: '#FF9800' },
  { type: 'apiGateway', label: 'API Gateway', icon: '🚪', color: '#9C27B0' },
  {
    type: 'messageQueue',
    label: 'Message Queue',
    icon: '📬',
    color: '#F44336',
  },
  { type: 'cdn', label: 'CDN', icon: '🌐', color: '#00BCD4' },
  { type: 'userClient', label: 'User Client', icon: '👤', color: '#607D8B' },
]

export function ArchitectureToolbar() {
  const editor = useEditor()

  const addShape = (shapeType: string) => {
    if (!editor) return

    const viewport = editor.getViewportPageBounds()
    const x = viewport.x + viewport.w / 2 - 60
    const y = viewport.y + viewport.h / 2 - 40

    editor.createShapes([
      {
        type: shapeType,
        x,
        y,
      },
    ])
  }

  return (
    <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-lg border border-gray-200 p-2">
      <div className="flex flex-col gap-1">
        <h3 className="text-xs font-semibold text-gray-700 px-2 py-1">
          Architecture Components
        </h3>
        <div className="grid grid-cols-2 gap-1">
          {architectureShapes.map(shape => (
            <button
              key={shape.type}
              onClick={() => addShape(shape.type)}
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 transition-colors text-xs"
              style={{ borderLeft: `3px solid ${shape.color}` }}
              title={shape.label}
            >
              <span className="text-sm">{shape.icon}</span>
              <span className="text-gray-700 font-medium truncate">
                {shape.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
