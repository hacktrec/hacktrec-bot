module.exports = function(robot){
	var express = require('express');
	robot.express = app = express();
	robot.hear(/hello/igm, function(msg){
		msg.send("world!");
	});
	app.get('/',function(req,res){res.send("Hello")});
	robot.respond(/show me the money/igm,function(msg){
		msg.reply('filled :P');
	});
}
