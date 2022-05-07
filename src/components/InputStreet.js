import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchStreets, selectAllStreet } from "./streetsSlice"

export const InputStreet = () => {
    const streets = useSelector(selectAllStreet);
    const status = useSelector(state => state.streets.status)

    const dispatch = useDispatch()
    console.log(status);

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchStreets())
        }
    }, [status, dispatch])

    streets.map(s => {
        console.log(s);
    })

    return(<p>dssa</p>)
}