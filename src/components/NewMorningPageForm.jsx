import React from "react";
import MorningPagesService from "../modules/MorningPagesService";

const NewMorningPageForm = () => {
  const newMorningPageForm = (event) => {
    const morningPost = {
      title: event.target["title"].value,
      body: event.target["body"].value,
    };
    MorningPagesService.create(morningPost);
  };

  return (
    <div className="absolute bottom-50 left-50">
      <form onSubmit={newMorningPageForm}>
        <label>Title</label>
        <input data-cy="morning-page-title-input" type="text" id="title" />
        <label>Body</label>
        <input data-cy="morning-page-body-input" type="text" id="body" />
        <button data-cy="morning-page-submit-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewMorningPageForm;
