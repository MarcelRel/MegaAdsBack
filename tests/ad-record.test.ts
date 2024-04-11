import {AdRecord} from "../records/ad.record";

const defaultObj = {
    name: 'Test Name',
    description: 'Test Description',
    price: 0,
    url: 'http://localhost:3000',
    lat: 0,
    lon: 0,
};

test('Can build AdRecord', () => {
   const ad = new AdRecord(defaultObj);

   expect(ad.name).toBe('Test Name');
   expect(ad.description).toBe('Test Description');
});

test('Validates invalid price', () => {
    expect(() => new AdRecord({
        ...defaultObj,
        price: -3,
    })).toThrow('Price is required and should be between 0 and 9999999');
});

//@TODO: Check all the validations