import Attendee from "./Attendee"

export default function Attendees({event, attendee, updateEventAttendance}) {
  return (
    <Attendee 
    attendee={attendee} 
    event={event} 
    updateEventAttendance={updateEventAttendance}
    />
  );
}
