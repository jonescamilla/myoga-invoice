export type invoice = {
  // id: string;
  car: inv_car;
  customer: inv_customer;
  ticket: inv_ticket;
};

export type inv_car = {
  id?: string;
  year: string;
  color: string;
  type: string;
  make: string;
  license: string;
  vin: string;
  milage: string;
  engine_size?: string;
  tags?: string;
};

export type inv_customer = {
  id?: string;
  first_name: string;
  last_name: string;
  number: string;
  number_2?: string;
  address?: string;
  email?: string;
};

export type inv_ticket = {
  total: string;
  sub_total: string;
  service: (inv_part | inv_labor | undefined)[];
  misc_charges: string;
  save_for_package_job: boolean;
  tax_exempt: boolean;
};

export type inv_part = {
  quantity_used: number;
  total: string;
  price: string;
  description: string;
};

export type inv_labor = {
  hours_worked: number;
  total: string;
  price: string;
  description: string;
};

export type client = {
  id: string;
  first_name: string;
  last_name: string;
  number: string;
  number_2: string;
  address: string;
  email: string;
  invoices: invoice[];
};
