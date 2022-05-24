export interface Message {
  message: string;
}

export interface User {
  id: number;
  username: string;
  country: string;
  password: string;
}

export interface Authenticate {
  username: string;
  password: string;
}
