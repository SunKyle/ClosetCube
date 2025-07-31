// weather-card.js
Component({
    options: {
      addGlobalClass: true,
    },
    properties: {
      weatherData: {
        type: Object,
        value: {}
      },
      activeScene: {
        type: String,
        value: 'work'
      }
    },
    data: {
      // 这里可以定义组件内部的数据
    },
    methods: {
      // 场景切换事件处理
      handleSceneChange(e) {
        this.triggerEvent('sceneChange', { scene: e.detail });
      },
      
      // 换一套穿搭
      onChangeOutfit() {
        this.triggerEvent('changeOutfit');
      }
    }
  })