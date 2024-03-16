import FilterableGameList from "./components/filterable-game-list/FilterableGameList";
import { GAMES } from "./utils";

const App = () => {
  return (
    <>
      <FilterableGameList games={GAMES}/>
    </>
  );
};

export default App;
