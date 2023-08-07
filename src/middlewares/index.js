export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

export const featuring = (store)  => (next) => (actionInfo) => {
    const featured =[{ name: 'eddie'}, ...actionInfo.action.payload];
    const updatedActionInfo = {...actionInfo,
    action: {...actionInfo.action, payload: featured},
 };
 next(updatedActionInfo);
};

export const filterPokemonNames = (store) => (next) => (actionOff) => {
      const filteredPokemons = actionOff.action.payload.filter(pokemon => {
        const nameStartsWithEorM = /^([eE]|[mM])/.test(pokemon.name);
        return nameStartsWithEorM;
      });
      // Creamos una nueva acción con el array filtrado y la enviamos al siguiente middleware o al reducer
      const filteredAction = { ...actionOff, action: {...actionOff.action ,payload: filteredPokemons} };
      return next(filteredAction);
  };