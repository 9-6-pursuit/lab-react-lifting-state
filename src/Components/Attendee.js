export default function Attendee({attendee, updateEventAttendance, event,index}) {
  return(
    <>
    <div key={index} className="attendee">
      <p>
        <img
          src={attendee.avatar}
          alt={attendee.firstName}
        />
        {"   "}
        <span>
          {" "}
          {attendee.firstName} {attendee.lastName}{" "}
        </span>
      </p>
      <p>
        <button
          className="clickable"
          onClick={() =>{
            console.log(event.id)
            console.log(attendee.id)
            if(event.id === undefined || attendee.id === undefined){return}
                updateEventAttendance(
                  event.id,
                  attendee.id
                )
            }
          }
        >
          Attending:
        </button>
        <span>
          {attendee.attendance ? "✅" : "❌"}
        </span>
      </p>

      <p>
        <span>Note:</span> {attendee.note}
      </p>
    </div>
  </>
  );
}
