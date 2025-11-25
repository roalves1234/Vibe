import { useMemo } from 'react'

const sampleNodes = [
  { id: 'root', label: 'Usuário: Ideia inicial', level: 0 },
  { id: 'a1', label: 'Assistente: Vamos explorar.', level: 1 },
  { id: 'b1', label: 'Usuário: Siga caminho B', level: 1 },
  { id: 'a2', label: 'Assistente: Expansão A2', level: 2 },
]

function TreePreview() {
  const positions = useMemo(() => {
    const levelCounts = new Map()
    sampleNodes.forEach((node) => {
      const count = levelCounts.get(node.level) ?? 0
      levelCounts.set(node.level, count + 1)
    })

    const layout = new Map()
    const verticalSpacing = 90
    const horizontalSpacing = 220

    sampleNodes.forEach((node) => {
      const index = (layout.get(node.level) ?? 0) + 1
      layout.set(node.level, index)
      const x = 60 + node.level * horizontalSpacing
      const y = 60 + index * verticalSpacing
      node.position = { x, y }
    })

    return sampleNodes
  }, [])

  return (
    <section className="panel tree-preview">
      <h2>Pré-visualização da árvore</h2>
      <svg>
        {positions.map((node) => (
          <g key={node.id} transform={`translate(${node.position.x}, ${node.position.y})`}>
            <circle r="16" fill="#2563eb" opacity={0.15} />
            <text x="24" y="6" fontWeight="600" fill="#0f172a">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </section>
  )
}

export default TreePreview
