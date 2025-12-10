import "./input.css"

export function Input({type, placeholder}) {
    return(
        <input className={`primary`} type={type} placeholder={placeholder}></input>
    )
}