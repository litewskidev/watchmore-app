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
    similar: {},
    season: {},
    episode: {}
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
    marvel_2: {},
    pixar: {},
    pixar_2: {},
    a24: {},
    a24_2: {},
    disney: {},
    disney_2: {},
    national: {},
    starwars: {}
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
