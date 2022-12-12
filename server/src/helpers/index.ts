import Question from "../types/question.types";

//Randomize the question
/**
 * Get num uniqe random Question from arr
 *
 * @param arr :Question[]
 * @param n :number
 * @returns Question[]
 */
export function randomData(arr: Question[], n: number) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n);
}

// export function getRandom(arr: any, n: any) {
//   var result = new Array(n),
//     len = arr.length,
//     taken = new Array(len);
//   if (n > len)
//     throw new RangeError("getRandom: more elements taken than available");
//   while (n--) {
//     var x = Math.floor(Math.random() * len);
//     result[n] = arr[x in taken ? taken[x] : x];
//     taken[x] = --len in taken ? taken[len] : len;
//   }
//   return result;
// }

export function getStudentRank(scoresList: number[], studentScore: number) {
  let rank =
    (scoresList.filter((score) => score < studentScore).length /
      scoresList.length) *
    100;

  if (Number.isInteger(rank)) return rank;

  return Number((Math.round(rank * 100) / 100).toFixed(2));
}

/**
 * Get num uniqe random Question from arr
 *
 * @param arr :Question[]
 * @param num :number
 * @returns Question[]
 */
export function getRandomQuestion(arr: Question[], num: number) {
  const finalQuestions: Question[] = [];

  //get copy from words data
  const wordData = [...arr];
  //get different answer value
  const answersList = [...new Set(arr.map((a) => a.pos))];

  //Filter the data according to their answer and add it to array
  answersList.map((answer) => {
    const words = arr.filter((word) => {
      return word.pos === answer;
    });
    const random = Math.floor(Math.random() * words.length);
    finalQuestions.push(words[random]);
    const index = arr.indexOf(words[random]);
    wordData.splice(index, 1);
  });

  const randomQuestions = randomData(wordData, num - 4);

  const final = [...randomQuestions, ...finalQuestions];

  return final;
}

/**
 * Get num uniqe random Question from arr
 *
 * @param arr :Question[]
 * @param num :number
 * @returns Question[]
 */
export function uniqeQuestion(arr: Question[], num: number) {
  const type_cache: { [x: string]: boolean } = {};
  const question_cache: { [x: string]: boolean } = {};
  const result: Question[] = [];
  /**
   * get uniqe random Question
   * if type exists and id doesn't exists will retuen element
   * else will call itself untill find elemet its id doesn't exist
   * @returns Question
   */
  function random(): Question {
    const element = arr[Math.floor(Math.random() * arr.length)];
    // true -> true
    // true -> false
    // false -> false
    if (type_cache[element.pos] && question_cache[element.id]) {
      return random();
    }
    if (!type_cache[element.pos]) {
      type_cache[element.pos] = true;
    }
    question_cache[element.id] = true;
    return element;
  }
  for (let index = 0; index < num; index++) {
    result.push(random());
  }
  return result;
}
