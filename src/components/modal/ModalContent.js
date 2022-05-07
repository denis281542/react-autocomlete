// export const ModalContent = () => {
//     return(
//         <CardContent>
//                 <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
//                   <Grid item xs={12}>
//                     <TextField 
//                       id="outlined-basic" 
//                       // type="number"  
//                       required label="Номер телефона" 
//                       variant="outlined" 
//                       autoComplete="off"
//                       onChange={onChange}
//                       value={phone}
//                       onBlur={() => {
//                         setDirty(true)
//                         isPhone()
//                       }}
//                       error={error(dirty, phone, isPhone)}
//                       onFocus={() => setDirty(false)}
//                       helperText={helperText(dirty, phone, isPhone, 'Введите номер телефона', 'Неверный номер телефона')}
//                     />
//                   </Grid>
//                 </Typography>

//                 <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
//                   <Grid item xs={12}>
//                     <TextField 
//                       id="outlined-basic" 
//                       label="ФИО" 
//                       variant="outlined"
//                       type="text"
//                       autoComplete="off"                      
//                       onChange={onChangeName}
//                       value={name}
//                       onBlur={() => setDirtyName(true)}
//                       error={error(dirtyName, name, isName)}
//                       helperText={helperText(dirtyName, name, isName, 'Введите имя', 'Короткое имя')}
//                       onFocus={() => setDirtyName(false)}
//                     />
//                   </Grid>
//                 </Typography>

//                 <Typography variant="outlined" component="div" sx={{padding: '10px'}}>
//                   <Grid item xs={12}>
//                     <TextField 
//                       id="outlined-basic" 
//                       label="Email" 
//                       variant="outlined"
//                       type="email"
//                       autoComplete="off"
//                       onChange={onChangeEmail}
//                       value={email}
//                       onBlur={() => setDirtyEmail(true)}
//                       error={error(dirtyEmail, email, isEmail)}
//                       helperText={helperText(dirtyEmail, email, isEmail, 'Введите email', 'Неправильный email')}
//                       onFocus={() => setDirtyEmail(false)}
//                     />
//                   </Grid>
//                 </Typography>

//             </CardContent>
//     )
// } 