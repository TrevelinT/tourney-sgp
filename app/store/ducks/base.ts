interface BaseState {
  key: string;
}

const initialState: BaseState = {
  key: null,
};

const reducer = (state = initialState): BaseState => state;

export default reducer;
