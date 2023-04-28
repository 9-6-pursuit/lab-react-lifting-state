import { useState } from "react";
import eventsData from "./data";
import { v1 as generateUniqueID } from "uuid";
// import Attendees from "./Components/Attendees";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);
  const [showAttendees, setShowAttendees] = useState(false);
  const [selectOption, setSelectOption] = useState("");
  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  function addEvent() {
    const createEvent = {
      id: generateUniqueID(),
      eventType: selectOption,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage:
        newEvent.eventImage ||
        "https://img.favpng.com/8/17/23/watercolour-flowers-watercolor-painting-floral-bouquets-watercolor-flowers-clip-art-png-favpng-KUhbkJ57D38x9XM0EpVXM9Vd5.jpg",
      date: newEvent.date,
      people: [],
    };
    handleAddEvent(createEvent);
  }

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  function handleSelectChange(e) {
    setSelectOption(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addEvent();
    resetEventForm();
  }

  function handleTextChange(e) {
    setNewEvent({
      ...newEvent,
      [e.target.id]: e.target.value,
    });
  }

  function resetEventForm() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
    setSelectOption("");
  }

  /*function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }*/
  function toggleEventAttendees(eventId) {
    setShowAttendees((prevShowAttendees) => {
      const newShowAttendees = { ...prevShowAttendees };
      newShowAttendees[eventId] = !newShowAttendees[eventId];
      return newShowAttendees;
    });
  }

  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }

  return (
    <div className="App">
      <>
        <Header />
      </>
      <main>
        <div className="new-event">
          <NewEventForm
            handleSubmit={handleSubmit}
            handleTextChange={handleTextChange}
            handleSelectChange={handleSelectChange}
            newEvent={newEvent}
          />
        </div>
        <div className="events">
          <ul>
            {events.map((event) => {
              const { people: attendees } = event;

              return (
                <Event
                  key={event.id}
                  event={event}
                  showAttendees={showAttendees}
                  attendees={attendees}
                  toggleEventAttendees={toggleEventAttendees}
                  updateEventAttendance={updateEventAttendance}
                />
              );
            })}
          </ul>
        </div>
      </main>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
