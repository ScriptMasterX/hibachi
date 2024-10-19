import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Locations from "../pages/Locations";
import Gallery from "../pages/Gallery";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import Book from "../pages/Book";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="locations" element={<Locations />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="contact" element={<Contact />} />
      <Route path="book" element={<Book />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
