import Attendee from "./Attendee.js"
import { useState } from "react";
export default function Attendees({event,updateEventAttendance,attendees}) {
  const [showAttendees, setShowAttendees] = useState(false);
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <Attendee event={event} toggleEventAttendees={toggleEventAttendees} showAttendees={showAttendees} attendee={attendee} updateEventAttendance={updateEventAttendance} />
          ))}
        </div>
      ) : null}
    </>
    // <Attendee attendee={attendee} event={event} updateEventAttendance={updateEventAttendance}/>
  )
}
