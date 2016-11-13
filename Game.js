

function Game()
{
	this.map;
	this.player;

}


Game.prototype.start = function()
{
	this.map = new Map(g.constants.MAP_WIDTH, g.constants.MAP_HEIGHT);
	//Generate map
	this.map.generateLevel();
	//Place enemies/objects
	//Place player
	//Set the view
	g.view.set();
}