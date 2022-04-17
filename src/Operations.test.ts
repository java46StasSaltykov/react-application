import Operations from "./Operations";

const operations = new Operations();
test('sum test', () => {
    expect(operations.sum(2, 2)).toBe(4);
})
test('division test', () => {
    expect(operations.divide(1, 3)).toBeCloseTo(0.33);
})
test('divsion exception', () => {
    expect(() => operations.divide(5, 0)).toThrowError();
}) 
test('convert test', () => {
    const ar = [1, 2];
    const expected = [2, 4];
    expect(operations.convert(ar, (n: number) => n * 2)).toStrictEqual(expected);
})
test('check predicate', () => {
    expect(operations.checkPredicate((n1, n2) => n1 > n2, 4, 2)).toBeTruthy();
})
test('object creation', () => {
    const objExpected = {field: 10};
    expect(operations.getObject(10)).toStrictEqual(objExpected);
})
test('string concatination', () => {
    expect(operations.concat('ab', 'bc')).toContain('bb');
})