import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Form } from "semantic-ui-react";
import { setSelectedTheme } from "../state/features/morningPagesSlice";
import { store } from "../state/store";

const MorningPageFormDropdown = () => {
  const { themes } = useSelector((state) => state.themes);
  const { editMode, morningPage, selectedTheme } = useSelector(
    (state) => state.morningPages
  );

  useEffect(() => {
    editMode && store.dispatch(setSelectedTheme(morningPage.theme_id));
  }, [editMode, morningPage]);

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
      onChange={(event, data) => store.dispatch(setSelectedTheme(data.value))}
    />
  );
};

export default MorningPageFormDropdown;
