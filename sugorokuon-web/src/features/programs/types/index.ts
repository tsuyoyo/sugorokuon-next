export interface Program {
  id: string;
  title: string;
  url: string | null;
  start_time: Date;
  end_time: Date;
  personalities: string | null;
  image: string | null;
  desc: string | null;
  info: string | null;
}
