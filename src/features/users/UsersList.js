import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, clearUsers } from "./userSlice";
import { Button } from "@mui/material";

export const UsersList = () => {
    const dispatch = useDispatch()
    const addressId = useSelector(state => state.address.addressId)

    return(<>
        <Button onClick={() => dispatch(fetchUsers(addressId))}>Показать жильцов</Button>
        <Button onClick={() => dispatch(clearUsers())}>отчистить</Button>
    </>)
}