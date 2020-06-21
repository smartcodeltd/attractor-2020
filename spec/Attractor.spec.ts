import 'mocha';
import { expect } from 'chai';

import { Attractor } from '../src/Attractor';

describe('Attractor', () => {

    it('works', () => {

        const attractor = new Attractor();

        expect(attractor.greet()).to.equal('Hello world!');
    });
});
