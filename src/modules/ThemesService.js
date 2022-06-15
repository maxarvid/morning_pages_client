import axios from "axios";
import { setThemes } from "../state/features/themesSlice";
import { store } from "../state/store";

const ThemesService = {
  async index() {
    try {
      const { data } = await axios.get("/themes");
      store.dispatch(setThemes(data.themes));
    } catch (error) {
    }
  },
};

export default ThemesService;
