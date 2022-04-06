import React from 'react';
import './App.css';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import {db}  from './utils/firebase';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import AboutUs from './components/AboutUs';
import MyAccount from './components/MyAccount';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import  CustomCartContext  from "./components/Context/CustomCartContext";
import CartContainer from './components/Cart/CartContainer';




export const getData = async () => {

  const query = collection(db, "items");

  const response = await getDocs(query);

  console.log("respuesta", response);

  const dataItem = response.docs.map((doc) => {
    return{ id: doc.id, ...doc.data()};
  });
  return dataItem;
}

function App() {
  return <>
    <CustomCartContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cards/:categoryId" element={<ItemListContainer />} />
          <Route path="/:categoryId/:cardId" element={<ItemDetailContainer />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/cart" element={<CartContainer/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CustomCartContext>
  </>
};
export default App;