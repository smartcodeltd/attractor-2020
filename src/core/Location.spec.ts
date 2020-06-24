import { Location } from './Location';

describe('Location', function () {

    describe('when calculating distance from another location', () => {

        it('knows when both locations are in the same place', () => {
            const a = new Location(0, 0);
            const b = new Location(0, 0);

            expect(a.distanceFrom(b)).toEqual(0);
        });

    });

    it('can calculate a new location relative to the original one', () => {
        const original = new Location(2, 1);

        expect(original.plusX(10).x).toEqual(12);
        expect(original.plusY(3).y).toEqual(4);
    });
});
