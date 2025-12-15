import "./passwordRecovery.css";
import { Input } from "../../components/ui/input/input";
import { Button } from "../../components/ui/button/button";
import { Select } from "../../components/ui/select/select";
import { SessionCard } from "../../layouts/sessionCard/sessionCard";
import { Navbar } from "../../layouts/navbar/navbar";

export function PasswordRecovery() {
    return (
        <> 
        <Navbar/>
        <div className="password-recovery-container">    
            <SessionCard title="Recuperar Contraseña" description="Ingresa tus datos y te enviaremos un enlace para restablecer tu contraseña" text="¿Recordaste tu contraseña? " link="Inicia sesión aquí">
                <form className="password-recovery-form" id="password-recovery">
                    <Select name="documentType"/>
                    <Input type="text" placeholder="Número de Documento" name="documentNumber"/>
                    <Button color={"green"} label="Recuperar contraseña"/>
                </form>
            </SessionCard>
        </div>
        </>
    );
}