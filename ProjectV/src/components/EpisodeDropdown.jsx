import EpisodeDropdownItem from "./EpisodeDropdownItem";
import '../styles/episodeMenu.css'


export default function EpisodeDropdown({episodes}) {
    return (
        <div className="dropdown">
            <ul className="menu">
                {episodes.map((episode, index) => (
                    <EpisodeDropdownItem key={index} episode={episode} />
                ))}
            </ul>
        </div>
    )
}