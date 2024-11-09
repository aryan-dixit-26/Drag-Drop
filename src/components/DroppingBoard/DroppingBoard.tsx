import { useDrag } from "../../context/DragContext";
import Button from "../Button/Button";
import DraggableComponent from "../DraggableComponent/DraggableCompoent";

export type DroppingBoardProps = {
  title: string;
  id: string;
};

const DroppingBoard = (props: DroppingBoardProps) => {
  const { title, id } = props;
  const { draggableList, setDraggableList } = useDrag();

  return (
    <div className="w-1/4 border border-white border-solid min-h-64 h-fit p-2 bg-white rounded-md m-3">
      <div className="bg-slate-200 w-full h-8 mb-1 p-1 text-stone-950 font-medium flex justify-between items-center">
        <h1>{title}</h1>
        <Button
          buttonText="+"
          onClickCb={() => {
            setDraggableList((prev) => [
              ...prev,
              {
                id: `Test-${draggableList.length + 1}`,
                title: "Test tile",
                data: "This is a test tile",
                droppingBoardId: id,
              },
            ]);
          }}
          classNames="w-[30px] h-[2px] flex justify-center items-center bg-transparent text-black border-none hover:bg-transparent hover:scale-125 hover:text-fuchsia-400"
        />
      </div>
      <div className="flex flex-col items-center justify-evenly mt-2">
        {draggableList.map((item, index) => (
          <DraggableComponent {...item} key={`id-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default DroppingBoard;
