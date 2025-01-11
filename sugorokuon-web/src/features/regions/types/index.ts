export interface Region {
  regionId?: string;
  regionName?: string;
  stations: Station[];
}

export interface Station {
  id: string;
  name: string | null;
  logos: StationLogo[];
  banner: string;
  url: string;
}

export interface StationLogo {
  width: number;
  height: number;
  url: string;
}
