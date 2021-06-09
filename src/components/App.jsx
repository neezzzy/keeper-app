/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { uid } from 'react-uid';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
  // state that holds array of notes
  const [notes, setNotes] = useState([]);
  // adds a note (object) to the array of notes(objects)
  function addNote(note) {
    setNotes((prevValue) => [...prevValue, note]);
  }
  // deletes a note based on its index/id passed from <Note /> component
  function deleteNote(id) {
    setNotes((prevItems) => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          deleteNote={deleteNote}
          key={uid(note)}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
