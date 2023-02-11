var playerip;


mc.regPlayerCmd('chunk',function(){if(typeof chunk_description == "undefined"){ return "未定义描述" ;}else{return chunk_description;}}(),function(player,args){
  mc.getPlayer((function () {
      let xuid_list = [];
      let player_list = (mc.getOnlinePlayers());
      for (var player_index in player_list) {
        xuid_list[player_index] = player_list[player_index].xuid;
      }
      return xuid_list;
    }())).refreshChunks();
});
mc.regPlayerCmd('chunk',function(){if(typeof chunk_description == "undefined"){ return "未定义描述" ;}else{return chunk_description;}}(),function(player,args){
  mc.getPlayer((function () {
      let xuid_list = [];
      let player_list = (mc.getOnlinePlayers());
      for (var player_index in player_list) {
        xuid_list[player_index] = player_list[player_index].xuid;
      }
      return xuid_list;
    }())).refreshChunks();
},1);
mc.regPlayerCmd('chunk',function(){if(typeof chunk_description == "undefined"){ return "未定义描述" ;}else{return chunk_description;}}(),function(player,args){
  mc.getPlayer((function () {
      let xuid_list = [];
      let player_list = (mc.getOnlinePlayers());
      for (var player_index in player_list) {
        xuid_list[player_index] = player_list[player_index].xuid;
      }
      return xuid_list;
    }())).refreshChunks();
});
playerip = (mc.getPlayer((function () {
    let xuid_list = [];
    let player_list = (mc.getOnlinePlayers());
    for (var player_index in player_list) {
      xuid_list[player_index] = player_list[player_index].xuid;
    }
    return xuid_list;
  }())).getDevice().ip);
mc.regConsoleCmd('ip',function(){if(typeof ip_description == "undefined"){ return "Undefined description" ;}else{return ip_description;}}(),function(args){
  mc.broadcast(playerip,1);
});
