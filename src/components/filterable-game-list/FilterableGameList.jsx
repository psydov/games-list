import { useState } from "react";
import GameList from "../game-list/GameList";
import SearchBar from "../search-bar/SearchBar";

export default function FilterableGameList({games = []}) {
  const [filterText, setFilterText] = useState('')
  const [inWishListOnly, setInWishListOnly] = useState(false)

  return (
    <div className="filterable-game-list">
      <SearchBar 
        filterText={ filterText }
        inWishListOnly={ inWishListOnly }
        setFilterText={ setFilterText }
        setInWishListOnly={ setInWishListOnly }
      />
      <GameList 
       games={ games }
       filterText={ filterText }
      />
    </div>
  )
}
