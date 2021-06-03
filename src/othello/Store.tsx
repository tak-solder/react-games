import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';
import * as Defines from "./Defines";
import * as Types from "./Types";

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

const initialState: Types.State = {
  board: defaultBoard,
  histories: [],
  player: null,
  finished: false,
};

// createSliceでreducerとactionを同時に定義
const slice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    putDisc: (state, action: PayloadAction<Types.Position>) => {
      return {
        board: defaultBoard,
        histories: [],
        player: null,
        finished: false,
      };
    },
  },
})
