import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { architectureShapes } from './shapes'
import { ArchitectureToolbar } from './components/ArchitectureToolbar'
import { HeaderTemplateSelector } from './components/HeaderTemplateSelector'
import { type Template } from './lib/templates'
import { useRef, useCallback } from 'react'

function App() {
  const editorRef = useRef<any>(null)

  const handleLoadTemplate = useCallback((template: Template) => {
    const editor = editorRef.current
    if (!editor) return

    // Clear existing shapes
    const existingShapes = editor.getCurrentPageShapes()
    if (existingShapes.length > 0) {
      editor.deleteShapes(existingShapes.map((shape: any) => shape.id))
    }

    // Add template shapes
    editor.createShapes(
      template.shapes.map(shape => ({
        type: shape.type,
        x: shape.x,
        y: shape.y,
        props: shape.props || {},
      }))
    )

    // Zoom to fit all shapes
    editor.zoomToFit({ animation: { duration: 300 } })
  }, [])

  const handleClearCanvas = useCallback(() => {
    const editor = editorRef.current
    if (!editor) return

    const existingShapes = editor.getCurrentPageShapes()
    if (existingShapes.length > 0) {
      editor.deleteShapes(existingShapes.map((shape: any) => shape.id))
    }
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-medium text-gray-900">Gram</h1>
          <p className="text-xs text-gray-600 font-medium">
            Architecture Interview Tool
          </p>
        </div>
        <HeaderTemplateSelector
          onLoadTemplate={handleLoadTemplate}
          onClearCanvas={handleClearCanvas}
        />
      </header>
      <div className="flex-1 min-h-0 relative">
        <Tldraw
          shapeUtils={architectureShapes}
          onMount={editor => {
            editorRef.current = editor
          }}
        >
          <ArchitectureToolbar />
        </Tldraw>
      </div>
    </div>
  )
}

export default App
