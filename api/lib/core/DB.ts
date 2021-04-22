import { connect, connection } from "mongoose";
import { DbConfig } from "./@types/DB";


export default class DB {
    private _config: DbConfig;
    private _defaultConfig: DbConfig = {
        dbUri: "",
        onConnectError: (err: any) => console.log(`Db connection failed: ${err.message}`),
        onSuccess: () => console.log("Db connection successful!"),
        onError: (err: any) => console.log(`A database error occured: ${err.message}`),
    };
 
    constructor(config: Partial<DbConfig> = {}) {
        const {
            DB_SCHEME,
            DB_HOST,
            DB_USERNAME,
            DB_PASSWORD,
            DB_PORT,
            DB_DATABASE
        } = process.env;
        const dbPort = DB_PORT ? `:${DB_PORT}` : "";
        const dbAuth = DB_PASSWORD ? `${DB_USERNAME}:${DB_PASSWORD}@` : "";
        const dbUri = `${DB_SCHEME}://${dbAuth}${DB_HOST}${dbPort}/${DB_DATABASE}`;

        this._config = {
            ...this._defaultConfig,
            ...config,
            dbUri
        };
    }

    public async connect() {
        try {
            const success = await connect(this._config.dbUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            });

            if (success) this._config.onSuccess();

            connection.on("error", (err: any) => this._config.onError(err));
        } catch (err) {
            this._config.onConnectError(err);
        }
    }
}
