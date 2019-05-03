import { UuidEnv } from '../types';
export declare class NodeGenerator implements UuidEnv {
    private nodeCrypto;
    constructor();
    randomUuidSeed: () => [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
}
