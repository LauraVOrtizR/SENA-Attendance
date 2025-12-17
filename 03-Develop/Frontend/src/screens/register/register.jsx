import { Input } from '../../components/ui/input/input';
import { Select } from '../../components/ui/select/select';
import { SessionCard } from '../../layouts/sessionCard/sessionCard';
import { Button } from '../../components/ui/button/button';
import { Navbar } from '../../layouts/navbar/navbar';
import './register.css'

export function Register() {
    return (
        <>
        <Navbar/>
        <div className="register-container">
            <SessionCard title={"Crear Perfil de Aprendiz"} description={"Compreta tus datos para registrarte" } text={"¿Ya tienes una cuenta? "} link={"Iniciar sesión"} url={"/login"}>
                <form className="register-form" id='register'>
                    <Input type="text" placeholder="Nombre" name="name"/>
                    <Input type="text" placeholder="Apellido" name="lastName"/>
                    <Select name="documentType"/>
                    <Input type="text" placeholder="Número de Documento" name="documentNumber"/>
                    <Input type="email" placeholder="Correo Electrónico" name="email"/>
                    <Input type="text" placeholder="Número de Teléfono" name="phoneNumber"/>
                    <Input type="password" placeholder="Contraseña" name="password"/>
                    <Button color={"green"} label="Registrarse"/>
                </form>
            </SessionCard>
        </div>
        </>
    );
}