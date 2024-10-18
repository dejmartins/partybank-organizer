export interface IEventDTO {
  address: string;
  contact_information: string;
  date: string;
  description: string;
  end_time: string;
  event_theme: string;
  image_url: string;
  lat: string;
  lng: string;
  name: string;
  organizer_id: number;
  series_id: number;
  start_time: string;
  tickets: ITicketDTO[];
  venue: string;
  visibility: string;
}

export interface ITicketDTO {
  capacity: number;
  colour: string;
  event_id: number;
  is_transfer_payment_fees_to_guest: boolean;
  name: string;
  price: number;
  price_change_date: string;
  price_change_time: string;
  purchase_limit: number;
  stock: string;
  ticket_perks: string[];
  ticket_sale_end_date: string;
  ticket_sale_start_date: string;
  ticket_sale_start_time: string;
  ticket_sales_end_time: string;
  ticket_type: string;
}
