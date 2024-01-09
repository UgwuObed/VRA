<template>
    <div class="navigation-bar">
      <div v-for="(item, index) in navigationItems" :key="index" class="nav-item">
        <span :style="item.styles" class="styled-text" :class="{ 'first-item': index === 0 }">
          <img v-if="index !== 0" :src="item.icon ? '/' + item.icon : ''" alt="Icon" class="icon">
          {{ item.text }}
        </span>
      </div>
    </div>

    <div class="dotted-overlay"></div>

    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
    <div class="circle circle3"></div>
    <div class="circle circle4"></div>
    <div class="circle circle5"></div>


    <div class="middle-element"></div>

    <div class="top-elements">
      <div class="top-element"></div>
      <div class="top-element"></div>
      <div class="top-element"></div>
    </div>

    <div class="top-elements2">
      <div class="top-element"></div>
      <div class="top-element"></div>
      <div class="top-element"></div>
    </div>

    <div class="top-elements3">
      <div class="top-element"></div>
      <div class="top-element"></div>
      <div class="top-element"></div>
    </div>

    <div class="top-elements4">
      <div class="top-element"></div>
      <div class="top-element"></div>
      <div class="top-element"></div>
    </div>

    <div class="topmost-element"></div>
    <div class="listmost-element"></div>
    <div class="enve-element"></div>
    <div class="enve"></div>

    <h1 class="hello">Say hello to the world!</h1>
    <p class="record">Record your first video/audio and share it what your team, friends, <br>followers and customers.</p>

    <button class="action-button" style="left: 625px; background-color: #0DABD8;">
      <span class="button-icon" style="background-image: url('/videocam.svg')"></span>
      New Request
    </button>
    <button class="action-button" @click="showModal" style="left: 759px; top: 395px; background-color: #EF5350;">
      <span class="button-icon" style="background-image: url('/radio.svg')"></span>
      Start Recording
    </button>

    <div v-if="isModalVisible" class="modal-overlay">
      <!-- Modal content -->
      <div class="modal">
        <span class="close-icon" @click="hideModal">X</span>
        <h2 class="modal-title">New Recording</h2>
        <div>
          <!-- Save the recording in -->
          <p class="save-text">Save the recording in</p>
          <div class="dropdown">
            <select>
              <option value="option1">Select a project</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <!-- Toggle switches -->
          <div class="toggle-switch">
            <label>
              <span>Record screen</span>
              <input type="checkbox" v-model="screenRecording">
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-switch">
            <label>
              <span>Record camera</span>
              <input type="checkbox" v-model="cameraRecording">
              <span class="slider"></span>
            </label>
          </div>
          <div class="toggle-switch">
            <label>
              <span>Record mic</span>
              <input type="checkbox" v-model="micRecording">
              <span class="slider"></span>
            </label>
          </div>
        </div>
   <div v-if="awaitingPermission" class="loading-container">>
  <div class="live-preview-window"></div>
</div>
    <button @click="startRecording" class="start-recording-button">Start Recording</button>
  </div>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      isModalVisible: false,
      screenRecording: false,
      cameraRecording: false,
      micRecording: false,
      awaitingPermission: false, 
      navigationItems: [
        { text: 'My Recordings 0', icon: null, styles: {} },
        { text: 'By Date', icon: 'swap.svg', styles: { fontSize: '10px', position: 'absolute', width: '80px', height: '10px', left: '690px', border: '1px solid #E2E5ED', borderRadius: '28px', opacity: '1', fill: '#E2E5ED' } },
        { text: 'Add Filter', icon: 'filter.svg', styles: { fontSize: '10px', position: 'absolute', width: '85px', height: '10px', left: '805px', border: '1px solid #E2E5ED', borderRadius: '28px', opacity: '1', fill: '#E2E5ED' } },
        { text: 'New Request', icon: 'videocam.svg', styles: { fontSize: '10px', position: 'absolute', width: '95px', height: '10px', left: '925px', backgroundColor: '#0DABD8', borderRadius: '28px', opacity: '1', color: 'white', fill: 'white' } },
        { text: 'Start Recording', icon: 'radio.svg', styles: { fontSize: '10px', position: 'absolute', width: '107px', height: '10px', left: '1053px', backgroundColor: '#EF5350', borderRadius: '28px', opacity: '1', color: 'white', fill: 'white' } },
      ],
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    hideModal() {
      this.isModalVisible = false;
    },
    toggleScreenRecording() {
      this.screenRecording = !this.screenRecording;
    },
    toggleCameraRecording() {
      this.cameraRecording = !this.cameraRecording;
    },
    toggleMicRecording() {
      this.micRecording = !this.micRecording;
    },
startRecording() {
  
  this.awaitingPermission = true;

  
  navigator.mediaDevices.getUserMedia({
    video: this.screenRecording,
    audio: this.micRecording,
    location: this.cameraRecording,
  })
  .then(() => {

    console.log("Recording started with options:", {
      screen: this.screenRecording,
      camera: this.cameraRecording,
      mic: this.micRecording,
    });

    this.awaitingPermission = false;
    this.hideModal();
  })
  .catch((error) => {
    console.error('Error accessing user media:', error);

    // Hide the loading screen
    this.awaitingPermission = false;
  });
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
  }
  .dotted-overlay {
    position: absolute;
    top: 190px;
    left: 354px;
    width: 861px;
    height: 470px;
    border: 1px dashed #A3BAC6;
    border-radius: 38px;
    opacity: 1;
    pointer-events: none; 
  }

  .middle-element {
    position: absolute;
    top: 316px;
    left: 700px;
    width: 135px;
    height: 129px;
    background: #c4eeff;
    opacity: 1;
    z-index: 2;
    border-radius: 5px;
  }

  .top-elements {
    position: absolute;
    top: 336px;
    left: 721px;
    display: flex;
    justify-content: space-between;
  }

  .top-elements2 {
    position: absolute;
    top: 357px;
    left: 721px;
    display: flex;
    justify-content: space-between;
  }

  .top-elements3 {
    position: absolute;
    top: 377px;
    left: 721px;
    display: flex;
    justify-content: space-between;
  }

  .top-elements4 {
    position: absolute;
    top: 396px;
    left: 721px;
    display: flex;
    justify-content: space-between;
  }

  .top-element {
    width: 30px; 
    height: 5px; 
    background: #FFFFFF;
    opacity: 1;
    z-index: 2; 
  }

  .topmost-element {
    position: absolute;
    top: 313px;
    left: 697px;
    width: 135px;
    height: 131px;
    background: #4EC5E7;
    border-radius: 5px;
    opacity: 1;
    z-index: 1; 
  }

  .listmost-element {
    position: absolute;
    top: 340px;
    left: 692px;
    width: 150px;
    height: 91px;
    background: #4EC5E7;
    border-radius: 5px;
    opacity: 1;
    z-index: 1; 
  }

  .enve-element {
    position: absolute;
    top: 380px;
    left: 672px;
    width: 189px; 
    height: 92px; 
    background: #ECEBED;
    opacity: 1;
    z-index: 3;
    border-radius: 20px 40px 50px 50px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 20% 80%, 20% 100%, 0% 100%);
  }

  .enve{
    position: absolute;
    top: 399px;
    left: 712px;
    width: 100px; 
    height: 10px; 
    background: #D5D5D5;
    opacity: 1;
    z-index: 4;
    border-radius: 2px;
  }
  .circle {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #CEEFFC; 
  }

  .circle1 {
    top: 306px;
    left: 840px;
    width: 10px;
    height: 10px;
  }

  .circle2 {
    top: 307px;
    left: 660px;
    width: 15px;
    height: 15px;
  }

  .circle3 {
    top: 387px;
    left: 650px;
  }

  .circle4 {
    top: 339px;
    left: 850px;
    width: 15px;
    height: 15px;
  }

  .circle5 {
    top: 389px;
    left: 855px;
    width: 10px;
    height: 10px;
  }

  .hello {
    position: absolute;
    top: 490px;
    left: 692px;
    font-size: 15px;
    font-family: poppins;
  }

  .record{
    position: absolute;
    top: 520px;
    left: 620px;
    font-size: 11px;
  }

  .action-button {
    position: absolute;
    top: 470px; 
    width: 100px; 
    height: 25px; 
    background-color: #EF5350; 
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 12px;
  }

  .action-button {
    position: absolute;
    top: 420px; 
    width: 130px; 
    height: 25px; 
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .button-icon {
    content: ''; 
    width: 20px; 
    height: 20px; 
    margin-right: 10px; 
    background-size: cover; 
  }
  
  .action-button::before {
    content: ''; 
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; 
  }

  .modal {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 43%;
  width: 280px;
  background: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  border-radius: 10px;
}

  .toggle-switch {
    display: flex;
    align-items: left;
    margin-bottom: 20px;
    font: poppins;
  }

  .toggle-switch label {
    display: flex;
    align-items: right;
    font-size: 13px;
    font: poppins;
    color: black;
  }

  .toggle-switch input {
    display: none;
  }

  .toggle-switch .slider {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 18px;
    background-color: #ccc;
    border-radius: 20px;
    margin-left: 130px;
  }

  .toggle-switch .slider:before {
    content: '';
    position: absolute;
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  .toggle-switch input:checked + .slider {
    background-color: #0AD688;
  }

  .toggle-switch input:checked + .slider:before {
    transform: translateX(20px);
  }

.close-icon {
  position: absolute;
  top: 20px;
  right: 25px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
}

.save-text {
  margin-bottom: 5px;
  text-align: left;
  font: normal normal 300 13px/25px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

.dropdown {
  background: #F8FAFB;
  border: 1px solid #E2E5ED;
  border-radius: 5px;
  overflow: hidden;
  width: 290px; 
  margin-bottom: 15px;
  font: normal normal 300 13px/25px Poppins;
}

select {
  width: 100%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 5px;
}

.toggle-switch {
  margin-top: 10px;
}

.modal-title {
  margin-top: 2px;
  margin-right: 170px; 
  font-size: 15px; 
  color: #333; 
  font: Poppins;
}

.start-recording-button {
  width: 189px;
  height: 37px;
  background: #0DABD8;
  border-radius: 28px;
  opacity: 1;
  color: white; 
  font-size: 12px; 
  border: none;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; 
}

.loading-container {
  position: absolute;
  bottom: -40%;
  right: -110%;
}

.loading-icon {
  width: 10px;
  top: 10px;
  height: 10px;
  background: #EE5951;
  border-radius: 50%;
  opacity: 1;
}

.live-preview-text {
  font-size: 18px;
  color: #000; 
  margin-left: -100px; 
}

.live-preview-window {
  width: 965px;
  height: 518px;
  background: #21455E;
  border-radius: 8px;
  opacity: 1;
}

</style>
  