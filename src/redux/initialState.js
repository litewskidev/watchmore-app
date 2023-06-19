const initialState = {

  movies: {
    all: {},
    nowPlaying: {},
    popular: {},
    topRated: {},
    upcoming: {}
  },

  tvSeries: {
    airingToday: {},
    onTheAir: {},
    popular: {},
    topRated: {}
  },

  trending: {
    all: {},
    movies: {},
    tv: {},
    people: {}
  },

  people: {
    popular: {}
  },

  genres: {
    movie: {},
    tv: {}
  },

  search: {
    multi: {},
    movie: {},
    tv: {},
    person: {},
  },

  searchString: '',

  page: 1

};

export default initialState;
