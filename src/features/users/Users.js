import { useSelector, useDispatch } from "react-redux"
import { Box } from "@mui/material"
import { useEffect, useState } from "react"; 
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material"; 
import { clearUsers, fetchUsers, removeUser } from "./userSlice";
import { EditWindow } from "../modal/EditWindow";

export const User = () => {
    const users = useSelector(state => state.users)
    const status = useSelector(state => state.users.status)
    const [disableId, setDisableId] = useState(0)
    const [disableEdit, setDisableEdit] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        status === 'loading' ? setDisableEdit(true) : setDisableEdit(false)
        status === 'removing' ? setDisableId(true) : setDisableId(false)
      }, [status, dispatch])

    const deleteUser = (bindId, userId) => {
        dispatch(removeUser({bindId, userId}))
    }

    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);

    const handleClose = () => setOpen(false);

    return(
        <Box sx={{display: 'flex', width: '80vw', margin:' 0 auto', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
            {users.users.map((user, idx) => {
                
                return(
                    <Box key={idx} sx={{padding: '15px'}}>
                        <Box sx={{ mx: "auto", width: '400px', width: '250px', border: 1, borderRadius: '9px', borderColor: 'grey.500'}}>
                            <Box sx={{padding: '10px'}}>
                                <p style={{display: 'flex', alignItems: 'center'}}><PersonOutlineIcon sx={{ marginRight: '5px' }} />{user.name} &nbsp;</p>
                                <p style={{display: 'flex', alignItems: 'center'}}><PhoneIcon sx={{ marginRight: '5px' }} />{user.phone} &nbsp;</p>
                                <p style={{display: 'flex', alignItems: 'center'}}><MailOutlineIcon sx={{ marginRight: '5px' }} />{user.email} &nbsp;</p>
                            </Box>

                            <Box sx={{ borderTop: '1px solid black', borderRadius: '0px 0px 9px 9px', borderColor: 'grey.500', display: 'flex', justifyContent: 'space-evenly', padding: '7px', backgroundColor: '#ccc' }}>
                                <Button
                                    disabled={user.id === disableEdit}
                                    onClick={() => {
                                        setDisableEdit(user.id)
                                        setId(user.id)
                                        setOpen(true)
                                    }}
                                ><EditIcon />
                                </Button>

                                <Button
                                    disabled={user.id === disableId}
                                    onClick={() => {
                                        setDisableId(user.id)
                                        deleteUser(user.bindId, user.id)                                        
                                    }}
                                ><DeleteOutlineIcon /></Button>
                            </Box>
                        </Box> 
                    </Box>
                )
            })}

            { open ? (                          
                <EditWindow
                    userId={id}
                    open={open}
                    handleClose={handleClose}
                />  
            ) : null}           
        </Box>        
    )
}