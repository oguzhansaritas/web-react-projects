import './App.css';
import React, {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([])

    const addEvent = (event) => {
      setEvents((prevEvents) => {
        return [...prevEvents, event]
      })
      setShowModal(false)
    }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
      
    })
    console.log(id)
  }

 
  const subtitle = "All the latest in Marioland "
  return (
    <div className="App">
      
      <Title title="Events in Your Area" subtitle={subtitle}/>
      {/* <Title title="Another Title" subtitle="another subtitle"/> */}

      {showEvents && (
        <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>
      )}
      {!showEvents && (
         <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>
      )}
     
      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent}></NewEventForm>
      </Modal>}
      <div>
        <button onClick ={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}


export default App;
