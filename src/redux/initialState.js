const initialState = {

  movie: {
    details: {},
    credits: {},
    release: {},
    reviews: {},
    images: {},
    videos: {},
    similar: {},
    similar_2: {}
  },

  movies: {
    all: {},
    nowPlaying: {},
    popular: {},
    topRated: {},
    upcoming: {},
    action: {},
    comedy: {},
    scifi: {},
    drama: {},
    thriller: {},
    horror: {},
    war: {},
    anime: {}
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
    topRated: {},
    action: {},
    comedy: {},
    mystery: {},
    scifi: {},
    western: {},
    crime: {},
    drama: {},
    anime: {}
  },

  trending: {
    all: {},
    movies: {},
    tv: {},
    people: {}
  },

  people: {
    popular: {},
    person: {},
    list: {}
  },

  genres: {
    movie: {},
    tv: {}
  },

  search: {
    multi: {},
    movie: {},
    tv: {},
    person: {}
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
};

export default initialState;
