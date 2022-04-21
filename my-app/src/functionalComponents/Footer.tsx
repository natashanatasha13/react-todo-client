import React from "react";
import Button from "./Buttons";
import ButtonClear from "./ButtonClear";
import Counter from "./Counter";
import { STATUSES } from "./Main";

export interface FooterProps {
  removeCompleted?: () => void;
  currentFilter?: any;
  counter: any;
  setCurrentFilter?: any;
  setCounter: (filterValue: any) => void;
  textContent?: string | number;
  className?: string;
}

const Footer = (props: FooterProps) => {
  const {
    removeCompleted,
    setCounter,
    setCurrentFilter,
    currentFilter,
    className,
    counter,
  } = props;
  console.log(counter);

  return (
    <div className={className}>
      <Counter textContent={counter} />
      <Counter textContent="items left" />
      <Button
        className={
          currentFilter === STATUSES.all ? "button all clicked" : "button all"
        }
        textContent="All"
        status={STATUSES.all}
        setCurrentFilter={setCurrentFilter}
        setCounter={setCounter}
        filterValue={STATUSES.active}
      />
      <Button
        className={
          currentFilter === STATUSES.active
            ? "button active clicked"
            : "button active"
        }
        textContent="Active"
        status={STATUSES.active}
        setCurrentFilter={setCurrentFilter}
        setCounter={setCounter}
        filterValue={STATUSES.active}
      />
      <Button
        className={
          currentFilter === STATUSES.done
            ? "button complited clicked"
            : "button complited"
        }
        textContent="Complited"
        status={STATUSES.done}
        setCurrentFilter={setCurrentFilter}
        setCounter={setCounter}
        filterValue={STATUSES.done}
      />
      <ButtonClear
        className="button clear"
        textContent="Clear completed"
        removeCompleted={removeCompleted}
      />
    </div>
  );
};

export default Footer;
