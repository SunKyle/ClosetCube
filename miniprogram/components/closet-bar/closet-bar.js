Component({
    properties: {
      // 允许父组件控制编辑模式（外部传入）
      isEditMode: {
        type: Boolean,
        value: false,
        observer: function(newVal) {
          this.setData({ isEditMode: newVal });
        }
      }
    },
    data: {
      titleAnimation: {} // 标题动画
    },
    lifetimes: {
      attached: function() {
        // 初始化标题淡入动画
        this.initTitleAnimation();
      }
    },
    methods: {
      // 标题淡入动画（提升页面进入体验）
      initTitleAnimation() {
        const animation = wx.createAnimation({
          duration: 300,
          timingFunction: 'ease-out'
        });
        animation.opacity(0).step(); // 初始透明
        this.setData({ titleAnimation: animation.export() });
        // 延迟触发淡入
        setTimeout(() => {
          animation.opacity(1).step();
          this.setData({ titleAnimation: animation.export() });
        }, 100);
      },
      
      // 搜索点击：触发父组件事件（解耦逻辑）
      onSearchTap() {
        this.triggerEvent('search');
      },
      
      // 编辑模式切换：同步状态并通知父组件
      onEditTap() {
        const newMode = !this.data.isEditMode;
        this.setData({ isEditMode: newMode });
        this.triggerEvent('editModeChange', { isEditMode: newMode });
      }
    }
  });