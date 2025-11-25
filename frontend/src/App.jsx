import './styles.css'
import TreePreview from './components/TreePreview'
import ChatPanel from './components/ChatPanel'

function App() {
  return (
    <div className="layout">
      <header className="header">
        <h1>TreeChat AI</h1>
        <p>Explore conversas em formato de árvore com um assistente inteligente.</p>
      </header>
      <main className="main">
        <TreePreview />
        <ChatPanel />
      </main>
    </div>
  )
}

export default App
