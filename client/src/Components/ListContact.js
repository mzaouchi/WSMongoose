import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "../Redux/Actions/ContactActions"
import CardContact from "./CardContact"

const ListContact=()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
    },[])
    const Contacts = useSelector(state=> state.ContactReducer.Contacts)
    return(
        <div>
            {
                Contacts.map(Contact => <CardContact key={Contact._id} Contact={Contact}/>)
            }
        </div>
    )
}

export default ListContact