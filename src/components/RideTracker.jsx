import { useState } from 'react';

const RideTracker = ({ onAddRide }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    odometer: '',
    location: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.odometer) {
      alert('Please enter the odometer reading');
      return;
    }

    const ride = {
      id: Date.now(),
      date: formData.date,
      odometer: parseFloat(formData.odometer),
      location: formData.location || 'Unknown',
      notes: formData.notes,
      timestamp: new Date().toISOString()
    };

    onAddRide(ride);
    
    // Reset form but keep today's date
    setFormData({
      date: new Date().toISOString().split('T')[0],
      odometer: '',
      location: '',
      notes: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="ride-tracker">
      <h2>Add New Ride</h2>
      <form onSubmit={handleSubmit} className="ride-form">
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="odometer">Odometer Reading (km):</label>
          <input
            type="number"
            id="odometer"
            name="odometer"
            value={formData.odometer}
            onChange={handleChange}
            placeholder="e.g., 15420"
            min="0"
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g., Home, Work, Gas Station"
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Optional notes about this ride..."
            rows="3"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Ride
        </button>
      </form>
    </div>
  );
};

export default RideTracker;