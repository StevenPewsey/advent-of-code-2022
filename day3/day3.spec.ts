import {
  getInput,
  getInputPart2,
  getSharedItem,
  getSharedItemPart2,
  getSummedValueOfSharedItems,
  getSummedValueOfSharedItemsPart2,
  getValue,
} from "./day3"

describe("part 1", () => {
  test("getInput returns the correct values on the example", () => {
    expect(getInput("day3/example.txt")).toEqual([
      ["vJrwpWtwJgWr", "hcsFMMfFFhFp"],
      ["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"],
      ["PmmdzqPrV", "vPwwTWBwg"],
      ["wMqvLMZHhHMvwLH", "jbvcjnnSBnvTQFn"],
      ["ttgJtRGJ", "QctTZtZT"],
      ["CrZsJsPPZsGz", "wwsLwLmpwMDw"],
    ])
  })

  test("getSharedItem returns the correct value on the example", () => {
    expect(getSharedItem("vJrwpWtwJgWr", "hcsFMMfFFhFp")).toEqual("p")
  })

  test("getValue should return the correct value", () => {
    expect(getValue("a")).toEqual(1)
    expect(getValue("b")).toEqual(2)
    expect(getValue("A")).toEqual(27)
    expect(getValue("B")).toEqual(28)
  })

  test("getSummedValueOfSharedItems returns the correct value on the example", () => {
    const input = getInput("day3/example.txt")
    expect(getSummedValueOfSharedItems(input)).toEqual(157)
  })

  test("part 1 - real", () => {
    const input = getInput("day3/real.txt")
    console.log(getSummedValueOfSharedItems(input))
  })
})

describe.only("part 2", () => {
  test("getInputPart2 returns the correct value on the example", () => {
    expect(getInputPart2("day3/example.txt")).toEqual([
      [
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg",
      ],
      [
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw",
      ],
    ])
  })

  test("getSharedItemPart2 returns the correct value on the example", () => {
    expect(
      getSharedItemPart2(
        "vJrwpWtwJgWrhcsFMMfFFhFp",
        "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
        "PmmdzqPrVvPwwTWBwg"
      )
    ).toEqual("r")

    expect(
      getSharedItemPart2(
        "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
        "ttgJtRGJQctTZtZT",
        "CrZsJsPPZsGzwwsLwLmpwMDw"
      )
    ).toEqual("Z")
  })

  test("getSummedValueOfSharedItemsPart2 returns correct value on example", () => {
    const input = getInputPart2("day3/example.txt")
    expect(getSummedValueOfSharedItemsPart2(input)).toEqual(70)
  })

  test("getSummedValueOfSharedItemsPart2 on the real", () => {
    const input = getInputPart2("day3/real.txt")
    console.log(getSummedValueOfSharedItemsPart2(input))
  })
})
