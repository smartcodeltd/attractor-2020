import 'jest';

import { AttractorApp } from './AttractorApp';
import { Attractor, Location, Network, Subscriber } from './core';

describe('AttractorApp', () => {

    it(`notifies a Subscriber of a local deal when she's within range of an attractor`, async () => {

        const attractorApp = new AttractorApp(new Network());

        const attractor = new Attractor(new Location(0,0), 10,`Best coffee at Joe's`);
        attractorApp.register(attractor);

        const alice = new Subscriber(new Location(0,10));
        attractorApp.subscribe(alice);

        await attractorApp.run(1)

        expect(alice.announcementsHeard()).toHaveLength(1);
        expect(alice.announcementsHeard()[0].message).toEqual(`Best coffee at Joe's`);
    });
});
