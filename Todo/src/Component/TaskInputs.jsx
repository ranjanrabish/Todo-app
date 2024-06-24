/* eslint-disable react/no-unknown-property */


import { useState } from "react"
import { actionToAddTask } from "../redux/actionCreator/actionsCreators";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const TaskInputs = () => {
    const [userTodo, setUserTodo] = useState({
        todo: "",
        isCompleted: false,
        id: Math.random(),
        date: new Date().toLocaleDateString()
    });

    const dispatch = useDispatch();


    //updating the local state for user's todo
    const handleChangeTodo = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        userTodo[name] = value;
        setUserTodo({ ...userTodo });
    }

    //adding the user's task to allTasks and dispatching actionCreator for add task
    const handleAddTask = (e) => {
        e.preventDefault();
        if (!userTodo.todo) {
            toast.warning("Please add task first.")
            return;
        }
        dispatch(actionToAddTask(userTodo));
        setUserTodo({
            todo: "",
            isCompleted: false, id: Math.random(),
            date: new Date().toLocaleDateString()
        })
        toast.success("Task added successfully");
    }


    return (
        <div className="Task-input-box">
            <form className="row g-2 p-2">
                <div className="col-sm-8 col-12">
                    <input type="text" value={userTodo.todo} onChange={handleChangeTodo} name="todo"
                        className="form-control" id="inputPassword2" placeholder="Add todo here" />
                </div>
                <button type="submit"
                    className="btn add-task col-sm-3 col-6"
                    onClick={handleAddTask}>Add task</button>
            </form>
        </div>
    )
}

export default TaskInputs
