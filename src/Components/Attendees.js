import React from "react";
import Attendee from "./Attendee";

export default function Attendees({
  showAttendees,
  attendees,
  toggleEventAttendees,
  event,
  updateEventAttendance,
}) {
  return (
    <>
      <button onClick={() => toggleEventAttendees(event.id)}>
        {!showAttendees[event.id] ? "Show Attendees" : "Hide Attendees"}
      </button>
      {showAttendees[event.id] ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee
              key={attendee.id}
              attendee={attendee}
              event={event}
              updateEventAttendance={updateEventAttendance}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
