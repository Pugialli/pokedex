fetch("/../pokemon.json")
   .then(response => {
      if(response.status >=400 && response.status <600){
         throw new Error("Bad response from server");
      }
      return response.json();
   }).then(pokemons => {

      let nav = document.getElementById("lista-pokemon");

      pokemons.forEach(pokemon => {

         // console.log(pokemon);

         let cartoes = document.getElementsByClassName("cartoes-pokemon");

         let cartao = document.createElement('div');
         cartao.className = "cartao-pokemon tipo-" + pokemon.type;
         cartao.id = "cartao-"+pokemon.number;

         let topo = document.createElement('div');
         topo.className = "cartao-topo";

         let detalhes = document.createElement('div');
         detalhes.className = "detalhes";

         let nome = document.createElement('h2');
         nome.className = "nome";
         nome.innerHTML = pokemon.name;

         let numero = document.createElement('span');
         const zeroPad = (num, places) => String(num).padStart(places, '0');
         numero.className = "numero";
         numero.innerHTML =  "#"+zeroPad(pokemon.number,3);

         let tipo = document.createElement('span');
         tipo.className = "tipo";
         tipo.innerHTML = pokemon.type;

         let imgdiv = document.createElement('div');
         imgdiv.className = "cartao-imagem";

         let img = document.createElement('img');
         img.src = "src/imagens/" + pokemon.images.img;
         img.alt = "Imagem do " + pokemon.name;

         imgdiv.appendChild(img);
         detalhes.appendChild(nome);
         detalhes.appendChild(numero);
         topo.appendChild(detalhes);
         topo.appendChild(tipo);
         topo.appendChild(imgdiv)


         let informacoes = document.createElement('div');
         informacoes.className = "cartao-informacoes";

         let sts = document.createElement('div');
         sts.className = "status";

         let stsh3 = document.createElement('h3');
         stsh3.innerHTML = "Status";

         let listasts = document.createElement('ul');
         let hp = document.createElement('li');
         hp.innerHTML = "HP: " + pokemon.status.hp;

         let atck = document.createElement('li');
         atck.innerHTML = "Ataque: " + pokemon.status.attack;

         let spatck = document.createElement('li');
         spatck.innerHTML = "At. Esp.: " + pokemon.status.spatk;

         let def = document.createElement('li');
         def.innerHTML = "Defesa: " + pokemon.status.defense;

         let spdef = document.createElement('li');
         spdef.innerHTML = "Df. Esp.: " + pokemon.status.spdef;

         let speed = document.createElement('li');
         speed.innerHTML = "Velocidade: " + pokemon.status.speed;

         let total = document.createElement('li');
         total.innerHTML = "Total: " + pokemon.status.total;

         listasts.appendChild(hp);
         listasts.appendChild(atck);
         listasts.appendChild(def);
         listasts.appendChild(spatck);
         listasts.appendChild(spdef);
         listasts.appendChild(speed);
         listasts.appendChild(total);

         let habilidades = document.createElement('div');
         habilidades.className = "habilidades";

         let habih3 = document.createElement('h3');
         habih3.innerHTML = "Habilidades";

         let listhabi = document.createElement('ul');
         let habili1 = document.createElement('li');
         habili1.innerHTML = pokemon.abilities.ability1;
         let habili2 = document.createElement('li');
         habili2.innerHTML = pokemon.abilities.ability2;

         listhabi.appendChild(habili1);
         listhabi.appendChild(habili2);

         habilidades.appendChild(habih3);
         habilidades.appendChild(listhabi);

         sts.appendChild(stsh3);
         sts.appendChild(listasts);
         informacoes.appendChild(sts);
         informacoes.appendChild(habilidades);

         cartao.appendChild(topo);
         cartao.appendChild(informacoes);

         cartoes[0].appendChild(cartao);


         let pokemonthumb = document.createElement('li');
         pokemonthumb.className = "pokemon";
         pokemonthumb.id = pokemon.number;

         let pokemonimg = document.createElement('img');
         pokemonimg.src = "src/imagens/"+pokemon.images.thumb;
         pokemonimg.alt = "Thumbnail"+pokemon.name
         
         let pokemonsmall = document.createElement('span');
         pokemonsmall.innerHTML = pokemon.name
         

         pokemonthumb.appendChild(pokemonimg);
         pokemonthumb.appendChild(pokemonsmall);

         nav.appendChild(pokemonthumb);


         pokemonthumb.addEventListener('click', () => {

            const cartoesPokemonAberto = document.querySelectorAll('.aberto');
    
            cartoesPokemonAberto.forEach((cartaoPokemonAberto) => {
                cartaoPokemonAberto.classList.remove('aberto');
            })
    
            const idPokemonSelecionado = pokemonthumb.attributes.id.value;
            const cartaoPokemonParaAbrir = document.getElementById('cartao-'+idPokemonSelecionado);
            cartaoPokemonParaAbrir.classList.add('aberto');
    
            const PokemonAtivoNaListagem = document.querySelectorAll('.ativo');
    
            PokemonAtivoNaListagem.forEach((PokemonAtivo) => {
                PokemonAtivo.classList.remove('ativo');
            })
    
            const PokemonParaAtivar = document.getElementById(idPokemonSelecionado);
            PokemonParaAtivar.classList.add('ativo');
    
            
        })

      });

   }).catch((error) => {
      console.log(error);
   });