Page({
  data: {
    imgheights: [],
    current: 0,
    imgwidth: 750,
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546061296223&di=906bf1e429e560e23babab35aa42e66a&imgtype=0&src=http%3A%2F%2Faddinghome.b0.upaiyun.com%2Fadco%2Fimage%2F2017030858c009f2bd1a2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546061394130&di=e8e3a4f2a29c755b3812cac4c2d01386&imgtype=0&src=http%3A%2F%2Fimage14.m1905.cn%2Fuploadfile%2F2016%2F0922%2F20160922043510231139_watermark.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546061296439&di=2d0a629433aedfc6821be6702780a04e&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2F4%2F41%2F414D0DDD69EE1C0A324318D0A2E5B1F6.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546061557110&di=48e9123cc4fb6ea57aa928b93740a02a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F15%2F20180515230106_QaNyr.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546061681295&di=b85a37133364cde91537471149425f21&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180213%2Fa1e830f1400f4ab5aaac112e6a8f6a4a.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546061557135&di=6331b204aba91d11b522bfec0493f914&imgtype=0&src=http%3A%2F%2Fimg.idol001.com%2Fmiddle%2F2018%2F06%2F27%2Ffff6ff392ae237e2876264f72da3b2c91530076821.jpg',
    ],
  },
   //预览图片
  previewImg: function (e) {
    var currentUrl = e.currentTarget.dataset.currenturl
    var previewUrls = e.currentTarget.dataset.previewurl
    wx.previewImage({
      current: currentUrl, //必须是http图片，本地图片无效
      urls: previewUrls, //必须是http图片，本地图片无效
    })
  },
  imageLoad: function (e) {
    //获取图片真实宽度
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比
      ratio = imgwidth / imgheight;
    //计算的高度值
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight
    var imgheights = this.data.imgheights
    //把每一张图片的高度记录到数组里
    imgheights[e.target.dataset['index']] = imgheight;// 改了这里 赋值给当前 index
    this.setData({
      imgheights: imgheights,
    })
  },
  bindchange: function (e) {
    this.setData({
      current: e.detail.current
    })
  },
})

