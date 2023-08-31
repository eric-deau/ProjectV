

export default function EpisodeDropdownItem({ episode }) {
    return (
        <li className="menu__item">
            {episode.type == 'episode' && 
                <button>{episode.name}</button>}
        </li>
    )
}