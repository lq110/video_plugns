//  配置idnex
const CONFIG = {
    appkey: "20995844", //   综合安防管理平台提供的appkey，必填
    secret: "cWxrLK9gUhcLJwDNYgAb", // //综合安防管理平台提供的secret，必填
    ip: "192.168.7.8",//  //综合安防管理平台IP地址，必填
    snapDir: "D:\\SnapDir", //  //抓图存储路径
    videoDir: "D:\\VideoDir", //紧急录像或录像剪辑存储路径
    port: 443, //综合安防管理平台端口，若启用HTTPS协议，默认443
    showSmart: 1,  //是否显示智能信息（如配置移动侦测后画面上的线框），0-不显示，非0-显示
    layout: "2x2", //playMode指定模式的布局
    encryptedFields: 'secret',	  //加密字段，默认加密领域为secret
    recordLocation: 0,//  录像存储位置：0-中心存储，1-设备存储
    transMode: 1,  //传输协议：0-UDP，1-TCP
    gpuMode: 0,    //是否启用GPU硬解，0-不启用，1-启用
    id:"#playWnd",//容器元素id
    showToolbar: 1   //是否显示工具栏，0-不显示，非0-显示
}



