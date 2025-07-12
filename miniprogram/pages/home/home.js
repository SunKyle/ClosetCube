Page({
    data: {
      // 轮播图数据
      bannerList: [
        { url: '/images/banner1.jpg' },
        { url: '/images/banner2.jpg' },
        { url: '/images/banner3.jpg' }
      ],
      // 快捷入口数据
      entranceList: [
        { name: '首页', icon: 'home', color: '#07c160' },
        { name: '分类', icon: 'category', color: '#1890ff' },
        { name: '购物车', icon: 'cart', color: '#faad14' },
        { name: '我的', icon: 'user', color: '#722ed1' }
      ],
      // 分类数据
      categoryList: [
        { id: 1, name: '服饰', img: '/images/cate1.jpg' },
        { id: 2, name: '鞋包', img: '/images/cate2.jpg' },
        { id: 3, name: '美妆', img: '/images/cate3.jpg' },
        { id: 4, name: '数码', img: '/images/cate4.jpg' },
        { id: 5, name: '家居', img: '/images/cate5.jpg' }
      ],
      // 商品数据
      goodsList: [
        { 
          id: 1, 
          name: '纯棉T恤短袖男女通用宽松款', 
          price: 59.9, 
          sales: 1200, 
          img: '/images/goods1.jpg',
          num: 1,
          selected: false
        },
        { 
          id: 2, 
          name: '夏季牛仔裤直筒宽松显瘦', 
          price: 129, 
          sales: 860, 
          img: '/images/goods2.jpg',
          num: 1,
          selected: false
        }
      ]
    },
  
    // 搜索输入事件
    onSearchInput(e) {
      console.log('搜索内容：', e.detail.value);
    },
  
    // 跳转到轮播图详情
    goToBannerDetail() {
      wx.navigateTo({
        url: '/pages/detail/detail'
      });
    },
  
    // 快捷入口跳转
    goToPage(e) {
      const index = e.currentTarget.dataset.index;
      const pageMap = ['home', 'category', 'cart', 'mine'];
      wx.switchTab({
        url: `/pages/${pageMap[index]}/${pageMap[index]}`
      });
    },
  
    // 跳转到全部分类
    goToAllCategory() {
      wx.navigateTo({
        url: '/pages/category/all'
      });
    },
  
    // 跳转到分类详情
    goToCategory(e) {
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/category/detail?id=${id}`
      });
    },
  
    // 选择商品
    onSelectGoods(e) {
      const id = e.currentTarget.dataset.id;
      const goodsList = this.data.goodsList.map(item => {
        if (item.id === id) {
          item.selected = e.detail.value;
        }
        return item;
      });
      this.setData({ goodsList });
    },
  
    // 减少商品数量
    decreaseNum(e) {
      const id = e.currentTarget.dataset.id;
      const goodsList = this.data.goodsList.map(item => {
        if (item.id === id && item.num > 1) {
          item.num--;
        }
        return item;
      });
      this.setData({ goodsList });
    },
  
    // 增加商品数量
    increaseNum(e) {
      const id = e.currentTarget.dataset.id;
      const goodsList = this.data.goodsList.map(item => {
        if (item.id === id) {
          item.num++;
        }
        return item;
      });
      this.setData({ goodsList });
    }
  });