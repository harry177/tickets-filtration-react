import "./ticket-block.css";
import storage from "../../../tickets.json";
import { Ticket } from "../Ticket/Ticket";

export const TicketBlock = () => {
  return (
    <div className="ticket-block">
      {storage.tickets.map((item, index) => {
        return <Ticket key={index} content={item} />;
      })}
    </div>
  );
};
