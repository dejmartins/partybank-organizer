export interface IEventAnalytics {
  totalTicketSold: number;
  totalTicketSales: number;
  totalTicketBuyers: number;
  totalTicketValidated: number;
  totalTicketNotValidated: number;
  pageDto: IEventAnalyPageData;
}

export interface IEventAnalyPageData {
  status: string;
  data: IEventAttendeesAnaly[];
  hasMore: boolean;
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export interface IEventAttendeesAnaly {
  email: string;
  phoneNumber: any;
  discounted: boolean;
  paymentReference: string;
  ticketNumber: string;
  validated: boolean;
  date: string;
  time: string;
  ticketType: string;
  fullName: string;
  paymentChannel: string;
}

export interface IPagination {
  hasMore: boolean;
  currentPage: number;
  totalPages: number;
  totalItems: number;
}
