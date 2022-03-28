// wrapped pokemonList inside IIFE

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    // check if new pokemon is an object
    if (typeof pokemon === 'object' && 'name' in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log('pokemon is not correct');
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
    button.classList.add('button-ball');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    // on click event listener returns show details function
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }
  // using fetch to return pokemon list from pokedex api url defined previously
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  // fetching details from the pokemon api
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // defining which details we want
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.weight = details.weight;
        //loop through types array for type values
        pokemon.type = [];
        for (let i = 0; i < details.types.length; i++) {
          pokemon.type.push(details.types[i].type.name);
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      //call the show modal function defined below
      showModal(
        pokemon.name,
        pokemon.height,
        pokemon.weight,
        pokemon.imageUrl,
        pokemon.type
      );
    });
  }

  let modalContainer = document.querySelector('#modal-container');

  function showModal(name, height, weight, imageUrl, type) {
    //clear last modal content
    modalContainer.innerHTML = '';
    //create div, h2, p and img elements
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'X';
    closeButtonElement.addEventListener('click', hideModal);

    let nameElement = document.createElement('h2');
    nameElement.innerText = name;

    let contentElement = document.createElement('p');
    contentElement.innerText =
      'Height: ' +
      height +
      '\nWeight: ' +
      weight +
      '\nType: ' +
      type.join(' & ');

    let spriteElement = document.createElement('img');
    spriteElement.src = imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(spriteElement);
    modal.appendChild(nameElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }
  //close modal with esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  // close modal click outside
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal,
  };
})();

// refactored code to use a forEach loop

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach((pokemon) => {
    pokemonRepository.addListItem(pokemon);
  });
});
