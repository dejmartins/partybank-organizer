export type IEventResponseArr = IEventResponse[];

export interface IEventResponse {
  id: number;
  series_id: number;
  message: string;
  event_name: string;
  location: Location;
  date: string;
  time: string;
  contact_information: string;
  description: string;
  status: string;
  event_theme: string;
  venue: string;
  image_url: string;
  event_reference: string;
  created_by: string;
  tickets: IEventTicketRes[];
  publication_state: string;
}

export interface Location {
  lng: string;
  lat: string;
  address: string;
}

export interface IEventTicketRes {
  ticket_type: string;
  name: string;
  capacity: number;
  stock: string;
  price: number;
  purchase_limit: number;
  ticket_reference: string;
  colour: string;
  ticket_sale_end_date: string;
  ticket_sales_end_time: string;
  ticket_sale_start_date: string;
  ticket_sale_start_time: string;
  ticket_perks: string[];
}
