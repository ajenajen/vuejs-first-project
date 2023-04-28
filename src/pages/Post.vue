<template>
  <v-container>
    <v-row>
      <post-detail :post="post" />
      <post-list :postList="allPosts" />
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { convertTitleToId } from "@/services/helpers";
import PostList from "@/components/PostList.vue";
import PostDetail from "@/components/PostDetail.vue";

export default {
  name: "post-page",
  components: { PostList, PostDetail },
  data() {
    return {
      post: {},
    };
  },

  methods: {
    convertTitleToId,
    ...mapActions(["getAllPosts"]),
    getPostById(id) {
      const result = this.findPostById(id);
      this.post = result;
    },
  },

  computed: {
    ...mapGetters(["allPosts", "findPostById"]),
  },

  watch: {
    "$route.name"(to, from) {
      if (to !== from) {
        !!this.$route.params.id
          ? this.getPostById(this.$route.params.id)
          : (this.post = {});
      }
    },
  },

  mounted() {
    this.getAllPosts().then((res) => {
      !!this.$route.params.id && this.getPostById(this.$route.params.id);
    });
  },
};
</script>
