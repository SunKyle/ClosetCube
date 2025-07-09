// pages/launch/launch.js
Page({
    onLoad() {
      setTimeout(() => {
        wx.redirectTo({
          url: '/pages/main/main',
        })
      }, 3000);
    }
  })