import Attendee from "./Attendee";

export default function Attendees({showAttendees, attendees, updateEventAttendance, toggleEventAttendees, eventID}) {
  return(
    <>
    <button onClick={toggleEventAttendees}>
      {!showAttendees ? "Show Attendees" : "Hide Attendees"}
    </button>

    {showAttendees ? (
      <div className="attendees">
        {attendees.map((attendee, index) => (
          <Attendee attendee={attendee} 
          index={index} 
          updateEventAttendance={updateEventAttendance}
          eventID={eventID}/>
        ))}
      </div>
    ) : null}
  </>
  );
}
