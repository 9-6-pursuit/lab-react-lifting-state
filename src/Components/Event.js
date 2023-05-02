/** @format */

import Attendees from "./Attendees";

export default function Event(props) {
	const { people: attendees } = props.event;
	return (
		<>
			<li key={props.event.id} className="event">
				<img src={props.event.eventImage} alt={props.event.name} />
				<h5>
					{props.event.name} {props.event.eventType}
				</h5>
				<br />
				<span>Organized by: {props.event.organizer} </span>
				<br />
				<Attendees attendees={attendees} event={props.event} events={props.events} setEvents={props.setEvents}></Attendees>
			</li>
		</>
	);
}
