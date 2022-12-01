import { getCaloriesPerTopXElves, getInput, getMostCalories } from "./day1"

test("getInput should work correctly", () => {
  expect(getInput("day1/example.txt")).toEqual([
    "1000",
    "2000",
    "3000",
    "",
    "4000",
    "",
    "5000",
    "6000",
    "",
    "7000",
    "8000",
    "9000",
    "",
    "10000",
  ])
})

test("getMostCalories works correctly on the example", () => {
  const input = getInput("day1/example.txt")
  expect(getMostCalories(input)).toEqual(24000)
})

test("Part 1 for real data", () => {
  const input = getInput("day1/real.txt")
  console.log(getMostCalories(input))
})

test("getCaloriesPerTopXElves works correctly on the example", () => {
  const input = getInput("day1/example.txt")
  expect(getCaloriesPerTopXElves(input, 3)).toEqual(45000)
})

test("Part 2 for real data", () => {
  const input = getInput("day1/real.txt")
  console.log(getCaloriesPerTopXElves(input, 3))
})
