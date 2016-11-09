/*
Add custom terrain types here. 
As you can see, you can have as many or as few paramaters as you like.
There are a number of optional paramaters that will be added and set to default values if you don't add them.
The default properties and values that will be added can be found further down in this file in the
g.terrainTypeDefaultValues object. 
Feel free to change, add or subtract any defaults you see fit (though be careful you don't subtract any default
properties that are referenced later).
The preprocessor will automatically add all of the default properties specified in that object to any terrain 
type that doesn't already have them, and will automatically set the value to the default value specified for
that property. 
*/

g.terrainTypes = 
{
	open: 
	{
	},

	wall:
	{
		blocksMovement: true,
		blocksLight: true,
		blocksProjectiles: true,
		char: "#",
		color: "black",
	},

	stairsUp:
	{
		char: "<",
	},

	stairsDown:
	{
		char: ">",
	}
}








/*
Terrain Type Default Values
*/
g.terrainTypeDefaultValues = 
{
	blocksMovement: false,
	blocksLight: false,
	blocksProjectiles: false,
	char: false,
	color: g.colors.default,
	backgroundColor: g.colors.defaultBackground,
}






/*
Preprocessor
*/

terrainTypePreprocess();

function terrainTypePreprocess()
{
	var d = g.terrainTypeDefaultValues; //Default values
	for (var terrainName in g.terrainTypes) //For each terrain type defined
	{
		var tType = g.terrainTypes[terrainName];
		for (var property in d) //For each terrain type default property
		{
			if (typeof tType[property] === "undefined") //If the property in the terrain type isn't defined
				tType[property] = d[property];//Set it to the default
		}
	}
}











