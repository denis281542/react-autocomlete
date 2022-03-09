import Button from '@mui/material/Button';

export const ModalOpenButton = ({handleOpen, buttonText, icon, disabled}) => {
    return(
        <Button 
            disabled={disabled}
            onClick={handleOpen}
            variant="contained"
        >{icon}{buttonText}</Button>
    )
}