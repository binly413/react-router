export default function Producr() {
  const items = [
    { id: 1, name: 'Product A', price: '฿290' },
    { id: 2, name: 'Product B', price: '฿490' },
    { id: 3, name: 'Product C', price: '฿990' },
  ];

  return (
    <div className="card">
      <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Our Products</h1>
      <div className="product-grid">
        {items.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p style={{ color: '#38bdf8', margin: '0.5rem 0', fontWeight: 'bold' }}>{item.price}</p>
            <button className="btn" style={{ fontSize: '0.85rem' }}>ดูรายละเอียด</button>
          </div>
        ))}
      </div>
    </div>
  );
}