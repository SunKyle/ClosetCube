Component({
    properties: {
      // 衣物数据（必填）
      clothes: {
        type: Object,
        value: {
          id: '',
          name: '未命名衣物',
          subCategory: '其他',
          images: [], // 图片数组
          tags: [], // 标签：如['夏季', '休闲', '全新']
          isFavorite: false // 是否收藏
        },
        observer: function(newVal) {
          // 监听数据变化，可在此处理相关逻辑
        }
      },
      // 编辑模式（控制删除按钮显示）
      isEditMode: {
        type: Boolean,
        value: false
      },
      // 默认图片（当无图时显示）
      defaultImage: {
        type: String,
        value: '/images/default-clothes.png'
      }
    },
  
    data: {
      // 动效状态
      isFading: false, // 透明度变化（长按/编辑模式）
      isScaling: false, // 缩放效果（点击）
      // 标签背景色（循环使用）
      tagBgColors: [
        'rgba(7, 193, 96, 0.7)', // 主题色
        'rgba(255, 153, 0, 0.7)', // 橙色
        'rgba(56, 132, 255, 0.7)' // 蓝色
      ]
    },
  
    methods: {
      // 卡片点击：跳转到详情页（带缩放反馈）
      onCardTap() {
        if (this.data.isEditMode) return; // 编辑模式下不跳转
        
        // 点击缩放动效
        this.setData({ isScaling: true });
        setTimeout(() => {
          this.setData({ isScaling: false });
          // 触发父组件事件，传递衣物ID
          this.triggerEvent('cardTap', { id: this.data.clothes.id });
        }, 150);
      },
  
      // 卡片长按：进入编辑状态（带透明度变化）
      onCardLongPress() {
        if (!this.data.isEditMode) {
          this.setData({ isFading: true });
          setTimeout(() => {
            this.setData({ isFading: false });
            // 触发长按事件，通知父组件显示操作菜单
            this.triggerEvent('cardLongPress', { id: this.data.clothes.id });
          }, 300);
        }
      },
  
      // 收藏按钮点击（阻止冒泡，避免触发卡片点击）
      onFavoriteTap(e) {
        e.stopPropagation();
        const newFavoriteState = !this.data.clothes.isFavorite;
        // 更新本地状态
        this.setData({
          'clothes.isFavorite': newFavoriteState
        });
        // 通知父组件更新数据
        this.triggerEvent('favoriteChange', {
          id: this.data.clothes.id,
          isFavorite: newFavoriteState
        });
      }
    }
  });