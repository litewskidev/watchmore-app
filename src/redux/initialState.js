const initialState = {

  movie: {
    details: {},
    credits: {},
    release: {},
    reviews: {},
    images: {},
    videos: {},
    similar: {}
  },

  movies: {
    all: {},
    nowPlaying: {},
    popular: {},
    topRated: {},
    upcoming: {}
  },

  tvShow: {
    details: {},
    credits: {},
    reviews: {},
    images: {},
    videos: {},
    similar: {}
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

  hubs: {
    marvel: {},
    starwars: {},
    pixar: {},
    national: {},
    a24: {},
    disney: {}
  },

  collections: [],

  specific: {
    movie: {},
    tv: {},
    collection: {}
  },

  searchString: '',

  page: 1

};

export default initialState;
