<template>
  <figure class="post-item">
    <h1 class="post-item-title">
      {{ data.title }}
    </h1>
    <v-img
      :src="data.urlToImage"
      height="320"
      cover
      class="post-item-bg"
    ></v-img>
    <div class="post-item-caption">
      <h3 class="mb-3">More Info</h3>
      <p class="p">
        {{ data.content }}
      </p>
      <a :href="data.url" target="_blank" tag="v-btn">
        <v-btn class="post-item-btn">More Info</v-btn>
      </a>
    </div>
  </figure>
</template>

<script>
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
    height: 102px;
    overflow: hidden;
    padding: 1rem 0.5rem;
    line-height: 1;
    font-size: 1.75rem;
    text-shadow: 2px 2px 6px rgba(100, 100, 100, 0.95);
    z-index: 2;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .post-item-caption {
    position: absolute;
    bottom: -47%;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: rgba(100, 100, 100, 0.95);
    color: white;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    transition: 0.25s;
    z-index: 3;
    .p {
      max-height: 81px;
      overflow: hidden;
    }
  }
  .post-item-btn {
    margin-top: 1rem;
    background: #6200ee;
    color: #ffffff;
    font-size: 0.75rem;
  }

  &:hover {
    .post-item-bg {
      transform: scale(1.25);
    }
    .post-item-title {
      opacity: 0;
      transform: scale(0.7);
    }
    .post-item-caption {
      bottom: 0;
    }
  }
}
</style>
