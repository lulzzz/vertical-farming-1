export class Constants {
    static MONGO_URI: string = process.env.MONGO_URI;
    static VF_URL: string = process.env.VF_URL;
    static PORT: number = parseInt(process.env.PORT, 10);
}

