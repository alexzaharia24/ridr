# Ridr - Motorcycle Odometer Tracker

Ridr is a React + Vite web application that allows motorcycle riders to track their odometer readings with dates, locations, and notes. The app calculates distances between rides and provides statistics on total rides and distances traveled.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Setup and Dependencies
- Install dependencies: `npm install` -- takes 5 seconds
- No additional SDK or system dependencies required beyond Node.js and npm

### Building and Testing
- **Build the application**: `npm run build` -- takes 2 seconds, NEVER CANCEL
- **Lint the code**: `npm run lint` -- takes 1 second, always run before committing
- **CRITICAL**: There are no unit tests configured in this project. Do not attempt to run `npm test` or similar commands.

### Running the Application
- **Development server**: `npm run dev` -- starts on http://localhost:5173/
- **Preview built application**: `npm run preview` -- starts on http://localhost:4173/
- Both servers start in under 1 second

### Build Times and Timeouts
- npm install: 5 seconds (safe timeout: 60 seconds)
- npm run build: 2 seconds (safe timeout: 30 seconds) 
- npm run lint: 1 second (safe timeout: 30 seconds)
- All commands are very fast, but NEVER CANCEL any build process

## Validation Requirements

### Manual Testing Scenarios
**ALWAYS test these complete user scenarios after making changes:**

1. **Basic Add Ride Flow:**
   - Start dev server with `npm run dev`
   - Navigate to http://localhost:5173/
   - Fill in odometer reading (e.g., "15420.5")
   - Fill in location (e.g., "Home")
   - Add optional notes (e.g., "Test ride")
   - Click "Add Ride" button
   - Verify ride appears in history with correct data

2. **Distance Calculation Flow:**
   - Add first ride with odometer reading (e.g., 15420.5)
   - Add second ride with higher odometer reading (e.g., 15520.2)
   - Verify that "Distance from previous" shows correct calculation (99.7 km)
   - Verify total distance and latest odometer stats update correctly

3. **Data Persistence Flow:**
   - Add several rides
   - Refresh the browser page
   - Verify all rides persist (uses localStorage)

4. **Delete Functionality:**
   - Click the "×" button on a ride
   - Confirm deletion in the alert dialog
   - Verify ride is removed from history

### Pre-Commit Validation
- **ALWAYS run** `npm run lint` before committing changes
- **ALWAYS build** with `npm run build` to ensure no build errors
- **ALWAYS test** at least the basic add ride flow manually

## Project Structure

### Key Files and Directories
```
/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Main application styles
│   ├── main.jsx             # Application entry point
│   ├── index.css            # Global styles
│   └── components/
│       ├── RideTracker.jsx  # Form component for adding rides
│       └── RideList.jsx     # Component for displaying ride history
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and npm scripts
├── vite.config.js           # Vite build configuration
├── eslint.config.js         # ESLint configuration
└── .gitignore               # Git ignore rules
```

### Important Code Locations
- **Ride data structure**: Defined in `RideTracker.jsx` (lines 19-26)
- **LocalStorage handling**: In `App.jsx` (useEffect hooks, lines 10-27)
- **Distance calculation**: In `RideList.jsx` (lines 15-19)
- **Form validation**: In `RideTracker.jsx` (lines 14-17)

## Common Tasks

### Adding New Features
- Modify components in `src/components/`
- Update styles in `src/App.css` or `src/index.css`
- Always test manually using the validation scenarios above
- Run `npm run lint` to check for style issues

### Debugging Issues
- Check browser console for React errors
- Use React DevTools (will be suggested in console)
- Vite provides hot module reloading for fast development

### Build and Deployment
- `npm run build` creates production files in `dist/` directory
- `npm run preview` serves the built application locally
- No special deployment configuration required

## Technology Stack
- **Frontend**: React 19.1.1 with functional components and hooks
- **Build Tool**: Vite 7.1.2 with React plugin
- **Styling**: Plain CSS (no framework)
- **State Management**: React useState and useEffect hooks
- **Data Persistence**: Browser localStorage
- **Linting**: ESLint with React-specific rules

## Critical Notes
- **No backend**: This is a pure frontend application using localStorage
- **No database**: All data is stored in browser localStorage
- **No testing framework**: No unit tests exist, rely on manual testing
- **Mobile responsive**: Application works on mobile devices
- **Browser compatibility**: Modern browsers with ES2020+ support required

## Development Workflow
1. Make changes to source files
2. View changes instantly via Vite hot reload
3. Test manually using validation scenarios
4. Run `npm run lint` to check code quality
5. Run `npm run build` to ensure production build works
6. Commit changes after validation

## Troubleshooting
- **Build fails**: Check ESLint errors with `npm run lint`
- **App doesn't load**: Verify dev server is running on correct port (5173)
- **Data not persisting**: Check browser localStorage in DevTools
- **Hot reload not working**: Restart dev server with Ctrl+C then `npm run dev`