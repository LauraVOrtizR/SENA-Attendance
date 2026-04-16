import { Input } from '../../components/ui/input/input';
import { Select } from '../../components/ui/select/select';
import { SessionCard } from '../../layouts/sessionCard/sessionCard';
import { Button } from '../../components/ui/button/button';
// import { Navbar } from '../../layouts/navbar/navbar';
import './passwordRestore.css'
import logoSchool from '../../assets/LogoSchoolCore.png';

export function PasswordRestore() {
    return (
        <>
        {/* <Navbar/> */}
        <div className="restore-container">
            <img className="logo" src={logoSchool} alt="SchoolCore"/>
            <SessionCard title={"Crear tu nueva contraseña"} description={"Ingresa y confirma tu nueva contraseña" } link={"Volver al inico de sesión"} url={"/login"}>
                <form className="restore-form" id='register'>
                    <Input label_name="Nueva Contraseña" type="password" placeholder="Ingresa nueva contraseña" name="phoneNumber"/>
                    <Input label_name="Confirmar Nueva Contraseña" type="password" placeholder="Confirma nueva contraseña" name="password"/>
                    <div>
                        <ul className= "password-requirements">
                            <li>Mínimo 8 caracteres</li>
                            <li>Al menos una mayúscula</li>
                            <li>Un número y un simbolo</li>
                        </ul>
                    </div>
                    <Button color={"blue"} label="Restablecer Contraseña"/>
                </form>
            </SessionCard>
        </div>
        </>
    );
}