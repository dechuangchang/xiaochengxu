const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
//   <view class='job-header' >
//   <view class='company' >
//   <view>宁创(北京)科技有限公司< /view>
//   < view > 2015年3⽉—2016年1⽉</view>
//   < /view>
//   < view class='job-tit' > 前端开发工程师 < /view>
//   < /view>
//   < view class='job-con' >
//   工作内容：
//   根据美工给出的设计稿, 还原设计图, 网页设计主要采⽤html + CSS实现;
// 同时也会写一些常见的页面JS交互效果,
//   开发常用组件以及处理少量的前后台页面数据交互工作。

// </view>
  data: {
    skills:[
      {
        text:'熟练HTML(5)和CSS(3) flex布局技巧,实现响应式布局、移动端设备适配等。',
        percent:80
      },
      {
        text: '掌握原生JS,熟练操作DOM/BOM, 熟悉面向对象编程思想。',
        percent: 70
      },
      {
        text: '掌握JQuery Bootstrap  ',
        percent: 60
      },
      {
        text: '掌握React React-Route React-Redux ES6 Antd',
        percent: 80
      }, 
      {
        text: '掌握微信小程序 移动端H5 Less',
        percent: 70
      },
      {
        text: '掌握gulp webpack构建工具',
        percent: 90
      },
      {
        text: '熟练使用git协同开发',
        percent: 90
      },
      {
        text: '熟悉前后端分离开发模式',
        percent: 100
      },
      {
        text: '学习方向：ReactNative node.js',
        percent: 0
      }
    ],
    job:[
      {
        name:'宁创(北京)科技有限公司',
        date:'2015年3⽉—2016年1⽉',
        tit:'前端开发工程师',
        content:[
          '根据美工给出的设计稿, 还原设计图, ',
          '网页设计主要采⽤html + CSS实现。',
          '同时也会写一些常见的页面JS交互效果,',
          '开发常用组件以及处理少量的前后台页面数据交互工作。'
        ],
        Leaving:'因个人问题需要去处理'
      },
      {
        name: '北京行易科技有限公司',
        date: '2016年4月— 2018年4月',
        tit: '前端开发工程师',
        content: [
          '完善前端开发环境,',
          '后期基于node环境使用react+es5+gulp+bootstrap开发并维护,',
          '参与产品需求讨论，评估开发成本,',
          '和产品·设计师讨论产品具体细节的交互和开发时间,',
          '和后端·app开发商议如何同步开发（商议接口数据格式 字段),',
          '提交测试后和测试人员·产品进一步跟进项目的更新.'
        ],
        Leaving: '因合同到期和公司预计迁移上海等原因决定离职'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '常德闯的个人简历(WEB)',
      path: 'pages/resume/resume'
    }
  },
  phone(){
    console.log(1)
    wx.makePhoneCall({
      phoneNumber: '17600380654'
    })
  }
})