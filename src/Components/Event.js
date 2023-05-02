import Attendees from "./Attendees.js"
export default function Event({event,updateEventAttendance,toggleEventAttendees,showAttendees,attendees}) {
  return (
  <>
    <li key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <Attendees updateEventAttendance={updateEventAttendance} toggleEventAttendees={toggleEventAttendees} showAttendees={showAttendees} attendees={attendees} />
    </li>
  </>
  )
}
