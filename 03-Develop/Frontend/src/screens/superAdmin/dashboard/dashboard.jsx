import "./dashboard.css";
import { CardBasic } from "../../../components/ui/cardBasic/cardBasic";

export function Dashboard(){
    return (
        <div className="statistics-container">
            <CardBasic description="Total Instituciones" number="42"></CardBasic>
            <CardBasic description="Usuarios Activos" number="1,250"></CardBasic>
            <CardBasic description="Docentes" number="185"></CardBasic>
            <CardBasic description="Estudiantes" number="950"></CardBasic>
        </div>
    )
}