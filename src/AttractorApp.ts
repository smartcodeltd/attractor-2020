import { Attractor, Network, Subscriber } from './core';

export class AttractorApp {

    constructor(private readonly network: Network) {
    }

    register(attractor: Attractor) {
        this.network.register(attractor);
    }

    subscribe(subscriber: Subscriber) {
        this.network.subscribe(subscriber);
    }

    run(maxNumberOfCycles: number = Infinity): Promise<void> {
        let currentCycle = 0;

        return new Promise((resolve, reject) => {
            const id = setInterval(() => {
                if (++currentCycle >= maxNumberOfCycles) {
                    clearInterval(id);
                    resolve();
                }

                this.network.makeAnnouncements();
            }, 10);
        });
    }

}
