import { Suspense } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Nav from "./components/navbar/nav";
import PremiumDataTools from "./components/premiumDataTools/PremiumDataTools";
import State from "./components/state/state";
import ProductCard from "./components/premiumDataTools/ProductCard";

const fetchProduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const productPromise = fetchProduct();
  return (
    <>
      <div className="space-y-5 flex flex-col items-center justify-center">
        <Nav></Nav>
        <Banner></Banner>
        <State></State>
        <PremiumDataTools></PremiumDataTools>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <ProductCard productPromise={productPromise}></ProductCard>
        </Suspense>
      </div>
    </>
  );
}

export default App;
