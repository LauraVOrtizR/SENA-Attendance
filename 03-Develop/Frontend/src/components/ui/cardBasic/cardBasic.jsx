import "./cardBasic.css"

export function CardBasic({description, number}) {
    return (
        <div className="basic-card">
            <p className="basic-card-description">{description}</p>
            <p className="session-card-number">{number}</p>
        </div>
    );
};