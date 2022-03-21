import axios from "axios"
import { GETCONTACTS, GETONECONTACT } from "../Types/ContactTypes"

export const getContacts=()=>async (dispatch)=>{
        try {
            const res = await axios.get('/api/Contact/GetContacts')
            dispatch({
                type : GETCONTACTS,
                payload : res.data
            })
        } catch (error) {
            console.log(error)
        }
}

export const addContact=(newContact)=>async(dispatch)=>{
        try {
            await axios.post('/api/Contact/AddContact',newContact)
            dispatch(getContacts())
        } catch (error) {
            console.log(error)
        }
}

export const deleteContact=(id)=>async(dispatch)=>{
        try {
        
            await axios.delete(`/api/Contact/DeleteContact/${id}`)
            dispatch(getContacts())
        } catch (error) {
            console.log(error)
        }
}

export const updateContact=(id,data)=>async(dispatch)=>{
        try {
            await axios.put(`/api/Contact/UpdateContact/${id}`,data)
            dispatch(getContacts())
        } catch (error) {
            console.log(error)
        }
}

export const getOneContact=(id)=>async(dispatch)=>{
        try {
            const res = await axios.get(`/api/Contact/GetOneContact/${id}`)
            dispatch({
                type : GETONECONTACT,
                payload : res.data
            })
        } catch (error) {
            console.log(error)
        }
}

