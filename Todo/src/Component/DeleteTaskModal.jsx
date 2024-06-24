/* eslint-disable react/prop-types */
import { Box, Modal, } from "@mui/material"

const DeleteTaskModal = ({ SureToDelete,
    openDeleteMod, setDeleteTaskId,
    setOpenDeleteMod }) => {


    //closing modal on Not to delete task
    const handleNoSureToDelete = () => {
        setDeleteTaskId(null)
        setOpenDeleteMod(false)
    }

    return (
        <div>
            <Modal
                open={openDeleteMod}
                onClose={handleNoSureToDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", alignItems: "center"
                }}
            >
                <Box height={200} width={300} border={2} sx={{
                    border: "3px solid red",
                    display: "flex", background: "white",
                    justifyContent: "center", alignItems: "center",
                    color: "rgb(8, 180, 168);",
                    fontWeight: "900"
                }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            Are you sure ?
                        </div>
                        <div className="yes-no-btns">
                            <button onClick={SureToDelete}  >Yes</button>
                            <button onClick={handleNoSureToDelete
                            }  >No</button>
                        </div>
                    </div>
                </Box>

            </Modal>
        </div >
    )
}

export default DeleteTaskModal
