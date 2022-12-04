import fs from "fs"

type Start = number
type End = number
type Pair = [Start, End]

type Input = [Pair, Pair][]

export const getInput = (inputPath: string): Input => {
  const text = fs.readFileSync(inputPath).toString()
  const textByLine = text.split("\n")
  return textByLine.map(
    (line) =>
      line.split(",").map((range) => range.split("-").map(Number)) as [
        Pair,
        Pair
      ]
  )
}

export const isCompleteOverLap = (first: Pair, second: Pair): boolean => {
  const secondInFirst = second[0] >= first[0] && second[1] <= first[1]
  const firstInSecond = first[0] >= second[0] && first[1] <= second[1]
  return secondInFirst || firstInSecond
}

export const isPartialOverlap = (first: Pair, second: Pair): boolean => {
  if (first[0] >= second[1] && first[0] <= second[1]) return true
  if (second[0] >= first[1] && second[0] <= first[1]) return true

  if (first[1] >= second[0] && first[1] <= second[1]) return true
  if (second[1] >= first[0] && second[1] <= first[1]) return true

  return false
}

export const numberOfCompleteOverlaps = (input: Input): number => {
  return input.reduce((sum, curr) => {
    return (sum += isCompleteOverLap(curr[0], curr[1]) ? 1 : 0)
  }, 0)
}

export const numberOfPartialOverlaps = (input: Input): number => {
  return input.reduce((sum, curr) => {
    return (sum += isPartialOverlap(curr[0], curr[1]) ? 1 : 0)
  }, 0)
}
