import Attendee from "./Attendee.js"

export default function Attendees({toggleEventAttendees, showAttendees, attendees, updateEventAttendance, eventId}) {
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee attendee={attendee}
            updateEventAttendance={updateEventAttendance}
            eventId={eventId}/>
          ))}
        </div>
      ) : null}
    </>
  );
}