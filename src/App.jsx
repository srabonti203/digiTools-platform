import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/nav";
import PremiumDataTools from "./components/premiumDataTools/PremiumDataTools";
import State from "./components/state/state";
import ProductCard from "./components/premiumDataTools/ProductCard";
import { ToastContainer } from "react-toastify";

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [isProductSelected, setIsProductSelected] = useState("products");
  const [selectedCart, setSelectedCart] = useState([]);
  const productPromise = fetchProduct();
  const totalPrice = selectedCart.reduce(
    (total, cart) => total + parseFloat(cart.price),
    0,
  );
  return (
    <>
      <div className="space-y-5 flex flex-col items-center justify-center">
        <Nav selectedCart={selectedCart} totalPrice={totalPrice}></Nav>
        <Banner></Banner>
        <State></State>
        <PremiumDataTools
          selectedCart={selectedCart}
          isProductSelected={isProductSelected}
          setIsProductSelected={setIsProductSelected}
        ></PremiumDataTools>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <ProductCard
            productPromise={productPromise}
            isProductSelected={isProductSelected}
            setSelectedCart={setSelectedCart}
            selectedCart={selectedCart}
            totalPrice={totalPrice}
          ></ProductCard>
        </Suspense>
      </div>


      
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
