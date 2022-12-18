import React from "react";

export const Product = ({
 img,
 id,
 setOpenedProduct,
 dragOverHandler,
 obj,
 board,
 dragStartHandler,
 dragEndHandler,
 dragLeaveHandler,
 dropHandler,
}) => {
 return (
  <div
   onClick={() => setOpenedProduct(id)}
   draggable={true}
   onDragOver={(e) => dragOverHandler(e)}
   onDragLeave={(e) => dragLeaveHandler(e)}
   onDragStart={(e) => dragStartHandler(e, board, obj)}
   onDragEnd={(e) => dragEndHandler(e)}
   onDrop={(e) => dropHandler(e, board, obj)}
   className="w-[7rem] md:w-[8.5rem] aspect-square bg-black cursor-pointer mx-3 mb-3 rounded-xl shadow-2xl"
  >
   <img
    src={img}
    alt="Product"
    className="w-full h-full cursor-pointer object-cover hover:opacity-70 transition duration-300 ease-in-out rounded-xl border-[1px] border-slate-500"
   />
  </div>
 );
};
