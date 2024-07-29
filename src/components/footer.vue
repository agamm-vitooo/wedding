<template>
  <footer class="bg-gray-800 text-white p-4 flex justify-between items-center">
    <div class="flex items-center">
      <img src="../assets/logo.svg" alt="Logo" class="w-12 h-12">
    </div>
    <div class="flex space-x-4">
      <ul>
        <li>
          <router-link :to="{ name: 'browse.index' }" class="text-gray-500 transition hover:text-gray-500/75">About Us</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'browse.index' }" class="text-gray-500 transition hover:text-gray-500/75">Terms of Service</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'browse.index' }" class="text-gray-500 transition hover:text-gray-500/75">Privacy Policy</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'browse.index' }" class="text-gray-500 transition hover:text-gray-500/75">FAQ</router-link>
        </li>
      </ul>
    </div>
    <div class="flex space-x-4">
      <a href="#" class="hover:text-gray-400"><i class="fab fa-facebook"></i></a>
      <a href="#" class="hover:text-gray-400"><i class="fab fa-instagram"></i></a>
      <a href="#" class="hover:text-gray-400"><i class="fab fa-twitter"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
/* Add any additional scoped styles if necessary */
</style>
