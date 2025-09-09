import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { architectureShapes } from './shapes'
import { ArchitectureToolbar } from './components/ArchitectureToolbar'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shrink-0">
        <h1 className="text-xl font-medium text-gray-900">Gram</h1>
        <p className="text-xs text-gray-600 font-medium">
          Architecture Interview Tool
        </p>
      </header>
      <div className="flex-1 min-h-0 relative">
        <Tldraw shapeUtils={architectureShapes}>
          <ArchitectureToolbar />
        </Tldraw>
      </div>
    </div>
  )
}

export default App
