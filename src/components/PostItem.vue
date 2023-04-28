<template>
  <figure class="post-item">
    <div class="post-item-title">
      <h1>{{ data.title }}</h1>
    </div>
    <v-img
      :src="data.urlToImage"
      height="320"
      cover
      class="post-item-bg"
    ></v-img>
    <div class="post-item-caption">
      <h3 class="mb-3">More Info</h3>
      <p class="p">
        {{ data.description }}
      </p>
      <router-link
        :to="{
          name: 'post-detail',
          params: { id: convertTitleToId(data.title) },
        }"
        tag="v-btn"
      >
        <v-btn class="post-item-btn">More Info</v-btn>
      </router-link>
    </div>
  </figure>
</template>

<script>
import { convertTitleToId } from "@/services/helpers";

export default {
  name: "post-item",
  props: {
    data: {
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

  methods: {
    convertTitleToId,
  },
};
</script>

<style lang="scss" scoped>
.post-item {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  .post-item-bg {
    position: relative;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .post-item-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0.75rem 1.5rem;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgb(1, 1, 53) 20%,
      rgba(1, 1, 53, 0) 100%
    );
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    h1 {
      line-height: 1.2;
      font-size: 1.5rem;
      height: 90px;
      overflow: hidden;
    }
  }
  .post-item-caption {
    position: absolute;
    bottom: -46.5%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: rgba(1, 1, 53, 0.85);
    color: white;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    transition: 0.25s;
    z-index: 3;
    .p {
      height: 81px;
      overflow: hidden;
    }
  }
  .post-item-btn {
    margin-top: 1rem;
    color: #6200ee;
    background: #ffffff;
    font-size: 0.75rem;
  }

  &:hover {
    .post-item-bg {
      transform: scale(1.15);
    }
    .post-item-title {
      opacity: 0;
      top: -100%;
    }
    .post-item-caption {
      bottom: 0;
    }
  }
}
</style>
