import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import MyAccount from './components/MyAccount';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Context } from "./components/Context";

const APIURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes"

export const getCardsData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fetch(`${APIURL}`))
    }, 1500);
  })
}


function App() {
  return <>
    <Context.Provider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cards/:categoryId" element={<ItemListContainer />} />
          <Route path="/:categoryId/:cardId" element={<ItemDetailContainer />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  </>
};
export default App;