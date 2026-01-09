import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="bg-amber-300">
      <Navbar />
      <Login />
      <Todo />
    </div>
  );
}

export default App;
