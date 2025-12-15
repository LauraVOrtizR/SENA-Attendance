import "./select.css"

export function Select({size, name}){
    return (
        <select className={`primary ${size}`} name={name}>
            <option value="" defaultValue={true} >Tipo Documento</option>
            <option value="">CC</option>
            <option value="">TI</option>
            <option value="">CE</option>
        </select>       
    )
}