import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId
}) => {

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-white text-3xl">Related Songs:</h1>
      <div className="flex flex-col w-full mt-6">
        {data?.map((song,i) => (
          <SongBar
          key={`${artistId}-${song.key}-${i}`}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          song={song}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
