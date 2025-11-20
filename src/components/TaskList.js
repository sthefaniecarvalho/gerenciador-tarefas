import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Task from "./Task";

function TaskList() {
    const { state } = useContext(TaskContext);
    const { tasks, filter } = state;

    const filteredTasks = tasks.filter((t) => {
        if (filter === "done") return t.completed;
        if (filter === "pending") return !t.completed;
        return true;
    });

    return (
        <div style={{ marginTop: "20px" }}>
            {filteredTasks.length === 0 ? (
                <p>Nenhuma Task encontrada.</p>
            ) : (
                filteredTasks.map((task) => <Task key={task.id} task={task} />)
            )}
        </div>
    );
}

export default TaskList;
