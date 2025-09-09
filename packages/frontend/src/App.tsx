import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { architectureShapes } from './shapes'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shrink-0">
        <h1 className="text-2xl font-bold text-gray-900">Gram</h1>
        <p className="text-sm text-gray-600">Architecture Interview Tool</p>
      </header>
      <div className="flex-1 min-h-0">
        <Tldraw
          shapeUtils={architectureShapes}
          onMount={editor => {
            // Only add example shapes if canvas is empty (prevents double creation in StrictMode)
            if (editor.getCurrentPageShapes().length === 0) {
              editor.createShapes([
                {
                  type: 'loadBalancer',
                  x: 100,
                  y: 100,
                },
                {
                  type: 'database',
                  x: 300,
                  y: 100,
                },
                {
                  type: 'microservice',
                  x: 500,
                  y: 100,
                },
                {
                  type: 'apiGateway',
                  x: 100,
                  y: 250,
                },
                {
                  type: 'messageQueue',
                  x: 300,
                  y: 250,
                },
                {
                  type: 'cdn',
                  x: 500,
                  y: 250,
                },
                {
                  type: 'userClient',
                  x: 200,
                  y: 400,
                },
              ])
            }
          }}
        />
      </div>
    </div>
  )
}

export default App
