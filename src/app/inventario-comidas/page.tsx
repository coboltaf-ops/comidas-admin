'use client'

export default function InventarioComidasPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>🍽️ Inventario de Comidas</h1>
      <p>Gestión de Comidas - COMIDAS Admin</p>
      <hr />
      <p>Módulos disponibles:</p>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        <li>Gestión de Comidas</li>
        <li>Proveedores</li>
        <li>Productos</li>
        <li>Inventario</li>
      </ul>
    </div>
  )
}
