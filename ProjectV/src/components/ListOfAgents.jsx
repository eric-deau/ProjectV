import {AgentListItem} from './AgentListItem.jsx';

export default function AgentList({ agents }) {
    return (
        <ul className="agent-list">
            {agents.map((agent, index) => (
                <AgentListItem key={index} agent={agent} />
            ))}
        </ul>                  
    )
}