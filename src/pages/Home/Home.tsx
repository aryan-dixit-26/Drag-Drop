const Home = () => {
  return (
    <div className="w-screen h-screen p-2 flex justify-evenly items-center">
        <div className="min-h-full w-1/3 border-2 border-solid border-black p-2 flex flex-col justify-start items-start">
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
        </div>
    </div>
  )
}

export default Home