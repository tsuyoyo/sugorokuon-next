export interface Song {
  title: string;
  onAirTime: string;
  artist?: Artist;
  thumbnails?: {
    large: string;
    medium: string;
    small: string;
  };
}

export interface Artist {
  id: string;
  name: string;
  nameEn?: string;
  nameKana?: string;
}
