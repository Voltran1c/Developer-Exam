function FrequentWord(text) {
  const words = text.toLowerCase().match(/\b\w+\b/g); //make to lowercase and match by regex
  const wordCounts = {};

  //count word
  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  //find most word
  let maxCount = 0;
  let mostFrequentWord = "";

  for (const [word, count] of Object.entries(wordCounts)) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequentWord = word;
    }
  }
  return { mostFrequentWord, maxCount };
}

//Example Text
const text =
  "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous.";
const result = FrequentWord(text);

//result
console.log(
  `The most frequent word is "${result.mostFrequentWord}" appearing ${result.maxCount} times`
);
