import { connect } from "react-redux";
import { Player } from "domain/player";
import { AppState } from "store";
import Points from "./Points";
import { playerSelectors } from "store/ducks/player";

interface PointsState {
  players: Player[];
}

const mapStateToProps = (state: AppState): PointsState => ({
  players: playerSelectors.getPlayers(state),
});

export default connect(mapStateToProps)(Points);
