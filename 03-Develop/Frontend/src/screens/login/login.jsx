import './login.css';
import { Button } from '../../components/ui/button/button';
import { Input } from '../../components/ui/input/input';
import { Select } from '../../components/ui/select/select';
import { SessionCard } from '../../layouts/sessionCard/sessionCard';
import { Navbar } from '../../layouts/navbar/navbar';

export function Login() {
    return (
        <>
        <Navbar/>
        <div className="login-container">
            <SessionCard title="Iniciar Sesion" description="Gestiona tu asistencia de forma eficiente" text="¿No tienes una cuenta? " link="Regístrate aquí">
                <form className="login-form" id="login">
                    <Select name="documentType"/> 
                    <Input type="text" placeholder="Numero de Documento" name="documentNumber"/>
                    <Input type="password" placeholder="Contraseña" name="password"/>
                    <a href="" id='forgot-password-link' className='link' >¿Olvidaste tu contraseña?</a>
                    <Button color={"green"} label="Iniciar Sesión"/>
                </form>
            </SessionCard>
        </div>
        </>
    );
}