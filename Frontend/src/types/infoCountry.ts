export interface Info {
    country:        string;
    borders:        Border[];
    populationData: PopulationDatum[];
    flagUrl:        string;
}

export interface Border {
    commonName:   string;
    officialName: string;
    countryCode:  string;
    region:       string;
    borders:      null;
}

export interface PopulationDatum {
    year:  number;
    value: number;
}
