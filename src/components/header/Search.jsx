import { useContext } from "react";
import SearchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";
function Search() {
  // const [searchTerm, setSearchTerm] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 1000);

  function handleChange(e) {
    const value = e.target.value;
    // setSearchTerm(value);
    doSearch(value);
  }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const fetchedLocation = getLocationByName(searchTerm);
  //   // console.log(fetchedLocation);
  //   // setSelectedLocation(fetchedLocation);
  //   setSelectedLocation({ ...fetchedLocation });
  // }
  return (
    <form
      action="#"
      //onSubmit={handleSubmit}
    >
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          // onChange={(e) => setSearchTerm(e.target.value)}
          onChange={handleChange}
          required
        />
        <button type="submit">
          <img src={SearchIcon} />
        </button>
      </div>
    </form>
  );
}

export default Search;
