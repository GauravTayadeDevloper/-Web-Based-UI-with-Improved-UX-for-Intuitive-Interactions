import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import TexturedScene from "./components/TexturedScene";
import FpsScene from "./components/FpsScene";
import SkeletonScene from "./components/SkeletonScene";

export default function App() {
  return (
    <>
      <Header />

      <Routes >
        <Route path="/texture" element={<TexturedScene/>} />
        <Route path="/fps" element={<FpsScene/>}/>
        <Route path="/" element={<SkeletonScene/>}/>

      </Routes>
    </>
  );
}
