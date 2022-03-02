import { Box } from "@mui/material"
import { useSelector } from "react-redux"

export const Address = () => {
    const address = useSelector(state => state.address)

    return(
        <div>
            {address.flat 
                ? (<Box sx={{ mx: "auto", display: "flex", width: '400px' }}>
                        <p>ул. {address.street},&nbsp;</p>
                        <p>д. {address.house},&nbsp;</p>
                        <p>кв. {address.flat}</p>
                    </Box>) 
                : null}
        </div>    
    )
}