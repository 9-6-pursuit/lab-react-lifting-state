import React from "react";
import Attendees from "./Attendees";

export default function Event({ event, showAttendees, attendees, toggleEventAttendees, updateEventAttendance }) {
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
      <Attendees
        showAttendees={showAttendees}
        attendees={attendees}
        toggleEventAttendees={toggleEventAttendees}
        event={event}
        updateEventAttendance={updateEventAttendance}
      />
      </li>
    </>
  );
}
