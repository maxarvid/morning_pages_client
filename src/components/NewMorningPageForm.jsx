import React from "react";
import ApiService from "../modules/ApiService";

const NewMorningPageForm = () => {
  const newMorningPageForm = () => {
    debugger;
  };

  return (
    <div className="absolute bottom-50 left-50">
      <form>
        <label>Title</label>
        <input data-cy="morning-page-title-input" type="text" />
        <label>Body</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default NewMorningPageForm;
