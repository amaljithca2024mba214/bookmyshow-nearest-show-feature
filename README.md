# BookMyShow – “Find Nearest Show” Feature Proposal

## Overview
“Find Nearest Show” is a discovery and booking feature designed to reduce user drop-offs when a movie is not available in the user’s current city.  
The feature helps users discover nearby cities/cinemas where the movie is playing, compare distance and show timings, and directly book tickets.


---

## 🚀 Interactive Prototype

This repository includes a fully functional React.js prototype demonstrating the complete user flow:

**Features:**
- 5 interactive screens with full navigation
- Real cinema data (Nagpur, Bhubaneswar, Hyderabad)
- Seat selection with dynamic pricing
- Outstation travel notification banner
- Location permission flow
- Booking confirmation with travel notes

**Access the Code:**
- React component: `/src/BookMyShowPrototype.jsx`
- Styling: `/src/styles.css`

---

## 6. Future Scope & Enhancement Roadmap

Here are the planned enhancements to maximize user engagement and business value:

### Phase 2 Enhancements

#### A. Real-Time APIs Integration
- **Google Maps API**: Display actual travel times, traffic conditions, and multiple route options (car, bus, train)
- **Cinema Partners API**: Real-time seat availability and dynamic pricing
- **Location Services**: Accurate GPS-based cinema discovery with radius-based filtering

#### B. Travel Ecosystem Integration
- **Uber/Ola Deep Links**: One-tap ride booking with pre-filled source and destination
- **RedBus Integration**: Bus booking directly from BookMyShow with pre-filled route and date
- **Hotel Partnerships**: Optional hotel booking suggestions for longer journeys (400+ km)
- **Travel Guides**: Local recommendations and attractions near the cinema city

#### C. Smart Notifications
- **Push Alerts**: "Notify me when [Movie] comes to [Home City]" with smart scheduling
- **Personalization**: ML-based recommendations for similar regional movies
- **Price Drops**: Notify users of discounted tickets in nearby cities
- **Availability Alerts**: Real-time seat availability notifications

#### D. Social & Sharing Features
- **Group Booking Links**: Share trip plans with friends; auto-sync selections
- **Social Integration**: Share to WhatsApp, Instagram Stories with movie poster and cinema details
- **Referral Program**: Earn rewards when friends book via shared outstation plans
- **Travel Companion Matching**: Find other users traveling to the same city for the same show

#### E. Advanced Filtering & Discovery
- **Expandable Radius**: Smart slider (100 km to 600 km) with cost/time trade-off visualization
- **Language-Specific Search**: Filter by dubbed/subtitled options (Hindi, English, Malayalam, etc.)
- **Cinema Experience Filters**: IMAX, 4DX, Premium, Budget options
- **Show Time Optimization**: Smart suggestions based on travel time + arrival buffer

#### F. Payment & Loyalty
- **Outstation Discounts**: Special pricing for travelers (e.g., "Book outstation, save 10%")
- **Travel Bundle Discounts**: Combo deals on movie + transport + hotel
- **Loyalty Points**: Double points for outstation bookings to encourage adoption
- **Flexible Payments**: EMI options for higher-priced tickets + travel bundles

#### G. Analytics & Insights
- **User Insights**: Track which regional movies have highest cross-city demand
- **Operator Insights**: Help cinema partners optimize shows based on incoming users
- **Demand Forecasting**: Predict surges for regional releases to prep capacity

#### H. Accessibility & Inclusivity
- **Multi-Language Support**: Hindi, Tamil, Telugu, Kannada, Marathi, Bengali
- **Accessibility Mode**: Larger fonts, voice-guided navigation, text-to-speech
- **Offline Mode**: Cache cinema lists for offline browsing in low connectivity areas

### Phase 3 (Long-term)
- **AR Try-On**: Visualize seating experience with stadium-view AR
- **Video Streaming Fallback**: "Can't travel? Stream the movie here" link to BookMyShow Stream
- **Travel Insurance**: Optional micro-insurance for trip cancellation
- **Corporate Outings**: Group travel packages for team outings

---

## 📊 Expected Impact

### User Metrics
- **Reduce Drop-off Rate**: Convert 15-20% of "no shows" searches into outstation bookings
- **Increase AOV**: 25-30% higher ticket price due to premium cinemas in bigger cities
- **Improve Retention**: Users more likely to return for future releases
- **Cross-sell Success**: 40-50% adoption of travel integration products

### Business Impact
- **Regional Cinema Growth**: 2-3x increase in ticket sales for niche language films
- **New Revenue Streams**: Commissions from Ola/Uber, RedBus, hotel partnerships
- **Market Expansion**: Unlock demand in Tier 2/3 cities with limited cinema offerings
- **Competitive Moat**: First-mover advantage in outstation cinema discovery in India

---

## 1. User Journey Description

### Complete End-to-End Flow

**Starting point**: User in Raipur opens BookMyShow app, searches for a newly released Malayalam movie.

**Search Initiation**
- User enters movie title (e.g., "Premam", a Malayalam release)
- App detects the movie is not available in Raipur

**Discovery of "Find Nearest Show"**
- Movie detail page loads with message: "No shows in Raipur"
- Prominent CTA button displayed: "Find nearest show"
- Alternatively, on search results: inline message + secondary CTA

**Location Permission**
- User taps "Find nearest show"
- Permission screen appears with three options:
  - "Use my location" (GPS-based)
  - "Enter pin code" (manual)
  - "Select city" (dropdown)

**Nearest Cinemas Discovery**
- List of nearest cities/cinemas appears, sorted by:
  - Distance from user
  - Earliest available showtime
- Each card shows:
  - City & cinema name
  - Distance in km
  - Travel time estimate
  - Up to 3 next showtimes
  - Language options (Malayalam, Hindi dubbed, etc.)

**Selection & Show Booking**
- User taps a cinema card
- Standard show & seat selection screen loads
- Banner reminder: "Outstation show – travelling from Raipur"

**Confirmation & Post-Booking**
- Booking confirmation displays all details
- Note: "You're travelling from Raipur. Plan your travel accordingly."
- Optional actions: Get directions, Share plan, Notify if available in home city

---

## 2. Screen-by-Screen Wireframe Description

### Screen A: Home/Movie Search (Entry Point)

**Layout:**
- Header: Raipur city selector
- Search bar: "Search movies or events"
- Content: Grid/list of available movies

**State: Movie Not Found**
- Movie card or title appears
- Below title: Gray text: "No shows in Raipur"
- Primary CTA button (Red, BookMyShow brand): "Find nearest show"
- Optional: Secondary text: "This movie isn't in Raipur yet. Want to travel?"

**Key Components:**
- Movie poster/image
- Movie title
- "No shows" message
- CTA button with travel icon

### Screen B: Search Results (Alternative Entry Point)

**Layout:**
- Search bar (with input: "Premam" or similar Malayalam movie)
- Message banner: "This movie isn't in Raipur yet. Want to travel to watch it?"
- Secondary CTA: "Find nearest show" (outlined button)

**Key Components:**
- Search query display
- Informational banner (light yellow/gray background)
- Secondary CTA button

### Screen C: Location Permission / Manual Selection

**Layout:**
- Title: "Where are you now?"
- Subtitle: "To find nearby shows, tell us your location."
- Three distinct option buttons:
  1. Use my location (Primary option with GPS icon)
  2. Enter pin code (Input field)
  3. Select city (Dropdown selector)

**Key Components:**
- Title & subtitle
- Three option buttons/sections
- Input field (on "Enter pin code" selection)
- Dropdown or modal (on "Select city" selection)

**Microcopy:**
- Permission prompt: "BookMyShow needs your location to find the nearest cinemas. We'll use it only for this search."
- Fallback: "Don't want to share? You can select your city or pin code manually."

**State: Permission Denied**
- Show message: "Location access denied. Please select your city or enter a pin code manually."

### Screen D: Nearest Shows List (Main Discovery Screen)

**Layout:**
- Header: Back arrow, Title: "Nearest shows for [Movie Title]", Subtitle: "Sorted by distance"
- Horizontal filter chips: Language options: Malayalam | Hindi (Dubbed) | English
- Scrollable card list (main content)
- Footer: Loading state or error state (if applicable)

**Cinema Card Structure (Example: Nagpur MoviePlex)**

- City name (bold, large): NAGPUR
- Cinema name(s): MoviePlex Cinemas & IMAX
- Distance badge: 280 km
- Travel time: ~4.5 hours by road
- Next 3 showtimes: 10:30 AM | 2:15 PM | 6:45 PM
- Language: Malayalam (Original)
- "Book now" CTA button (secondary/outline style)

**Sorting Logic:**
- Distance (nearest first)
- Earliest available showtime (within same distance tier)

**State: No Results**
- Icon: Empty state illustration
- Heading: "No nearby shows found"
- Message: "This movie isn't available within 400 km. Try:"
  - Expanding your search radius
  - Checking BookMyShow Stream for online viewing
  - Setting a notification for your city
- CTA: "Notify me when available in Raipur"

### Screen E: Show & Seat Selection (Standard + Outstation Badge)

**Layout:**
- Full standard BookMyShow show/seat selection screen
- Addition: Top banner (sticky, red background)
- "Outstation show - travelling from Raipur"
- Showtime selector (standard)
- Seat selection (standard)
- Price & summary (standard)
- "Proceed to payment" button (standard)

**Key Modifications:**
- Banner should be persistent (always visible while scrolling)
- Banner color: BookMyShow red with white text
- Include small travel icon

### Screen F: Booking Confirmation

**Layout:**
- Header: "Booking confirmed!"
- Movie: Premam (Malayalam)
- Date & Time: Dec 24, 2025 | 7:00 PM
- Cinema: MoviePlex Cinemas & IMAX, Nagpur
- Seats: E5, E6, E7
- "Get directions" button
- Important note: "You're travelling from Raipur. Plan your travel accordingly."
- Booking reference and amount paid

**Optional Post-Booking Actions**
- "Share this plan with friends"
- "Notify me if this comes to Raipur"
- "Plan my trip" (links to RedBus, Ola, Uber)

---

## 3. UI Copy Suggestions

### Primary CTAs
- "Find nearest show"
- "Book now"
- "Proceed to payment"

### Secondary CTAs
- "Get directions"
- "Share this plan"
- "Notify me in Raipur"
- "Plan my trip"

### Permission Screen Copy
- Title: "Where are you now?"
- Subtitle: "To find the nearest cinemas, tell us your location."
- Permission prompt: "BookMyShow needs your location to find the nearest cinemas. We'll use it only for this search."
- Fallback: "Don't want to share? You can select your city or pin code manually."

### Nearest Shows Screen Copy
- Header: "Nearest shows for [Movie Title]"
- Empty state: "No nearby shows found within 400 km. Try:"
  - Expanding your search radius
  - Checking BookMyShow Stream for online viewing
  - Setting a notification for your city

### Outstation Context Copy
- Banner: "Outstation show – travelling from Raipur. Plan your travel accordingly"
- Confirmation note: "You're travelling from Raipur. Plan your travel accordingly."

---

## 4. Prototype Specification

### Navigation Map / Screen Linking

Home/Search → Movie not in city → "Find nearest show" button → Location Permission Screen → "Use my location" → Nearest Shows List → Cinema card tap → Show Selection → Proceed to payment → Booking Confirmation

### Transitions & Animations

**Location Permission → Nearest Shows List**
- Fade-in transition (200ms)
- Loading spinner while fetching cinema data

**Nearest Shows List → Show Selection**
- Slide-up modal (250ms) with cinema header fixed

**Card Tap States**
- Subtle shadow increase on tap
- Brief highlight color (light gray background)

### Prototyping Checklist for Figma / Framer / ProtoPie

- [ ] Frames/Artboards created for all 6 screens
- [ ] Component library (buttons, cards, input fields) matching BookMyShow design
- [ ] Interactions:
  - "Find nearest show" button → Location Permission screen
  - "Use my location" → Nearest Shows List (with loading state)
  - "Enter pin code" → Input interaction → Nearest Shows List
  - Cinema card tap → Show Selection screen
  - Language filter chips → Filter list (update on current screen)
  - "Book now" → Show & Seat Selection
  - "Proceed to payment" → Confirmation
  - "Get directions" → External link (or map placeholder)
  - "Share" → Share sheet (can be image/link)
  - "Notify me" → Toggle animation

- [ ] States for each component:
  - Buttons: Default, hover, active, disabled
  - Cards: Default, pressed, loaded
  - Input fields: Empty, focused, filled, error
  - Toggles: On, off

- [ ] Responsive behavior (mobile 375px to 600px widths)
- [ ] Dummy data populated:
  - 3-4 cinema cards with realistic data
  - Showtimes, distances, travel times
  - Language labels

- [ ] Micro-interactions:
  - Loading spinners
  - Error states with retry
  - Success checkmarks (confirmation)

- [ ] Test flows:
  - Happy path: Search → Find nearest → Book
  - Error path: No results → Expand radius
  - Permission denied path: Manual city select

---

## 5. Optional Enhancement Ideas

### A. "Plan Your Trip" Add-On
- Concept: Post-booking, provide quick links to travel partners
- Integration: "Book a ride" → Ola / Uber (deep link)
- Integration: "Book a bus" → RedBus
- Integration: "Book a hotel" → Stay booking link
- Location: Bottom of confirmation screen, CTA: "Plan my trip"

### B. Save Alert / Notification
- Concept: "Notify me if this movie comes to Raipur"
- Placement: Post-booking confirmation screen
- Benefit: Increases retention and repeat visits

### C. Share Plan with Friends
- Concept: "Share this outstation plan with friends"
- Placement: Confirmation screen
- Options: WhatsApp, email, Telegram
- Benefit: Encourages group bookings

### D. Distance/Radius Filter
- Concept: Allow users to expand search radius if no results found
- Placement: Empty state screen or top of Nearest Shows list
- Options: Slider (100 km to 600 km) or Chips (200 km / 400 km / 600 km)

### E. Language Filter
- Concept: Pre-filter by language preference
- Placement: Horizontal chips above cinema list
- Enhancement: Save language preference for future searches

### F. Price Display & Comparison
- Concept: Show lowest ticket price per cinema
- Placement: Cinema card (bottom right)
- Format: "From Rs 250" or "Rs 250-550"

### G. Cinema Reviews / Ratings
- Concept: Show cinema ratings (4.5/5) on card
- Placement: Cinema card, below cinema name
- Benefit: Increases confidence in cinema choice

---

## Business Impact Summary

✅ **Increased Bookings**: Redirect user demand from unavailable cities to nearby cinemas
✅ **Regional Cinema Growth**: Boost ticket sales for niche/regional language movies
✅ **User Retention**: Give users more reasons to stay in the app and complete bookings
✅ **Cross-Sell Opportunity**: Link to travel apps (Ola, RedBus) for commission revenue
✅ **Competitive Advantage**: No competing app offers this feature for Indian moviegoers

This proposal is ready for handoff to design and engineering teams. All screens, flows, copy, and implementation details are included.
This proposal focuses on **regional and niche language movies**, where users are often willing to travel 100–300 km for a theatrical experience.

---

## 1. Problem Statement

### Current Experience
- Users select a city (e.g., Raipur) and browse available movies.
- If a searched movie is not playing in that city, the app shows **“No shows available”**.
- Users typically drop off at this stage.

### User Problem
- Users are willing to travel to nearby cities to watch certain movies.
- The app currently does not allow users to:
  - Discover nearby cities where the movie is playing.
  - Compare distance, travel time, and show timings.
  - Seamlessly book tickets for outstation cinemas.

### Business Opportunity
- Redirect unmet demand to nearby cities where the movie is available.
- Increase total ticket sales for regional and niche language films.
- Improve user satisfaction, retention, and perceived usefulness of the app.

---

## 2. Target User Persona

- **Age:** 22–35
- **Location:** Tier-2 / Tier-3 cities (e.g., Raipur)
- **Behavior:** Frequent movie-goer, fan of regional cinema (Malayalam, Tamil, Korean, Anime)
- **Motivation:** Willing to travel for a special theatrical release
- **Goal:** Quickly find where the movie is playing and book tickets with minimal effort

---

## 3. Feature Concept: “Find Nearest Show”

A contextual discovery and booking option that appears whenever a movie is not available in the user’s selected city.

---

## 4. Entry Points

### A. Movie Detail Page
When no shows are available in the current city:
- Message: **“No shows in Raipur”**
- Primary CTA button: **“Find nearest show”**

### B. Search Results Page
When a searched movie is unavailable:
- Inline message:  
  **“Not available in Raipur. Want to travel?”**
- Secondary CTA: **“Find nearest show”**

---

## 5. User Flow

### Step 1: Location Permission / Selection
Prompt the user to determine their starting location.

Options:
- **Use my location**
- **Enter pin code**
- **Select city**

Fallback:
- If location permission is denied, default to manual city selection.

---

### Step 2: Nearest Shows List
Display a list of nearby cities and cinemas where the movie is playing.

Sorting logic:
1. Distance from user
2. Earliest available showtime

Each card displays:
- City name
- Cinema name(s)
- Distance (km)
- Estimated travel time (e.g., “~2.5 hrs by road”)
- Next 3 available showtimes

Filters:
- Language (Original / Dubbed)
- Distance radius (optional)

---

### Step 3: Show & Seat Selection
- Standard BookMyShow showtime and seat selection flow.
- Banner or label:  
  **“Outstation show – travelling from Raipur”**

---

### Step 4: Booking Confirmation
Confirmation screen includes:
- Movie name
- City and cinema
- Showtime and seats
- Map icon / direction placeholder
- Informational note:  
  **“You’re travelling from Raipur. Plan your travel accordingly.”**

---

## 6. Edge Cases

### No Nearby Shows
If no shows are found within a reasonable radius (e.g., 300–400 km):
- Message:  
  **“No nearby shows found within 400 km.”**
- Suggested actions:
  - Expand search radius
  - Check BookMyShow Stream
  - Set an alert for local release

### Multiple Language Versions
- Allow filtering by language (e.g., Malayalam, Hindi dubbed).

---

## 7. UI & UX Guidelines

- **Platform:** Mobile-first
- **Visual Style:** Consistent with BookMyShow
  - Red as primary accent
  - Card-based layouts
  - Clean typography
- **Microcopy Tone:** Friendly, supportive, travel-aware

Example microcopy:
- “This movie isn’t in Raipur yet. Want to travel to watch it?”
- “These are the nearest cities where it’s playing.”

---

## 8. Screens to Design (Prototype)

1. Home/Search screen (movie not available in Raipur)
2. Movie detail page with “Find nearest show” CTA
3. Location permission / selection screen
4. Nearest shows list screen
5. Show & seat selection screen (with outstation context)
6. Booking confirmation screen

---

## 9. Prototype Specification

### Navigation
- Movie Detail → “Find nearest show” → Location selection
- Location selection → Nearest shows list
- Nearest shows list → Showtime & seat selection
- Seat selection → Booking confirmation

### Interactions
- Card tap opens cinema showtimes
- Simple slide or fade transitions
- Loading skeletons for nearby city search

---

## 10. Optional Enhancements

- **Notify me when available in Raipur**
- **Share travel plan with friends**
- **Plan your trip** (deep links to Maps / travel apps)
- Save preferred outstation cinemas

---

## 11. Success Metrics (Future)
- Reduction in drop-offs on “no shows” pages
- Incremental ticket sales from outstation bookings
- Feature CTR on “Find nearest show”
- Repeat usage for regional movie fans

---

## Conclusion
“Find Nearest Show” transforms a dead-end experience into a revenue-generating, user-friendly journey.  
By helping users act on their willingness to travel, BookMyShow can unlock latent demand while strengthening its position as the go-to platform for theatrical discovery across India.
