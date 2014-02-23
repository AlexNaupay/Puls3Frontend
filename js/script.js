var formulario = document.getElementById('form-registro');

var publicar = document.getElementById('publicar');
publicar.addEventListener('click',function(){
	var clase=formulario.className;
	if(clase=='form'){
		formulario.className = 'hidden';
	}else{
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
	this.className='hidden'; //Esconder el formulario
	return false;
});
