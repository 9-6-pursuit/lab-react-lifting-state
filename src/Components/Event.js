import Attendees from "./Attendees";
import { useState } from "react";

export default function Event({attendees, event, updateEventAttendance}) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <div className="events">
      <li key={event.id}>
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
            <Attendees
              attendees={event.people} // instead of passing the attendees component, pass the attendees of selected event
              updateEventAttendance={updateEventAttendance
              }
              event={event}
              />
          ) : null}
        </>
      </li>
    </div>
  )
}
