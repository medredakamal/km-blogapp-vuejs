<template>
  <div class="km__post m-auto max-w-7xl p-3">
    <transition
      mode="in-out"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <Loader v-if="loading" />
      <div class="km__post__content" v-else>
        <router-link class="mb-3" to="/">
          <div class="mb-2">
            <font-awesome-icon icon="fa-solid fa-arrow-alt-circle-left" /> Go
            Back
          </div>
        </router-link>
        <img
          class="max-h-72 mb-8 object-cover w-full"
          :src="require(`@/${post.img}`)"
          alt="Sunset in the mountains"
        />
        <h1 class="font-bold text-1xl text-3xl mb-4">{{ post.title }}</h1>
        <p>{{ post.description }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import Loader from "@/components/tools/Loader";
import getPostsData from "../data/posts.json";

export default {
  name: "Post",

  components: {
    Loader,
  },
  data() {
    return {
      post: {},
      loading: true,
    };
  },
  mounted() {
    setTimeout(
      function () {
        let postID = this.$route.params.id;
        this.post = getPostsData.filter((post) => post.id == postID).shift();
        this.loading = false;
      }.bind(this),
      2000
    );
  },
  metaInfo() {
    return {
      title: this.post.title,
      titleTemplate: "%s | KMBlog by Med Reda Kamal",
    };
  },
};
</script>