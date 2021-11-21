//  配置idnex
const CONFIG = {
    type: getQueryString('type') || 'videoPreview', // 默认是预览 可以 两个参数 预览 videoPreview | 回放 palyBack
    cameraIndexCode: getQueryString('indexCode') || "c3d21558eb064689adaadcd104757355", // 获取当前监控点id
    appkey: "20995844", //   综合安防管理平台提供的appkey，必填
    secret: "cWxrLK9gUhcLJwDNYgAb", // //综合安防管理平台提供的secret，必填
    ip: "192.168.7.8",//  //综合安防管理平台IP地址，必填
    snapDir: "D:\\SnapDir", //  //抓图存储路径
    videoDir: "D:\\VideoDir", //紧急录像或录像剪辑存储路径
    playMode() {
        return this.type === 'videoPreview' ? 0 : 1
    }, //初始播放模式：0-预览，1-回放
    port: 443, //综合安防管理平台端口，若启用HTTPS协议，默认443
    showSmart: 1,  //是否显示智能信息（如配置移动侦测后画面上的线框），0-不显示，非0-显示
    layout: "1x1", //playMode指定模式的布局
    encryptedFields: 'secret',	  //加密字段，默认加密领域为secret
    // 回放时必须设置参数
    startTime: getQueryString('startTime') || dateFormat(new Date(), "yyyy-MM-dd 00:00:00"), // 回放开始时间  // 默认从当天开始
    endTime: getQueryString('endTime') || dateFormat(new Date(), "yyyy-MM-dd 23:59:59"), // 回放结束时间
    recordLocation: 0,//  录像存储位置：0-中心存储，1-设备存储
    transMode: 1,  //传输协议：0-UDP，1-TCP
    gpuMode: 0    //是否启用GPU硬解，0-不启用，1-启用
}



