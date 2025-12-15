import "./input.css"

export function Input({type, placeholder, name}) {
    return(
        <input className="input" type={type} placeholder={placeholder} name={name}/>
    )
}