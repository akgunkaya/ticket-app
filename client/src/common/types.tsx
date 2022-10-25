export type EventProps = {
  id: number;
  title: string;
  location: string;
  start_time: Date;
  end_time: Date;
};

export type EventArrayProps = {
  events: {
    id: number;
    title: string;
    location: string;
    start_time: Date;
    end_time: Date;
  }[];
};
