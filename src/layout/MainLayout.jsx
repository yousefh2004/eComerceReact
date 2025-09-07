import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function MainLayout() {
  const location = useLocation();
  const isRegisterPage = location.pathname === '/register' ||'/login';

  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        backgroundImage: "url('/images/pixel2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: isRegisterPage ? "100vh" : "300vh", 
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div style={{ flex: 40 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
