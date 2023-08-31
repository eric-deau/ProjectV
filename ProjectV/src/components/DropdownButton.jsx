
export default function DropdownButton({selectedItem}) {
    return (
        <button className="dropdown__button">{selectedItem ? selectedItem.name : 'select an item'}</button>
    )
}