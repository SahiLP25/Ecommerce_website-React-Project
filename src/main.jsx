import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NoteState from './components/context/NoteState.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <NoteState>
  <App />

  </NoteState>
  </>
)
