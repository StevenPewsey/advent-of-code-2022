import fs from "fs"

export const getInput = (inputPath: string): [string, string][] => {
  const text = fs.readFileSync(inputPath).toString()
  const textByLine = text.split("\n")

  return textByLine.map((line) => {
    const length = line.length
    // TODO: return array in each section
    return [line.slice(0, length / 2), line.slice(length / 2, length)]
  })
}

export const getInputPart2 = (
  inputPath: string
): [string, string, string][] => {
  const text = fs.readFileSync(inputPath).toString()
  const textByLine = text.split("\n")

  const data = []

  for (let index = 0; index < textByLine.length; index += 3) {
    const first = textByLine[index]
    const second = textByLine[index + 1]
    const third = textByLine[index + 2]

    data.push([first, second, third])
  }

  return data
}

// TODO: refactor this to be more generic
export const getSharedItemPart2 = (
  first: string,
  second: string,
  third: string
): string => {
  const firstCounts: Record<string, number> = {}

  first.split("").forEach((char) => {
    if (firstCounts[char] === undefined) {
      firstCounts[char] = 1
    } else {
      firstCounts[char] += 1
    }
  })

  const secondCounts: Record<string, number> = {}
  second.split("").forEach((char) => {
    if (secondCounts[char] === undefined) {
      secondCounts[char] = 1
    } else {
      secondCounts[char] += 1
    }
  })

  const thirdCounts: Record<string, number> = {}
  third.split("").forEach((char) => {
    if (thirdCounts[char] === undefined) {
      thirdCounts[char] = 1
    } else {
      thirdCounts[char] += 1
    }
  })

  const firstKeys = Object.keys(firstCounts)

  for (let index = 0; index < firstKeys.length; index++) {
    const char = firstKeys[index]

    if (char in secondCounts && char in thirdCounts) return char
  }
}

export const getSharedItem = (left: string, right: string): string => {
  const leftCounts: Record<string, number> = {}

  left.split("").forEach((char) => {
    if (leftCounts[char] === undefined) {
      leftCounts[char] = 1
    } else {
      leftCounts[char] += 1
    }
  })

  const rightCounts: Record<string, number> = {}
  right.split("").forEach((char) => {
    if (rightCounts[char] === undefined) {
      rightCounts[char] = 1
    } else {
      rightCounts[char] += 1
    }
  })

  const leftKeys = Object.keys(leftCounts)

  for (let index = 0; index < leftKeys.length; index++) {
    const char = leftKeys[index]

    if (char in rightCounts) return char
  }
}

export const getValue = (char: string): number => {
  // TODO: is there a nicer way of doing this
  if (char === char.toUpperCase()) {
    return char.charCodeAt(0) - 38
  }

  return char.charCodeAt(0) - 96
}

export const getSummedValueOfSharedItems = (input: [string, string][]) => {
  return input.reduce((sum, curr) => {
    const sharedItem = getSharedItem(...curr)
    return sum + getValue(sharedItem)
  }, 0)
}

export const getSummedValueOfSharedItemsPart2 = (
  input: [string, string, string][]
) => {
  return input.reduce((sum, curr) => {
    const sharedItem = getSharedItemPart2(...curr)
    return sum + getValue(sharedItem)
  }, 0)
}
