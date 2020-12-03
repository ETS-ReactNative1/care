import React from "react";
import Affirmations from "../components/AffirmationComponents/Affirmations.jsx";
import { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import AffirmationEdit from "../screens/AffirmationScreens/AffirmationEdit";
import {
  destroyAffirmation,
  postAffirmation,
  putAffirmation,
} from "../services/affirmations";

// affirmations have been passed as a prop from Home.jsx to this component so home.jsx can render affirmations.length for accordion title.
export default function AffirmationsContainer({
  affirmations,
  setAffirmations,
  loadedAffirmation,
}) {
  const [updatedAffirmation, setUpdatedAffirmation] = useState(false);
  const history = useHistory();

  const handleAffirmationCreate = async (affirmationData) => {
    const newAffirmation = await postAffirmation(affirmationData);
    setAffirmations((prevState) => [...prevState, newAffirmation]);
  };

  const handleAffirmationUpdate = async (id, affirmationData) => {
    const updatedAffirmation = await putAffirmation(id, affirmationData);
    setAffirmations((prevState) =>
      prevState.map((affirmation) => {
        return affirmation.id === Number(id) ? updatedAffirmation : affirmation;
      })
    );
    setUpdatedAffirmation(true);
    history.push("/");
  };

  const handleAffirmationDelete = async (id) => {
    await destroyAffirmation(id);
    setAffirmations((prevState) =>
      prevState.filter((affirmation) => affirmation.id !== id)
    );
  };

  return (
    <>
      <Affirmations
        affirmations={affirmations}
        updated={updatedAffirmation}
        loaded={loadedAffirmation}
        handleCreate={handleAffirmationCreate}
        handleDelete={handleAffirmationDelete}
      />
      <Switch>
        <Route path="/affirmations/:id/edit">
          <AffirmationEdit
            affirmations={affirmations}
            handleUpdate={handleAffirmationUpdate}
          />
        </Route>
      </Switch>
    </>
  );
}