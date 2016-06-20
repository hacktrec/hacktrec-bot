module.exports = function(robot){
	var express = require('express');
	robot.express = app = express();
	robot.hear(/hello/igm, function(msg){
		msg.send("world!");
	});
	robot.express.get('/',function(req,res){res.send("Hello")});
	robot.express.listen(process.env.PORT,process.env.BIND_ADDRESS);
	robot.respond(/show me the money/igm,function(msg){
		msg.reply('filled :P');
	});
}
