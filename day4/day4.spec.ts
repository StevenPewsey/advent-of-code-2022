import {
  getInput,
  isCompleteOverLap,
  isPartialOverlap,
  numberOfCompleteOverlaps,
  numberOfPartialOverlaps,
} from "./day4"

describe("part 1", () => {
  test("getInput returns the correct value", () => {
    expect(getInput("day4/example.txt")).toEqual([
      [
        [2, 4],
        [6, 8],
      ],
      [
        [2, 3],
        [4, 5],
      ],
      [
        [5, 7],
        [7, 9],
      ],
      [
        [2, 8],
        [3, 7],
      ],
      [
        [6, 6],
        [4, 6],
      ],
      [
        [2, 6],
        [4, 8],
      ],
    ])
  })

  test("isCompleteOverLap returns correctly", () => {
    expect(isCompleteOverLap([2, 4], [6, 8])).toEqual(false)
    expect(isCompleteOverLap([2, 8], [3, 7])).toEqual(true)
    expect(isCompleteOverLap([6, 6], [4, 6])).toEqual(true)
    expect(isCompleteOverLap([10, 60], [59, 89])).toEqual(false)
  })

  test("numberOfCompleteOverlaps returns correctly on example", () => {
    const input = getInput("day4/example.txt")
    expect(numberOfCompleteOverlaps(input)).toEqual(2)
  })

  test("part 1 on real data", () => {
    const input = getInput("day4/real.txt")
    console.log(numberOfCompleteOverlaps(input))
  })
})

describe("part 2", () => {
  test("isPartialOverlap returns correctly", () => {
    expect(isPartialOverlap([5, 7], [7, 9])).toEqual(true)
    expect(isPartialOverlap([2, 8], [3, 7])).toEqual(true)
    expect(isPartialOverlap([6, 6], [4, 6])).toEqual(true)
    expect(isPartialOverlap([2, 6], [4, 8])).toEqual(true)
  })

  test("numberOfPartialOverlaps returns correctly on example", () => {
    const input = getInput("day4/example.txt")
    expect(numberOfPartialOverlaps(input)).toEqual(4)
  })

  test("part 2 on real data", () => {
    const input = getInput("day4/real.txt")
    console.log(numberOfPartialOverlaps(input))
  })
})
