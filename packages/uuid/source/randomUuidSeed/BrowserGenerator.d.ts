import { UuidEnv } from '../types';
export declare class BrowserGenerator implements UuidEnv {
    private browserCrypto;
    constructor();
    randomUuidSeed: () => [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
}
