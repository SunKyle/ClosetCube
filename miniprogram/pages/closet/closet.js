Page({
    data: {
      // 衣物卡片数据列表
      clothesList: [
        {
          id: "clo001",
          name: "黑色连帽卫衣（加绒）",
          images: [
            "/images/wardrobe/hoodie-black-01.jpg",
            "/images/wardrobe/hoodie-black-02.jpg" // 背面图
          ],
          category: "卫衣", // 小分类名称
          season: "冬季",
          occasion: "休闲",
          favorite: false,
          color: "黑色",
          status: "可穿" // 状态标签（可穿/待洗/已穿）
        },
        {
          id: "clo002",
          name: "浅蓝色修身牛仔裤",
          images: [
            "/images/wardrobe/jeans-blue-01.jpg"
          ],
          category: "牛仔裤",
          season: "四季",
          occasion: "通勤",
          favorite: true,
          color: "浅蓝色",
          status: "待洗"
        },
        {
          id: "clo003",
          name: "白色帆布鞋（经典款）",
          images: [
            "/images/wardrobe/shoes-white-01.jpg",
            "/images/wardrobe/shoes-white-02.jpg" // 鞋底细节
          ],
          category: "帆布鞋",
          season: "春季",
          occasion: "休闲",
          favorite: true,
          color: "白色",
          status: "可穿"
        },
        {
          id: "clo004",
          name: "条纹短袖T恤",
          images: [
            "/images/wardrobe/tshirt-stripe-01.jpg"
          ],
          category: "T恤",
          season: "夏季",
          occasion: "运动",
          favorite: false,
          color: "蓝白条纹",
          status: "已穿"
        },
        {
          id: "clo005",
          name: "灰色西装裤（垂感）",
          images: [
            "/images/wardrobe/pants-gray-01.jpg",
            "/images/wardrobe/pants-gray-02.jpg" // 侧面图
          ],
          category: "休闲裤",
          season: "四季",
          occasion: "正式",
          favorite: true,
          color: "灰色",
          status: "可穿"
        },
        {
          id: "clo006",
          name: "米色针织开衫",
          images: [
            "/images/wardrobe/cardigan-beige-01.jpg"
          ],
          category: "开衫",
          season: "秋季",
          occasion: "约会",
          favorite: false,
          color: "米色",
          status: "待洗"
        }
      ],
      // 其他页面数据（如筛选状态、当前选中ID等）
      showEditButtons: false,
      currentId: ""
    },
    onCategoryTap(e) {
        const { id } = e.detail;
        this.setData({ activeCategoryId: id });
        // 加载对应分类的衣物
        this.loadClothesByCategory(id);
      },
      
      onAddCategory() {
        // 显示添加分类弹窗
        wx.showModal({
          title: "添加分类",
          placeholderText: "请输入分类名称",
          success: (res) => {
            if (res.confirm && res.content.trim()) {
              // 添加新分类逻辑
            }
          }
        });
      }

    // 页面方法...
  });