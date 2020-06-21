import 'jest';

import { Attractor } from '../src/Attractor';

describe('Attractor', () => {

    it('works', () => {

        const attractor = new Attractor();

        expect(attractor.greet()).toEqual('Hello world!');
    });
});
