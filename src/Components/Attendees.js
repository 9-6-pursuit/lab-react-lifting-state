import Attendee from "./Attendee";


export default function Attendees({event, attendee, updateEventAttendance}) {
  return (
    <Attendee
    event={event}
    attendee={attendee}
    updateEventAttendance={updateEventAttendance}
    />
  )
}