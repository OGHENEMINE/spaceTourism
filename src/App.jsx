import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./layouts/Loading";
const Home = lazy(() => import("./pages/Home"));
const Crew = lazy(() => import("./pages/Crew"));
const Destination = lazy(() => import("./layouts/Destination"));
const Technology = lazy(() => import("./pages/Technology"));
const Moon = lazy(() => import("./pages/Moon"));
const Europa = lazy(() => import("./pages/Europa"));
const Titan = lazy(() => import("./pages/Titan"));
const Mars = lazy(() => import("./pages/Mars"));

function App() {
  return (
    
    <div className="font-barlow-condensed scroll-smooth">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="crew" element={<Crew />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
            <Route path="mars" element={<Mars />} />
          </Route>
          <Route path="technology" element={<Technology />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
