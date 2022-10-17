import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SongCard, Error, Loader } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader title="Loading top charts " />;

  if (error) return <Error />;


  return (
    <div className="flex flex-col">
      <h2 className="text-white font-bold text-3xl text-left mt-4 mb-10">
        searching for <span>{searchTerm}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            data={data}
            activeSong={activeSong}
            i={i}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
