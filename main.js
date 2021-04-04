const countWords = string => {
  let wordList = string.toLowerCase().replace(/\s/g, '').split('')
  return wordList.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {})
}

countWords('How many of each letter are there in this string')