import React, { useState } from "react";


const DeleteUser = ({deleteUser}) =>{
  //useState tells react engine when value change
  const [id, setId] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    //function callback
    deleteUser(id);
    setId('');
  }

return (
  <>
<div>
    <h3>Delete User</h3>
    <form 
    id="delete-user" 
    //# means destination for this form is this page
    action="#" onSubmit = {handleSubmit}
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
         value={id}
         onChange={(e) => setId(e.target.value)}
         />
      </fieldset>
      <input type="submit" />
    </form>
  </div>

  </>
 );
};

export default DeleteUser;