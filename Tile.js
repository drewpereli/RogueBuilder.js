

function Tile(x, y, terrainKey)
{
	this.x = x;
	this.y = y;
	this.terrain = g.terrainTypes[terrainKey.toLowerCase()];
	this.unit = false;
	this.item = false;
}


Tile.prototype.setTerrain = function(terrainKey)
{
	if (typeof g.terrainTypes[terrainKey] !== "undefined")
	{
		this.terrain = g.terrainTypes[terrainKey];
		return this;
	}
	return false;
}


Tile.prototype.blocksMovement = function()
{
	if (this.terrain.blocksMovement)
		return true;
	if (this.object)
		return this.object.blocksMovement;
}


Tile.prototype.blocksLight = function()
{
	if (this.terrain.blocksLight)
		return true;
	if (this.object)
		return this.object.blocksMovement;
}