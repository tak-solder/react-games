import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as Defines from "./Defines";
import * as Types from "./Types";
import * as Logic from "./Logic";

type State = {
  board: Types.Board,
  histories: Array<Types.History>,
  player: Types.Player | null,
  finished: boolean,
};

const defaultBoard: Types.Board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, -1, 1, 0, 0, 0],
  [0, 0, 0, 1, -1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const initialState: State = {
  board: defaultBoard,
  histories: [],
  player: Defines.Player.Black,
  finished: false,
};

const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    putDisc: (state, action: PayloadAction<Types.Position>): State => {
      const position = action.payload;
      const player = state.player as Types.Player;
      const newBoard = Logic.putDisc(state.board, player, position)
      if (newBoard === null) {
        alert('そこには置けません');
        return state;
      }

      const newHistory = state.histories.slice();
      newHistory.unshift({player, position});

      let newPlayer = player * -1 as Types.Player;
      let finished = false;

      if (!Logic.putableCellExists(newBoard, newPlayer)) {
        if (Logic.putableCellExists(newBoard, player)) {
          newPlayer = player;
        } else {
          finished = true;
        }
      }

      return {
        board: newBoard,
        histories: newHistory,
        player: finished ? null : newPlayer,
        finished: finished,
      };
    },
  },
});

export default configureStore({
  reducer: slice.reducer
});

export const {putDisc} = slice.actions;

export {State};
