import { FilterBlock } from "../FilterBlock/FilterBlock";
import { TicketBlock } from "../TicketBlock/TicketBlock";
import "./render-field.css";

export const RenderField = () => {
  return (
    <main className="main">
      <FilterBlock />
      <TicketBlock />
    </main>
  );
};
