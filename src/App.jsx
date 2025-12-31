import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Header from "./Header";
import RouteLoader from "./components/RouteLoader";
import "./App.css";

import Home from "./components/Home";

const SkeletonScene = React.lazy(() => import("./components/SkeletonScene"));
const TexturedScene = React.lazy(() => import("./components/TexturedScene"));
const FpsScene = React.lazy(() => import("./components/FpsScene"));

export default function App() {
  return (
    <>
      <Header />

      <main className="scene-wrapper">
        <Suspense fallback={null}>
          <RouteLoader>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route
                path="/skeleton"
                element={
                  <div className="scene-container">
                    <SkeletonScene />
                  </div>
                }
              />
              <Route
                path="/texture"
                element={
                  <div className="scene-container">
                    <TexturedScene />
                  </div>
                }
              />
              <Route
                path="/fps"
                element={
                  <div className="scene-container">
                    <FpsScene />
                  </div>
                }
              />
            </Routes>
          </RouteLoader>
        </Suspense>
      </main>
    </>
  );
}
