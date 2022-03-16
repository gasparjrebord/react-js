import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const APIURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function getCard(id) {
  fetch(`${APIURL}/${id}`)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
getCard()

export function getCards(id) {
  return fetch(`${APIURL}/${id}`)
}

function App() {
  return <>
    <NavBar />
    <ItemListContainer />
  </>
};
export default App;