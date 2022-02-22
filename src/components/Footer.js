import React from "react";
import Button from "./Buttons";
import ButtonClear from "./ButtonClear";
import Counter from "./counter";
import { STATUSES } from "./Main";
class Footer extends React.Component {
  render() {
    const { currentFilter, counter } = this.props;

    return (
      <div className={this.props.className}>
        <Counter textContent={counter} />
        <Counter textContent="items left" />
        <Button
          className={currentFilter === 3 ? "button all clicked" : "button all"}
          textContent="All"
          status={STATUSES.all}
          setCurrentFilter={this.props.setCurrentFilter}
          setCounter={this.props.setCounter}
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
          setCurrentFilter={this.props.setCurrentFilter}
          setCounter={this.props.setCounter}
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
          setCurrentFilter={this.props.setCurrentFilter}
          setCounter={this.props.setCounter}
          filterValue={STATUSES.done}
        />
        <ButtonClear
          className="button clear"
          textContent="Clear completed"
          removeCompleted={this.props.removeCompleted}
        />
      </div>
    );
  }
}

export default Footer;
