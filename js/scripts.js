// wrapped pokemonList inside IIFE

let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'bulbasaur',
      height: 0.7,
      types: ['grass', 'poison'],
    },

    {
      name: 'jigglypuff',
      height: 0.5,
      types: ['normal', 'fairy'],
    },

    {
      name: 'charizard',
      height: 1.7,
      types: ['fire', 'flying'],
    },

    {
      name: 'oddish',
      height: 0.5,
      types: ['grass', 'poison'],
    },
  ];
  // checks if incoming pokemon has certain object key values
  function add(pokemon) {
    if (
      Object.keys(pokemon).includes('name') &&
      Object.keys(pokemon).includes('height') &&
      Object.keys(pokemon).includes('types')
    ) {
      return pokemonList.push(pokemon);
    } else {
      alert('incomplete data');
    }
  }
  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    button.addEventListener('click', function (event) {
      showDetails(pokemon.name);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

// refactored code to use a forEach loop
pokemonRepository.getAll().forEach((pokemon) => {
  pokemonRepository.addListItem(pokemon);
});
