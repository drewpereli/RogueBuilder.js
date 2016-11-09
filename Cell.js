
function Cell(x, y, context)
{
	this.x = x;
	this.y = y;
	this.ctx = context; //Context object for this cell
	this.xPx;
	this.yPx;

	this.initialize();
}


Cell.prototype.fillRect = function(color)
{
	this.ctx.fillStyle = color;
	this.ctx.fillRect(this.xPx, this.yPx, g.constants.CELL_LENGTH, g.constants.CELL_LENGTH);
}


Cell.prototype.clearRect = function()
{
	this.ctx.clearRect(this.xPx, this.yPx, g.constants.CELL_LENGTH, g.constants.CELL_LENGTH);
}


Cell.prototype.initialize = function()
{
	this.xPx = this.x * g.constants.CELL_LENGTH;
	this.yPx = this.y * g.constants.CELL_LENGTH;
}

