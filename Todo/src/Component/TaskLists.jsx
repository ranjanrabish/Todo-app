import { MdDelete } from "react-icons/md";
/* eslint-disable react/jsx-key */
import { FaToggleOn } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { actionToChangeStatus, actionToDeleteTask } from "../redux/actionCreator/actionsCreators";
import { useState } from "react";
import DeleteTaskModal from "./DeleteTaskModal.jsx";
import { FaToggleOff } from "react-icons/fa6";

const TaskLists = () => {
    const [openDeleteMod, setOpenDeleteMod] = useState(false);
    const [deleteTaskId, setDeleteTaskId] = useState(null);

    const dispatch = useDispatch();
    const { todos } = useSelector((store) => store.reducer);


    //handling delete modal and dispatching the action creator for delete task
    const SureToDelete = () => {
        dispatch(actionToDeleteTask(deleteTaskId));
        setOpenDeleteMod(false);
        setDeleteTaskId(null);
    }


    //dispatching the action creator for updating the status of task/toggling
    const handleStatus = (id) => {
        dispatch(actionToChangeStatus(id));

    }
    return (
        <div className="task-lists">
            <ul className="taskList-box">
                {
                    todos.length == 0 && <div style={{ display: "flex", justifyContent: "center" }}> Add Todos below </div>
                }
                {
                    todos.map((task, ind) =>
                        <li key={task.id} style={{
                            background: task.isCompleted
                                ? "#cbe1cb" : "rgb(233 200 200)"
                        }}   >
                            <div className="todo-text">
                                <div>
                                    {task.todo}
                                </div>
                                <div>
                                    {task.date}
                                </div>
                            </div>
                            <div className="todo-actions">
                                <div className="icons-box">
                                    <MdDelete onClick={() => {
                                        setDeleteTaskId(task.id)
                                        setOpenDeleteMod(true)
                                    }
                                    } />
                                </div >
                                {
                                    task.isCompleted ?

                                        <FaToggleOn className="toggles" onClick={() => handleStatus(task.id, ind)} /> :
                                        <FaToggleOff className="toggles" onClick={() => handleStatus(task.id, ind)} />
                                }

                            </div>
                        </li>
                    )
                }
            </ul>
            {
                openDeleteMod && <DeleteTaskModal
                    SureToDelete={SureToDelete}
                    openDeleteMod={openDeleteMod}
                    setDeleteTaskId={setDeleteTaskId}
                    setOpenDeleteMod={setOpenDeleteMod}
                />
            }

        </div>
    )
}

export default TaskLists