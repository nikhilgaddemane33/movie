import { useMemo, useState } from 'react';
import './styles.css';

const movieData = [
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    rating: 8.8,
    genres: ['fantasy', 'adventure', 'action'],
    description: 'A young hobbit begins a quest to destroy a powerful ring and save Middle-earth.',
    trailer: 'https://www.youtube.com/watch?v=V75dMMIW2B4',
    poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Amélie',
    year: 2001,
    rating: 8.3,
    genres: ['romance', 'comedy', 'drama'],
    description: 'A whimsical Parisian woman decides to help others while searching for love.',
    trailer: 'https://www.youtube.com/watch?v=HUECWi5pX7o',
    poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'The Grand Budapest Hotel',
    year: 2014,
    rating: 8.1,
    genres: ['comedy', 'drama', 'adventure'],
    description: 'A concierge and a lobby boy become unlikely allies in a theft and murder plot.',
    trailer: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk',
    poster: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Blade Runner 2049',
    year: 2017,
    rating: 8.0,
    genres: ['sci-fi', 'mystery', 'drama'],
    description: 'A new blade runner discovers a long-buried secret that could plunge society into chaos.',
    trailer: 'https://www.youtube.com/watch?v=gCcx85zbxz4',
    poster: 'https://images.unsplash.com/photo-1497032205916-ac775f0649ae?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Moonlight',
    year: 2016,
    rating: 7.4,
    genres: ['drama', 'romance', 'coming-of-age'],
    description: 'A young man deals with his identity and sexuality while growing up in Miami.',
    trailer: 'https://www.youtube.com/watch?v=9NJj12tJlbk',
    poster: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Parasite',
    year: 2019,
    rating: 8.6,
    genres: ['drama', 'thriller', 'mystery'],
    description: 'Two families from different classes collide with shocking consequences.',
    trailer: 'https://www.youtube.com/watch?v=SEUXfv87Wpk',
    poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'The Social Network',
    year: 2010,
    rating: 7.7,
    genres: ['drama', 'biography', 'technology'],
    description: 'The founding of Facebook leads to friendship, lawsuits, and ambition.',
    trailer: 'https://www.youtube.com/watch?v=lB95KLmpLR4',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Mad Max: Fury Road',
    year: 2015,
    rating: 8.1,
    genres: ['action', 'adventure', 'sci-fi'],
    description: 'Two rebels try to survive a high-speed chase across a post-apocalyptic wasteland.',
    trailer: 'https://www.youtube.com/watch?v=hEJnMQG9ev8',
    poster: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Coco',
    year: 2017,
    rating: 8.4,
    genres: ['animation', 'family', 'music'],
    description: 'A boy travels to the Land of the Dead to learn his family\'s stories and musical legacy.',
    trailer: 'https://www.youtube.com/watch?v=Rvr68u6k5sI',
    poster: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Crazy Rich Asians',
    year: 2018,
    rating: 6.9,
    genres: ['romance', 'comedy', 'drama'],
    description: 'A woman meets her boyfriend\'s wealthy family in Singapore and faces cultural pressure.',
    trailer: 'https://www.youtube.com/watch?v=JWCB6hXamlw',
    poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'The Grand Budapest Hotel',
    year: 2014,
    rating: 8.1,
    genres: ['comedy', 'drama', 'adventure'],
    description: 'A concierge and a lobby boy become unlikely allies in a theft and murder plot.',
    trailer: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk',
    poster: 'https://images.unsplash.com/photo-1493244040629-496f6d136cc3?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Whiplash',
    year: 2014,
    rating: 8.5,
    genres: ['drama', 'music', 'thriller'],
    description: 'A young drummer endures intense mentorship while pursuing greatness.',
    trailer: 'https://www.youtube.com/watch?v=7d_jQycdQGo',
    poster: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Spotlight',
    year: 2015,
    rating: 8.2,
    genres: ['drama', 'history', 'crime'],
    description: 'Journalists investigate a long-running scandal within the Catholic Church.',
    trailer: 'https://www.youtube.com/watch?v=efwoU3Tu6so',
    poster: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'The Incredibles',
    year: 2004,
    rating: 8.0,
    genres: ['animation', 'action', 'family'],
    description: 'A family of retired superheroes returns to action to save the world.',
    trailer: 'https://www.youtube.com/watch?v=eZbzbC9285I',
    poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Hidden Figures',
    year: 2016,
    rating: 7.8,
    genres: ['history', 'drama', 'biography'],
    description: 'Three brilliant women help NASA launch the first American into orbit.',
    trailer: 'https://www.youtube.com/watch?v=5wfrDhgUMGI',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'The Conjuring',
    year: 2013,
    rating: 7.5,
    genres: ['horror', 'mystery', 'thriller'],
    description: 'Paranormal investigators help a family terrorized by a dark presence in their farmhouse.',
    trailer: 'https://www.youtube.com/watch?v=k10ETZ41q5o',
    poster: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
];

const suggestedGenres = [
  'fantasy',
  'adventure',
  'action',
  'sci-fi',
  'romance',
  'family',
  'thriller',
  'horror',
  'drama',
  'animation',
  'comedy',
  'biography',
];

function App() {
  const [query, setQuery] = useState('fantasy');
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return movieData;

    const terms = search.split(/[.,\s]+/).filter(Boolean);
    return movieData.filter((movie) =>
      terms.every(
        (term) =>
          movie.title.toLowerCase().includes(term) ||
          movie.genres.some((genre) => genre.toLowerCase().includes(term))
      )
    );
  }, [query]);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (!loginData.email || !loginData.password) {
      setError('Please enter both email and password.');
      return;
    }
    setUser({ name: loginData.email.split('@')[0], email: loginData.email });
    setError('');
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    if (!signupData.name || !signupData.email || !signupData.password) {
      setError('Please fill in all signup fields.');
      return;
    }
    setUser({ name: signupData.name, email: signupData.email });
    setError('');
  };

  const handleLogout = () => {
    setUser(null);
    setAuthMode('login');
    setLoginData({ email: '', password: '' });
    setSignupData({ name: '', email: '', password: '' });
    setQuery('fantasy');
    setSelectedMovie(null);
    setError('');
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
  };

  if (!user) {
    return (
      <div className="app-shell auth-shell">
        <div className="auth-card">
          <div className="auth-intro">
            <p className="eyebrow">Welcome to Movie Suggestion</p>
            <h1>Login or sign up to explore movies</h1>
            <p className="subtitle">
              Enter any values to log in as a dummy user. After signing in, search genres like <strong>comedy</strong>, <strong>horror</strong>, or <strong>drama</strong>.
            </p>
          </div>

          <div className="auth-tabs">
            <button
              type="button"
              className={authMode === 'login' ? 'auth-tab active' : 'auth-tab'}
              onClick={() => {
                setAuthMode('login');
                setError('');
              }}
            >
              Login
            </button>
            <button
              type="button"
              className={authMode === 'signup' ? 'auth-tab active' : 'auth-tab'}
              onClick={() => {
                setAuthMode('signup');
                setError('');
              }}
            >
              Sign Up
            </button>
          </div>

          <form className="auth-form" onSubmit={authMode === 'login' ? handleLoginSubmit : handleSignupSubmit}>
            {authMode === 'signup' && (
              <label className="form-field">
                <span>Name</span>
                <input
                  type="text"
                  value={signupData.name}
                  onChange={(event) => setSignupData({ ...signupData, name: event.target.value })}
                  placeholder="Enter your name"
                />
              </label>
            )}

            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                value={authMode === 'login' ? loginData.email : signupData.email}
                onChange={(event) =>
                  authMode === 'login'
                    ? setLoginData({ ...loginData, email: event.target.value })
                    : setSignupData({ ...signupData, email: event.target.value })
                }
                placeholder="you@example.com"
              />
            </label>

            <label className="form-field">
              <span>Password</span>
              <input
                type="password"
                value={authMode === 'login' ? loginData.password : signupData.password}
                onChange={(event) =>
                  authMode === 'login'
                    ? setLoginData({ ...loginData, password: event.target.value })
                    : setSignupData({ ...signupData, password: event.target.value })
                }
                placeholder="Choose a password"
              />
            </label>

            {error && <p className="error-text">{error}</p>}

            <button type="submit" className="primary-button">
              {authMode === 'login' ? 'Login' : 'Create account'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (selectedMovie) {
    return (
      <div className="app-shell">
        <header className="hero-card hero-with-actions">
          <div>
            <p className="eyebrow">Movie Details</p>
            <h1>{selectedMovie.title}</h1>
            <p className="subtitle">Explore this movie's rating, genre, and trailer.</p>
          </div>
          <div className="user-actions">
            <button type="button" className="secondary-button" onClick={handleBackToList}>
              Back to list
            </button>
            <button type="button" className="secondary-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        <main className="content-panel detail-panel">
          <section className="detail-card">
            <img className="detail-poster" src={selectedMovie.poster} alt={selectedMovie.title} />
            <div className="detail-info">
              <div className="detail-meta">
                <span>{selectedMovie.year}</span>
                <span>Rating: {selectedMovie.rating}</span>
                {selectedMovie.genres.map((genre) => (
                  <span key={genre}>{genre}</span>
                ))}
              </div>
              <p className="movie-description">{selectedMovie.description}</p>
              <div className="detail-actions">
                <a className="detail-button primary" href={selectedMovie.trailer} target="_blank" rel="noreferrer">
                  Watch trailer
                </a>
                <button type="button" className="detail-button secondary" onClick={handleBackToList}>
                  Back to movies
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="hero-card hero-with-actions">
        <div>
          <p className="eyebrow">Movie Genre Search</p>
          <h1>Welcome back, {user.name}</h1>
          <p className="subtitle">
            Search for movies by genre and discover recommendations from comedy to sci-fi.
          </p>
        </div>
        <div className="user-actions">
          <p>Logged in as <strong>{user.email}</strong></p>
          <button type="button" className="secondary-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main className="content-panel">
        <section className="search-panel">
          <label htmlFor="genre-search">Search by genre</label>
          <div className="search-row">
            <input
              id="genre-search"
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type fantasy, adventure, comedy..."
            />
          </div>

          <div className="suggestions-row">
            <span>Try:</span>
            {suggestedGenres.map((genre) => (
              <button
                key={genre}
                type="button"
                className="genre-chip"
                onClick={() => setQuery(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </section>

        <section className="results-panel">
          <div className="results-header">
            <div>
              <h2>Suggested movies</h2>
              <p>Searching: <strong>{query || 'all'}</strong></p>
            </div>
            <p>{filteredMovies.length} result{filteredMovies.length === 1 ? '' : 's'} found</p>
          </div>

          {filteredMovies.length === 0 ? (
            <div className="empty-state">
              <p>No movies matched your search.</p>
              <p>Try another genre like <strong>horror</strong>, <strong>drama</strong>, or <strong>animation</strong>.</p>
            </div>
          ) : (
            <div className="movie-grid">
              {filteredMovies.map((movie) => (
                <article key={movie.title} className="movie-card" onClick={() => handleMovieSelect(movie)}>
                  <img src={movie.poster} alt={movie.title} />
                  <div className="movie-body">
                    <h3>{movie.title}</h3>
                    <p className="movie-year">{movie.year}</p>
                    <p className="movie-description">{movie.description}</p>
                    <div className="movie-genres">
                      {movie.genres.map((genre) => (
                        <span key={genre}>{genre}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
