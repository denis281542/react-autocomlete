import Button from '@mui/material/Button';

export const ModalOpenButton = ({handleOpen, buttonText, icon}) => {
    return(
        <Button 
            onClick={handleOpen}
            variant="contained"
            sx={{marginTop: '15px'}}
        >{icon}{buttonText}</Button>
    )
}