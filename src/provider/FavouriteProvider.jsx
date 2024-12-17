import { FavouriteContex } from "../context";
import { useLocalStorage } from "../hooks";
const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );

    setFavourites(restFavourites);
  };
  return (
    <FavouriteContex.Provider
      value={{ addToFavourites, removeFromFavourites, favourites }}
    >
      {children}
    </FavouriteContex.Provider>
  );
};

export default FavouriteProvider;
