//app.js
App({
  onLaunch(options){
    
  },
  SystemInfo:null,
  onShow(options){
    wx.getSystemInfo({
      success: (res)=> {
        this.SystemInfo = res
      }
    })
  },
  onHide(){

  },
  onError(msg){
    console.log(2)
  }
})