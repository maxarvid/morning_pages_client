import axios from "axios";
import { toast } from "react-toastify";
import {
  setEditMode,
  setMorningPage,
  setMorningPages,
} from "../state/features/morningPagesSlice";
import { store } from "../state/store";

const MorningPagesService = {
  headers: JSON.parse(window.localStorage.getItem("J-tockAuth-Storage")),
  async index() {
    try {
      const { data } = await axios.get("/morning_pages", {
        headers: this.headers,
      });
      store.dispatch(setMorningPages(data.morning_pages));
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  },
  async show(id) {
    try {
      const { data } = await axios.get(`/morning_pages/${id}`, {
        headers: this.headers,
      });
      store.dispatch(setMorningPage(data.morning_page));
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  },
  async create(props) {
    try {
      const { data } = await axios.post(
        `themes/${props.themeId}/morning_pages`,
        props,
        { headers: this.headers }
      );
      toast(data.message);
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  },
  async update(id, morningPage) {
    try {
      const { data } = await axios.put(`/morning_pages/${id}`, morningPage, {
        headers: this.headers,
      });
      toast(data.message);
      store.dispatch(setMorningPage(data.morning_page));
      store.dispatch(setEditMode(false));
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  },
  async delete(id) {
    try {
      const response = await axios.delete(`/morning_pages/${id}`, {
        headers: this.headers,
      });
      toast(`${response.data.morning_page.title} has been deleted`);
    } catch (error) {
      toast.error("Something went wrong, try again later");
    }
  },
};

export default MorningPagesService;
