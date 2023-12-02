var elList = document.querySelector(".list");
var elText = document.querySelector(".Text");
var coun = 0;



function pokemonn(_pokemons) {
    for (var i = 0; i < pokemons.length; i++) {
        var newLi = document.createElement('li');
        var newImg = document.createElement("img");
        var newHr = document.createElement('hr');
        var newHeading = document.createElement('h3');
        var newButton = document.createElement('button')
        var newLike = document.createElement('img')
        var newText = document.createElement('p');
        var newStrong0 = document.createElement('strong')
        var newStrong1 = document.createElement('strong')





        
        newLi.setAttribute('class', 'item');
        newImg.setAttribute('class', 'image');
        newImg.setAttribute('src', _pokemons[i].img);
        newImg.setAttribute('alt','PokemonImage');
        newImg.setAttribute("width",'157');
        newImg.setAttribute('height', '157');
        newHr.setAttribute('class', 'line')
        newHr.setAttribute('width', '305');
        newHr.setAttribute('height', '3');
        newHeading.setAttribute('class', 'heading');
        newButton.setAttribute("data-uuid", 'close');
        newButton.setAttribute('class', 'button');
        newButton.setAttribute('type','button');
        newLike.setAttribute('class' , 'img');
        newLike.setAttribute('src', 'https://pngimg.com/d/like_PNG35.png');
        newLike.setAttribute('alt', 'pokemonimg');
        newLike.setAttribute('width', '40');
        newLike.setAttribute('height', '40');
        newText.setAttribute('class', 'text');
        newStrong0.setAttribute('class', 'strong__0');
        newStrong1.setAttribute('class', 'strong__1');





        
        
        newHeading.textContent = _pokemons[i].name;
        newText.textContent = _pokemons[i].type;
        newStrong0.textContent = _pokemons[i].height;
        newStrong1.textContent = _pokemons[i].weight;




        newLi.appendChild(newImg);
        newLi.appendChild(newHr);
        newLi.appendChild(newHeading);
        newLi.appendChild(newText);
        newLi.appendChild(newStrong1);
        newLi.appendChild(newStrong0);
        newLi.appendChild(newButton);
        newButton.append(newLike)
        elList.appendChild(newLi)
    }
}
pokemonn(pokemons)





let elButton = document.querySelectorAll(".button");

setInterval(function add(){
    elText.textContent = coun
},10)

for (let i = 0; i < elButton.length; i++) {
    elButton[i].addEventListener('click', function(evt) {
        if (evt.target.dataset.uuid == 'close'){
            coun += 1 
            evt.target.dataset.uuid = 'open'
        }else if (evt.target.dataset.uuid = 'open') {
            coun -= -1
            evt.target.dataset.uuid = 'close'
        }
    })
}