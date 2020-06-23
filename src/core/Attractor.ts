import { Location } from './Location';
import { Announcement } from './Announcement';
import { Subscriber } from './Subscriber';

export class Attractor {
    constructor(
        private readonly currentLocation: Location,
        private readonly maxReach: number,
        private readonly message: string,
    ) {
    }

    shouldNotify(subscriber: Subscriber) {
        return this.currentLocation.distanceFrom(subscriber.location()) <= this.maxReach;
    }

    notify(subscriber: Subscriber) {
        subscriber.notifyOf(
            new Announcement(this.message, new Date())
        )
    }
}
