//import { update } from "cypress/types/lodash";
import Attendees from "./Attendees";

export default function Event({
  event,
  attendees,
  toggleEventAttendees,
  updateEventAttendance,
}) {
  return (
    <li key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <>
        <Attendees event={event} attendees={attendees} updateEventAttendance={updateEventAttendance} />
      </>
    </li>
  );
}


//I could NOT figure out how to do this. At all. I needed help with line 20 or even knowing that Attendees was supposed to go there.
