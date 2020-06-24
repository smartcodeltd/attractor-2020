import { Location } from './Location';
import { Announcement } from './Announcement';
import { Subscriber } from './Subscriber';

export class Attractor {
    private announcement: Announcement | undefined;

    constructor(
        private readonly currentLocation: Location,
        private readonly maxReach: number,
    ) {
    }

    announce(message: string) {
        this.announcement = new Announcement(message, new Date());
    }

    shouldNotify(subscriber: Subscriber) {
        return !! this.announcement
            && this.currentLocation.distanceFrom(subscriber.location()) <= this.maxReach;
    }

    notify(subscriber: Subscriber) {
        subscriber.notifyOf(this.announcement as Announcement);
    }
}
