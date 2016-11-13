
function Cell(x, y, context)
{
	this.x = x;
	this.y = y;
	this.ctx = context; //Context object for this cell
	this.xPx;
	this.yPx;
	this.changed = true;

	this.initialize();
}


/*
VISUAL STUFF
*/
Cell.prototype.fillRect = function(color)
{
	this.ctx.fillStyle = color;
	this.ctx.fillRect(this.xPx, this.yPx, g.constants.CELL_LENGTH, g.constants.CELL_LENGTH);
	return this;
}


/*
Cell.prototype.clearRect = function()
{
	this.ctx.clearRect(this.xPx, this.yPx, g.constants.CELL_LENGTH, g.constants.CELL_LENGTH);
	return this;
}
*/


Cell.prototype.fillChar = function(char, color)
{
	return this;	
}

/*
MISC
*/

//Sets this cells colors/character based on the tile param
Cell.prototype.set = function(tile)
{
	var char;
	var color;
	var bgColor; //background color

	if (tile)//If the cell corresponds to a tile
	{
		char = tile.unit.char || tile.item.char || tile.terrain.char;
		color = g.colors.default;
		bgColor = tile.terrain.backgroundColor;
		this.fillRect(bgColor).fillChar(char, color);
	}
	else //IF the cell doesn't correspond to a tile
	{
		bgColor = g.color_constants.black;
		this.fillRect(bgColor);
	}
	this.changed = false;
}



//Returns the tile being depicted by this cell. REturns false if this cell isn't depicting a tile (because the view is moved far enough over)
Cell.prototype.getCorrespondingTile = function()
{
	var tX = g.view.topLeftX + this.x;
	var tY = g.view.topLeftY + this.y;
	if (tX < 0 || tX >= g.game.map.width)
		return false;
	if (tY < 0 || tX >= g.game.height)
		return false
	return g.game.map.getTile(tX, tY);
}




/*
INITIALIZATION
*/
Cell.prototype.initialize = function()
{
	this.xPx = this.x * g.constants.CELL_LENGTH;
	this.yPx = this.y * g.constants.CELL_LENGTH;
}

