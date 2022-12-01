import fs from "fs"

export const getInput = (inputPath: string): string[] => {
  const text = fs.readFileSync(inputPath).toString()
  const textByLine = text.split("\n")
  return textByLine
}

const getCaloriesPerElf = (input: string[]): number[] => {
  const elfsCalories: number[] = []

  let index = 0
  elfsCalories[0] = 0

  input.forEach((value) => {
    if (value == "") {
      index += 1
      elfsCalories[index] = 0
      return
    }

    elfsCalories[index] += Number.parseInt(value)
  })

  return elfsCalories
}

export const getMostCalories = (input: string[]): number => {
  return Math.max(...getCaloriesPerElf(input))
}

export const getCaloriesPerTopXElves = (
  input: string[],
  numberOfElves: number
): number => {
  const caloriesPerElf = getCaloriesPerElf(input)

  const topX = caloriesPerElf
    .slice()
    .sort((a, b) => b - a)
    .slice(0, numberOfElves)

  return topX.reduce((sum, val) => sum + val, 0)
}
