import "./button.css"

export function Button({label, type = "button", color, onClick, isDesabled = false}) {
    return(
        <button type={type} className={`button ${color}`} onClick={onClick} disabled={isDesabled}>{label}</button>
    )
}