import DroppingBoard, { DroppingBoardProps } from "../DroppingBoard/DroppingBoard"

type DroppingAreaProps = {
    boardList: DroppingBoardProps[]
}

const DroppingArea = (props: DroppingAreaProps) => {
    const { boardList } = props

    return <div className="w-[80%] h-full flex justify-evenly items-start flex-wrap">
        {boardList.map((board, index)=><DroppingBoard  {...board} key={`id-${index}`}/>)}
    </div>
}

export default DroppingArea