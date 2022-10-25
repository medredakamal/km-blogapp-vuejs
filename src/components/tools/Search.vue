<template>
  <div class="km__search m-auto p-3 mb-2 flex flex-col justify-center">
    <h4 class="text-xl mb-3 text-center font-bold">
      What you are looking for ?
    </h4>
    <form @submit="searchPosts" class="flex items-center justify-center">
      <div class="relative w-full mr-3 flex items-center justify-between">
        <input
          class="border-2 rounded p-3 w-full"
          type="text"
          placeholder="Ex: How to use fetch() in Javascript..."
          v-model="searchTerm"
        />

        <button
          type="button"
          class="text-gray-400 absolute right-5"
          v-if="searchTerm.length > 0"
          @click="clearSearch"
        >
          <font-awesome-icon icon="fa-solid fa-times" />
        </button>
      </div>

      <button
        type="submit"
        class="
          w-13
          h-13
          border-2 border-transparent
          rounded-full
          p-3
          text-white
          flex
          items-center
          justify-center
          transition-colors
        "
        :class="
          searchTerm.length > 0
            ? 'cursor-pointer bg-blue-500 hover:bg-white hover:border-blue-500 hover:text-blue-500'
            : 'bg-gray-400 cursor-not-allowed'
        "
        :disabled="!searchTerm.length > 0"
      >
        <font-awesome-icon icon="fa-solid fa-search" />
      </button>
    </form>
  </div>
</template>

<style scoped>
.km__search {
  max-width: 550px;
}
</style>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    searchPosts(e) {
      e.preventDefault();
      const newSearch = this.searchTerm;
      this.$emit("search-posts", newSearch);
      //this.searchTerm = "";
    },
    clearSearch(e) {
      e.preventDefault();
      this.searchTerm = "";
      this.$emit("reset-posts");
    },
  },
};
</script>