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

// refactored code to use a forEach loop

pokemonList.forEach((item) => {
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

/* for loop cycles through the above array and writes to the DOM - added p and span tags for css styling

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.5) {
    document.write(
      '<p>' +
        pokemonList[i].name +
        ' is ' +
        pokemonList[i].height +
        ' meters tall.' +
        '<span> - Wow thats BIG!</span></p>'
    );
  } else {
    document.write(
      '<p>' +
        pokemonList[i].name +
        ' is ' +
        pokemonList[i].height +
        ' meters tall.</p>'
    );
  }
} */
