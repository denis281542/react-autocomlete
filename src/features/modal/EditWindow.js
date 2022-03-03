import { Box, Button, Card } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { ModalButton } from './ModalButton';
import { useState } from 'react';

export const EditWindow = ({open, handleClose}) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', transform: 'scale(1)' }}
        >
            <Box component="form" sx={{position: 'relative'}}>
            <Button 
                sx={{position: 'absolute', right: '0', paddingTop: '15px'}} 
                onClick={handleClose}
            ><CloseIcon /></Button>

            <Card sx={{padding: '60px'}}>
                {/* <CardContent>
                    <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
                    <Grid item xs={12}>
                        <Input 
                        label='Номер телефона'
                        name='phone'
                        required={true}
                        onChange={onChange}
                        value={phone}
                        isValid={() => isPhone(phone)}
                        errorMessageEmpty='Введите номер телефона'                 
                        errorMessageInvalid='Неверный номер телефона'                    
                        />
                    </Grid>
                    </Typography>

                    <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
                    <Grid item xs={12}>
                        <Input 
                        label='ФИО'
                        onChange={onChangeName}
                        value={name}
                        isValid={() => isName(name)}
                        errorMessageEmpty='Введите имя'                 
                        errorMessageInvalid='Короткое имя'                    
                        />
                    </Grid>
                    </Typography>

                    <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
                    <Grid item xs={12}>
                        <Input
                        label='Email' 
                        onChange={onChangeEmail}
                        value={email}
                        isValid={() => isEmail(email)}
                        errorMessageEmpty='Введите email'                 
                        errorMessageInvalid='Неправильный email'                    
                        />
                    </Grid>
                    </Typography>

                </CardContent> */}

                <ModalButton 
                    // onClick={bindUser}
                    ButtonText='Добавить жильца'
                />
            </Card>
            </Box>
        </Modal>
    )
}