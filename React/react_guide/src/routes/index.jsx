import { Yummy } from "components/Yummy";
import { Route, Routes } from "react-router";
import { Login } from "components/Login";
import { Home } from "pages/Home";
import { About } from "pages/About";
import { StarWarsPeople } from "pages/StarWarsPeople";
import { StarWars } from "pages/StarWars";
import { StarWarsWithReducer } from "pages/StarWarsWithReducer";
import { CatBreeds } from "pages/CatBreeds";
import { Catfacts } from "pages/CatFacts";
import  PostsRedux  from "pages/PostsRedux";
import { Mui } from "pages/Mui";


export function WebsiteRouting() {
  return (
    <Routes>
      <Route path="/Yummy" element={<Yummy />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/starwars/:peopleID" element={<StarWarsPeople />} />
      <Route path="/starwars-with-reducer" element={<StarWarsWithReducer />} />
      <Route path="/cat-breeds" element={<CatBreeds />} />
      <Route path="/cat-facts" element={<Catfacts />} />
      <Route path="/posts-redux" element={<PostsRedux />} />
      <Route path="/mui" element={<Mui />} />
    </Routes>
  );
}
