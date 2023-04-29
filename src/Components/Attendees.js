import Attendee from "./Attendee"


//note: consider having event, attendees, and updateEventAttendance as the props, per Jinseok.

export default function Attendees({ attendee, showAttendees, updateEventAttendance, toggleEventAttendees }) {



  return(
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      {showAttendees ? (
        <div className="attendees">
         {/* {attendees.map((attendee, index) => (
          <>
            <Attendee 
            attendee={attendee}
            updateEventAttendance={updateEventAttendance}/>
          </>
       ))} */}
         </div>
           )  : null}
     </>
    );
 }

 
/* note: I did not think to put the useState and toggleEventAttendees here instead of in App.js
  const [showAttendees, setShowAttendees] = useState(false)
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  */