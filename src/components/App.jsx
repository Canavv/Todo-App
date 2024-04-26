import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Note Title",
      content: "Note content",
    },
    {
      id: 2,
      title: "Note Title",
      content: "Note content",
    },
  ]);
  const [item, setItem] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setItem((item) => {
      return {
        ...item,
        [name]: value,
      };
    });
  }

  function addItem(event) {
    event.preventDefault();
    setNotes((note) => {
      return [
        ...note,
        {
          id: note.length + 1,
          title: item.title,
          content: item.content,
        },
      ];
    });
    setItem({
      title: "",
      content: "",
    });
  }

  function deleteItem(id) {
    setNotes((notes) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} item={item} handleChange={handleChange} />
      {notes.map((notes, index) => (
        <Note
          key={index}
          id={index}
          title={notes.title}
          content={notes.content}
          deleteItem={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
