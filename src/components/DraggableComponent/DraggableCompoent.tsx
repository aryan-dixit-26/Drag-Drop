export type DraggableComponentProps = {
  id: string;
  title: string;
  data: string;
  droppingBoardId: string;
};

const DraggableComponent = (props: DraggableComponentProps) => {
  const { title } = props;

  return <div className="border border-solid border-slate-200 w-full h-[80px]">
    {title}
  </div>;
};

export default DraggableComponent;
