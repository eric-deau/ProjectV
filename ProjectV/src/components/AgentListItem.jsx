

export function AgentListItem({ index, agent }) {
    return (
        <li className="agent-list__item">
            <div className="agent-list__item__info" id={index}>
                <h3>{agent.name}</h3>
            </div>
        </li>
    )
}