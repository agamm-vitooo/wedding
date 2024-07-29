<script setup>
</script>

<template>
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <router-link :to="{ name: 'home' }">
          <img src="" alt="logo" class="h-10">
        </router-link>
        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <router-link :to="{ name: 'browse.index' }" class="text-gray-500 transition hover:text-gray-500/75">Browse</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'services.index' }" class="text-gray-500 transition hover:text-gray-500/75">Services</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'testimonials.index' }" class="text-gray-500 transition hover:text-gray-500/75">Testimonials</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contact.index' }" class="text-gray-500 transition hover:text-gray-500/75">Contact Us</router-link>
              </li>
            </ul>
          </nav>
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="text-gray-500 hover:text-gray-500/75 focus:outline-none">
              <!-- Icon for mobile menu toggle -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-if="isMenuOpen" class="md:hidden">
        <nav aria-label="Global" class="p-4">
          <ul class="space-y-4 text-center">
            <li>
              <router-link :to="{ name: 'browse.index' }" class="text-gray-500 transition hover:text-gray-500/75">Browse</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'services.index' }" class="text-gray-500 transition hover:text-gray-500/75">Services</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'testimonials.index' }" class="text-gray-500 transition hover:text-gray-500/75">Testimonials</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'contact.index' }" class="text-gray-500 transition hover:text-gray-500/75">Contact Us</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!--- render router view -->
    <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
}
</style>
