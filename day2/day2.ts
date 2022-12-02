import fs from "fs"

type OpponentHand = "A" | "B" | "C"
type MyHand = "X" | "Y" | "Z"

export const getInput = (inputPath: string): [OpponentHand, MyHand][] => {
  const text = fs.readFileSync(inputPath).toString()
  const textByLine = text.split("\n")
  return textByLine.map((line) => {
    const things = line.split(" ")

    if (things.length === 0 || things.length > 2) {
      throw new Error("invalid input")
    }

    return things as [OpponentHand, MyHand]
  })
}

const SCORES = {
  // rock
  X: 1,
  // paper
  Y: 2,
  // scissors
  Z: 3,
} as const

const translator = {
  A: "X",
  B: "Y",
  C: "Z",
}

/**
 * returns 1 if won, 0 if drawn, -1 if lost
 */
const calculateWon = (opponent: OpponentHand, me: MyHand): number => {
  if (translator[opponent] === me) return 0

  // rock loses to paper
  if (opponent === "A" && me === "Y") return 1

  // paper loses to scissors
  if (opponent === "B" && me === "Z") return 1

  // scissors losers to rock

  if (opponent === "C" && me === "X") return 1

  return -1
}

const POINTS_FOR_OUTCOME = {
  [-1]: 0,
  [0]: 3,
  [1]: 6,
}

const OUTCOME = {
  X: -1,
  Y: 0,
  Z: 1,
}

const LOSES_TO = {
  A: "Y",
  B: "Z",
  C: "X",
} as const

const BEATS = {
  A: "Z",
  B: "X",
  C: "Y",
} as const

const calculatePointsPerRound = (opponent: OpponentHand, me: MyHand) => {
  const calculateWonValue = calculateWon(opponent, me)

  return POINTS_FOR_OUTCOME[calculateWonValue] + SCORES[me]
}

export const calculateTotalScore = (input: [OpponentHand, MyHand][]) => {
  return input.reduce((sum, curr) => sum + calculatePointsPerRound(...curr), 0)
}

const calculatePointsPerRoundPartTwo = (opponent: OpponentHand, me: MyHand) => {
  const outcome = OUTCOME[me]

  if (outcome === -1) {
    return POINTS_FOR_OUTCOME[outcome] + SCORES[BEATS[opponent]]
  }

  if (outcome === 0) {
    return POINTS_FOR_OUTCOME[outcome] + SCORES[translator[opponent]]
  }

  return POINTS_FOR_OUTCOME[outcome] + SCORES[LOSES_TO[opponent]]
}

export const calculateTotalScorePartTwo = (input: [OpponentHand, MyHand][]) => {
  return input.reduce(
    (sum, curr) => sum + calculatePointsPerRoundPartTwo(...curr),
    0
  )
}
