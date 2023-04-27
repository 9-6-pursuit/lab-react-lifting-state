import Attendee from "./Attendee";

export default function Attendees({event, toggleEventAttendees, showAttendees, attendees, updateEventAttendance}) {
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee
            event={event}
            attendee={attendee}
            updateEventAttendance={updateEventAttendance}
            />
          ))}
        </div>
      ) : null}
    </>
  )
}