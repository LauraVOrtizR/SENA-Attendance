import './navbar.css'
import logo from '../../assets/LogoSena.png'

export function Navbar() {
  return (
    <header className="nav">
      <div className="nav-left">
        <img src={logo} alt="SENA Attendance Logo" />
      </div>
    </header>
  );
}