import { BrowserRouter, Route, Routes } from "react-router";

import SpanishWordle from "../SpanishWordle"
import HomePage from "../pages/HomePage"
import GamePage from "../pages/GamePage"

export default function WordleRouter() {

  return (

    <BrowserRouter basename = "/p182/">
      <Routes>
        <Route path="/" element={<SpanishWordle />}>
          <Route index element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}