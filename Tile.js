

function Tile(x, y, terrain)
{
	this.x = x;
	this.y = y;
	this.terrain = g.terrainTypes[terrain];
	this.object = false;
	this.changed = true;
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