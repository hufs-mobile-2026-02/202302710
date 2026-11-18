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