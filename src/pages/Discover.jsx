import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong, genreListId } = useSelector(
    (state) => state.player
  );
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genresTitle = genres.find(({ value }) => value === genreListId)?.title;
  return (
    <div className="flex flex-col">
      <div
        className="w-full flex justify-between items-center flex-col sm:flex-row
      mt-4 mb-10
      "
      >
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genresTitle}
        </h2>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg
        outline-none mt-5 sm:mt-0"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      {/* song card */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => (
          <SongCard
            key={song}
            song={song}
            i={i}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
