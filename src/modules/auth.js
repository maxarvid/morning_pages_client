import JtockAuth from "j-tockauth";
import { store } from "../state/store";
import { toast } from "react-toastify";
import { setCurrentUser } from "../state/features/authSlice";

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
  prefixUrl: "",
  debug: false,
});

const Authentication = {
  async signIn(data) {
    try {
      let response = await auth.signIn(data.email.value, data.password.value);
      toast.success("You are now signed in", {
        onClose: () => {
          store.dispatch(setCurrentUser(response.data));
        },
      });
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  },
};

export default Authentication;
