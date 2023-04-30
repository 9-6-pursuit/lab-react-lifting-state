import Attendees from "./Attendees.js"
import { useState } from "react";

export default function Event({event, attendees, updateEventAttendance}) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
<>
  <li className="event" key={event.id}>
    <img src={event.eventImage} alt={event.name} />
    <h5>
      {event.name} {event.eventType}
    </h5>
    <br />
    <span>Organized by: {event.organizer} </span>
    <br />
    <Attendees toggleEventAttendees={toggleEventAttendees}
    showAttendees={showAttendees}
    attendees={attendees}
    updateEventAttendance={updateEventAttendance}
    eventId={event.id}/>
  </li>
</>
  )
}