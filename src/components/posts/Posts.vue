<template>
   <div class="km__blog__posts">
      <PostItem v-bind:post="post" v-for="post in posts" v-bind:key="post.id" />
    </div>
</template>


<script>
import PostItem from "@/components/posts/PostItem";

export default {
  name: "Posts",
  props: ["posts"],

  components: {
    PostItem,
  },
};
</script>
