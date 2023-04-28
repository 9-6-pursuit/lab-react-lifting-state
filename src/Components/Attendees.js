import React from "react";
import Attendee from "./Attendee";

export default function Attendees({
  eventId,
  attendees,
  showAttendees,
  toggleEventAttendees,
}) {
  const eventAttendees = attendees.filter(
    (attendee) => attendee.eventId === eventId
  );

  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {eventAttendees.map((attendee, index) => (
            <Attendee key={attendee.id} attendee={attendee} />
          ))}
        </div>
      ) : null}
    </>
  );
}
