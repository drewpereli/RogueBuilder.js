

function Map(width, height)
{
	this.width = width;
	this.height = height;
	this.tiles = [];

	this.initialize();
}





Map.prototype.getTile = function(x, y)
{
	return this.tiles[x][y];
}



/*Map generators*/
Map.prototype.generateLevel = function()
{
	for (var x in this.tiles)
	{
		for (var y in this.tiles[x])
		{
			var t = this.tiles[x][y];
			t.setTerrain("WALL");
		}
	}
}



Map.prototype.initialize = function()
{
	for (var x = 0 ; x < this.width ; x++)
	{
		this.tiles.push([]);
		for (var y = 0 ; y < this.height ; y++)
		{
			this.tiles[x].push(new Tile(x, y, "OPEN"));
		}
	}
}