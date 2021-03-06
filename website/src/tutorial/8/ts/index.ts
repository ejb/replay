import { makeSprite, GameProps } from "@replay/core";
import { Level } from "./level";

export const Game = makeSprite<GameProps>({
  render() {
    return [
      Level({
        id: "level",
      }),
    ];
  },
});

export const gameProps: GameProps = {
  id: "Game",
  size: {
    width: 400,
    height: 600,
    maxHeightMargin: 150,
  },
  defaultFont: {
    family: "Helvetica",
    size: 24,
  },
};
