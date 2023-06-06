// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList.js";
import React, { useState } from "react";
import Footer from "./components/Footer.js";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 12",
      quantity: 0,
    },
    {
      price: 5999,
      name: "Samsung 12",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;

    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = (index) => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };
  return (
    <>
      <NavBar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
