<template>
  <v-col v-for="post in postList" :key="post.id" cols="12" sm="6" lg="3">
    <post-item :data="post" />
  </v-col>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  name: "post-list",
  components: { PostItem },
  props: {
    postList: Array,
  },
};
</script>
