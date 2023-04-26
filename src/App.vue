<template>
  <div class="layout">
    <v-layout>
      <NavigationBar />
      <RouterView />
    </v-layout>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "@/components/_layout/NavigationBar.vue";
</script>

<style src="./globalStyle.css"></style>
