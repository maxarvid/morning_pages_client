import axios from "axios";
import { toast } from "react-toastify";
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
      toast.error("Something went wrong, try again later");
    }
  },
  async show(id) {
    try {
      const { data } = await axios.get(`/morning_pages/${id}`);
      store.dispatch(setMorningPage(data.morning_page));
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  },
  async create(props) {
    try {
      const { data } = await axios.post("/morning_pages", props);
      toast(data.message);
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  },
};

export default MorningPagesService;