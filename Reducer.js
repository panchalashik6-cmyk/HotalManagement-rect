const initialState = {
  rooms: [],
  reservations: [],
  search: "",
  sort: ""
};

export default function reducer(state = initialState, action) {

  if (action.type === "setrooms") {
    return { ...state, rooms: action.payload };
  }

  else if (action.type === "add") {
    return {
      ...state,
      reservations: [...state.reservations, action.payload]
    };
  }

  else if (action.type === "set") {
    return { ...state, reservations: action.payload };
  }

  else if (action.type === "delete") {
    return {
      ...state,
      reservations: state.reservations.filter(r => r.id !== action.payload)
    };
  }


  else if (action.type === "search") {
    return {
      ...state,
      search: action.payload
    };
  }

  else if (action.type === "sort") {
    return {
      ...state,
      sort: action.payload
    };
  }

  else {
    return state;
  }
}