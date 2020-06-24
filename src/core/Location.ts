export class Location {
    constructor(public readonly x: number, public readonly y: number) {}

    distanceFrom(another: Location): number {
        // todo: calculate distance from another Location

        return 0;
    }

    plusX(delta: number): Location {
        return new Location(this.x + delta, this.y);
    }

    plusY(delta: number): Location {
        return new Location(this.x, this.y + delta);
    }
}
