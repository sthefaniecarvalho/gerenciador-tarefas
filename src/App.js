import { useContext, useState } from "react";
import { TaskContext } from "./context/TaskContext";
import TaskList from "./components/TaskList";

function App() {
  const { dispatch } = useContext(TaskContext);
  const [taskValue, setTaskValue] = useState("");

  function addTask() {
    if (taskValue.trim() === "") return;

    dispatch({ type: "ADD_TASK", payload: taskValue });
    setTaskValue("");
  }

  return (
    <div
      style={{
        width: "400px", margin: "40px auto", padding: "16px",
        border: "1px solid #0D47A1", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
      }}>
      <h1>Gerenciador de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa..."
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        style={{ margin: "20px", padding: "8px", borderRadius: "8px" }}
      />
      <button
        style={{ padding: "8px", borderRadius: "8px", backgroundColor: "#90CAF9" }}
        onClick={addTask}>ADICIONAR
      </button>

      <div style={{ marginTop: "20px", display: "flex", gap: "20px", justifyContent: "center" }}>
        <button
          style={{ padding: "8px" }}
          onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}>
          Todas
        </button>
        <button
          style={{ padding: "8px" }}
          onClick={() => dispatch({ type: "SET_FILTER", payload: "done" })}>
          Concluídas
        </button>
        <button
          style={{ padding: "8px" }}
          onClick={() => dispatch({ type: "SET_FILTER", payload: "pending" })}
        >
          Pendentes
        </button>
      </div>

      <TaskList />
    </div>
  );
}

export default App;
