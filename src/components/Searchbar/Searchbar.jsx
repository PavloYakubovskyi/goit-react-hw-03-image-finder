import { FcSearch } from "react-icons/fc";

const Searchbar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">
            <FcSearch />
          </span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="search"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
