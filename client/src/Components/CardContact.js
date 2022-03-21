import { Card,Button } from "react-bootstrap"
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import {deleteContact} from "../Redux/Actions/ContactActions"

const CardContact=({Contact})=>{
    const dispatch = useDispatch()
    return(
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png" />
            <Card.Body>
                <Card.Title>{Contact.name}</Card.Title>
                <Button variant="primary" onClick={()=> dispatch(deleteContact(Contact._id))}>Delete</Button>
                <Link to={`/UpdateContact/${Contact._id}`}><Button variant="primary">Update</Button></Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardContact