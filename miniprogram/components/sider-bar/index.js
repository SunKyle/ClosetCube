// sidebar/index.js
Component({
    properties: {
        isOpen: {
            type: Boolean,
            value: false
        },
        scrollTop: {
            type: Number,
            value: 0,
            observer(newVal) {
                this.updateSidebarPosition(newVal);
            }
        }
    },
    data: {
        sidebarOffset: 0,
        motionStyle: '',
        maxScrollTop: 0
    },
    lifetimes: {
        attached() {
            // 获取侧边栏高度和窗口高度，计算最大滚动距离
            this.calculateLayout();
        }
    },
    methods: {
        // 计算布局信息
        calculateLayout() {
            const query = wx.createSelectorQuery().in(this);
            query.select('.sidebar-content').boundingClientRect();
            query.selectViewport().boundingClientRect();
            query.exec((res) => {
                if (res[0] && res[1]) {
                    const sidebarHeight = res[0].height;
                    const windowHeight = res[1].height;
                    this.setData({
                        maxScrollTop: Math.max(0, sidebarHeight - windowHeight)
                    });
                }
            });
        },

        // 更新侧边栏位置
        updateSidebarPosition(scrollTop) {
            // 限制最大滚动距离，实现弹性效果
            const maxScroll = this.data.maxScrollTop;
            let offset = scrollTop;

            // 弹性边界处理（可选）
            if (scrollTop < 0) {
                offset = scrollTop * 0.5; // 上拉过界时减小位移
            } else if (scrollTop > maxScroll) {
                offset = maxScroll + (scrollTop - maxScroll) * 0.5; // 下拉过界时减小位移
            }

            this.setData({
                sidebarOffset: offset
            });
        },

        // 切换侧边栏展开状态
        toggleSidebar() {
            this.triggerEvent('change', {
                isOpen: !this.data.isOpen
            });
        }
    }
});