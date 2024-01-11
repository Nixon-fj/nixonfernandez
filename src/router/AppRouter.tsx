import { Routes, Route } from 'react-router-dom';

//Pages
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}