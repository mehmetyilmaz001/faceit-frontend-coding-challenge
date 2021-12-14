export interface Participants {
  current: number;
  max: number;
}

export interface Tournament {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: Participants;
  startDate: Date;
}
