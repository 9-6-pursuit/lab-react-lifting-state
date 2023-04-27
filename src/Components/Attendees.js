import Attendee from "./Attendee.js"
export default function Attendees({attendee,event,updateEventAttendance}) {
  return (
    <Attendee attendee={attendee} event={event} updateEventAttendance={updateEventAttendance}/>
  )
}
