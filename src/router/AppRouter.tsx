import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Experience } from "../pages/experience";
import { Goals } from "../pages/goals";
import { Photos } from "../pages/photos";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/photos" element={<Photos />} />
    </Routes>
  );
};