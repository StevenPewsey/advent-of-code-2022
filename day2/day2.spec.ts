import {
  calculateTotalScore,
  calculateTotalScorePartTwo,
  getInput,
} from "./day2"

test("getInput returns the correct values", () => {
  expect(getInput("day2/example.txt")).toEqual([
    ["A", "Y"],
    ["B", "X"],
    ["C", "Z"],
  ])
})

test("calculateTotalScore returns correct value on example", () => {
  const input = getInput("day2/example.txt")
  expect(calculateTotalScore(input)).toEqual(15)
})

test("calculateTotalScorePartTwo returns correct value on example", () => {
  const input = getInput("day2/example.txt")
  expect(calculateTotalScorePartTwo(input)).toEqual(12)
})

test("part 1 real", () => {
  const input = getInput("day2/real.txt")
  console.log(calculateTotalScore(input))
})

test("part 2 real", () => {
  const input = getInput("day2/real.txt")
  console.log(calculateTotalScorePartTwo(input))
})

// test("p")
