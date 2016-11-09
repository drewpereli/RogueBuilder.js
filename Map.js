

function Map(width, height)
{
	this.width = width;
	this.height = height;
	this.tiles = [];

	this.initialize();
}


Map.prototype.initialize = function()
{
	for (var x = 0 ; x < this.width ; x++)
	{
		this.tiles.push([]);
		for (var y = 0 ; y < this.height ; y++)
		{
			this.tiles.push(new Tile(x, y, "OPEN"));
		}
	}
}


Map.prototype.getTile = function(x, y)
{
	return this.tiles[x][y];
}