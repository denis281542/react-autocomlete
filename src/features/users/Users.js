import { useSelector, useDispatch } from "react-redux"
import { Box } from "@mui/material"
import { useState } from "react"; 
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material"; 
import { removeUser } from "./userSlice";

export const User = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()


    const deleteUser = () => {
        dispatch(removeUser(users.id))
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

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
                                    onClick={handleOpen}
                                ><EditIcon /></Button>
                                <Button
                                    onClick={deleteUser}
                                ><DeleteOutlineIcon /></Button>
                            </Box>
                        </Box> 
                    </Box>
                )
            })}
        </Box>        
    )
}