import './sessionCard.css';
import { Link } from 'react-router-dom';

export function SessionCard({ title, description, children, text, link, url }) {
    return (
        <div className="session-card">
            <h2 className="session-card-title">{title}</h2>
            <p className="session-card-description">{description}</p>
            {children}
            <p className="session-card-lower-text">{text}
                <Link to={url} id='bottom-link'>{link}</Link>
            </p>
        </div>
    );
};