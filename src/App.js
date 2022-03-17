import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const APIURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician"

export function getCardsData() {
  return fetch(`${APIURL}`)
}


function App() {
  return <>
    <NavBar />
    <ItemListContainer />
  </>
};
export default App;