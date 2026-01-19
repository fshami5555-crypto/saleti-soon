
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
