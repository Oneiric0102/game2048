import React, { useState } from "react";
import times from "lodash/times";
import { MAX_POS } from "../constant";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

export default function Game({ setScore, tileList, setTileList }) {
  //방향키 입력 시 타일 이동
  useMoveTile({ tileList, setTileList, setScore });
  return (
    <div className="game-container" data-ezoic-video-excluded="1">
      <div className="grid-container">
        {times(MAX_POS, (index) => (
          <div key={index} className="grid-row">
            {times(MAX_POS, (index2) => (
              <div key={index2} className="grid-cell"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="tile-container">
        {tileList.map((item) => (
          <Tile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
