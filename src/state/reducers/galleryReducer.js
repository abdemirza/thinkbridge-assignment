const initialState = {
  categories: [
    {
      id: 1,
      name: 'Favourites',
      images: [],
    },
    {
      id: 2,
      name: 'Landscape',
      images: [],
    },
    {
      id: 3,
      name: 'Portrait',
      images: [],
    },
    {
      id: 4,
      name: 'Nature',
      images: [],
    },
    {
      id: 5,
      name: 'Animals',
      images: [],
    },
    {
      id: 6,
      name: 'Food',
      images: [],
    },
  ],
  favourites: [],
};

export const galleryReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, payload],
      };
      case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourites: [payload,...state.favourites],
      };
    case 'ADD_IMAGE':
      return {
        ...state,
        categories: state.categories.map(category => {
          if (category.id === payload.id) {
            return {
              ...category,
              images: [...category.images, payload.uri],
            };
          }
          return category;
        }),
      };
    default:
      return state;
  }
};
