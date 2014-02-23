var formulario = document.getElementById('form-registro');

var publicar = document.getElementById('publicar');
publicar.addEventListener('click',function(){
	var clase=formulario.className;
	if(clase=='form'){
		formulario.className = 'ocultar';
		setTimeout(function(){formulario.style.display='none';},500);
	}else{
		formulario.style.display='block'
		formulario.className = 'form';
	}
});

formulario.addEventListener('submit',function(evento){
	evento.preventDefault(); //Evita que se haga lo predeterminado
	var titulo = document.getElementById('titulo').value;
	var autor = document.getElementById('autor').value;
	var cat = document.getElementById('cat').value;

	var post = document.getElementsByClassName('post')[0];
	var parent = post.parentNode; //El contenedor
	clone = post.cloneNode(true);
	//textContent = texto del Nodo
	clone.getElementsByClassName('titulo')[0].textContent = titulo;
	clone.getElementsByClassName('autor')[0].getElementsByTagName('a')[0].textContent = autor;
	clone.getElementsByClassName('tag')[0].textContent = cat;
	parent.insertBefore(clone,post); //params: insertado y referencia

	this.className='ocultar'; //Esconder el formulario
	setTimeout(function(){formulario.style.display='none';},500);
	return false;
});


/**
  * Closure como fábrica de funciones */
function createResizer(size){
	return function (){
		document.getElementsByTagName('body')[0].style.fontSize=size+'px';
	};
}

HTMLCollection.prototype.each = Array.prototype.forEach; //No funciona en Chrome
var sizes = document.getElementsByClassName('size')[0];
/*sizes.getElementsByTagName('a').each(function(obj,pos){
	var letra = obj.getAttribute('href').substring(1);
	obj.addEventListener('click',createResizer(letra));
	obj.style.fontSize = letra+'px';
});*/
var as = sizes.getElementsByTagName('a');
for (var i=0 ;i<as.length; i++){
	var letra = as[i].getAttribute('href').substring(1);
	as[i].addEventListener('click',createResizer(letra));
	as[i].style.fontSize = letra+'px';
}

/**
   Closure para ocultar código
*/
function contador(vi){
	var contador = vi||0;
	return {
		up: function(){return ++contador},
		down: function(){return --contador}
	};
}

var votos = document.getElementsByClassName('total');
for(var i=0;i<votos.length;i++){
	var obj=votos[i];
	var contadorT = contador(obj.innerHTML); //Contador para cada voto
	obj.nextElementSibling.addEventListener('click',function(eve){
		eve.preventDefault();
		this.previousElementSibling.innerHTML = contadorT.up();

	});
	obj.previousElementSibling.addEventListener('click',function(eve){
		eve.preventDefault();
		this.nextElementSibling.innerHTML = contadorT.down();

	});
}