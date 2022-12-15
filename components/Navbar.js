import React from "react";
import FavoriteContext from "../contexts/favoritesContext";

const { useContext } = React;

const Navbar = () => {
  const whiteHeart = "🤍";
  const { favoritePokemons } = useContext(FavoriteContext);

  let imageURL =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div />
      <div>
        <img src={imageURL} alt="Logo" className="navbar-image" />
      </div>
      <div className="fav-counter">
        {whiteHeart} {favoritePokemons.length}
      </div>
    </nav>
  );
};
export default Navbar;
