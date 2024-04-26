import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [zoom, setZoom] = useState(false);

  return (
    <div>
      <form className="create-note" onSubmit={props.addItem}>
        {zoom && <input
          name="title"
          onChange={props.handleChange}
          placeholder="Title"
          value={props.item.title}
        />}
        <textarea
          name="content"
          onChange={props.handleChange}
          onClick={() => setZoom(true)}
          placeholder="Take a note..."
          rows={zoom ? "3" : "1"}
          value={props.item.content}
        />
        <Zoom in={zoom}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
