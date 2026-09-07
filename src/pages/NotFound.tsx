import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // นับถอยหลังทุกๆ 1 วินาที
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/'); // เมื่อครบ 5 วินาที จะเปลี่ยนไปหน้า Home
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // ทำความสะอาด timer เมื่อออกจากหน้า
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ 
        fontSize: '6rem', 
        color: '#ef4444', 
        marginBottom: '0.5rem', 
        fontWeight: '800',
        lineHeight: 1 
      }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '1rem' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        ขออภัย ไม่พบหน้าที่คุณต้องการเข้าถึง
      </p>
      
      {/* ส่วนแสดงเวลานับถอยหลัง */}
      <p style={{ color: '#38bdf8', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        กำลังนำคุณกลับสู่หน้าหลักภายใน <span style={{ color: '#ef4444', fontSize: '1.4rem' }}>{countdown}</span> วินาที...
      </p>

      <Link to="/" className="btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
        ⬅️ กลับสู่หน้าหลักทันที
      </Link>
    </div>
  );
}