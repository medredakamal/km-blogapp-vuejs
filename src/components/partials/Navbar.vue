<template>
  <header class="km__blog__header">
    <nav
      class="
        flex
        justify-between
        items-center
        shadow-md
        py-5
        px-5
        flex-nowrap
      "
      v-bind:class="[navActive ? 'nav-active' : 'nav-collapsed']"
    >
      <!-- <a href="#" class="block md:hidden" @click="toggleNav">
        <i v-if="navActive == false"
          ><font-awesome-icon icon="fa-solid fa-bars"
        /></i>
        <i v-else><font-awesome-icon icon="fa-solid fa-times" /></i>
      </a> -->
      <a href="#">
        <img src="../../assets/logo.png" style="width: 120px" />
      </a>
      <ul
        class="
          md:flex
          items-center
          justify-center
          order-none
          w-auto
          h-full
          mt-auto
          overflow-hidden
        "
        style="transition: height 1.5s ease"
      >
        <!-- <li class="mb-1 md:mb-0">
          <router-link
            class="md:mr-3"
            to="/"
            v-bind:class="{
              'font-bold border-b-2 border-blue-400': getRouteName == 'home',
            }"
          >
            Home</router-link
          >
        </li>
        <li class="mb-1 md:mb-0">
          <router-link
            class="md:mr-3"
            to="/categories"
            v-bind:class="{
              'font-bold border-b-2 border-blue-400':
                getRouteName == 'categories',
            }"
          >
            Categories</router-link
          >
        </li>
        <li class="mb-1 md:mb-0">
          <router-link
            class="md:mr-3"
            to="/about"
            v-bind:class="{
              'font-bold border-b-2 border-blue-400': getRouteName == 'about',
            }"
          >
            About</router-link
          >
        </li> -->

      </ul>
      <a
        href="https://linkedin.com/in/medredakamal"
        target="_blank"
        class="
          flex
          justify-content-center
          items-center
          bg-linkedin
          px-3
          py-1
          rounded
          text-sm
          shadow
          transform
          hover:scale-95
          transition-transform
          ease
          duration-300
          km__medredakamal
        "
      >
        <i class="mr-1 text-white">
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </i>
        <span class="text-white">Med Reda Kamal</span>
        <img
          src="../../assets/medredakamal.jpeg"
          alt="Visit Med Reda Kamal LinkedIn"
        />
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navActive: false,
    };
  },
  methods: {
    toggleNav(e) {
      e.preventDefault();
      this.navActive = !this.navActive;
    },
  },
  computed: {
    getRouteName() {
      return this.$route.name;
    },
  },
};
</script>