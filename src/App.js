import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";
import UserDetail from "./components/userdetail";
import Search from "./components/search";
import PageNotFound from "./components/pagenotfound";
const About = React.lazy(() => import("./components/about"));
const UserInfo = React.lazy(() => import("./components/userinfo"));

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UserInfo />}>
            <Route path=":userid" element={<UserDetail />} />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
