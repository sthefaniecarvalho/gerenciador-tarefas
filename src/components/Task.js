import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Task({ task }) {
    const { dispatch } = useContext(TaskContext);

    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
            />
            <span
                style={{
                    marginLeft: "10px",
                    textDecoration: task.completed ? "line-through" : "none",
                }}
            >
                {task.title}
            </span>
        </div>
    );
}

export default Task
