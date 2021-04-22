export interface JSONRes {
    status: JSONResStatus;
    data?: any;
    code?: number;
};

export type JSONResStatus = "success" | "error" | "warning";
