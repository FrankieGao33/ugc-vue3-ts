Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#fff",
    list: [
      {
        text: "首页",
        pagePath: "pages/home/home",
      },
      {
        text: "精选",
        pagePath: "pages/featured/featured",
      },
      {
        isIcon: true,
        iconPath: "../static/creat_2.png",
		pagePath: "pages/creation/creation",
      },
      {
        text: "消息",
        pagePath: "pages/message/message",
      },
      {
        text: "我的",
        pagePath: "pages/me/me",
      },
    ],
  },
  attached() {},
  ready() {
    const tabIndex = wx.getStorageSync("tabIndex") || 0;
    console.log(tabIndex);
    this.setData({
      selected: tabIndex,
    });
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      console.log("data", data);
      const url = data.path;
      if (data.index === 2) {
        wx.reLaunch({ url: `/${url}` });
      } else {
        wx.switchTab({ url: `/${url}` });
      }
      wx.setStorageSync("tabIndex", data.index);
    },
    selectAlbum() {
      wx.showActionSheet({
        itemList: ["拍摄", "从相册选择"],
        alertText: "test",
        success(res) {
          console.log(res.tapIndex);
        },
      });
    },
  },
});
