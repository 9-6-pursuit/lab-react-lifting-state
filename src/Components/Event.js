
import Attendees from "./Attendees";
import React, { useState } from 'react';


export default function Event({ event, attendees, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);

  const toggleEventAttendees = () => {
    setShowAttendees(!showAttendees);
  };

  return (
    <li key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <Attendees
        attendees={attendees}
        showAttendees={showAttendees}
        toggleEventAttendees={toggleEventAttendees}
        updateEventAttendance={updateEventAttendance}
      />
    </li>
  );
}
