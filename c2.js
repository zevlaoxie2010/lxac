var _VER = '0.1.3'
//测试产品
logger.setConsole(true);
logger.setFile("./logs/lxac2.log", 3);
logger.setTitle("lxac2")
var conf = data.openConfig("./plugins/lxac/config.json", "json", "{}");


log('[lxac] ============================================');
log('[lxac] lxac插件已装载  当前版本：' + _VER);
log('此为测试程序 laoxienet内部');
log('[lxac] ============================================');
