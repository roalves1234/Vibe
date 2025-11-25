import { useState } from 'react'
import useTreeStore from '../stores/treeStore'

function ChatPanel() {
  const [input, setInput] = useState('')
  const { messages, addMessage } = useTreeStore()

  const send = () => {
    if (!input.trim()) return
    addMessage({ role: 'user', content: input })
    addMessage({ role: 'assistant', content: 'Resposta exemplo em desenvolvimento.' })
    setInput('')
  }

  return (
    <section className="panel">
      <h2>Chat</h2>
      <ul className="timeline">
        {messages.map((msg, index) => (
          <li key={index} className={msg.role === 'assistant' ? 'assistant' : ''}>
            <strong>{msg.role === 'assistant' ? 'Assistente' : 'Você'}:</strong> {msg.content}
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea
          placeholder="Escreva sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={send}>
          Enviar
        </button>
      </div>
    </section>
  )
}

export default ChatPanel
