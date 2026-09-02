export default function Page() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>🍽️ COMIDAS - Admin</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>Sistema de Gestión de Comidas</p>
      <hr style={{ margin: '20px 0', width: '100px' }} />
      <p style={{ fontSize: '14px', color: '#999' }}>Ir a: <a href="/inventario-comidas" style={{ color: '#0066cc', textDecoration: 'none' }}>Inventario de Comidas →</a></p>
    </div>
  )
}
