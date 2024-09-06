import { runCLICmd } from '../helpers/tests';
import { jest } from '@jest/globals';

describe('CLI', () => {

  test('should handle valid city/state and zip codes', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const stdout = await runCLICmd(['60651', 'Portland, OR']);

    expect(stdout).toContain('Locality: Portland');
    expect(stdout).toContain('State: Oregon');
    expect(stdout).toContain('Latitude: 45.5202471');
    expect(stdout).toContain('Longitude: -122.674194');

    expect(stdout).toContain('Locality: Chicago');
    expect(stdout).toContain('Zip code: 60651');
    expect(stdout).toContain('Latitude: 41.9025');
    expect(stdout).toContain('Longitude: -87.7393');

    spy.mockRestore();
  });

  test('should handle correctly formatted but invalid city/state and zip codes', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const stdout = await runCLICmd(['99999', 'Fantasy Land, AA']);

    expect(stdout).toContain('The city/state Fantasy Land, AA could not be found');
    expect(stdout).toContain('The zip code 99999 could not be found!');

    spy.mockRestore();
  })

  test('should handle incorrectly formatted city/state and zip codes', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const stdout = await runCLICmd(['Like... on the moon', '999999999']);

    expect(stdout).toContain('Like... on the moon" is not in a correct zip code or city/state format');
    expect(stdout).toContain('999999999" is not in a correct zip code or city/state format');

    spy.mockRestore();
  })

  test('should handle groups of valid, invalid, and correctly and incorrectly formatted arguments', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const stdout = await runCLICmd(['60651', 'Portland, OR', '99999', 'Fantasy Land, AA', 'Like... on the moon', '999999999']);

    expect(stdout).toContain('Locality: Portland');
    expect(stdout).toContain('Locality: Chicago');
    expect(stdout).toContain('The city/state Fantasy Land, AA could not be found');
    expect(stdout).toContain('The zip code 99999 could not be found!');
    expect(stdout).toContain('Like... on the moon" is not in a correct zip code or city/state format');
    expect(stdout).toContain('999999999" is not in a correct zip code or city/state format');

    spy.mockRestore();
  });

  test('should handle empty arguments', async () => {
    const spy = jest.spyOn(console, 'log').mockImplementation();
    const stdout = await runCLICmd([]);

    expect(stdout).toContain('No arguments found!');

    spy.mockRestore();
  });
});
