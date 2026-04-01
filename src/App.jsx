import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import PremiumDataTools from "./components/premiumDataTools/PremiumDataTools";
import State from "./components/state/state";
import ProductCard from "./components/premiumDataTools/ProductCard";
import { ToastContainer } from "react-toastify";
import GetStarted from "./components/getStarted/GetStarted";
import Nav1 from "./components/navbar/Nav1";
import TransparantPricing from "./components/transparantPricing/TransparantPricing";
import Footer from "./components/footer/footer";
import Workflow from "./components/workflow/Workflow";

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const fetchGetStarted = async () => {
  const res = await fetch("/getStartedData.json");
  return res.json();
};

function App() {
  const productPromise = fetchProduct();
  const fetchGetStartedPromise = fetchGetStarted();
  const [isProductSelected, setIsProductSelected] = useState("products");
  const [selectedCart, setSelectedCart] = useState([]);
  const totalPrice = selectedCart.reduce(
    (total, cart) => total + parseFloat(cart.price),
    0,
  );
  return (
    <>
      <div className="space-y-5 flex flex-col items-center justify-center">
        <Nav1 selectedCart={selectedCart} totalPrice={totalPrice}></Nav1>
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

        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <GetStarted
            fetchGetStartedPromise={fetchGetStartedPromise}
          ></GetStarted>
        </Suspense>
        <TransparantPricing></TransparantPricing>
        <Workflow></Workflow>
        <Footer></Footer>
      </div>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
