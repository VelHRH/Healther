import React from "react";

export const Product = ({ img, id, setOpenedProduct }) => {
 return (
  <div
   onClick={() => setOpenedProduct(id)}
   className="w-1/5 aspect-square bg-black cursor-pointer mx-3 rounded-xl"
  >
   <img
    src={img}
    alt="Product"
    className="w-full h-full cursor-pointer object-cover hover:opacity-50"
   />
  </div>
 );
};
