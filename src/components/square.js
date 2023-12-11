import React, { useEffect } from "react";
import {useAppStore} from "../store/AppStoreProvider"
import { autorun } from "mobx";
import checkWinner from "../utils/checkWinner";

//Question: How to only redender the squares that have been changed

export const Square = ({number}) => {

  const appStore = useAppStore();
  useEffect (() => autorun(() => {
    checkWinner(appStore.squares)
  }, [appStore]))
  const handleClick = (number) => {
    if (!appStore.winner && !appStore.getSquare(number)) {
      appStore.playCreator(number);
      appStore.winCreator(number);
    }
  };
    //Check if current square number is part of winningConfig
    let squareClass = "square";
    const isPartOfWinningConfig = appStore.winningConfig.includes(number);
    if (isPartOfWinningConfig) {
      squareClass = "square winner";
    }
    return (
      <div 
        className={squareClass}
        onClick={() => {
          handleClick(number);
        }}
      >
        {appStore.squares[number]}
      </div>
    );
}
