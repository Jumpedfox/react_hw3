import React from 'react';

const Searchbar = ({ myWord, loadPics }) => {
  return (
    <header className="searchbar">
      <form className="searchbar-form" onSubmit={loadPics}>
        <input
          className="searchbar-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={myWord}
        />
        <button type="submit" className="searchbar-form__button">
          <span className="searchbar-form__button-label">Find!</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
