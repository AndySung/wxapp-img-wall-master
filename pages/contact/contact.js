var app = getApp()
Page({
  data: {
    userInfo: {},
    userListInfo: [ {
      id:0,
      icon: '../images/call_phone.png',
      text: '联系电话'
    }, {
      id:1,
      icon: '../images/about.png',
      text: '关于韩派'
    }]
  },
  onlineClick: function (options) {
    var that = this
    var id = options.currentTarget.dataset.id; 
     if(id==0){
      wx.makePhoneCall({
        phoneNumber: '13538126497',
      })
    }else{
      wx.showModal({
        title: '韩派',
        content: '韩派，一个年轻时尚的美容美发会所，精益求精，不断追求新时尚！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  imageLoad: function (e) {
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    var viewWidth = 718,           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = 718 / ratio;    //计算的高度值
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      images: image
    })
  }
})