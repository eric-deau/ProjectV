

export default function EpisodeDropdownItem({ episode, handleMenuClose, handleSelectEpisode }) {
    return (
        <li className="menu__item">
            {episode.type == 'episode' &&
                <button onChange={handleSelectEpisode} onClick={handleMenuClose}>{episode.name}</button>}
        </li>
    )
}