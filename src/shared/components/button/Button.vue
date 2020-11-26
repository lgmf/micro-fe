<template>
  <button class="v-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script src="./Button.js"></script>
