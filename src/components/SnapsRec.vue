<template>
 
    <Navbar />
    <LeftSection />
    <BreadCrumb :items="breadcrumbItems" />
    
    <SnapByte />

    <Preview />
</template>


<script>
import Navbar from '../components/NavBar.vue';
import LeftSection from "@/components/LeftSection.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import SnapByte from "@/components/SnapByte.vue";
import Preview from "@/components/PreView.vue";

export default {
  components: {
    LeftSection,
    Navbar,
    BreadCrumb,
    SnapByte,
    Preview,
  },
  data() {
    return {
      breadcrumbItems: [
        { text: 'SnapByte', link: '/' },
        { text: 'My Recordings', link: '/my-recordings' }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}
</style>
