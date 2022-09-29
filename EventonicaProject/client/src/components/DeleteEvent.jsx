import { useState } from "react";

//pass the function deleteUser as a prop(function comes from Users) 
const DeleteEvent = ({onDeleteEvents}) => {

    //stores the userID that will be deleted
    const [deleteEventId, setDeleteEventId] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        //function callback
        onDeleteEvents(deleteEventId);
        setDeleteEventId('');
    }

    return (
        <div>
            <h3>Delete Event</h3>
            <form id="delete-event" action="#" onSubmit={handleSubmit}>
                <fieldset>
                    <label>Event ID</label>
                    <input type="text"
                     id="delete-event-id" 
                     value={deleteEventId}
                    onChange={(e) => setDeleteEventId(e.target.value)}/>
                </fieldset>
                <input type="submit" />
            </form>
        </div>
    )
}

export default DeleteEvent;