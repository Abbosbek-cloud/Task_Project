import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Favourites from "./Pages/Favourites";
import Details from "./Pages/Details";
import Movies from "./Pages/Movies";
import NotFound from "./Pages/NotFound";
import Popular from "./Pages/Popular";

function App() {
  return (
    <div className="App relative h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Movies />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="popular" element={<Popular />} />
        </Route>
        <Route path="/movie" element={<Layout />}>
          <Route path=":movieId" element={<Details />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
