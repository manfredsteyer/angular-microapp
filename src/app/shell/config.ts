
export interface ClientConfig {
    loaded: boolean;
    src: string | string[];
    element: string;
    route: string;
}

export interface ClientConfigs {
    [name: string]: ClientConfig
}

export interface ShellConfig {
    outletId?: string;
    initialRoute: string;
    preload: boolean;
    clients: ClientConfigs;
}