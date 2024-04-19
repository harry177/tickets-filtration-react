import "./ticket-block.css";
import storage from '../../../tickets.json';

export const TicketBlock = () => {
  return <div className="ticket-block">
    {storage.tickets.map((item, index) => {
      return <div key={index} className="ticket">{item.destination_name}</div>
    })}
  </div>;
};
