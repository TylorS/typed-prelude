function generateNumbers(precision) {
  const amountOfNumbers = parseRound(getAmount(precision))
  const multiplier = parseFloat(getMultiplier(precision))

  let nums = ''
  let i = 0

  while (i <= 1) {
    nums += `|${i}`

    i = Math.round((i + multiplier) * amountOfNumbers) / amountOfNumbers
  }

  console.log(nums)
}

function parseRound(x) {
  return Math.round(parseFloat(x))
}

function getAmount(precision) {
  return `1${Array(precision + 1)
    .fill('0')
    .join('')}`
}

function getMultiplier(precision) {
  return `0.${Array(precision).fill('0').join('')}1`
}
