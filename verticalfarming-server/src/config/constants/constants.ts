export class Constants {
    static MONGO_URI: string = process.env.MONGO_URI;
    static PORT: number = parseInt(process.env.PORT, 10);
}

