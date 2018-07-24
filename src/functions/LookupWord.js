import dictionary from '../data/dictionary.js'
import createRegex from './CreateRegex.js'

// TODO Split word search from word lookup
// TODO result highlight can be found with
// regex.exec.index through to
// index+regex.exec[0].length
function lookupWord({inputWord, userOptions}) {
  const regex = createRegex({
    'cleanInput': inputWord.toLowerCase(),
    'isFlexiSearch': userOptions.isFlexiSearch
  });

  const suggestionList = inputWord.length > 0
    ? Object.keys(dictionary)
      .filter(word => {
        return (userOptions.searchYolngu && regex.test(word))
          || (userOptions.searchEnglish && regex.test(dictionary[word].En));
      }).map((word, i) => {
      if (regex.test(word)) {
        return {
          'word': word,
          'weight': regex.exec(word).index / word.length / -1
        }
      } else if (regex.test(dictionary[word].En)) {
        return {
          'word': word,
          'weight': regex.exec(dictionary[word].En).index / dictionary[word].En.length / -1
        }
      } else return {
        'word': word,
        'weight': 0
      }
    })
    : [];
  suggestionList.sort((a,b) => {
    return b.weight - a.weight;
  });
  let suggestions = {};
  if (suggestionList.length > 0) {
    suggestionList.slice(0,16).forEach((suggestion) => {
      suggestions[suggestion.word] = dictionary[suggestion.word].En;
    })
  }
  const definition = (dictionary[inputWord])
    ? dictionary[inputWord].En
    : ''
  const lexeme = (dictionary[inputWord])
    ? inputWord
    : ''
 return {
   'word': lexeme,
   'definition': definition,
   'suggestions': suggestions,
   'totalSuggestions': suggestionList.length
 };
}

export default lookupWord
