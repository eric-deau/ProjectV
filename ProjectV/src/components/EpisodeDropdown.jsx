import React from 'react'
import EpisodeDropdownItem from "./EpisodeDropdownItem";
// import DropdownButton from "./DropdownButton";
import '../styles/episodeMenu.css'


export default function EpisodeDropdown({ open, trigger, episodes, handleSelectEpisode, selectedItem }) {
    // const [open, setOpen] = React.useState(false);

    return (
        <div className="dropdown">
            {trigger}
            {open ? (
                <ul className="menu">
                    {episodes.map((episode, index) => (
                        <EpisodeDropdownItem key={index} episode={episode} handleSelectEpisode={handleSelectEpisode} selectedItem={selectedItem} />
                    ))}
                </ul>
            ) : null}
        </div>
    )
}
            

//     )

//     // return (
//     //     <div className="dropdown">
//     //         {/* <DropdownButton /> */}
//     //         <ul className="menu">
//     //             {episodes.map((episode, index) => (
//     //                 <EpisodeDropdownItem key={index} episode={episode} />
//     //             ))}
//     //         </ul>
//     //     </div>
//     // )
// }