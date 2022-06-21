import JtockAuth from "j-tockauth";
import { store } from "../state/store";
import { toast } from "react-toastify";
import { setCurrentUser } from "../state/features/authSlice";
import { setLoading } from "../state/features/loaderSlice";

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
  prefixUrl: "",
  debug: false,
});

const Authentication = {
  async signIn(data) {
    try {
      store.dispatch(setLoading(true));
      let response = await auth.signIn(data.email, data.password);
      toast.success("You are now signed in", {
        onOpen: () => {
          store.dispatch(setCurrentUser(response.data));
          store.dispatch(setLoading(false));
        },
      });
    } catch (error) {
      let errorMessage = error?.response?.data?.errors?.[0]
        ? error.response.data.errors[0]
        : "Something went wrong";
      toast.error(errorMessage, {
        onOpen: () => {
          store.dispatch(setLoading(false));
        },
      });
    }
  },
  async signUp(data) {
    try {
      store.dispatch(setLoading(true));
      let response = await auth.signUp({
        email: data.email,
        password: data.password,
      });
      toast.success("You have successfully created your account", {
        onOpen: () => {
          store.dispatch(setCurrentUser(response.data));
          store.dispatch(setLoading(false));
        },
      });
    } catch (error) {
      let errorMessage = error.response.data.errors[0]
        ? error.response.data.errors[0]
        : "Something went wrong";
      toast.error(errorMessage, {
        onOpen: () => {
          store.dispatch(setLoading(false));
        },
      });
    }
  },
  async validateToken(token) {
    try {
      let response = await auth.validateToken(token);
      store.dispatch(setCurrentUser(response.data));
    } catch (error) {
      store.dispatch(setCurrentUser(false));
    }
  },
};

export default Authentication;
