import { useEffect, useState } from "react";
import { stopsTransformer } from "../../utils/stopsTransformer";
import "./stop-filter.css";

interface StopFilterProps {
  id: string;
  dispatchChange: (value: string) => void;
  updater: string[];
}

export const StopFilter = ({ id, dispatchChange, updater }: StopFilterProps) => {
    const [checked, setChecked] = useState(false);
  const checkboxChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(ev.target.checked)
    dispatchChange(id);
  };

  useEffect(() => {
    updater.some((value) => value === id) ? setChecked(true) : setChecked(false);
  }, [updater])

  return (
    <div className="stop-filter">
      <input type="checkbox" id={id} name={id} checked={checked} onChange={checkboxChange} />
      <label htmlFor={id}>{stopsTransformer(id)}</label>
    </div>
  );
};
