<template>
  <div class="sidebar">
    <router-link to="/my-recordings" class="section">
      <div class="section-title">
        <img src="@/assets/icons/video-player.svg" alt="Video Player Icon" class="icon">
        My Recordings
      </div>
    </router-link>
      <div class="section-title">
        <img src="@/assets/icons/share.svg" alt="Video Player Icon" class="share-icon">
        Requested
      </div>
  </div>
</template>
  
  <style lang="less" scoped>
.sidebar {
  width: 18%;
  height: 100%;
  padding-top: 35px;
  font-family: 'Poppins', sans-serif;
}

.section {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-style: Poppins;
  width: 200px; 
  border-radius: 5px;
  border: 1px solid #0DABD838;
  text-decoration: none;
  background-color: #E2E5ED;
}

.icon {
  width: 18px;
  height: 18px;
  align-items: center;
  margin-right: 15px;
  vertical-align: middle;
}

.section-title {
    font-size: 12px;
    padding: 8px;
    color: rgb(37, 37, 37);
    width: 150px; 
    flex-direction: column;
  }

  .share-icon {
    width: 18px;
    height: 18px;
    margin-right: 28px;
    vertical-align: middle;
    color: rgb(37, 37, 37);
  }
</style>

  
  