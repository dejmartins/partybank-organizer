export type Event = {
    id: number;
    name: string;
    series: string;
    description: string;
    location: {
        city: string;
        state: string;
        country: string;
    };
    venue: string;
    date: string;
    startTime: string;
    image: null | string;
    status: string;
    privacy: string;
    publishedStatus: string;
    createdAt: string;
    analytics: {
        totalTicketSales: number;
        totalTicketsSold: number;
        totalValidatedTickets: number;
        totalCancelledTickets: number;
        attendees: Array<{
            email: string;
            purchasedAt: string;
            ticketID: string;
            ticketName: string;
        }>
    };
};
