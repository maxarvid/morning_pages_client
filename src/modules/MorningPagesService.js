import axios from "axios";
import { setMorningPages } from "../state/features/morningPagesSlice";
import { store } from "../state/store";

const MorningPagesService = {
  async index() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/morning_pages`
    );
    store.dispatch(setMorningPages(data.morning_pages));
  },
};

export default MorningPagesService;
