export type RootStackParamList = {
    Home: undefined;
    Settings: undefined;
    Details: {title: string};
    ItemDetails: {
        title: string; 
        stock: number; 
        content: string;
    };
}

export type Routes = {
  Home: undefined;
  News: undefined;
  Settings: undefined;
  WhereAmI: undefined;
  WhatsAroundMe: undefined;
  WeatherAroundMe: undefined;
};