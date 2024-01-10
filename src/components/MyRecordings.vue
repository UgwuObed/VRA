<template>
  <div>
    <Navbar />
    <LeftSection />
    <BreadCrumb :items="breadcrumbItems" />

    <div class="navigation-bar">
      <div v-for="(item, index) in navigationItems" :key="index" class="nav-item">
        <span :style="item.styles" class="styled-text" :class="{ 'first-item': index === 0 }">
          <img v-if="index !== 0" :src="item.icon ? '/' + item.icon : ''" alt="Icon" class="icon" />
          {{ item.text }}
        </span>
      </div>
    </div>
  <table class="recordings-table">
      <thead>
        <tr>
          <th class="recordings-header">Recordings</th>
          <th class="title-header">Title</th>
          <th>Views</th>
          <th>Size</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <!-- Use v-for to loop through your recordings and populate the table rows -->
        <tr v-for="recording in recordings" :key="recording.id">
          <td>{{ recording.name }}</td>
          <td>{{ recording.title }}</td>
          <td>{{ recording.views }}</td>
          <td>{{ recording.size }}</td>
          <td>{{ recording.lastModified }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Navbar from '../components/NavBar.vue';
import LeftSection from "@/components/LeftSection.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { addRecording, getAllRecordings } from '@/mockdb.js';

export default {
  components: {
    LeftSection,
    Navbar,
    BreadCrumb,
  },
  data() {
    return {
      breadcrumbItems: [
        { text: 'SnapByte', link: '/' },
        { text: 'My Recordings', link: '/my-recordings' }
      ],
      navigationItems: [
        { text: 'My Recordings 25', icon: null, styles: {} },
        { text: 'By Date', icon: 'swap.svg', styles: { fontSize: '10px', position: 'absolute', width: '80px', height: '10px', left: '690px', border: '1px solid #E2E5ED', borderRadius: '28px', opacity: '1', fill: '#E2E5ED' } },
        { text: 'Add Filter', icon: 'filter.svg', styles: { fontSize: '10px', position: 'absolute', width: '85px', height: '10px', left: '805px', border: '1px solid #E2E5ED', borderRadius: '28px', opacity: '1', fill: '#E2E5ED' } },
        { text: 'New Request', icon: 'videocam.svg', styles: { fontSize: '10px', position: 'absolute', width: '95px', height: '10px', left: '925px', backgroundColor: '#0DABD8', borderRadius: '28px', opacity: '1', color: 'white', fill: 'white' } },
        { text: 'Start Recording', icon: 'radio.svg', styles: { fontSize: '10px', position: 'absolute', width: '107px', height: '10px', left: '1053px', backgroundColor: '#EF5350', borderRadius: '28px', opacity: '1', color: 'white', fill: 'white' } },
      ],
      recordings: [], // Move recordings array to data function
    };
  },
  methods: {
    startRecording() {
      // Simulate a new recording
      const newRecording = {
        id: Date.now(), // Use a timestamp as a unique identifier
        name: 'Recording ' + (this.recordings.length + 1),
        date: new Date().toLocaleString(),
        // Add more recording details as needed
      };

      // Add the new recording to the mock database
      addRecording(newRecording);

      // Update the list of recordings
      this.recordings = getAllRecordings();
    },
  },
};
</script>

<style scoped>
.navigation-bar {
  display: flex;
  margin-left: 340px;
}

.nav-item {
  font-family: Poppins;
}

.styled-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  padding: 8px;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.first-item {
  margin-right: 290px;
  color: #637C8E;
}

.recordings-table {
  width: 70%;
  border-collapse: collapse;
  margin-top: 30px;
  font-family: 'Poppins', sans-serif;
  color: #21455E;
  font-size: 14px;
  margin-left: 346px;
}

.recordings-table th, .recordings-table td {
  padding: 12px;
  text-align: left;
}

.recordings-header {
  padding: -10px -20px -10px -8px; /* Example values */
}

.title-header {
  padding: 0px 0px; /* Example values */
}


</style>
