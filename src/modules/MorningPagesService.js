import axios from "axios";
import {
  setMorningPage,
  setMorningPages,
} from "../state/features/morningPagesSlice";
import { store } from "../state/store";

const MorningPagesService = {
  async index() {
    try {
      const { data } = await axios.get("/morning_pages");
      store.dispatch(setMorningPages(data.morning_pages));
    } catch (error) {
    }
  },
  async show(id) {
    try {
      const { data } = axios.get(`/morning_pages/${id}`);
      store.dispatch(setMorningPage(data.morning_page));
    } catch (error) {
    }
  },
  async create(props) {
    try {
      const { response } = axios.post("/morning_pages", props);
    } catch (error) {
    }
  },
};

export default MorningPagesService;
