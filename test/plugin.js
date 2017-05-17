import test from 'ava';
import postcss from 'postcss';
import noAnimate from '../lib/postcss-no-animate';
import { readCssFixture } from './fixtures/helper';

test('should append duration and delay with short-handed transition properties', async t => {
  const { input, expected } = await readCssFixture('transition.css');
  const result = await postcss().use(noAnimate()).process(input);
  t.is(result.css, expected);
});

test('should override transition-duration property to zero', async t => {
  const { input, expected } = await readCssFixture('transition-duration.css');
  const result = await postcss().use(noAnimate()).process(input);
  t.is(result.css, expected);
});

test('should override transition-delay property to zero', async t => {
  const { input, expected } = await readCssFixture('transition-delay.css');
  const result = await postcss().use(noAnimate()).process(input);
  t.is(result.css, expected);
});

test('should append duration, count and delay with short-handed animation properties', async t => {
  const { input, expected } = await readCssFixture('animation.css');
  const result = await postcss().use(noAnimate()).process(input);
  t.is(result.css, expected);
});

test('should override animation-duration property to zero', async t => {
  const { input, expected } = await readCssFixture('animation-duration.css');
  const result = await postcss().use(noAnimate()).process(input);
  t.is(result.css, expected);
});

test('should override animation-delay property to zero', async t => {
  const { input, expected } = await readCssFixture('animation-delay.css');
  const result = await postcss().use(noAnimate()).process(input);
  t.is(result.css, expected);
});
