export const series = [
  {
    "id": "series_001",
    "name": "Summer Party Series",
    "description": "A collection of the hottest summer parties and events in the city.",
    "image_url": "https://res.cloudinary.com/drddoxnsi/image/upload/v1720742531/PARTYBANK/rave_cmqhw8.png",
    "events": [
      {
        "id": "event_001",
        "name": "Beach Bash",
        "location": {
          "city": "Lagos",
          "state": "Lagos State",
          "country": "Nigeria"
        },
        "venue": "Elegushi Beach",
        "date": "2024-12-15",
        "startTime": "14:00",
        "image": null,
        "status": "upcoming"
      },
      {
        "id": "event_002",
        "name": "Summer Night Rave",
        "location": {
          "city": "Abuja",
          "state": "Federal Capital Territory",
          "country": "Nigeria"
        },
        "venue": "The Dome",
        "date": "2024-07-01",
        "startTime": "21:00",
        "image": null,
        "status": "active"
      }
    ]
  },
  {
    "id": "series_002",
    "name": "Music Festival Series",
    "description": "Join us for an unforgettable journey through the best music festivals.",
    "image_url": "https://res.cloudinary.com/drddoxnsi/image/upload/v1718653091/PARTYBANK/attendee-landing-bg_pbptyw.avif",
    "events": [
      {
        "id": "event_003",
        "name": "Rock and Roll Fest",
        "location": {
          "city": "New York City",
          "state": "New York",
          "country": "USA"
        },
        "venue": "Central Park",
        "date": "2024-09-05",
        "startTime": "15:00",
        "image": null,
        "status": "upcoming"
      },
      {
        "id": "event_004",
        "name": "Jazz in the City",
        "location": {
          "city": "Chicago",
          "state": "Illinois",
          "country": "USA"
        },
        "venue": "Millennium Park",
        "date": "2024-06-21",
        "startTime": "18:30",
        "image": null,
        "status": "past"
      }
    ]
  },
  {
    "id": "series_003",
    "name": "Food & Drink Series",
    "description": "Taste the best flavors in town with our food and drink series events.",
    "image_url": null,
    "events": [
      {
        "id": "event_005",
        "name": "Gourmet Food Festival",
        "location": {
          "city": "Paris",
          "state": "Île-de-France",
          "country": "France"
        },
        "venue": "Parc des Expositions",
        "date": "2024-08-11",
        "startTime": "11:00",
        "image": null,
        "status": "upcoming"
      },
      {
        "id": "event_006",
        "name": "Wine & Cheese Tasting",
        "location": {
          "city": "Cape Town",
          "state": "Western Cape",
          "country": "South Africa"
        },
        "venue": "V&A Waterfront",
        "date": "2024-05-15",
        "startTime": "13:00",
        "image": null,
        "status": "past"
      }
    ]
  },
  {
    "id": "series_005",
    "name": "Art & Culture Series",
    "description": "Dive into the vibrant world of art and culture with our curated events.",
    "image_url": null,
    "events": [
      {
        "id": "event_007",
        "name": "Contemporary Art Fair",
        "location": {
          "city": "Berlin",
          "state": "Berlin",
          "country": "Germany"
        },
        "venue": "Martin-Gropius-Bau",
        "date": "2024-11-02",
        "startTime": "10:00",
        "image": null,
        "status": "upcoming"
      },
      {
        "id": "event_008",
        "name": "Cultural Heritage Exhibition",
        "location": {
          "city": "Rome",
          "state": "Lazio",
          "country": "Italy"
        },
        "venue": "Palazzo delle Esposizioni",
        "date": "2024-03-29",
        "startTime": "12:00",
        "image": null,
        "status": "active"
      }
    ]
  }
];


export const events = [
    {
      id: 1,
      name: "Lagos Fashion Week 2024",
      series: "Fashion Forward Series",
      location: {
        city: "Lagos",
        state: "Lagos State",
        country: "Nigeria"
      },
      venue: "Eko Convention Center",
      date: "2024-10-15",
      startTime: "15:00",
      image: null,
      status: "upcoming"
    },
    {
      id: 2,
      name: "Tech Innovators Conference",
      series: "Tech Talks",
      location: {
        city: "San Francisco",
        state: "California",
        country: "USA"
      },
      venue: "San Francisco Convention Center",
      date: "2023-11-05",
      startTime: "10:00",
      image: null,
      status: "past"
    },
    {
      id: 3,
      name: "Abuja Music Fest",
      series: "Vibes and Rhythms",
      location: {
        city: "Abuja",
        state: "Federal Capital Territory",
        country: "Nigeria"
      },
      venue: "Eagle Square",
      date: "2024-08-20",
      startTime: "18:00",
      image: null,
      status: "upcoming"
    },
    {
      id: 4,
      name: "Global Health Summit",
      series: "Health & Wellness Series",
      location: {
        city: "New York City",
        state: "New York",
        country: "USA"
      },
      venue: "Javits Center",
      date: "2024-04-10",
      startTime: "09:00",
      image: null,
      status: "upcoming"
    },
    {
      id: 5,
      name: "Art in the Park Exhibition",
      series: "Creativity Unleashed",
      location: {
        city: "Lagos",
        state: "Lagos State",
        country: "Nigeria"
      },
      venue: "Freedom Park",
      date: "2023-09-18",
      startTime: "11:00",
      image: null,
      status: "past"
    },
    {
      id: 6,
      name: "Paris Tech Expo",
      series: "Tech World",
      location: {
        city: "Paris",
        state: "Île-de-France",
        country: "France"
      },
      venue: "Paris Expo Porte de Versailles",
      date: "2024-05-22",
      startTime: "10:00",
      image: null,
      status: "active"
    },
    {
      id: 7,
      name: "Accra Food Festival",
      series: "Gourmet Delights",
      location: {
        city: "Accra",
        state: "Greater Accra",
        country: "Ghana"
      },
      venue: "Independence Square",
      date: "2024-07-05",
      startTime: "12:00",
      image: null,
      status: "upcoming"
    },
    {
      id: 8,
      name: "London Startup Meet",
      series: "Entrepreneur Connect",
      location: {
        city: "London",
        state: "London",
        country: "UK"
      },
      venue: "Excel London",
      date: "2023-12-02",
      startTime: "14:00",
      image: null,
      status: "past"
    },
    {
      id: 9,
      name: "Berlin Art Biennale",
      series: "Art & Culture Series",
      location: {
        city: "Berlin",
        state: "Berlin",
        country: "Germany"
      },
      venue: "Martin-Gropius-Bau",
      date: "2024-06-30",
      startTime: "16:00",
      image: null,
      status: "active"
    },
    {
      id: 10,
      name: "Dubai Fashion Forward",
      series: "Fashion Forward Series",
      location: {
        city: "Dubai",
        state: "Dubai",
        country: "UAE"
      },
      venue: "Madinat Jumeirah",
      date: "2023-10-20",
      startTime: "17:00",
      image: null,
      status: "past"
    }
];
