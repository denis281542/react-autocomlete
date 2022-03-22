import React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export const ModalButton = ({onClick, ButtonText,disabled}) => {
    return(
        <CardActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '15px'}}>
            <Button 
                disabled={disabled}
                size="large" 
                variant="contained"
                type="submit"
                onClick={e => onClick(e)}
            >{ButtonText}</Button>
        </CardActions>
    )
}