//index.js
//获取应用实例
const app = getApp();
Page({
  data:{
    text:null
  },
  onLoad(){
    console.log('生命周期函数--监听页面加载')
    this.getText();
  },
  onReady(){
    console.log('生命周期函数--监听页面初次渲染完成')
    console.log(this.data)
  },
  onShow(){
    console.log('生命周期函数--监听页面显示')
  },
  onHide(){
    console.log('生命周期函数--监听页面隐藏')
  },
  onUnload(){
    console.log('生命周期函数--监听页面卸载')
  },
  onPullDownRefresh(){
    console.log('页面相关事件处理函数--监听用户下拉动作')
    this.getText()
  },
  onReachBottom(){
    console.log('页面上拉触底事件的处理函数')
  },
  onPageScroll(ev){
    // console.log(ev)

  },
  getText(){
    let that = this;
    wx.request({
      url: 'https://interface.meiriyiwen.com/article/random',
      data: {
        dev:1
      },
      header: {
        'content-type': 'application/json' 
      },
      success: function (res) {
        let content = res.data.data.content;
        res.data.data.content = content.replace(/<p>/g, '').split('</p>')
        that.setData({
          text: res.data.data
        },()=>{
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
          })
          wx.stopPullDownRefresh()
        })
      }
    })
  },
  onShareAppMessage: function () {
    console.log('这是分享配置')
    return {
      title: '常德闯的每日阅读',
      path: 'pages/index/index'
    }
  }
})
