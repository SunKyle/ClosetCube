Component({
    // 组件的属性列表（从父组件接收的数据）
    properties: {
        // 控制弹窗显示/隐藏（由父组件传入）
        visible: {
            type: Boolean,
            value: false
        },
        // 已有的分类列表（用于检查重复）
        categories: {
            type: Array,
            value: []
        }
    },

    // 组件的内部数据
    data: {
        newCategoryName: '',
    },

    // 组件的方法列表
    methods: {
        // 监听输入框变化，实时更新newCategoryName
        onCategoryInput(e) {
            this.setData({
                newCategoryName: e.detail.value
            });
        },

        // 关闭弹窗（通知父组件更新状态）
        onClose() {
            this.setData({
                newCategoryName: ''
            }); // 清空输入
            this.triggerEvent('close'); // 触发自定义事件，通知父组件关闭
        },

        // 确认添加（验证并通知父组件）
        onConfirm() {
            const newCategoryName = this.data.newCategoryName.trim();
            // 验证输入不为空
            if (!newCategoryName) {
                wx.showToast({
                    title: '请输入分类名称',
                    icon: 'none',
                    duration: 2000
                });
                return;
            }

            // 检查分类是否已存在
            const isExist = this.properties.categories.some(
                item => item.label === newCategoryName
            );

            if (isExist) {
                wx.showToast({
                    title: '该分类已存在',
                    icon: 'none'
                });
                return;
            }

            // 触发自定义事件，将新分类传递给父组件
            this.triggerEvent('add', {
                newCategory: {
                    label: newCategoryName,
                    icon: 'app'
                }
            });

            // 关闭弹窗并清空输入
            this.setData({
                newCategoryName: ''
            });
        }
    }
});