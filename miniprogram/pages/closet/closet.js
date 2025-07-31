const image = 'https://tdesign.gtimg.com/mobile/demos/example2.png';
Page({
    // offsetTopList: [],
    lastScrollTop: 0,
    data: {
        searchValue: '', //搜索框值
        newCategoryName: '', //新增分类
        selectedMainCategories: 0, //选中的衣物大类
        selectedSubCategories: '0', //选中的衣物小类
        visible: 'false',
        mainCategories: [{ //衣物大类
                label: '上衣',
                icon: 'app',
            },
            {
                label: '裤子',
                icon: 'app',
            },
            {
                label: '裙子',
                icon: 'app',
            },
            {
                label: '短袖',
                icon: 'app',
            },
            {
                label: '外套',
                icon: 'app',
            },
        ],
        subCategories: [{
            value: "",
            label: "衣物1"
        }, {
            value: "",
            label: "衣物1"
        }, {
            value: "",
            label: "衣物1"
        }, {
            value: "",
            label: "衣物1"
        }, ],
        navbarHeight: 0,
    },
    // 输入时实时更新 searchValue
    onChange(e) {
        this.setData({
            searchValue: e.detail.value
        });
    },
    // 搜索框失焦
    blurHandle() {
        console.log(this.data.searchValue)
    },
    // siderbar修改
    onSideBarChange(e) {
        const value = e.detail.value;
        this.setData({
            selectedMainCategories: value,
        });
        console.log(this.data.selectedMainCategories)
    },
    // 加载页面
    onLoad() {

    },
    // 监听输入框变化，实时更新newCategoryName
    onCategoryInput(e) {
        this.setData({
            newCategoryName: e.detail.value
        });
        console.log(e.detail.value)
    },

    // 添加分类
    addCategory(e) {
        // 获取传递的对象
        const category = e.detail.newCategory;

        // 构建新分类对象
        const newCategory = {
            label: category.label,
            icon: category.icon // 默认图标
        };

        // 将新分类添加到数组（使用扩展运算符创建新数组，避免直接修改原数组）
        const updatedCategories = [...this.data.mainCategories, newCategory];

        // 更新数据
        this.setData({
            mainCategories: updatedCategories,
        });

        // 提示添加成功
        wx.showToast({
            title: '添加成功',
            icon: 'success',
            duration: 1500
        });
    },

    // 长按删除分类
    onSiderLongpress(e) {
        // 获取当前分类的索引
        const index = e.currentTarget.dataset.index;
        console.log(index)
        const categoryName = this.data.mainCategories[index].label;

        // 显示确认删除对话框
        wx.showModal({
            title: '删除分类',
            content: `确定要删除"${categoryName}"吗？`,
            cancelText: '取消',
            confirmText: '删除',
            success: (res) => {
                if (res.confirm) {
                    // 用户确认删除，执行删除逻辑
                    this.deleteCategory(index);
                }
            }
        });
    },

    // 删除衣物大类
    deleteCategory(index) {
        // 1. 复制原数组（避免直接修改原数据）
        const updatedCategories = [...this.data.mainCategories];

        // 2. 删除指定索引的元素
        updatedCategories.splice(index, 1);

        // 3. 更新数据（如果有选中状态，需要同步处理）
        this.setData({
            mainCategories: updatedCategories,
            // 如果删除的是当前选中项，重置选中状态
            selectedMainCategories: this.data.selectedMainCategories === index ?
                0 : this.data.selectedMainCategories
        });

        // 4. 提示删除成功
        wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1500
        });

        // 5. 持久化保存（可选）
    },

    // 添加分类弹窗
    handlePopup(e) {
        this.setData({
            visible: true,
        });
    },
    onVisibleChange(e) {
        this.setData({
            visible: e.detail.visible,
        });
    },
    //关闭弹窗
    onClose() {
        this.setData({
            visible: false,
            showAddModal: false
        });
    },


});