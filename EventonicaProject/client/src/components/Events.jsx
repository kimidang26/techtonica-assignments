import { useReducer , useEffect, useState} from "react";
// import DeleteEvent from "./DeleteEvent.js";

//mock events
const event1 = {
    id: "1",
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
};

const event2 = {
    id: "2",
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
};

const event3 = {
    id: "3",
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
};

//state is the state before the action
//action is the event after the state
const reducer = (state, action) => {
    console.log(action, 'this is the action');
    switch (action.type) {
      case 'editName':
        console.log('Logged if the editName action is being dispatched');
        //it updates the name to the input value
        return { ...state, name: action.payload };
  
      case 'editDescription':
        return { ...state, description: action.payload };
  
      case 'editCategory':
        return { ...state, category: action.payload };

        case 'editDate':
        return { ...state, date: action.payload };

        case 'editID':
        return { ...state, id: action.payload };
      default:
        return state;
    }
  };

const Events = () => {

  //state for events
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const response = await fetch('http://localhost:4040/events');
    const events = await response.json();
    setEvents(events);
  };
  
  useEffect(() => {
    getEvents();
  }, []);
  
  

//initialistate of the form will be empty
      const initialState = {
        id: '',
        name: '',
        date: null,
        description: '',
        category: ''
      };

      const [state, dispatch] = useReducer(reducer, initialState);
      console.log(state);

      const handleSubmit = (e) =>{
        e.preventDefault();
        //updates list with new event
        setEvents([...events, state]);
      }

          // Add new events
          const handleAddEvent = async (e) => {
            e.preventDefault();
            const newEvent = { id: state.id, name: state.name, description: state.description, category: state.category, date: state.date };
            console.log(newEvent);
            const response = await fetch('http://localhost:4040/events', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEvent)
            });
            const content = await response.json();
            console.log(content);
            setEvents([...events, content]);
        };

    //   const handleDeleteEvent = (deleteEvent) => {
    //     const deleteEvents = events.filter((i) => i.id !==deleteEvents);
    //     console.log(deleteEvents);
    //     //get to be in new list
    //     setEvents(deleteEvents);
    // };


    return (
        <section className="event-management">
            <h2>Event Management</h2>
            <div>
                <h3>All Events</h3>
                <ul id="events-list">
                    {/* Display all Events here */}
                    {/* <li>...</li> */}
                    {events.map((event, index) => {
                        return (
                            <li key={index}>
                                ID:{event.id},
                                Event: {event.name}, <br />
                                Date:{event.date}, <br />
                                Description:{event.description} , <br />
                                Category: {event.category},

                            </li>
                        )
                    })}
                </ul>

                <h3>Add Event</h3>
                <form id="add-event" action="#" onSubmit={handleAddEvent}>
                    <fieldset>
                        <br></br>
                        <label>Name: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-event-name"
                            placeholder="Puppy Cat"
                            value={state.name}
                            onChange={(e) =>
                              // Whenever you want to update the state (usually from an event handler or after completing a fetch request), you simply call the dispatch function with the appropriate action object: dispatch(actionObject).
                              dispatch({
                                type: 'editName',
                                payload: e.target.value
                              })
                            }
                        />
                        <br></br>
                        <label>ID: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-event-id"
                            placeholder="1"
                            value={state.id}
                            onChange={(e) =>
                              dispatch({
                                type: 'editID',
                                payload: e.target.value
                              })
                            }
                        />
                        <br></br>
                        <label>Date: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-event-date"
                            placeholder="02/20/2022"
                            value={state.date}
                            onChange={(e) =>
                              dispatch({
                                type: 'editDate',
                                payload: e.target.value
                              })
                            }
                        />
                        <br></br>
                        <label>Description: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-event-description"
                            placeholder="Description"
                            value={state.description}
                            onChange={(e) =>
                              dispatch({
                                type: 'editDescription',
                                payload: e.target.value
                              })
                            }
                        />
                        <br></br>
                        <label>Category: </label>
                        <br></br>
                        <input
                            type="text"
                            id="add-event-category"
                            placeholder="Virtual corgi meetup"
                            value={state.category}
                            onChange={(e) =>
                              dispatch({
                                type: 'editCategory',
                                payload: e.target.value
                              })
                            }
                        />
                    </fieldset>
                    {/* Add more form fields here */}
                    <input type="submit" />
                </form>
            </div>
            {/* <DeleteEvent handleDeleteEvent={handleDeleteEvent}/> */}
        </section>
    )
}
export default Events;