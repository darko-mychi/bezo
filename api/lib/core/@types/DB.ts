export interface DbConfig {
    dbUri: string;
    onConnectError: Function;
    onError: Function;
    onSuccess: Function;
};
