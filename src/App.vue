<template>
  <div id="app" class="km__blog__app">
    <Navbar />
    <main class="km__blog__main my-4 px-3 py-3">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <router-view class="p-3" />
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
