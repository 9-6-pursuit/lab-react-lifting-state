import Attendee from "./Attendee";
import { useState } from "react";

export default function Attendees({event, attendees, updateEventAttendance}) {
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
      <div key={event.id}className="attendees">
        {attendees.map((attendee, index) => (
          <Attendee 
          attendee={attendee} 
          updateEventAttendance={updateEventAttendance} 
          index={index}
          />
        ))}
      </div>
    ) : null}
  </>
  );
}
