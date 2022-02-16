import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNames } from "./features/names/namesSlice"; 
import { selectAllNames } from "./features/names/namesSlice"; 

export const InputNames = () => {
    const dispatch = useDispatch()
    const names = useSelector(selectAllNames)

    const namesStatus = useSelector(state => state.names.status)

    useEffect(() => {
        if(namesStatus === 'idle') {
            dispatch(fetchNames())
        }
    }, [namesStatus, dispatch])
    
    return(<>45</>)
}