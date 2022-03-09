import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { User } from "../users/Users"
import { ModalWindow } from '../modal/ModalWindow'
import { ModalOpenButton } from '../modal/ModalOpenButton';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export const Address = ({handleOpen}) => {
    const address = useSelector(state => state.address)

    return(
        <div>
            {address.flat 
                ? (<Box sx={{padding: '20px'}}>
                        <Box sx={{ mx: "auto", display: "flex", width: '400px', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{display: 'flex'}}> 
                                <p>ул. {address.street},&nbsp;</p>
                                <p>д. {address.house},&nbsp;</p>
                                <p>кв. {address.flat}</p>
                            </Box> 
                            <ModalWindow />
                        </Box> 

                        <User />
                    </Box>) 
                : null}
        </div>    
    )
}