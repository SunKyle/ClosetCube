Page({
    data: {
      nbFrontColor: '#000000',
      nbBackgroundColor: '#ffffff',
      nbTitle:'首页'
    },
    onLoad() {
      this.setData({
        nbTitle: '新标题',
        nbLoading: true,
        nbFrontColor: '#ffffff',
        nbBackgroundColor: '#000000',
      })
    }
  })