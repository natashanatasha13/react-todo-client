import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { clearAllWatcher } from "../store/actions";
class ButtonLogOut extends React.Component {
  clearAll = () => {
    const { clearAllWatcher } = this.props;
    clearAllWatcher();
    localStorage.clear();
  };
  render() {
    return (
      <div className="button_logout">
        <Link to="/log" onClick={this.clearAll}>
          Sign out
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state,
});
const mapDispatchToProps = {
  clearAllWatcher: clearAllWatcher,
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonLogOut);
