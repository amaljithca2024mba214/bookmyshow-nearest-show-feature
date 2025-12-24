import React, { useState } from 'react';
import './styles.css';

const BookMyShowPrototype = () => {
  const [currentScreen, setCurrentScreen] = useState('search');
  const [selectedCity, setSelectedCity] = useState('Raipur');
  const [movieTitle] = useState('Premam (Malayalam)');
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedShowtime, setSelectedShowtime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const nearestShows = [
    {
      id: 1,
      city: 'Nagpur',
      cinema: 'MoviePlex Cinemas & IMAX',
      distance: '280 km',
      travelTime: '~4.5 hours by road',
      showtimes: ['10:30 AM', '2:15 PM', '6:45 PM'],
      language: 'Malayalam (Original)',
      price: '250',
      rating: 4.5
    },
    {
      id: 2,
      city: 'Bhubaneswar',
      cinema: 'PVR Cinemas Nexus',
      distance: '320 km',
      travelTime: '~5 hours by road',
      showtimes: ['11:00 AM', '3:30 PM', '7:00 PM'],
      language: 'Malayalam (Original)',
      price: '280',
      rating: 4.3
    },
    {
      id: 3,
      city: 'Hyderabad',
      cinema: 'IMAX Hyderabad',
      distance: '520 km',
      travelTime: '~8 hours by road',
      showtimes: ['12:00 PM', '4:15 PM', '8:30 PM'],
      language: 'Malayalam (Original)',
      price: '300',
      rating: 4.7
    }
  ];

  const cinemaSeats = [
    ['A1', 'A2', 'A3', 'A4', 'A5'],
    ['B1', 'B2', 'B3', 'B4', 'B5'],
    ['C1', 'C2', 'C3', 'C4', 'C5'],
    ['D1', 'D2', 'D3', 'D4', 'D5']
  ];

  // Screen 1: Search
  const renderSearchScreen = () => (
    <div className="screen search-screen">
      <div className="header">
        <h1 className="app-title">BookMyShow</h1>
        <div className="city-selector">{selectedCity} ▼</div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search movies or events..." className="search-bar" />
      </div>
      <div className="movie-card">
        <div className="movie-poster">🎬</div>
        <h2>{movieTitle}</h2>
        <p className="no-shows-message">❌ No shows in {selectedCity}</p>
        <button 
          className="btn btn-primary"
          onClick={() => setCurrentScreen('location')}
        >
          🌍 Find Nearest Show
        </button>
      </div>
    </div>
  );

  // Screen 2: Location Permission
  const renderLocationScreen = () => (
    <div className="screen location-screen">
      <div className="header"><h1>Find Nearest Show</h1></div>
      <div className="location-container">
        <h2>Where are you now?</h2>
        <p>To find nearby shows, tell us your location.</p>
        <button 
          className="btn btn-location"
          onClick={() => setCurrentScreen('nearest')}
        >
          📍 Use My Location
        </button>
        <button className="btn btn-secondary">📮 Enter Pin Code</button>
        <button className="btn btn-secondary">🏙️ Select City</button>
      </div>
    </div>
  );

  // Screen 3: Nearest Shows List
  const renderNearestShowsScreen = () => (
    <div className="screen nearest-shows-screen">
      <div className="header">
        <button className="back-btn" onClick={() => setCurrentScreen('location')}>←</button>
        <h1>Nearest shows for {movieTitle}</h1>
        <p className="subtitle">Sorted by distance</p>
      </div>
      <div className="filters">
        <button className="filter-chip active">Malayalam</button>
        <button className="filter-chip">Hindi (Dubbed)</button>
        <button className="filter-chip">English</button>
      </div>
      <div className="cinema-list">
        {nearestShows.map((show) => (
          <div 
            key={show.id} 
            className="cinema-card"
            onClick={() => {setSelectedCinema(show); setCurrentScreen('seats');}}
          >
            <div className="cinema-header">
              <h3>{show.city}</h3>
              <span className="distance-badge">{show.distance}</span>
            </div>
            <p className="cinema-name">{show.cinema}</p>
            <p className="travel-time">🚗 {show.travelTime}</p>
            <div className="showtimes">
              {show.showtimes.map((time) => (
                <span key={time} className="showtime-chip">{time}</span>
              ))}
            </div>
            <p className="language">{show.language}</p>
            <button className="btn btn-secondary">Book Now →</button>
          </div>
        ))}
      </div>
    </div>
  );

  // Screen 4: Seat Selection
  const renderSeatSelectionScreen = () => (
    <div className="screen seat-screen">
      <div className="outstation-banner">
        ⚠️ Outstation show – travelling from {selectedCity}
      </div>
      <div className="header"><h1>Select Seats</h1></div>
      {selectedCinema && (
        <div className="cinema-info">
          <p><strong>{selectedCinema.cinema}</strong>, {selectedCinema.city}</p>
          <p>{selectedShowtime || 'Select showtime'}</p>
        </div>
      )}
      <div className="showtimes-selector">
        <h3>Select Showtime:</h3>
        {selectedCinema && selectedCinema.showtimes.map((time) => (
          <button 
            key={time}
            className={`showtime-btn ${selectedShowtime === time ? 'active' : ''}`}
            onClick={() => setSelectedShowtime(time)}
          >
            {time}
          </button>
        ))}
      </div>
      <div className="seats-container">
        <p className="screen-label">SCREEN</p>
        {cinemaSeats.map((row, rowIdx) => (
          <div key={rowIdx} className="seat-row">
            {row.map((seat) => (
              <button
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                onClick={() => {
                  if (selectedSeats.includes(seat)) {
                    setSelectedSeats(selectedSeats.filter(s => s !== seat));
                  } else {
                    setSelectedSeats([...selectedSeats, seat]);
                  }
                }}
              >
                {seat}
              </button>
            ))}
          </div>
        ))}
      </div>
      <div className="price-summary">
        <p>Seats Selected: {selectedSeats.length}</p>
        <p>Total: Rs {(selectedSeats.length * 250).toFixed(2)}</p>
      </div>
      <button 
        className="btn btn-primary" 
        onClick={() => setCurrentScreen('confirmation')}
        disabled={selectedSeats.length === 0}
      >
        Proceed to Payment
      </button>
    </div>
  );

  // Screen 5: Booking Confirmation
  const renderConfirmationScreen = () => (
    <div className="screen confirmation-screen">
      <div className="header"><h1>✓ Booking Confirmed!</h1></div>
      <div className="confirmation-card">
        <div className="success-icon">✓</div>
        <h2>Your booking is confirmed</h2>
        <div className="booking-details">
          <p><strong>Movie:</strong> {movieTitle}</p>
          {selectedCinema && (
            <>
              <p><strong>Cinema:</strong> {selectedCinema.cinema}</p>
              <p><strong>City:</strong> {selectedCinema.city}</p>
              <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
              <p><strong>Showtime:</strong> {selectedShowtime}</p>
            </>
          )}
        </div>
        <div className="travel-note">
          <p>You're travelling from {selectedCity}. Plan your travel accordingly.</p>
        </div>
        <div className="action-buttons">
          <button className="btn btn-secondary">Get Directions</button>
          <button className="btn btn-secondary">Share Plan</button>
          <button className="btn btn-secondary">Notify Me</button>
        </div>
        <button 
          className="btn btn-primary"
          onClick={() => {
            setCurrentScreen('search');
            setSelectedCinema(null);
            setSelectedShowtime(null);
            setSelectedSeats([]);
          }}
        >
          Book Another Movie
        </button>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {currentScreen === 'search' && renderSearchScreen()}
      {currentScreen === 'location' && renderLocationScreen()}
      {currentScreen === 'nearest' && renderNearestShowsScreen()}
      {currentScreen === 'seats' && renderSeatSelectionScreen()}
      {currentScreen === 'confirmation' && renderConfirmationScreen()}
    </div>
  );
};

export default BookMyShowPrototype;
