import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearAllWatcher } from "../store/actions";

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  const inputLoginValue = useSelector((state) => state.addUser.inputLoginValue);
  const handleClearAll = () => {
    dispatch(clearAllWatcher());
    localStorage.clear();
    console.log(inputLoginValue, "на функциональных компонентах");
  };
  return (
    <div className="button_logout">
      <Link to="/log" onClick={handleClearAll}>
        Sign out
      </Link>
    </div>
  );
};

export default ButtonLogOut;
