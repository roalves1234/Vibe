import './styles.css'
import ChatPanel from './components/ChatPanel'

function App() {
  return (
    <div className="layout">
      <header className="header">
        <h1>TreeChat AI</h1>
        <p>Converse com um assistente inteligente em um fluxo simples de chat.</p>
      </header>
      <main className="main">
        <ChatPanel />
      </main>
    </div>
  )
}

export default App
