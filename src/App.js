import Board from "./components/board";
import React from "react";
import "./App.css";
import checkWinner from "./utils/checkWinner";
import { observer } from "mobx-react";
import { AppStoreProvider, useAppStore } from "./store/AppStoreProvider";

export const Game = observer(() => {
  const appStore = useAppStore();
  console.log(appStore.winningConfig);
  return (
    <div className="App">
      {appStore.winner ? (
        <h2>Winner is {appStore.winner}</h2>
      ) : (
        <h2>{`Next Move ${appStore.isXPlaying ? "X" : "O"}`}</h2>
      )}
      <Board />
      <button className="reset-button" onClick={appStore.reset}>
        Reset
      </button>
    </div>
  );
});

export default function () {
  return (
    <AppStoreProvider>
      <Game />
    </AppStoreProvider>
  );
}
