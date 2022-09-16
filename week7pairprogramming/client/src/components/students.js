import { useState, useEffect} from "react";

const Students = (props) => {

    const [students, setStudents] = useState([]);

    const loadData = () => {
        fetch('http://localhost:8080/api/students')
        .then((response) => response.json())
        .then((data) => {
            console.log("This is line 11" , data);
             setStudents(data)
         });
   }
   


    useEffect(() =>{
        loadData();
    }, [])


  
    return (
        <div className="Container">
            <h1>Hello from {props.school}</h1>
            {students.map((student,index)=>{
                return (<div key={index}>
                    <p>{student.firstname} {student.lastname}</p>
            
                </div>)
            })}
        </div>
    )


    // return(
    //     <div>
    //         <p>{students[0].firstname}</p>
    //         <p>{students[0].lastname}</p>
    //     </div>
    // )
}

export default Students;