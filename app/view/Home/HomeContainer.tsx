import { connect } from "react-redux";
import Home from "./Home";
import { playerSelectors } from "store/ducks/player";
import { AppState } from "store";
import { globalOperations } from "store/ducks/global";

interface StateProps {
  hasPlayers: boolean;
}

interface DispatchProps {
  reset(): void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  hasPlayers: playerSelectors.getPlayers(state).length > 0,
});

const mapDispatchToProps = {
  reset: globalOperations.reset,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
