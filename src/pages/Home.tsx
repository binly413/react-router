export default function Home() {
  return (
    <div className="card">
      <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem', color: '#f8fafc' }}>
        Welcome Home 👋
      </h1>
      <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '1.1rem' }}>
        ยินดีต้อนรับเข้าสู่หน้าแรกของระบบ ปรับดีไซน์ใหม่ให้ดูสะอาดตาและรองรับการขยายส่วนประกอบอื่นๆ ในอนาคต
      </p>
      <button className="btn">เริ่มต้นใช้งาน</button>
    </div>
  );
}