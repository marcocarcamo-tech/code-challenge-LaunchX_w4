const Reader = require("../../lib/utils/Reader");

describe("Unit test for Reader", ()=>{
    test("1. Check not null data", ()=>{
        const data = Reader.readJsonFile("explorers.json");
        expect(data).not.toBe(null);
    });
    test("2. Returns an object", ()=>{
        const data = Reader.readJsonFile("explorers.json");
        expect(typeof data).toBe("object");
    });
});