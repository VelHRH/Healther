import React from "react";
import { Header } from "../components/Header";
import { Navbox } from "../components/Navbox/Navbox";
import { Button } from "../components/Products/Button";
import { Product } from "../components/Products/Product";
import { TopUsers } from "../components/TopUsers/TopUsers";
import { useState } from "react";
import { FullProduct } from "../components/Products/FullProduct";
import axios from "../axios";

const Calculator = () => {
 const [openedProduct, setOpenedProduct] = useState();
 const [boards, setBoards] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [currentBoard, setCurrentBoard] = useState(null);
 const [currentObj, setCurrentObj] = useState(null);

 React.useEffect(() => {
  setIsLoading(true);
  axios
   .get(`/products`)
   .then((res) => {
    setBoards([
     { id: 1, items: res.data },
     { id: 2, items: [] },
    ]);
   })
   .finally(() => setIsLoading(false));
 }, []);

 const dragOverHandler = (e) => {
  e.preventDefault();
  if (e.target.id !== "container") {
   e.target.style.boxShadow = "10px 0px 5px gray";
  }
 };
 const dragLeaveHandler = (e) => {
  e.target.style.boxShadow = "none";
 };
 const dragStartHandler = (e, board, obj) => {
  setCurrentBoard(board);
  setCurrentObj(obj);
 };
 const dragEndHandler = (e) => {
  e.target.style.boxShadow = "none";
 };
 const dropHandler = (e, board, obj) => {
  e.preventDefault();
  const curIndex = currentBoard.items.indexOf(currentObj);
  currentBoard.items.splice(curIndex, 1);
  const dropIndex = board.items.indexOf(obj);
  board.items.splice(dropIndex + 1, 0, currentObj);
  setBoards(
   boards.map((b) => {
    if (b.id === board.id) {
     return board;
    }
    if (b.id === currentBoard.id) {
     return currentBoard;
    }
    return b;
   })
  );
  e.target.style.boxShadow = "none";
 };

 const dropCardHandler = (e, board) => {
  board.items.push(currentObj);
  setBoards(
   boards.map((b) => {
    if (b.id === board.id) {
     return board;
    }
    if (b.id === currentBoard.id) {
     return currentBoard;
    }
    return b;
   })
  );
 };

 if (isLoading) {
  return <div>Loading...</div>;
 }
 return (
  <>
   {openedProduct > -1 && <FullProduct setOpenedProduct={setOpenedProduct} />}

   <Header />
   <div className="flex mt-20">
    <Navbox />
    <div className="flex flex-col w-full md:w-1/2 ">
     <div
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropCardHandler(e, boards[0])}
      className="flex flex-wrap justify-center mt-3"
      id="container"
     >
      {boards[0].items.map((obj) => (
       <Product
        setOpenedProduct={setOpenedProduct}
        img={obj.imageUrl}
        dragOverHandler={dragOverHandler}
        dragStartHandler={dragStartHandler}
        dragLeaveHandler={dragLeaveHandler}
        dropHandler={dropHandler}
        dragEndHandler={dragEndHandler}
        board={boards[0]}
        obj={obj}
       />
      ))}
     </div>
     <div
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropCardHandler(e, boards[1])}
      id="container"
      className="border-4 p-4 h-[9rem] md:h-[10.5rem] border-violet-400 border-dashed mx-2 flex flex-wrap"
     >
      {boards[1].items.map((obj) => (
       <Product
        img={obj.imageUrl}
        dragOverHandler={dragOverHandler}
        dragStartHandler={dragStartHandler}
        dragLeaveHandler={dragLeaveHandler}
        dropHandler={dropHandler}
        dragEndHandler={dragEndHandler}
        board={boards[1]}
        obj={obj}
       />
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
