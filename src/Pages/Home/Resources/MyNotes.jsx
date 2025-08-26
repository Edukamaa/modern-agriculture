import React, { useState } from "react";
import "./MyNotes.css";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [highlighted, setHighlighted] = useState({});

  // Add Note
  const addNote = () => {
    if (newNote.trim() === "") return;
    setNotes([...notes, newNote]);
    setNewNote("");
  };

  // Delete Note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Highlight Note
  const toggleHighlight = (index) => {
    setHighlighted((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Share Note
  const shareNote = (note) => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Farm Note",
          text: note,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className="notes-container">
      <h2>📒 My Farm Notes</h2>
      <p>
        Keep track of important agricultural tips, observations, and reminders.
      </p>

      <div className="note-input">
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your farm note here..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      <div className="notes-list">
        {notes.length === 0 ? (
          <p className="empty">No notes yet. Start writing!</p>
        ) : (
          notes.map((note, index) => (
            <div
              key={index}
              className={`note-card ${
                highlighted[index] ? "highlighted" : ""
              }`}
            >
              <p>{note}</p>
              <div className="note-actions">
                <button onClick={() => toggleHighlight(index)}>
                  {highlighted[index] ? "Unhighlight" : "Highlight"}
                </button>
                <button onClick={() => shareNote(note)}>Share</button>
                <button onClick={() => deleteNote(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyNotes;
