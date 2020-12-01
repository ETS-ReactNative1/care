import React, { useState } from "react";
import "./Moods.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import MoodCard from "./MoodCard";
import { Link } from "react-router-dom";

export default function Moods({ moods, updated, handleDelete }) {
  const [openOptions, setOpenOptions] = useState(false);

  const handleMouseClick = () => {
    setOpenOptions(!openOptions);
  };

  const MOODS = React.Children.toArray(
    moods.map((mood) => (
      <MoodCard
        updated={updated}
        mood={mood}
        openOptions={openOptions}
        handleDelete={handleDelete}
      />
    ))
  );

  return (
    <>
      <div className="moods">
        {MOODS}
        <div className="buttons-container1">
          <Button
            className="edit-moods"
            variant="outlined"
            color="primary"
            onClick={handleMouseClick}
          >
            <SettingsSharpIcon className="options-icon" />
          </Button>
          <Button
            component={Link}
            to="/moods/new"
            variant="outlined"
            color="primary"
            className="add-mood"
          >
            <AddIcon className="add-icon" />
          </Button>
        </div>
      </div>
    </>
  );
}
