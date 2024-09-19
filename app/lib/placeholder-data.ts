export const series = [
  {
    "id": "series_001",
    "name": "Summer Party Series",
    "description": "A collection of the hottest summer parties and events in the city.",
    "image_url": "https://res.cloudinary.com/drddoxnsi/image/upload/v1720742531/PARTYBANK/rave_cmqhw8.png",
    "events": [
      // {
      //   "id": "event_001",
      //   "name": "Beach Bash",
      //   "location": {
      //     "city": "Lagos",
      //     "state": "Lagos State",
      //     "country": "Nigeria"
      //   },
      //   "venue": "Elegushi Beach",
      //   "date": "2024-12-15",
      //   "startTime": "14:00",
      //   "image": null,
      //   "status": "upcoming"
      // },
      // {
      //   "id": "event_002",
      //   "name": "Summer Night Rave",
      //   "location": {
      //     "city": "Abuja",
      //     "state": "Federal Capital Territory",
      //     "country": "Nigeria"
      //   },
      //   "venue": "The Dome",
      //   "date": "2024-07-01",
      //   "startTime": "21:00",
      //   "image": null,
      //   "status": "active"
      // }
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
    description: "The premier fashion event in Lagos showcasing the best of African fashion talent.",
    location: {
      city: "Lagos",
      state: "Lagos State",
      country: "Nigeria"
    },
    venue: "Eko Convention Center",
    date: "2024-10-15",
    startTime: "15:00",
    image: null,
    status: "upcoming",
    privacy: "public",
    publishedStatus: "draft",
    createdAt: "2024-05-10T14:30:00Z",
    analytics: {
      totalTicketSales: 500000,
      totalTicketsSold: 200,
      totalValidatedTickets: 180,
      totalCancelledTickets: 20,
      attendees: [
        {
          email: "john.doe@example.com",
          purchasedAt: "2024-06-01T12:15:00Z",
          ticketID: "TCK12345",
          ticketName: "VIP"
        },
        {
          email: "jane.smith@example.com",
          purchasedAt: "2024-06-02T10:45:00Z",
          ticketID: "TCK12346",
          ticketName: "Early Bird"
        },
        {
          email: "alice.brown@example.com",
          purchasedAt: "2024-06-05T09:30:00Z",
          ticketID: "TCK12347",
          ticketName: "Standard"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Tech Innovators Conference",
    series: "Tech Talks",
    description: "An exclusive conference for tech innovators and enthusiasts.",
    location: {
      city: "San Francisco",
      state: "California",
      country: "USA"
    },
    venue: "San Francisco Convention Center",
    date: "2023-11-05",
    startTime: "10:00",
    image: null,
    status: "past",
    privacy: "public",
    publishedStatus: "published",
    createdAt: "2023-06-10T14:00:00Z",
    analytics: {
      totalTicketSales: 700000,
      totalTicketsSold: 350,
      totalValidatedTickets: 330,
      totalCancelledTickets: 20,
      attendees: []
    }
  },
  {
    id: 3,
    name: "Abuja Music Fest",
    series: "Vibes and Rhythms",
    description: "A celebration of Nigerian music with top artists.",
    location: {
      city: "Abuja",
      state: "Federal Capital Territory",
      country: "Nigeria"
    },
    venue: "Eagle Square",
    date: "2024-08-20",
    startTime: "18:00",
    image: null,
    status: "upcoming",
    privacy: "public",
    publishedStatus: "published",
    createdAt: "2024-01-05T12:45:00Z",
    analytics: {
      totalTicketSales: 0,
      totalTicketsSold: 0,
      totalValidatedTickets: 0,
      totalCancelledTickets: 0,
      attendees: []
    }
  },
  {
    id: 4,
    name: "Global Health Summit",
    series: "Health & Wellness Series",
    description: "A summit for health professionals to discuss global health challenges.",
    location: {
      city: "New York City",
      state: "New York",
      country: "USA"
    },
    venue: "Javits Center",
    date: "2024-04-10",
    startTime: "09:00",
    image: null,
    status: "upcoming",
    privacy: "public",
    publishedStatus: "published",
    createdAt: "2023-08-15T09:30:00Z",
    analytics: {
      totalTicketSales: 0,
      totalTicketsSold: 0,
      totalValidatedTickets: 0,
      totalCancelledTickets: 0,
      attendees: []
    }
  },
  {
    id: 5,
    name: "Art in the Park Exhibition",
    series: "Creativity Unleashed",
    description: "A showcase of contemporary art at Freedom Park.",
    location: {
      city: "Lagos",
      state: "Lagos State",
      country: "Nigeria"
    },
    venue: "Freedom Park",
    date: "2023-09-18",
    startTime: "11:00",
    image: null,
    status: "past",
    privacy: "public",
    publishedStatus: "published",
    createdAt: "2023-04-01T15:00:00Z",
    analytics: {
      totalTicketSales: 300000,
      totalTicketsSold: 150,
      totalValidatedTickets: 140,
      totalCancelledTickets: 10,
      attendees: []
    }
  },
  {
    id: 6,
    name: "Paris Tech Expo",
    series: "Tech World",
    description: "The largest tech expo in Paris for showcasing innovative products.",
    location: {
      city: "Paris",
      state: "Île-de-France",
      country: "France"
    },
    venue: "Paris Expo Porte de Versailles",
    date: "2024-05-22",
    startTime: "10:00",
    image: null,
    status: "active",
    privacy: "public",
    publishedStatus: "published",
    createdAt: "2023-11-22T13:00:00Z",
    analytics: {
      totalTicketSales: 1200000,
      totalTicketsSold: 600,
      totalValidatedTickets: 580,
      totalCancelledTickets: 20,
      attendees: []
    }
  },
  {
    id: 7,
    name: "Accra Food Festival",
    series: "Gourmet Delights",
    description: "A vibrant festival of food from across the globe.",
    location: {
      city: "Accra",
      state: "Greater Accra",
      country: "Ghana"
    },
    venue: "Independence Square",
    date: "2024-07-05",
    startTime: "12:00",
    image: null,
    status: "upcoming",
    privacy: "public",
    publishedStatus: "draft",
    createdAt: "2024-03-05T10:00:00Z",
    analytics: {
      totalTicketSales: 0,
      totalTicketsSold: 0,
      totalValidatedTickets: 0,
      totalCancelledTickets: 0,
      attendees: []
    }
  },
  {
    id: 8,
    name: "London Startup Meet",
    series: "Entrepreneur Connect",
    description: "A networking event for tech startups and entrepreneurs in London.",
    location: {
      city: "London",
      state: "London",
      country: "UK"
    },
    venue: "Excel London",
    date: "2023-12-02",
    startTime: "14:00",
    image: null,
    status: "past",
    privacy: "private",
    publishedStatus: "published",
    createdAt: "2023-07-15T11:00:00Z",
    analytics: {
      totalTicketSales: 400000,
      totalTicketsSold: 200,
      totalValidatedTickets: 180,
      totalCancelledTickets: 20,
      attendees: []
    }
  },
  {
    id: 9,
    name: "Berlin Art Biennale",
    series: "Art & Culture Series",
    description: "An exhibition of contemporary art at Berlin's famous Martin-Gropius-Bau.",
    location: {
      city: "Berlin",
      state: "Berlin",
      country: "Germany"
    },
    venue: "Martin-Gropius-Bau",
    date: "2024-06-30",
    startTime: "16:00",
    image: null,
    status: "active",
    privacy: "public",
    publishedStatus: "published",
    createdAt: "2024-01-20T17:00:00Z",
    analytics: {
      totalTicketSales: 1000000,
      totalTicketsSold: 500,
      totalValidatedTickets: 480,
      totalCancelledTickets: 20,
      attendees: []
    }
  },
  {
    id: 10,
    name: "Dubai Fashion Forward",
    series: "Fashion Forward Series",
    description: "A premier fashion event showcasing designers from across the world.",
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "UAE"
    },
    venue: "Madinat Jumeirah",
    date: "2023-10-20",
    startTime: "17:00",
    image: null,
    status: "past",
    privacy: "public",
    publishedStatus: "published",
    createdAt: "2023-03-10T16:00:00Z",
    analytics: {
      totalTicketSales: 700000,
      totalTicketsSold: 350,
      totalValidatedTickets: 330,
      totalCancelledTickets: 20,
      attendees: []
    }
  }
];
