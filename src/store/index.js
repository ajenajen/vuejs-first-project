import { createStore, createLogger } from "vuex";
import post from "./modules/post";

export default createStore({
  modules: { post },
});
