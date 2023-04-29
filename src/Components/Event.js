import { useState } from "react";

import Attendee from "./Attendee";
import Attendees from "./Attendees";

export default function Event({ event, attendees, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <li key={event.id} className="event">
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <Attendees
        toggleEventAttendees={toggleEventAttendees}
        showAttendees={showAttendees}
      />
      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee) => (
            <Attendee
              event={event}
              attendee={attendee}
              updateEventAttendance={updateEventAttendance}
            />
          ))}
        </div>
      ) : null}
    </li>
  );
}
