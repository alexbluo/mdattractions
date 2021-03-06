# Maryland Tourist Attractions Searcher

## Overview

Website that suggests tourist attractions in Maryland based on user-defined attributes. Filter through 1,000+ attractions using full-text, faceted, and geospatial search. Interact with Google Maps to locate attractions within a chosen distance of you or another attraction.

## Tech Stack

|         Technology          |       Purpose        |
| :-------------------------: | :------------------: |
|           MongoDB           |         DBMS         |
|           Express           |       REST API       |
|            React            |  Frontend Framework  |
|           Node.js           |   Backend Runtime    |
|         TailwindCSS         |    CSS Framework     |
| Redux Toolkit + React Redux |     Global State     |
|     Axios + React Query     | Fetching and Caching |
|            Vite             |      Build Tool      |
|           Docker            |   Containerization   |
|  Heroku, Google Cloud Run   |      Deployment      |

## Changes Since March 2022

Below is a list of features, technologies, and fixes which have been or will be implemented, with more recent and higher priority ones at the top:

- [ ] React concurrent for handling input fields that query on input (search and distance)
  - turns out this was not needed for optimization
- [ ] Machine learning using user behavior when entering typos like Google search "did you mean"
  - definitely not enough time or data to get this done, but fun idea
- [x] Code splitting and lazy loading
- [x] Refactor into smart and dumb components
- [x] Show info about selected marker
- [x] Button to toggle showing all attractions on the map
- [x] Detection of whether the user is within 200 kilometers of an attraction
- [x] Full-text search for filter and map pages
- [x] Rescrape all data and insert to database in a different format
- [x] Deploy to Heroku, AWS, and GCP (serverless/PaaS)
- [x] Easy clearing of checked filters
- [x] Docker because it sounds fun
- [x] Update to internal checkbox system
- [x] Responsive layout
- [x] Cool landing page
- [x] Fix performance when multiple markers are rendered at once
- [x] Add maps to attraction detail pages
- [x] Replace current library for Google Maps API with one that supports both React and InfoWindows
- [x] Redesign of map page UI and modals system
- [x] Move from plain CSS to TailwindCSS, CRA/Webpack to Vite, React Context API to Redux Toolkit + React Redux, Fetch API to Axios + React Query, template literals to classnames, npm to yarn
- [x] Performance optimizations, bug fixes, refactorings

## Dynamic Backup

The following commands use the [MongoDB Database Tools](https://www.mongodb.com/docs/database-tools/) to dynamically backup the database:

`mongodump --uri mongodb+srv://alexbluo@mdcp.opzuc.mongodb.net/attractionsDB -o ~/mongodump`

`mongorestore --uri mongodb+srv://alexbluo@mdcp.opzuc.mongodb.net/attractionsDB -d attractionsDB ~/mongodump/attractionsDB`

## Sourcing Documentation

### Libraries

- [MongoDB](https://www.mongodb.com/docs/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [React](https://reactjs.org/docs/getting-started.html)
- [Node.js](https://nodejs.org/en/docs/)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [React Query](https://react-query.tanstack.com/overview)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [React Redux](https://react-redux.js.org/introduction/getting-started)
- [Vite](https://vitejs.dev/guide/)
- [React Router DOM](https://reactrouter.com/docs/en/v6)
- [React Google Maps API](https://react-google-maps-api-docs.netlify.app/)
- [autoprefixer](https://github.com/postcss/autoprefixer)
- [axios](https://axios-http.com/docs/intro)
- [classnames](https://github.com/JedWatson/classnames)
- [dotenv](https://github.com/motdotla/dotenv)
- [postcss](https://github.com/postcss/postcss)
- [qs](https://github.com/ljharb/qs)
- [rc-slider](https://github.com/schrodinger/rc-slider)

### Development

- [Docker](https://docs.docker.com/)
- [ESLint](https://eslint.org/docs/user-guide/configuring/)
- [Google Cloud Run](https://cloud.google.com/run/docs)
- [Heroku](https://devcenter.heroku.com/categories/reference)
- [Morgan](https://github.com/expressjs/morgan)
- [Nodemon](https://github.com/remy/nodemon#nodemon)
- [Prettier](https://prettier.io/docs/en/index.html)

### Images

- [Crab](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2q8w7q8o0y3a9w7_seafood-graphic-royalty-free-sad-huge-sad-crab%2F&psig=AOvVaw2jx0wHz9fOfhmNjyJzsKxc&ust=1651669215591000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJjBjbmxw_cCFQAAAAAdAAAAABAD)
- [Data Source](https://www.visitmaryland.org/things-to-do/attractions)
- [Image for... no image](https://depositphotos.com/vector-images/no-image-available.html)
