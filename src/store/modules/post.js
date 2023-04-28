import { getPostList } from "@/services/post";
import { convertTitleToId } from "@/services/helpers";

const state = () => ({
  posts: [],
  post: {},
});

const getters = {
  allPosts: (state) => state.posts,
  findPostById: (state) => (id) => {
    const post = state.posts.filter(
      (item) => convertTitleToId(item.title) === id
    );
    return post[0];
  },
};

const actions = {
  async getAllPosts({ commit }) {
    const response = await getPostList();
    commit("setPosts", response.articles);
  },
};

const mutations = {
  setPosts: (state, data) => {
    state.posts = data;
  },
  setReadPost: (state, data) => {
    state.post = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
