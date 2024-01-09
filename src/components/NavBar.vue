<template>
  <div class="navbar">
    <div class="left-section">
      <div class="logo">
        <div class="rectangle"></div>
        <div class="circle"></div>
      </div>
      <div class="brand-name">Adilo</div>
      <ul class="nav-list">
        <li><a href="#">Projects</a></li>
        <li class="dropdown-item">
          <a href="#" :class="{ 'active': isDropdownOpen }">Tools & App v</a>
          <ul class="dropdown-options">
            <li><a href="#">Snapbyte Recorder</a></li>
            <li><a href="#">AudioBounce</a></li>
            <li><a href="#">Suger Voice</a></li>
          </ul>
        </li>
        <li><a href="#">Channels</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Settings</a></li>
        <li class="help-item"><a href="#">Help</a></li>
      </ul>
    </div>
    <div class="right-section">
      <div class="line"></div>
      <div class="profile">
        <img src="@/assets/profile-pic.jpg" alt="Profile Picture" class="profile-pic">
        <div class="profile-info">
          <div class="profile-name">Cody Fisher</div>
          <div class="profile-email">codyfisher@email.com</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
};
</script>

  
  <style lang="less" scoped>
  .navbar {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif; 
    align-items: center;
    color: #707070;
    padding: 10px 10px;
    background-color: #ffffff; 
    border-bottom: 0.01px solid #cecece;
    border-top: 0.01px solid #cecece;
  }
  
  .left-section {
    display: flex;
    align-items: center;
  }
  
  .logo {
    left: 20px;
    margin-right: 20px;
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .rectangle {
    width: 30px;
    height: 30px;
    background: #fbbd71;
    border-radius: 10px;
    opacity: 1;
  }
  
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #fff; 
    border-radius: 50%;
  }
  
  .brand-name {
    margin-left: 10px;
    font-weight: bold;
    color: #21455E;
    font-size: 20px;
    font-style: Helvetica;

  }
  
  .nav-list {
    list-style: none;
    display: flex;
    margin-left: 90px;
    color: #707070;
    font-size: 12px;
    font-style: Poppins;
  
    li {
      margin-right: 45px;
  
      a {
        color: #707070;;
        text-decoration: none;
  
        &:hover {
          text-decoration: none;
        }
      }
    }
    .help-item {
        margin-left: 70px;
        font-size: 12px;
        color: #000000; 
        font-style: initial;
        font-weight: bold;
      }
    }
    
  
  .right-section {
    display: flex;
    margin-right: 120px;
    
  }
  
  .line {
    height: 30px;
    width: 1px;
    background-color: #cecece;
    margin: 0 15px;
  }
  
  .profile {
    display: flex;
    align-items: left;
  
  .profile-pic {
      width: 33px; 
      height: 33px; 
      margin-right: 9px;
      border-radius: 5px;
    }
  
    .profile-info {
      display: flex;
      flex-direction: column;
      font-size: 12px; 
    }
  
    .profile-name {
      font-weight: bold;
      margin-bottom: 0.11px;
      margin-right: 82px;
      color: black;
    }
  
    .profile-email {
      color: #aaa;
      margin-right: 16px;
    }
  }
  .dropdown-options {
    position: absolute;
    top: 75%;
    left: 22%;
    background-color: #fff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.24);
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
  }
  
  .dropdown-item:hover .dropdown-options {
    display: block;
  }
  
  .dropdown-options li {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  .dropdown-options li:last-child {
    border-bottom: none;
  }
  
  .dropdown-options li a {
    text-decoration: none;
    display: block;
  }
  
  .dropdown-options li a:hover {
    color: #0DABD8;
  }
  
  .active .dropdown-options {
    display: block;
  }

  .dropdown-item a {
    position: relative;
  }
  
  .dropdown-item a:not(.dropdown-options li a)::before {
    content: '';
    position: absolute;
    bottom: 35px;
    left: 0;
    width: 104%;
    height: 4px;
    background-color: #0DABD8;
    content: '';
    display: block;
    border-radius: 3px;
  }
  </style>
  