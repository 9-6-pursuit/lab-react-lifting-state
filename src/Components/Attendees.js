import Attendee from "./Attendee";

export default function Attendees({event, toggleEventAttendees, showAttendees, attendee, updateEventAttendance}) {
  return (
    
            <Attendee
            event={event}
            attendee={attendee}
            updateEventAttendance={updateEventAttendance}
            toggleEventAttendees={toggleEventAttendees}
            showAttendees={showAttendees}
            />
          
  )
}