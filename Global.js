

var g = 
{
	input: false,
	game: false,
	view: false,

	constants: 
	{
		MAP_WIDTH: 10,
		MAP_HEIGHT: 10,
		//Visual variables
		CELL_LENGTH: 15,
		VIEW_WIDTH_IN_CELLS: 20,
		VIEW_HEIGHT_IN_CELLS: 20,
	}
}

g.initialize = function()
{
	this.input = new Input();
	this.view = new View();
	this.game = new Game();
	this.game.start();
}