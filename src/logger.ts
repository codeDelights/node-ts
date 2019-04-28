import os from 'os';
import { name, version } from '../package.json';

export class Logger {
    static osInfo(): void {
        console.log({
            Platform : process.platform,
            CPUs : os.cpus().length
        });
    }
    static packageInfo(): void {
        console.log({
            Name : name,
            Version : version
        });
    }
}