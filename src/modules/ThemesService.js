import axios from "axios";
import { toast } from "react-toastify";
import { setThemes } from "../state/features/themesSlice";
import { store } from "../state/store";

const ThemesService = {
  async index() {
    try {
      const { data } = await axios.get("/themes");
      store.dispatch(setThemes(data.themes));
    } catch (error) {
      toast.error("Something went wrong, try again later")
    }
  },
};

export default ThemesService;
