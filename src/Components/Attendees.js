/** @format */

import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees(props) {
	let [showAttendees, setShowAttendees] = useState(false);

	function toggleEventAttendees() {
		if (showAttendees) {
			setShowAttendees(false);
		} else {
			setShowAttendees(true);
		}
	}

	return (
		<>
			<button onClick={toggleEventAttendees}>
				{!showAttendees ? "Show Attendees" : "Hide Attendees"}
			</button>
			{showAttendees ? (
				<div className="attendees">
					{props.attendees.map((attendee, index) => {
						return (
							<Attendee
								attendee={attendee}
								event={props.event}
								events={props.events}
								setEvents={props.setEvents}></Attendee>
						);
					})}
				</div>
			) : null}
		</>
	);
}
