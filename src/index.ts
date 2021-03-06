import axios, { AxiosInstance } from 'axios';

const DEFAULT_BASE_URL = 'https://main-roman-n-xftfaobya50dx7jw-gtw.qovery.io';

type ServerResponse = {
    romanNumber: string;
    decimalNumber: number;
    userType: string;
};

class Client {
    serverUrl: string;
    http: AxiosInstance;
    apiKey?: string;

    constructor(apiKey?: string, serverUrl: string = DEFAULT_BASE_URL, http?: AxiosInstance) {
        this.serverUrl = serverUrl;
        this.http = http || axios.create();
        this.apiKey = apiKey;
    }

    async toRomanNumeral(number: number): Promise<string> {
        const { romanNumber } = await this.callRemote(number, 'roman');
        return romanNumber;
    }

    async toDecimalNumber(number: string): Promise<number> {
        const { decimalNumber } = await this.callRemote(number, 'decimal');
        return decimalNumber;
    }

    protected async callRemote(number: number | string, type: 'roman' | 'decimal'): Promise<ServerResponse> {
        try {
            const { data } = await this.http.get<ServerResponse>(`${this.serverUrl}/api/v1/to-${type}`, {
                params: { number, api_key: this.apiKey },
            });
            return data;
        } catch (e) {
            if (e.response && e.response.data && e.response.data.message) {
                throw new Error(e.response.data.message);
            } else {
                throw e;
            }
        }
    }
}

export { Client, ServerResponse };
