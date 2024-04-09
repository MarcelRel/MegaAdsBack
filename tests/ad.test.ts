import {AdRecord} from "../records/ad.record";

test('AdRecord returns data from database from one entry.', async () => {

    const ad = await AdRecord.getOne('56178f76-f682-11ee-bf66-9ede08a490f7');

    console.log(ad);

    expect(ad).toBeDefined();
    expect(ad.id).toBe('56178f76-f682-11ee-bf66-9ede08a490f7');
    expect(ad.name).toBe('Testowa');

});

test('AdRecord returns null from database for unexisting entry.', async () => {

    const ad = await AdRecord.getOne('00000000-0000-0000-0000-000000000000');

    expect(ad).toBeNull();

});