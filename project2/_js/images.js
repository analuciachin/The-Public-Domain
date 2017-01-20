//Function to find the images, create an array and change the images

function getImages(){
	return $("#carousel").find("img").each(function(){
		$(this).data("src",$(this).attr("src"));
	});
}

$(document).ready(function(){
	var images = getImages(),
		temporizador,
		imagem_atual = 0;
	//console.log(images);
	temporizador = window.setInterval(function() {
		// console.log(imagem_atual);
		//$(images[0]).attr("src",$(images[imagem_atual]).data("src"));
		$(images[0]).fadeOut(function(){
			$(this).attr("src",$(images[imagem_atual]).data("src")).fadeIn(1000);
		});
		imagem_atual++;
		if(imagem_atual>=images.length){
			imagem_atual = 0;
		}
	}, 3000);

});