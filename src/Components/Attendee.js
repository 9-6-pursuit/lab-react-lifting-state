/** @format */

export default function Attendee(props) {
	function updateEventAttendance(eventId, attendeeId) {
		const eventArray = [...props.events];
		const eventIndex = eventArray.findIndex(
			(event) => eventId === event.id
		);
		const event = { ...eventArray[eventIndex] };
		const personIndex = event.people.findIndex(
			(person) => person.id === attendeeId
		);
		const peopleArray = [...props.event.people];
		peopleArray[personIndex].attendance =
			!peopleArray[personIndex].attendance;
		event.people = peopleArray;
		eventArray[eventIndex] = event;
		props.setEvents(eventArray);
	}
	return (
		<>
			<div key={props.attendee.id} className="attendee">
				<p>
					<img
						src={props.attendee.avatar}
						alt={props.attendee.firstName}
					/>
					<span>
						{props.attendee.firstName} {props.attendee.lastName}
					</span>
				</p>
				<p>
					<button
						className="clickable"
						onClick={() =>
							updateEventAttendance(
								props.event.id,
								props.attendee.id
							)
						}>
						Attending:
					</button>
					<span>{props.attendee.attendance ? "✅" : "❌"}</span>
				</p>
				<p>
					<span>Note:</span> {props.attendee.note}
				</p>
			</div>
		</>
	);
}
