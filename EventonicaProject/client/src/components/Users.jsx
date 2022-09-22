import React, {useState, useEffect} from 'react';
import DeleteUser from "./DeleteUser.js";




const Users = () => {
    // mock users
    const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };



    const[users,setUsers]= useState([marlin,nemo,dory]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState();

    //create new variable
    //the list u wanna run through
    //index is part of syntax
    const listUsers = users.map((user,index) => (
        <li key={index}>
            ID: {user.id} NAME: {user.name} EMAIL: {user.email}
        </li>
    ));
    
// client/src/components/Users.jsx
const getUsers = async () => {
  const response = await fetch('http://localhost:4040/users');
  const user = await response.json();
  setUsers(user);
};

useEffect(() => {
  getUsers();
}, []);



// Add new user
const handleAddUser= async (e) => {
  e.preventDefault();
  const newUser = { id , name , email };

  const response = await fetch('http://localhost:4040/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });
  const content = await response.json();

  setUsers([...users, content]);
  setName('');
  setEmail('');
  setId('');

};

// DELETE USER
const handleDeleteUsers = async (e) => {
  e.preventDefault();
  const newUser = { id, name, email };

  const response = await fetch('http://localhost:4040/users', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  });
  const content = await response.json();

  setUsers([...users, content]);
};


    //add user
        //submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id, name, email};
        //spread syntax, calls everything in users and add newUsers to it
        setUsers([...users, newUser]);
        setName("");
        setEmail("");
        setId("");
    };
    console.log(users)

    // delete user

    const handleDeleteUser = (deleteUser) => {
        const deleteUsers = users.filter((i) => i.id !==deleteUser);
        console.log(deleteUsers);
        //get to be in new list
        setUsers(deleteUsers);
    };


  return (
  <section className="user-management">
    
  <h2>User Management</h2>

  <ol id="users-list">
    {/* display all existing Users here */}
    {/* <li>...</li> */}
    {listUsers}

  </ol>

  <div>
    <h3>Add User</h3>
    <form id="add-user" action="#" onSubmit={handleAddUser}>
      <fieldset>
        <label>Id:</label>
        <input
        value={id}
        type="text"
        id="add-user-id"
        name="id"
        required
        onChange={(e) => setId(e.target.value)}
        />

        <label>Name</label>
        <input 
        value={name}
        type="text" 
        id="add-user-name" 
        placeholder="name"
        name="name"
        required
        onChange={(e) => setName(e.target.value)}
        
        />

        <label>Email</label>
        <input
            value={email}
            type="email"
            id="add-user-email"
            placeholder="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          
        />

      </fieldset>
      {/* Add more form fields here */}
      <input type="submit" value="Add"  />
    </form>
  </div>
    {/* delete user */}
    {/* //deleteUser would be the props in this situation to use the callback function */}
  <DeleteUser handleDeleteUser={handleDeleteUser}/>
</section>

  );

};

export default Users;