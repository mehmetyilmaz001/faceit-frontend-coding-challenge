export interface Participants {
  current: number;
  max: number;
}

export interface Tournement {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: Participants;
  startDate: Date;
}
