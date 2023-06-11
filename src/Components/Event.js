import { useState } from "react"
import Attendees from "./Attendees";

export default function Event({updateEventAttendance, attendees, event}) {
  const [showAttendees, setShowAttendees] = useState(false)

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return(
      <li key={event.id}>
        <img src={event.eventImage} alt={event.name} />
        <h5>{event.name} {event.eventType}</h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <div className="event">
          <button onClick={toggleEventAttendees}>
            {!showAttendees ? "Show Attendees" : "Hide Attendees"}
          </button>

          {showAttendees ? (
            <Attendees updateEventAttendance={updateEventAttendance} attendees = {attendees} event = {event} />
          ) : null}
                </div>
        </li>
  )
}
