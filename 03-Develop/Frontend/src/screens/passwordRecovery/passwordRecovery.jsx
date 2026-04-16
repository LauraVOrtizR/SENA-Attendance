import "./passwordRecovery.css";
import { Input } from "../../components/ui/input/input";
import { Button } from "../../components/ui/button/button";
import { Select } from "../../components/ui/select/select";
import { SessionCard } from "../../layouts/sessionCard/sessionCard";
import logoSchool from '../../assets/LogoSchoolCore.png';
// import { Navbar } from "../../layouts/navbar/navbar";

export function PasswordRecovery() {
    return (
        <> 
        {/* <Navbar/> */}
        <div className="password-recovery-container">
            <img className="logo" src={logoSchool} alt="SchoolCore"/> 
            <SessionCard title="¿Olvidaste tu contraseña?" description="Ingresa tu correo electrónico registrado y te enviaremos instrucciones para restablecerla" link="Volver al inicio de sesión" url="/login">
                <form className="password-recovery-form" id="password-recovery">
                    <Input label_name="Contraseña" type="text" placeholder="ejemplo@gmail.com" name="documentNumber"/>
                    <Button color={"blue"} label="Recuperar contraseña"/>
                </form>
            </SessionCard>
        </div>
        </>
    );
}