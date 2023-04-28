<template>
  <v-container v-if="allReady">
    <article class="post">
      <v-row>
        <v-col cols="12">
          <v-btn @click="navBack">Back to feed</v-btn>
        </v-col>
        <v-col cols="12" lg="4">
          <v-img :src="post.urlToImage" width="100%"></v-img>
        </v-col>
        <v-col cols="12" lg="8">
          <header class="post__header">
            <h2 class="post__title">{{ post.title }}</h2>
          </header>
          <section class="post__body" v-html="post.description"></section>
        </v-col>
      </v-row>
    </article>
  </v-container>
</template>

<script>
export default {
  name: "post-detail",
  props: {
    post: {
      source: Object | { id: String, name: String },
      author: String,
      title: String,
      description: String,
      url: String,
      urlToImage: String,
      publishedAt: String,
      content: String,
    },
  },

  computed: {
    allReady() {
      return !!this.post && Object.keys(this.post).length !== 0;
    },
  },

  methods: {
    navBack() {
      return this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.post {
  padding: 0 1.25rem 0;
  transform: translate3d(0, 0, 0);
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100vw;
  height: calc(100vh - 4rem);
  overflow: auto;
  background: #222;
  padding: 3rem;
  z-index: 10;

  &__header {
    position: static;
    width: auto;
    height: auto;
    display: block;
    margin-bottom: 1.25rem;
    padding-bottom: 0;
  }
  &__title {
    display: block;
    color: cc(txt, alt);
    margin-bottom: 0.75rem;
    padding-left: 1.25rem;
  }
  &__body {
    padding: 1.25rem 1.25rem 3.75rem;
    border-bottom: 1px solid cc(border);
  }
}
</style>
