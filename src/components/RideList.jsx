const RideList = ({ rides, onDeleteRide }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num) => {
    return num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  };

  const calculateDistance = (currentRide, previousRide) => {
    if (!previousRide) return null;
    const distance = currentRide.odometer - previousRide.odometer;
    return distance > 0 ? distance : null;
  };

  if (rides.length === 0) {
    return (
      <div className="ride-list">
        <h2>Ride History</h2>
        <div className="empty-state">
          <p>No rides recorded yet. Add your first ride above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ride-list">
      <h2>Ride History</h2>
      <div className="rides-stats">
        <div className="stat">
          <span className="stat-label">Total Rides:</span>
          <span className="stat-value">{rides.length}</span>
        </div>
        {rides.length > 1 && (
          <>
            <div className="stat">
              <span className="stat-label">Total Distance:</span>
              <span className="stat-value">
                {formatNumber(rides[0].odometer - rides[rides.length - 1].odometer)} km
              </span>
            </div>
            <div className="stat">
              <span className="stat-label">Latest Odometer:</span>
              <span className="stat-value">{formatNumber(rides[0].odometer)} km</span>
            </div>
          </>
        )}
      </div>

      <div className="rides-container">
        {rides.map((ride, index) => {
          const previousRide = rides[index + 1];
          const distance = calculateDistance(ride, previousRide);
          
          return (
            <div key={ride.id} className="ride-card">
              <div className="ride-header">
                <div className="ride-date">{formatDate(ride.date)}</div>
                <button 
                  className="delete-btn"
                  onClick={() => onDeleteRide(ride.id)}
                  title="Delete this ride"
                >
                  ×
                </button>
              </div>
              
              <div className="ride-details">
                <div className="ride-odometer">
                  <span className="label">Odometer:</span>
                  <span className="value">{formatNumber(ride.odometer)} km</span>
                </div>
                
                {distance && (
                  <div className="ride-distance">
                    <span className="label">Distance from previous:</span>
                    <span className="value distance-highlight">{formatNumber(distance)} km</span>
                  </div>
                )}
                
                {ride.location && (
                  <div className="ride-location">
                    <span className="label">Location:</span>
                    <span className="value">{ride.location}</span>
                  </div>
                )}
                
                {ride.notes && (
                  <div className="ride-notes">
                    <span className="label">Notes:</span>
                    <span className="value">{ride.notes}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RideList;