import React from "react";
import { useSelector } from "react-redux";
import { Form } from "semantic-ui-react";

const MorningPageFormDropdown = ({ selectedTheme, onChange }) => {
  const { themes } = useSelector((state) => state.themes);

  const themeOptions = themes.map((theme) => {
    return { key: theme.id, text: theme.name, value: theme.id };
  });

  return (
    <Form.Dropdown
      selection
      data-cy="morning-page-dropdown"
      options={themeOptions}
      placeholder="Choose a theme"
      value={selectedTheme}
      onChange={onChange}
    />
  );
};

export default MorningPageFormDropdown;
