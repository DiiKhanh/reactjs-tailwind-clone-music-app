import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Error, RelatedSongs, Loader, DetailsHeader } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [artistData, setArtistData] = useState([]);
  const [isFetchingArtistDetails, setIsFetchingArtistDetails] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getArtist = async () => {
      setIsFetchingArtistDetails(true);
      const response = await axios.get(`https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=${artistId}`, {
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
        },
      });
      setIsFetchingArtistDetails(false);
      if (response) {
        setArtistData(response.data.data[0]);
        setError(false);
      } else {
        setError(true);
      }
    };
    getArtist();
  }, [artistId]);

  if (isFetchingArtistDetails) { return <Loader title="Searching artist details" />; }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      {/* <RelatedSongs
        artistId={artistId}
        data={Object.values(artistData?.views?.playlists?.data)}
        isPlaying={isPlaying}
        activeSong={activeSong}
      /> */}
    </div>
  );
};

export default ArtistDetails;
