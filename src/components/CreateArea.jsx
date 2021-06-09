/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  // create a state that holds a note's title and content
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [isExpanded, setExpanded] = useState(false);
  // mapping the values from the user's input to the note's state
  const handleChange = (event) => {
    const { value, name } = event.target;
    setNote((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <form>
        <input name="title" value={note.title} placeholder="Title" onChange={handleChange} onClick={() => setExpanded(true)} />
        {isExpanded ? <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} /> : null}

        <Zoom in={isExpanded}>
          <Fab
            className="add-btn"
            onClick={() => {
              props.addNote(note); setNote({
                title: '',
                content: '',
              });
            }}
            type="button"
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

CreateArea.propTypes = {
  addNote: PropTypes.func.isRequired,
};
export default CreateArea;
