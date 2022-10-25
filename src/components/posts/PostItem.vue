<template>
  <div class="km__post__item" v-if="post">
    <div class="max-w-sm rounded overflow-hidden shadow-lg km__post__content">
      <img
        class="w-full"
        :src="require(`@/${post.img}`)"
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 km__post__title">
          {{ post.title }}
        </div>
        <p class="text-gray-700 km__post__description">
          {{ post.description.substring(0, 125) }}
        </p>
      </div>
      <div class="flex justify-content-between pb-3">
        <!-- Tags -->
        <div class="px-6 pt-4 pb-2">
          <span
            class="
              inline-block
              px-1
              py-1
              text-sm
              font-semibold
              text-gray-700
              mr-2
              mb-2
            "
            v-bind:key="tag"
            v-for="tag in post.tags"
            >#{{ tag }}</span
          >
        </div>

        <router-link
          :to="'/posts/' + post.id"
          class="
            bg-black
            text-center
            h-10
            m-auto
            ml-auto
            mr-5
            px-3
            py-1
            rounded
            text-white
            uppercase
            w-1/3
            transition-all
            border-2 border-transparent
            hover:text-black hover:bg-transparent hover:border-black
          "
        >
          Read More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: ["post"],
};
</script>