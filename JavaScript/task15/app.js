const findOccurrences =(sentence, letter) => {
  let splitSentence = sentence.toLowerCase().split(" ");
  splitSentence.map((elem) => {
    let sum = 0;
    for (let i in elem) {
      if (elem[i] === letter) {
        sum++;
      }
    }
    console.log("'" + elem + "'" + ":" + sum);
  });
}
findOccurrences("Hello World", "o");
findOccurrences("Create a nice JUICY function", "c");
findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "a");