import { DragProvider } from "./context/DragContext";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <DragProvider>
        <Home />
      </DragProvider>
    </div>
  );
}

export default App;
