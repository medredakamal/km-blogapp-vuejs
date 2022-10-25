<template>
  <div class="km__blog__home">
    <Search v-on:search-posts="searchPosts" v-on:reset-posts="resetPosts" />

    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <Loader v-if="loading" />
      <Alert v-else-if="noposts" />
      <Posts v-bind:posts="posts" v-else />
    </transition>
  </div>
</template>

<script>
import getPostsData from "../data/posts.json";
import Search from "@/components/tools/Search";
import Alert from "@/components/tools/Alert";
import Loader from "@/components/tools/Loader";
import Posts from "@/components/posts/Posts";

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | KMBlog by Med Reda Kamal",
  },
  components: {
    Search,
    Alert,
    Loader,
    Posts,
  },
  data() {
    return {
      posts: [],
      noposts: false,
      loading: true,
    };
  },
  mounted() {
    this.loading = true;
    try {
      setTimeout(
        function () {
          this.posts = getPostsData;
          this.loading = false;
        }.bind(this),
        2000
      );
    } catch (error) {
      console.log(error);
      this.loading = false;
    }
  },
  methods: {
    searchPosts(newSearch) {
      this.noposts = false;
      this.loading = true;
      if (newSearch) {
        setTimeout(
          function () {
            let newPosts = getPostsData.filter((post) => {
              return (
                post.title.toLowerCase().indexOf(newSearch.toLowerCase()) !== -1
              );
            });
            this.loading = false;
            if (newPosts.length > 0) {
              this.posts = newPosts;
            } else {
              this.noposts = true;
              this.posts = [];
            }
          }.bind(this),
          2000
        );
      } else {
        setTimeout(
          function () {
            this.posts = getPostsData;
            this.loading = false;
          }.bind(this),
          2000
        );
      }
    },
    resetPosts() {
      this.loading = true;
      setTimeout(
        function () {
          this.posts = getPostsData;
          this.loading = false;
        }.bind(this),
        2000
      );
    },
  },
};
</script>