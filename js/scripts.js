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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

// refactored code to use a forEach loop
pokemonRepository.getAll().forEach((item) => {
  if (item.height > 1.5) {
    document.write(
      '<p>' +
        item.name +
        ' is ' +
        item.height +
        ' meters tall' +
        '<span> - Wow thats BIG!</span></p>'
    );
  } else {
    document.write(
      '<p>' + item.name + ' is ' + item.height + ' meters tall</p>'
    );
  }
});

// using ternary operator in place of if else for the same result

/* pokemonRepository.getAll().forEach((item) => {
  document.write(
    item.height > 1.5
      ? '<p>' +
          item.name +
          ' is ' +
          item.height +
          ' meters tall' +
          '<span> - Wow thats BIG!</span></p>'
      : '<p>' + item.name + ' is ' + item.height + ' meters tall</p>'
  );
}); */
