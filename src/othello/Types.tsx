type latestHand = {
  player: number,
  cell: {
    row: number,
    column: number,
  },
};

type field = Array<Array<number>>;

export {latestHand, field};
