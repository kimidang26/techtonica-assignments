// import React, { useState } from "react";


// const DeleteEvent = ({handleDeleteEvent}) =>{
//   //useState tells react engine when value change
//   const [deleteEventId, setEventIdToDelete] = useState("");


//   const handleEventOut = (e) => {
//     e.preventDefault();
//     //function callback
//     handleDeleteEvent(deleteEventId);
//   }

// return (
//   <>
// <div>
//     <h3>Delete Event</h3>
//     <form 
//     id="delete-event" 
//     //# means destination for this form is this page
//     action="#" onSubmit = {handleEventOut}
//     // onSubmit={(ev) => {
//     //   // prevent the browser from executing the default action of the selected element.
//     //   ev.preventDefault();
//     //   handleDeleteUser(deleteUserId);
//     //   setUserIdToDelete("");
//     // }}
//     >
//       <fieldset>
//         <label>User ID</label>
//         <input type="text"
//          id="delete-event-id" 
//          value={deleteEventId}
//          onChange={(e) => setEventIdToDelete(e.target.value)}
//          />
//       </fieldset>
//       <input type="submit" />
//     </form>
//   </div>

//   </>
//  );
// };

// export default DeleteEvent;