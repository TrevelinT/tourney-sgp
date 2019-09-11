import { connect } from "react-redux";
import Form from "./Form";
import { Dispatch } from "redux";
import { Match } from "domain/match";
import { operations, MatchActionTypes } from "store/ducks/match/match";

interface DispatchProps {
  onSubmit(match: Match): void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSubmit: (match: Match): MatchActionTypes =>
    dispatch(operations.endMatch(match)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
