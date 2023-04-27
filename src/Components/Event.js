import React, { useState } from "react";

import Attendees from "./Attendees";

export default function Event({ event, attendees, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  
  
  return (
    <>
    <li key={event.id} className="event" >
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <>
        <button onClick={toggleEventAttendees}>
          {!showAttendees ? "Show Attendees" : "Hide Attendees"}
        </button>

        {showAttendees ? (
          <div className="attendees">
            {attendees.map((attendee, index) => (
           <Attendees 
           attendee={attendee} 
           event={event} 
           updateEventAttendance={updateEventAttendance}
           />
            ))}
          </div>
        ) : null}
      </>
    </li>
  </>
  );
}


