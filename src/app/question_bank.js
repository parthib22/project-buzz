// this file exports all the question data we need for the project
// this is kind of a database to us
// there are 6 categories array, each containing array of objects that is going to contain dataa about each question
// I have created the basic boilerplate for u
// your job is to name each category (ex: science, politics, etc), then fill that array with multiple objects containing different questions and corresponding option and answer.
// copy the object below and paste it as many times as there should be questions for each category, then fill them up with questions.
// optional fields are marked

const category_1 = [
  // below is the one object i have created whose structure should be followed
  {
    id: 0, // optional
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct: "",
    hint: "", // optional
    fact: "", // optional
  },
];

const category_2 = [
  // create objects here to fill with questions
];
const category_3 = [
  // create objects here to fill with questions
];
const category_4 = [
  // create objects here to fill with questions
];
const category_5 = [
  // create objects here to fill with questions
];
const category_6 = [
  // create objects here to fill with questions
];

// dont care about this portion, i'll explain later
module.exports = {
  category_1: category_1,
  category_2: category_2,
  category_3: category_3,
  category_4: category_4,
  category_5: category_5,
  category_6: category_6,
};
