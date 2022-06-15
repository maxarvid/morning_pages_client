import axios from "axios";
import {
  setMorningPages,
  setMorningPage,
} from "../state/features/morningPagesSlice";
import { setThemes } from "../state/features/themesSlice";
import { store } from "../state/store";

const ApiService = {
  async index(resource) {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/${resource}`
    );
    switch (resource) {
      case 'morning_pages':
        store.dispatch(setMorningPages(data.morning_pages));
      case 'themes':
        store.dispatch(setThemes(data.themes));
    }
  },
  async show(resource, id) {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/${resource}/${id}`
    );
    store.dispatch(setMorningPage(data.morning_page));
  },
};

export default ApiService;
