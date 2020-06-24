import 'jest';

import { AttractorApp } from './AttractorApp';
import { Attractor, Location, Network, Subscriber } from './core';

describe('AttractorApp', () => {

    let app: AttractorApp,
        alice: Subscriber,
        joe: Attractor;

    const
        joesLocation = new Location(0, 0),
        joesRange = 10;

    beforeEach(() => {
        app = new AttractorApp(new Network());

        joe = new Attractor(joesLocation, joesRange);
        app.register(joe);

        alice = new Subscriber('Alice', new Location(Infinity, Infinity));
        app.subscribe(alice);
    })

    describe(`notifies the Subscriber of a local deal when she`, () => {

        it(`is within range of an attractor`, async () => {

            alice.moveTo(joesLocation.plusX(joesRange))
            joe.announce(`Best coffee at Joe's`);

            await app.run(1);

            expect(alice.announcementsHeard()).toHaveLength(1);
            expect(alice.announcementsHeard()[0].message).toEqual(`Best coffee at Joe's`);
        });
    });
});
