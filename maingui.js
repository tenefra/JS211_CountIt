const countWords = () => {
  let string = document.querySelector(".user-input").value
  let wordList = string.toLowerCase().replace(/\s/g, "").split("")
  document.querySelector(".word-output").innerHTML = JSON.stringify(
    wordList.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1
      return acc
    }, {})
  )
}
