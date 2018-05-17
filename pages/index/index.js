//index.js
//获取应用实例
const app = getApp();
Page({
  data:{
    location:null,
    text:'',
    polyline: [{
      points: [],
      color: "#39ca77DD",
      width: 2,
      dottedLine: false
    }],
    controls: [{
      id: 'gps',
      iconPath: '/img/GPS.png',
      position: {
        left: app.SystemInfo.screenWidth - 50,
        top: app.SystemInfo.screenHeight - 110,
        width: 30,
        height: 30
      },
      clickable:true
    }]
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map');
  },
  controltap(e){
    this.mapCtx.moveToLocation()
  },
  bindtap(e){
    wx.showLoading({
      title: '加载中',
    })
    console.log(e)
  },
  onShow(){
    wx.getLocation({
      type: 'gcj02',
      success:  (res)=>{
          this.setData({
            location:res
          })
      }
    })
  },
  
  onShareAppMessage(){
    return {
      title: '常德闯的每日阅读',
      path: 'pages/index/index'
    }
  }
})
