const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach((pokemon) => {
    pokemon.addEventListener('click', () => {

        const cartoesPokemonAberto = document.querySelectorAll('.aberto');

        cartoesPokemonAberto.forEach((cartaoPokemonAberto) => {
            cartaoPokemonAberto.classList.remove('aberto');
        })

        const idPokemonSelecionado = pokemon.attributes.id.value;
        const cartaoPokemonParaAbrir = document.getElementById('cartao-'+idPokemonSelecionado);
        cartaoPokemonParaAbrir.classList.add('aberto');

        const PokemonAtivoNaListagem = document.querySelectorAll('.ativo');

        PokemonAtivoNaListagem.forEach((PokemonAtivo) => {
            PokemonAtivo.classList.remove('ativo');
        })

        const PokemonParaAtivar = document.getElementById(idPokemonSelecionado);
        PokemonParaAtivar.classList.add('ativo');

        
    })

})