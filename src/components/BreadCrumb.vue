<template>
    <div class="breadcrumb">
      <router-link
        v-for="(item, index) in items"
        :to="item.link"
        :key="index"
        class="custom-link"
      >
        {{ item.text }}
        <span v-if="index < items.length - 1" class="separator">></span>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .breadcrumb {
    display: flex;
    align-items: center;
    font-size: 10px;
    font-family: Poppins;
    margin-top: -105px;
    margin-bottom: 10px;
    margin-left: 360px;
  }
  
  .custom-link {
    margin-right: 5px;
    text-decoration: none;
    color: #333;
  }
  
  .separator {
    margin: 0 8px;
  }
  </style>
  