import { useState, useEffect } from 'react'
import RideTracker from './components/RideTracker'
import RideList from './components/RideList'
import './App.css'

function App() {
  const [rides, setRides] = useState([])

  // Load rides from localStorage on component mount
  useEffect(() => {
    const savedRides = localStorage.getItem('motorcycle-rides')
    if (savedRides) {
      try {
        const parsedRides = JSON.parse(savedRides)
        setRides(parsedRides)
      } catch (error) {
        console.error('Error loading saved rides:', error)
      }
    }
  }, [])

  // Save rides to localStorage whenever rides change
  useEffect(() => {
    if (rides.length > 0) {
      localStorage.setItem('motorcycle-rides', JSON.stringify(rides))
    }
  }, [rides])

  const addRide = (newRide) => {
    setRides(prevRides => {
      // Add new ride and sort by date (newest first)
      const updatedRides = [newRide, ...prevRides]
      return updatedRides.sort((a, b) => new Date(b.date) - new Date(a.date))
    })
  }

  const deleteRide = (rideId) => {
    if (window.confirm('Are you sure you want to delete this ride?')) {
      setRides(prevRides => prevRides.filter(ride => ride.id !== rideId))
    }
  }

  const clearAllRides = () => {
    if (window.confirm('Are you sure you want to delete all rides? This action cannot be undone.')) {
      setRides([])
      localStorage.removeItem('motorcycle-rides')
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏍️ Ridr</h1>
        <p className="app-subtitle">Track your motorcycle odometer readings</p>
      </header>

      <main className="app-main">
        <RideTracker onAddRide={addRide} />
        
        <div className="divider"></div>
        
        <div className="ride-list-section">
          <RideList rides={rides} onDeleteRide={deleteRide} />
          
          {rides.length > 0 && (
            <div className="actions">
              <button 
                className="clear-all-btn"
                onClick={clearAllRides}
              >
                Clear All Rides
              </button>
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
