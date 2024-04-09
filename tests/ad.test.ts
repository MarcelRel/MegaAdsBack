import {AdRecord} from "../records/ad.record";
import {pool} from "../utils/db";
import {AdEntity} from "../types";

afterAll(async () => {
   await pool.end();
});

test('AdRecord.getOne returns data from database from one entry.', async () => {

    const ad = await AdRecord.getOne('56178f76-f682-11ee-bf66-9ede08a490f7');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('56178f76-f682-11ee-bf66-9ede08a490f7');
    expect(ad.name).toBe('Testowa');

});

test('AdRecord.getOne returns null from database for unexisting entry.', async () => {

    const ad = await AdRecord.getOne('00000000-0000-0000-0000-000000000000');

    expect(ad).toBeNull();

});

test('AdRecord.findAll returns array of found entries.', async () => {

    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();

});

test('AdRecord.findAll returns array of found entries when searching for "a".', async () => {

    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();

});

test('AdRecord.findAll returns array when searching for something that does not exist.', async () => {

    const ads = await AdRecord.findAll('-----------------');

    expect(ads).toEqual([]);

});

test('AdRecord.findAll returns smaller amount of data.', async () => {

    const ads = await AdRecord.findAll('');

    expect((ads[0] as AdEntity).price).toBeUndefined();
    expect((ads[0] as AdEntity).description).toBeUndefined();

});