import "./button.css"

export function Button({label, type, color, onClick, isDesable = false}) {
    return(
        <button className={`button ${color}`} onClick={onClick()} type={type}>{label}</button>
    )
}