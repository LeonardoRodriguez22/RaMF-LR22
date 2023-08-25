const initialState = {
  myFavorites: [],
  allCharacters: [],
  characterDetail: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVS":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case "REMOVE_FAVS":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case "FILTER":
      const allCharactersFilter = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharactersFilter,
      };
    case "ORDER":
      const allCharactersOrder = [...state.allCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersOrder.sort((a, b) => a.id - b.id)
            : allCharactersOrder.sort((a, b) => b.id - a.id),
      };
    case "CHARACTER_DETAIL":
      return {
        ...state,
        characterDetail: action.payload,
      };
    case "CLEANER":
      return {
        ...state,
        characterDetail: {},
      };

    default:
      return { ...state };
  }
};

export default reducers;
