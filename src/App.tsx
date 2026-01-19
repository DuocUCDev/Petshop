import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>🌱 Petshop Natural</h1>
            <p>Tu tienda de mascotas eco-friendly.</p>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App
