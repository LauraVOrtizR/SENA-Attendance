import "./select.css"

export function Select({size, type, name, id}){
    return (
        <select className={`primary ${size}`} type={type} name={name} id={id}>
            <option value="" selected >Tipo Documento</option>
            <option value="">CC</option>
            <option value="">TI</option>
            <option value="">CE</option>
        </select>       
    )
}