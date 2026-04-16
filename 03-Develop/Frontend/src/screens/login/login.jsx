import './login.css';
import { Button } from '../../components/ui/button/button';
import { Input } from '../../components/ui/input/input';
import { Select } from '../../components/ui/select/select';
import { SessionCard } from '../../layouts/sessionCard/sessionCard';
// import { Navbar } from '../../layouts/navbar/navbar';
import { Link } from 'react-router-dom';
import logoSchool from '../../assets/LogoSchoolCore.png';

export function Login() {
    return (
        <>
        {/* <Navbar/> */}
        <div className="login-container">
            <img className="logo" src={logoSchool} alt="SchoolCore"/>
            <SessionCard title="Iniciar Sesion" description="Por favor, ingresa tus credenciales" text="¿No tienes una cuenta? " link="Regístrate aquí" url="/register">
                <form className="login-form" id="login">   
                    <Input label_name="Correo Electronico" type="text" placeholder="ejemplo@gmail.com" name="email"/>
                    <Input label_name="Contraseña" type="password" placeholder="Contraseña" name="password"/>
                    <div className="login-links">
                        <Input label_name="Recuérdame" type="checkbox"/>
                        <Link to="/password-recovery" id='forgot-password-link' className='link' >¿Olvidaste tu contraseña?</Link>
                    </div>
                    <Button color={"blue"} label="Iniciar Sesión"/>
                </form>
            </SessionCard>
        </div>
        </>
    );
}