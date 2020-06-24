import { Network } from './Network';
import { Location } from './Location';
import { Announcement } from './Announcement';

export class Subscriber {
    private readonly announcements: Announcement[] = [];

    constructor(
        public readonly id: string,
        private currentLocation: Location,
    ) {
    }

    moveTo(newLocation: Location) {
        this.currentLocation = newLocation;
    }

    location(): Location {
        return this.currentLocation;
    }

    notifyOf(announcement: Announcement) {
        this.announcements.push(announcement);
    }

    announcementsHeard(): Announcement[] {
        return this.announcements;
    }
}
