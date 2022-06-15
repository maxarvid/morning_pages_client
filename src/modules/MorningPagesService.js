import axios from "axios";
import { setMorningPages, setMorningPage } from "../state/features/morningPagesSlice";
import { store } from "../state/store";

const MorningPagesService = {
  async index() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/morning_pages`
    );
    store.dispatch(setMorningPages(data.morning_pages));
  },
  async show(id) {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/morning_pages/${id}`
    );
    store.dispatch(setMorningPage(data.morning_page))
  },
};

export default MorningPagesService;
