import React from "react";
import Button from "./Buttons";
import ButtonClear from "./ButtonClear";
import Counter from "./counter";
import { connect } from "react-redux";
import { STATUSES } from "./Main";
class Footer extends React.Component {
  render() {
    const {
      removeCompleted,
      className,
      setCounter,
      setCurrentFilter,
      currentFilter,
      counter,
    } = this.props;

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
          currentFilter={currentFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

export default connect(mapStateToProps)(Footer);
