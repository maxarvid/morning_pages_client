import axios from "axios";
import { setThemes } from "../state/features/themesSlice";
import { store } from "../state/store";

const ThemesService = {
  async index() {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/themes`);
    store.dispatch(setThemes(data.themes));
  },
};

export default ThemesService;
