module.exports = function(robot){

	robot.hear(/hello/igm, function(msg){
		msg.send("world!");
	});

	robot.respond(/show me the money/igm,function(msg){
		msg.reply('filled :P');
	});
}
