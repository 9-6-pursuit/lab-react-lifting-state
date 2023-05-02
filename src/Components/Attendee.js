export default function Attendee({attendee, updateEventAttendance, eventID}) {
  return(
    <>
    <div key={attendee.id} className="attendee">
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
          onClick={() =>
            updateEventAttendance(
              eventID,
              attendee.id
            )
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
