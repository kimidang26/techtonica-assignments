import React, { useState } from "react";


const DeleteUser = ({handleDeleteUser}) =>{
  //useState tells react engine when value change
  const [deleteUserId, setUserIdToDelete] = useState("");


  const handleDelete = (e) => {
    e.preventDefault();
    //function callback
    handleDeleteUser(deleteUserId);
  }

return (
  <>
<div>
    <h3>Delete User</h3>
    <form 
    id="delete-user" 
    //# means destination for this form is this page
    action="#" onSubmit = {handleDelete}
    // onSubmit={(ev) => {
    //   // prevent the browser from executing the default action of the selected element.
    //   ev.preventDefault();
    //   handleDeleteUser(deleteUserId);
    //   setUserIdToDelete("");
    // }}
    >
      <fieldset>
        <label>User ID</label>
        <input type="text"
         id="delete-user-id" 
         value={deleteUserId}
         onChange={(e) => setUserIdToDelete(e.target.value)}
         />
      </fieldset>
      <input type="submit" />
    </form>
  </div>

  </>
 );
};

export default DeleteUser;