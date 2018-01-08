$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

/*ETAPA UNO
ocultar flecha*/
$('#arrowLeft').hide();
printNews();
/*ETAPA 6*/
console.log(renderActivities(activities));

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].hasOwnProperty('highlighted') === true) {
			renderRecipe(recipesArray[i]);	
		}
			
	}
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	console.log(recipe.title);
	$('#listRecipes').append("<div>"+
								"<a class='item-recipe' href='#'>"+
								  "<span class='attribution'>"+
								    "<span class='title-recipe'>"+recipe.title+"</span>"+
								    "<span class='metadata-recipe'>"+
								      "<span class='author-recipe'>"+recipe.source.name+" </span>"+
								      "<span class='bookmarks-recipe'>"+
								        "<span class='icon-bookmark'></span>"+ 
								      "</span>"+
								    "</span>"+
								  "</span>"+
								  "<img src='"+recipe.source.url+"'/>"+
								"</a>"+
								"</div>");	
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	for (var i = 0; i < activitiesArray.length; i++) {
		renderActivities(activitiesArray[i]);
		if (activitiesArray.length > 0) {
			$('.wrapper-message').hide();
		}
	}
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


/*ETAPA 2*/
// crear funcion texto
function printNews(){
	$('#newNotice').text('NUEVAS RECETAS');
}





