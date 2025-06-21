const transformPokemonName = name => {
  const nameMappings = {
    'ho-oh': 'hooh',
    'mr-mime': 'mrmime',
    'deoxys-normal': 'deoxys',
    'nidoran-f': 'nidoranf',
    'nidoran-m': 'nidoranm'
  };
  return nameMappings[name.toLowerCase()] || name;
};

const capitalizePokemonName = name => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export { transformPokemonName, capitalizePokemonName };
