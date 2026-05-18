import { useMemo, useState } from 'react'
import './index.css'

const movies = [
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    genres: ['fantasy', 'adventure', 'action'],
    description: 'A young hobbit begins a quest to destroy a powerful ring and save Middle-earth.',
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    year: 2001,
    genres: ['fantasy', 'adventure', 'family'],
    description: 'A young wizard discovers his destiny at Hogwarts School of Witchcraft and Wizardry.',
  },
  {
    title: 'Guardians of the Galaxy',
    year: 2014,
    genres: ['action', 'adventure', 'sci-fi'],
    description: 'A group of galactic misfits must save the universe from a powerful villain.',
  },
  {
    title: 'The Princess Bride',
    year: 1987,
    genres: ['fantasy', 'adventure', 'romance'],
    description: 'A tale of love and swashbuckling adventure with giants, princes, and pirates.',
  },
  {
    title: 'Star Wars: A New Hope',
    year: 1977,
    genres: ['sci-fi', 'adventure', 'fantasy'],
    description: 'A farm boy joins the Rebellion to rescue a princess and defeat an evil empire.',
  },
  {
    title: 'Get Out',
    year: 2017,
    genres: ['horror', 'thriller', 'mystery'],
    description: 'A young man meets his girlfriend\'s family and uncovers a disturbing secret.',
  },
  {
    title: 'La La Land',
    year: 2016,
    genres: ['romance', 'drama', 'musical'],
    description: 'An aspiring actress and a jazz musician chase their dreams in Los Angeles.',
  },
  {
    title: 'Toy Story',
    year: 1995,
    genres: ['animation', 'family', 'adventure'],
    description: 'Toys come to life when their owner is not around and embark on a wild journey.',
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    genres: ['action', 'thriller', 'crime'],
    description: 'Batman must stop the Joker from unleashing chaos across Gotham City.',
  },
  {
    title: 'The Social Network',
    year: 2010,
    genres: ['drama', 'biography', 'technology'],
    description: 'The founding of Facebook leads to friendship, lawsuits, and ambition.',
  },
  {
    title: 'Parasite',
    year: 2019,
    genres: ['drama', 'thriller', 'mystery'],
    description: 'Two families from different classes collide with shocking consequences.',
  },
  {
    title: 'Inception',
    year: 2010,
    genres: ['sci-fi', 'thriller', 'action'],
    description: 'A thief enters dreams to steal secrets while racing to complete one final mission.',
  },
  {
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genres: ['comedy', 'adventure', 'drama'],
    description: 'A hotel concierge and his lobby boy become unlikely allies in a theft and murder plot.',
  },
  {
    title: 'Coco',
    year: 2017,
    genres: ['animation', 'family', 'music'],
    description: 'A boy travels to the Land of the Dead to learn his family\'s stories and musical legacy.',
  },
  {
    title: 'Mad Max: Fury Road',
    year: 2015,
    genres: ['action', 'adventure', 'sci-fi'],
    description: 'Two rebels try to survive a high-speed chase across a post-apocalyptic wasteland.',
  },
  {
    title: 'A Beautiful Mind',
    year: 2001,
    genres: ['biography', 'drama', 'history'],
    description: 'A brilliant mathematician battles inner demons while making a historic discovery.',
  },
  {
    title: 'Crazy Rich Asians',
    year: 2018,
    genres: ['romance', 'comedy', 'drama'],
    description: 'A woman meets her boyfriend\'s wealthy family in Singapore and faces cultural pressure.',
  },
  {
    title: 'Hidden Figures',
    year: 2016,
    genres: ['history', 'drama', 'biography'],
    description: 'Three female mathematicians play a key role in NASA\'s early space missions.',
  },
  {
    title: 'The Conjuring',
    year: 2013,
    genres: ['horror', 'mystery', 'thriller'],
    description: 'Paranormal investigators help a family terrorized by a dark presence in their farmhouse.',
  },
]

const suggestions = [
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
]

function App() {
  const [query, setQuery] = useState('fantasy')
  const [user, setUser] = useState(null)
  const [authMode, setAuthMode] = useState('login')
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const filteredMovies = useMemo(() => {
    const search = query.trim().toLowerCase()
    if (!search) return movies

    const terms = search.split(/[.,\s]+/).filter(Boolean)
    return movies.filter((movie) =>
      terms.every(
        (term) =>
          movie.title.toLowerCase().includes(term) ||
          movie.genres.some((genre) => genre.toLowerCase().includes(term))
      )
    )
  }, [query])

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    if (!loginData.email || !loginData.password) {
      setError('Please enter both email and password.')
      return
    }
    setUser({ name: loginData.email.split('@')[0], email: loginData.email })
    setError('')
  }

  const handleSignupSubmit = (event) => {
    event.preventDefault()
    if (!signupData.name || !signupData.email || !signupData.password) {
      setError('Please fill in all signup fields.')
      return
    }
    setUser({ name: signupData.name, email: signupData.email })
    setError('')
  }

  const handleLogout = () => {
    setUser(null)
    setAuthMode('login')
    setLoginData({ email: '', password: '' })
    setSignupData({ name: '', email: '', password: '' })
    setQuery('fantasy')
    setError('')
  }

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
                setAuthMode('login')
                setError('')
              }}
            >
              Login
            </button>
            <button
              type="button"
              className={authMode === 'signup' ? 'auth-tab active' : 'auth-tab'}
              onClick={() => {
                setAuthMode('signup')
                setError('')
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
    )
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
          <input
            id="genre-search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type fantasy, adventure, comedy..."
          />

          <div className="suggestions-row">
            <span>Try:</span>
            {suggestions.map((suggestion) => (
              <button key={suggestion} type="button" className="genre-chip" onClick={() => setQuery(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>
        </section>

        <section className="results-panel">
          <div className="results-header">
            <div>
              <h2>Suggested movies</h2>
              <p>Genres matching: <strong>{query || 'all'}</strong></p>
            </div>
            <p>{filteredMovies.length} result{filteredMovies.length === 1 ? '' : 's'} found</p>
          </div>

          {filteredMovies.length === 0 ? (
            <div className="empty-state">
              <p>No movies matched your search.</p>
              <p>Try another genre such as <strong>horror</strong>, <strong>comedy</strong>, or <strong>biography</strong>.</p>
            </div>
          ) : (
            <div className="movie-grid">
              {filteredMovies.map((movie) => (
                <article key={movie.title} className="movie-card">
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
  )
}

export default App
