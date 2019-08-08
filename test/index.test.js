// suma
const sum = (x, y) => x + y

describe('suma', () => {
  it('Function sum (x + y = z)', () => {
    expect(sum(1,2)).toBe(3)
  })
})