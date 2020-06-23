import { Subscriber } from './Subscriber';
import { Attractor } from './Attractor';

export class Network {
    private readonly attractors: Attractor[] = [];
    private readonly subscribers: Subscriber[] = [];

    register(attractor: Attractor) {
        this.attractors.push(attractor);
    }

    subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    makeAnnouncements() {
        this.subscribers.forEach(subscriber => {

            this.attractors.forEach(attractor => {

                if (attractor.shouldNotify(subscriber)) {
                    attractor.notify(subscriber);
                }
            });
        });
    }
}
