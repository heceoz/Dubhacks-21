// import logo from './logo.svg';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";



const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format, 
  parse, 
  startOfWeek, 
  getDay, 
  locales
})

const events = [
  {
    title: "Application due",
    allDay: true,
    start: new Date(2021, 9,8),
    end: new Date(2021, 9,8)
  },
  {
    title: "Essay due",
    start: new Date(2021, 9, 12),
    end: new Date(2021, 9,12 )
  },
  {
    title: "Dubhacks",
    start: new Date(2021, 9, 23),
    end: new Date(2021, 9, 25)
  }
]

function App() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }
  return (
    <div className="App">
      <div className="todo">
        <h1>To-Do List</h1>
        <ul id="myUL">
          <li class="checked">Form team</li>
          <li class="checked">Choose track</li>
          <li id='red'>Plan</li>
          <li id='red'>Choose framework</li>
          <li id='green'>Go to events</li>
          <li id='yellow'>Talk to mentors</li>
        </ul>
        <input type="text" id="myInput" placeholder="Add to-do..."></input>
        <span onclick="newElement()" class="addBtn">Add</span>
        
      </div>
      <div className="event">
        <div className="add-event">
          <h2>Add New Event</h2>
          <div>
            <input type="text" placeholder="Add Title" style={{width: "20%", marginRight: "10px"}}
              value={newEvent.title} onChange={(e)  => setNewEvent({...newEvent, title: e.target.value} )}
            />
            <DatePicker placeholderText="start date" style={{marginRight: "10px"}}
              selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})} 
            />
            <DatePicker placeholderText="end date" 
              selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} 
            />
            <button stlye={{marginTop: "10px"}} onClick={handleAddEvent}>Add Event</button>
          </div>
        </div>
      
        <Calendar 
          localizer={localizer} 
          events={allEvents}
          startAccessor="start" 
          endAccessor="end"
          style={{height: 500, margin: "50px"}} 
        />
      </div>
    </div>
  );
  
  
}

export default App;
