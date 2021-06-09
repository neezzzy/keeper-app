/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

function Note({
  title, content, deleteNote, id,
}) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        className="delete-btn"
        onClick={() => deleteNote(id)}
        type="submit"
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Note;
