import './sessionCard.css';

export function SessionCard({ title, description, children, text }) {
    return (
        <div className="session-card">
            <h2 className="session-card-title">{title}</h2>
            <p className="session-card-description">{description}</p>
            {children}
            <p className="session-card-lower-text">{text}</p>
        </div>
    );
}