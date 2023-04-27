<template>
  <v-container>
    <v-row>
      <post-list :postList="posts" />
    </v-row>
  </v-container>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { getPostList } from "@/services/post";

export default {
  name: "post",
  components: { PostList },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPostData() {
      getPostList().then(({ articles }) => {
        // console.log(articles);
        this.posts = articles;
      });
    },
  },
  mounted() {
    this.fetchPostData();
  },
};
</script>

<style lang="scss" scoped></style>
