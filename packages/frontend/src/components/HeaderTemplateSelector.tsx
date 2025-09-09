import { useState } from 'react'
import { templates, type Template } from '../lib/templates'

interface HeaderTemplateSelectorProps {
  onLoadTemplate: (template: Template) => void
  onClearCanvas: () => void
}

export function HeaderTemplateSelector({
  onLoadTemplate,
  onClearCanvas,
}: HeaderTemplateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLoadTemplate = (template: Template) => {
    onLoadTemplate(template)
    setIsOpen(false)
  }

  const handleClearCanvas = () => {
    onClearCanvas()
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors"
      >
        Templates ▼
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div
            className="absolute top-full left-0 mt-1 border border-gray-200 rounded-lg shadow-lg z-[9999]"
            style={{
              right: 0,
              left: 'auto',
              backgroundColor: 'white',
              width: '480px',
            }}
          >
            <div
              className="rounded-lg relative z-10"
              style={{ backgroundColor: 'white' }}
            >
              <div
                className="rounded-t-lg p-3 border-b border-gray-100"
                style={{ backgroundColor: 'white' }}
              >
                <h3
                  className="text-sm font-semibold text-gray-900 mb-2"
                  style={{ backgroundColor: 'white' }}
                >
                  Interview Templates
                </h3>
                <p
                  className="text-xs text-gray-600 mb-0"
                  style={{ backgroundColor: 'white' }}
                >
                  Load pre-built architecture scenarios for common interview
                  questions
                </p>
              </div>
              <div
                className="p-3 rounded-b-lg"
                style={{ backgroundColor: 'white' }}
              >
                <div className="space-y-2">
                  {templates.map(template => (
                    <button
                      key={template.id}
                      onClick={() => handleLoadTemplate(template)}
                      className="w-full text-left p-2 rounded hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 bg-white"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            {template.name}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            {template.description}
                          </p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full ml-2 shrink-0">
                          {template.category}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="border-t border-gray-200 mt-3 pt-3 bg-white">
                  <button
                    onClick={handleClearCanvas}
                    className="w-full text-left p-2 rounded hover:bg-red-50 transition-colors text-red-600 text-sm font-medium bg-white"
                  >
                    Clear Canvas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
