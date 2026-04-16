import "./input.css"

export function Input({label_name, type, placeholder, name}) {
    return(
        <label htmlFor="">{label_name}
            <input className="input" type={type} placeholder={placeholder} name={name}/>
        </label>
    )
}