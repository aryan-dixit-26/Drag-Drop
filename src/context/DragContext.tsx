import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { DraggableComponentProps } from "../components/DraggableComponent/DraggableCompoent";

type ProviderProps = {
  children: ReactNode;
};

export const DragContext = createContext<{
  draggableList: DraggableComponentProps[];
  setDraggableList: Dispatch<SetStateAction<DraggableComponentProps[]>>;
}>({
  draggableList: [],
  setDraggableList: () => null,
});

export const DragProvider = ({ children }: ProviderProps) => {
  const [draggableList, setDraggableList] = useState<DraggableComponentProps[]>(
    []
  );

  return (
    <DragContext.Provider value={{ draggableList, setDraggableList }}>
      {children}
    </DragContext.Provider>
  );
};

export const useDrag = () => useContext(DragContext);
