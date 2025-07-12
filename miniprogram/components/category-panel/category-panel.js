Component({
    properties: {
      // 分类数据结构
      categories: {
        type: Array,
        value: []
      },
      // 当前选中的分类ID
      activeCategoryId: {
        type: String,
        value: ''
      },
      // 是否处于编辑模式
      isEditing: {
        type: Boolean,
        value: false
      }
    },
  
    methods: {
      // 点击分类项
      onCategoryTap(e) {
        const { id } = e.currentTarget.dataset;
        // 非编辑模式下切换选中分类
        if (!this.data.isEditing) {
          this.triggerEvent('categorytap', { id });
        }
      },
  
      // 添加新分类
      onAddCategory() {
        this.triggerEvent('addcategory');
      },
  
      // 编辑分类
      onEditCategory(e) {
        const { id } = e.currentTarget.dataset;
        this.triggerEvent('editcategory', { id });
      },
  
      // 删除分类
      onDeleteCategory(e) {
        const { id } = e.currentTarget.dataset;
        this.triggerEvent('deletecategory', { id });
      },
  
      // 展开/收起子分类
      onToggleSubCategory(e) {
        const { id } = e.currentTarget.dataset;
        this.triggerEvent('togglesubcategory', { id });
      },
  
      // 添加子分类
      onAddSubCategory(e) {
        const { id } = e.currentTarget.dataset;
        this.triggerEvent('addsubcategory', { id });
      }
    }
  });