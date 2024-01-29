import './PortifolioCard.css'

export default function PortifolioCard({ title, description, url }: {title:string, description: string, url: string}) {
    return (
        <a href={url} className="portifolioCard">
            <h3>{title}</h3>
            <p>{description}</p>
        </a>
    )
}