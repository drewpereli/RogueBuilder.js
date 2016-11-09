

function View()
{
	this.widthInCells = g.constants.VIEW_WIDTH_IN_CELLS;
	this.heightInCells = g.constants.VIEW_HEIGHT_IN_CELLS;
	this.cells = {};
	this.canvases = {};
	this.ctxs = {};
	this.initialize();
}







View.prototype.set = function()
{
	//For each cell, if the corresponding tile has changed, 
}










View.prototype.initialize = function()
{
	this.initializeCanvasArrays();
	this.initializeCellArrays();
	//this.set();
}













//Initialize sub methods
View.prototype.initializeCellArrays = function()
{
	var thisView = this;
	$.each(thisView.canvases, function(index)
	{
		var cellArray = [];
		var currContext = thisView.ctxs[index];
		for (var x = 0 ; x < thisView.widthInCells ; x++)
		{
			cellArray.push([]);
			for (var y = 0 ; y < thisView.heightInCells ; y++)
			{
				var cell = new Cell(x, y, currContext);
				cellArray[x].push(cell);
			}
		}
		thisView.cells[index] = cellArray;
	});
}


View.prototype.initializeCanvasArrays = function()
{
	var thisView = this;
	$(".rl-canvas").each(function(index, canvas)
	{
		var id = canvas.id.split("rl-canvas-");
		if (id.length !== 2)
		{
			console.log("You canvas IDs must be of the form 'rl-canvas-CANVAS_ID_HERE'.");
			return false;
		}
		id = id[1];
		thisView.canvases[id] = canvas;
		//Set canvas attributes
		canvas.height = g.constants.VIEW_HEIGHT_IN_CELLS * g.constants.CELL_LENGTH;
		canvas.width = g.constants.VIEW_WIDTH_IN_CELLS * g.constants.CELL_LENGTH;
		thisView.ctxs[id] = canvas.getContext("2d");
	});
}

