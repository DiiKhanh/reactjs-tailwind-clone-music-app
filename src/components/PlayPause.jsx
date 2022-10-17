import React from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/all";

const PlayPause = ({ isPlaying, song, activeSong, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
