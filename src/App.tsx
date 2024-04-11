import { RecipeBlock } from "./components/recipes";

function App() {
  return (
    <>
      {/* title */}
      <div className="text-black text-3xl flex justify-center">
        Welcome to Recipe Station!
      </div>

      {/* login in the top right perhaps */}

      {/* add a search by tag function here, show the most popular 5-10 tags then add a search bar for anything else */}

      {/* grid of the most recent recipes with picture/title/submitter in the card, integrate a tag system as well */}
      <RecipeBlock />
    </>
  );
}

export default App;
