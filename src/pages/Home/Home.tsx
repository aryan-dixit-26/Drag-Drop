import { useState } from "react";
import DroppingArea from "../../components/DropingArea/DroppingArea";
import { DroppingBoardProps } from "../../components/DroppingBoard/DroppingBoard";
import Button from "../../components/Button/Button";

const Home = () => {
  const [boardList, setBoardList] = useState<DroppingBoardProps[]>([]);
  const handleAddBoard = () => {
    setBoardList((prev) => [
      ...prev,
      { title: `Title ${prev.length + 1}`, id: `id-${prev.length + 1}` },
    ]);
  };

  return (
    <div className="w-screen min-h-screen p-2 flex justify-evenly items-center bg-fuchsia-100">
      <DroppingArea boardList={boardList} />
      <Button
        buttonText="Add Board"
        onClickCb={handleAddBoard}
        classNames="absolute bottom-3 right-3"
      />
    </div>
  );
};

export default Home;

{
  /* <div className="min-h-full w-1/3 border-2 border-solid border-black p-2 flex flex-col justify-start items-start">
<h1>Drag</h1>
<div className="w-[200px] h-[200px] border-2 border-solid border-black rounded-md flex justify-center items-center" id="drag1" draggable="true" onDragStart={(e)=>{
    e.dataTransfer.setData("text", e.currentTarget.id)
}}>
    Item 1
</div>
</div>
<div className="min-h-full w-2/3 border-2 border-solid border-black p-2" onDragOver={e=>e.preventDefault()} onDrop={(e)=>{
e.preventDefault();
let data = e.dataTransfer.getData("text");
e.currentTarget.appendChild(document.getElementById(data) as Node)
}}>
<h1>Drop</h1>
</div> */
}
