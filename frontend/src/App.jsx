import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/pages/Home";
import Create from "./components/pages/Create";
import Edit from "./components/pages/Edit";
import Delete from "./components/pages/Delete";
import Navbar from "./components/navbar/Navbar";
import Article from "./components/pages/Article";
import ArticleDetail from "./components/pages/ArticleDetail";
function App() {
  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/league/:id" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Routes>
        }
      />
    </>
  );
}

export default App;
