import { GETCONTACTS, GETONECONTACT } from "../Types/ContactTypes"

const initialState = {
    Contacts : [],
    Contact : {}
}

const ContactReducer=(state = initialState,action)=>{
        switch (action.type) {
            case GETCONTACTS : return {...state,Contacts : action.payload.Contacts}
            case GETONECONTACT : return {...state, Contact : action.payload.OneContact}
            default: return state
               
        }
}

export default ContactReducer