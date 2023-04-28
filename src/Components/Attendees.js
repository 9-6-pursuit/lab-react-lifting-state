// export default function Attendees() {
//   return;
// }

//#2 attempt
import Attendee from "./Attendee"

export default function Attendees({attendee, event, updateEventAttendance}) {
  return (
    <Attendee
    attendee={attendee}
    event={event}
    updateEventAttendance={updateEventAttendance}
    />
  )
}

