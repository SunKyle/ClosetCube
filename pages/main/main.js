// pages/main/main.js
Page({
    data: {
      currentTab: 0
    },
    goBack() {
      wx.navigateBack();
    },
    showMenu() {
      // 这里可以实现弹出菜单的逻辑
    },
    goToCloset() {
      wx.navigateTo({
        url: '/pages/closet/closet',
      })
    },
    goToMatch() {
      wx.navigateTo({
        url: '/pages/match/match',
      })
    },
    goToAddCloth() {
      wx.navigateTo({
        url: '/pages/addCloth/addCloth',
      })
    },
    switchTab(e) {
      const tab = e.currentTarget.dataset.tab;
      this.setData({
        currentTab: tab
      });
      // 这里可以根据不同的tab实现页面切换逻辑
    }
  })