import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shrink-0">
        <h1 className="text-2xl font-bold text-gray-900">Gram</h1>
        <p className="text-sm text-gray-600">Architecture Interview Tool</p>
      </header>
      <div className="flex-1 min-h-0">
        <Tldraw />
      </div>
    </div>
  )
}

export default App
