import React from "react";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { Button } from "../components/Products/Button";
import { Product } from "../components/Products/Product";
import { TopUsers } from "../components/TopUsers/TopUsers";
import { useState } from "react";
import { FullProduct } from "../components/Products/FullProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/products";

const Calculator = () => {
 const dispatch = useDispatch();
 const { products } = useSelector((state) => state.products);
 const [openedProduct, setOpenedProduct] = useState();
 React.useEffect(() => {
  dispatch(fetchProducts());
 }, []);
 return (
  <>
   {openedProduct > -1 && <FullProduct setOpenedProduct={setOpenedProduct} />}
   <Header />
   <div className="flex mt-20">
    <Navbox />
    <div className="flex flex-col w-full md:w-1/2 ">
     <div className="flex flex-wrap justify-center mt-3">
      {products.items.map((obj) => (
       <Product setOpenedProduct={setOpenedProduct} img={obj.imageUrl} />
      ))}
     </div>
     <Button isActive={true} />
    </div>
    <TopUsers />
   </div>
  </>
 );
};

export default Calculator;
