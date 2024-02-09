const Movie = [
  // below is the one object i have created whose structure should be followed
  {
    id: 0, // optional
    question: "What color is Master Yoda's lightsaber in the Star Wars films?",
    options: ["Green", "Pink", "Red", "Blue"],
    correct: "Green",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 1, // optional
    question:
      "According to Yoda, the ultimate Jedi advice is “Do. Or do not. There is no try.” But which of the following statements were not uttered by the Jedi Master?",
    options: [
      "“Judge me by my size, do you?”",
      "“That is why you win.”",
      "“A Jedi's strength flows from the Force.”",
      "“That is why you win.”",
    ],
    correct: "“That is why you win.”",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 2, // optional
    question:
      "Can you name the actor who plays Darth Vader in the Star Wars movies?",
    options: ["David Prowse", "Harrison Ford", "Oscar Isaac", "John Boyega"], // store options in an array
    correct: "David Prowse",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 3, // optional
    question: "Name the teen heartthrob who played the role of Cedric Diggory.",
    options: [
      "Robert Pattinson",
      "Rupert Grint",
      "Daniel RadCliffe",
      "Tom Felton",
    ], // store options in an array
    correct: "Robert Pattinson",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 4, // optional
    question:
      " Can you remember which spell causes the tip of a wand to light up?",
    options: ["Lumos", "Nox", "Protego", "Imperio"], // store options in an array
    correct: "Lumos",
    hint: "Related to Light's Synonym", // optional
    fact: "You should try saying lumos to ur phone's assistant and watch", // optional
  },
  {
    id: 5, // optional
    question: " How many staircases does Hogwarts have?",
    options: ["142", "300", "210", "70"], // store options in an array
    correct: "142",
    hint: "", // optional
    fact: "These aren't your average, stationary stairs either. Each has a mind of its own, meaning they move at different speeds, change destinations on certain days, and sometimes even vanish entirely!", // optional
  },
  {
    id: 6, // optional
    question:
      "Which type of dragon does Viktor Krum face in the first task of the Triwizard Tournament?",
    options: [
      "Hungarian Horntail",
      " Chinese Fireball",
      "Swedish Short-Snout",
      "Common Welsh Green",
    ], // store options in an array
    correct: "Chinese Fireball",
    hint: "", // optional
    fact: "The Hungarian Horntail is the most dangerous of the four dragons.", // optional
  },
  {
    id: 7, // optional
    question: "Figure Out The Anagram: Herd Thresh Kit",
    options: [
      "Monsters, Inc.",
      "The Incredible Hulk",
      "Shrek the Third",
      "The Green Mile",
    ], // store options in an array
    correct: "Shrek the Third",
    hint: "The Third Green Monster", // optional
    fact: "", // optional
  },
  {
    id: 8, // optional
    question: "Figure Out The Anagram: These Sex Hints",
    options: [
      "The Sense of an Ending",
      "The Sixth Sense",
      "Senseless",
      "Sense and Sensibility",
    ], // store options in an array
    correct: "The Sixth Sense",
    hint: "Cole Sear", // optional
    fact: "", // optional
  },
  {
    id: 9, // optional
    question: "Figure Out The Anagram: On One Male ",
    options: [
      "Home Alone",
      "Kevin and Perry Go Large",
      "My Left Foot",
      "American Beauty",
    ], // store options in an array
    correct: "Home Alone",
    hint: "Kevin", // optional
    fact: "", // optional
  },
  {
    id: 10, // optional
    question:
      "Which film series from the 2000s stars Tom Cruise as Ethan Hunt?",
    options: [
      "James Bond: Casino Royale",
      "Mission: Impossible",
      "The Bourne Identity",
      "Die Hard: Mission Impossible",
    ], // store options in an array
    correct: "Mission: Impossible",
    hint: "This film series features high-stakes espionage missions led by a skilled agent named Ethan Hunt.", // optional
    fact: "", // optional
  },
  {
    id: 11, // optional
    question: "Who played Sharkboy in Sharkboy and Lavagirl?",
    options: ["Taylor Lautner", "Zac Efron", "Jake Gyllenhaal", "Shia LaBeouf"], // store options in an array
    correct: "Taylor Lautner",
    hint: "He's known for his role as a werewolf in another popular film series", // optional
    fact: "", // optional
  },
  {
    id: 12, // optional
    question:
      "Which Disney movie starred Zac Efron as a high school basketball player?",
    options: [
      "High School Musical",
      "Teen Beach Movie",
      "High School Musical 2",
      "High School Musical 3:",
    ], // store options in an array
    correct: "High School Musical",
    hint: "This movie features a group of students who come together to perform in a musical", // optional
    fact: 'This movie launched Zac Efron\'s career as a teen heartthrob and features iconic songs like "Breaking Free" and "We\'re All in This Together', // optional
  },
  {
    id: 13, // optional
    question:
      " Name the animated movie in which a rat becomes a professional chef with the help of a human.",
    options: [
      "The Tale of Despereaux",
      "Flushed Away",
      "Stuart Little",
      "Ratatouille",
    ], // store options in an array
    correct: "Ratatouille",
    hint: "This Pixar film is set in Paris and follows the culinary adventures of a rat named Remy", // optional
    fact: "", // optional
  },
  {
    id: 14, // optional
    question:
      "In the animated film, The Jungle Book, who says, “The bare necessities of life will come to you”?",
    options: ["King Louie", "Bagheera", "Baloo", "Raksha"], // store options in an array
    correct: "Baloo",
    hint: ' This character sings the song "The Bare Necessities," which features the famous line "The bare necessities of life will come to you', // optional
    fact: "", // optional
  },
];
const Food = [
  {
    id: 0, // optional
    question: "Can you Guess The Food Anagram:AS ANGEL (7)",
    options: [" Lasagne", "Angelas", "Gelansa", "Lasagen"], // store options in an array
    correct: " Lasagne",
    hint: "This Italian dish consists of layers of pasta, sauce, cheese, and other ingredients", // optional
    fact: "", // optional
  },
  {
    id: 1, // optional
    question: "Can you Guess The Food Anagram:RUSTLED (7)",
    options: ["Trundle", "Lustred", "Strudel", "Slurred"], // store options in an array
    correct: "Strudel",
    hint: "A layered pastry with a sweet or savory filling, often associated with Austrian cuisine", // optional
    fact: "", // optional
  },
  {
    id: 2, // optional
    question: "Can you Guess The Food Anagram: HE TACKLE COCOA (9,4)",
    options: [
      "Chocolate Mousse",
      "Chocolate Cake",
      "Tackled Choco",
      "Cocoa Latte",
    ], // store options in an array
    correct: "Chocolate Cake",
    hint: "A sweet baked dessert made with chocolate, flour, sugar, and eggs", // optional
    fact: "", // optional
  },
  {
    id: 3, // optional
    question: "Can you Guess The Food Anagram:AMOK AS US (8)",
    options: ["Soak Maus", "Souma Kas", "Moussaka", "Amass You"], // store options in an array
    correct: "Moussaka",
    hint: "A dish made with layers of eggplant, minced meat, and tomato sauce, topped with a creamy béchamel sauce", // optional
    fact: "", // optional
  },
  {
    id: 4, // optional
    question: "What is the most stolen food in the world?",
    options: ["Cheese", "Bread", "Milk", "Chocolate"], // store options in an array
    correct: "Cheese",
    hint: "Made by using milk.", // optional
    fact: "", // optional
  },
  {
    id: 5, // optional
    question:
      "What was once used to cure diseases like the common cold and diarrhoea.",
    options: ["Ketchup", "Mustard", "Vinegar", "Honey"], // store options in an array
    correct: "Ketchup",
    hint: "This condiment is commonly made from vinegar, sugar, and spices, and is often used as a topping or dipping sauce for various foods such as burgers, fries, and hot dogs.", // optional
    fact: "", // optional
  },
  {
    id: 6, // optional
    question: "Which of the following foods can make you hallucinate?",
    options: ["Nutmeg", "Chillies", "Rye Bread", "All of the Above"], // store options in an array
    correct: "All of the Above",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 7, // optional
    question: "",
    options: ["", "", "", ""], // store options in an array
    correct: "",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 8, // optional
    question: "Where Did It Originate:Nasi Goreng",
    options: ["Indonesia", "Bahrain", "Mexico", "Vietnam"], // store options in an array
    correct: "Indonesia",
    hint: "South-East Asian Country", // optional
    fact: "Fried rice dish, usually cooked with pieces of meat and vegetables", // optional
  },
  {
    id: 9, // optional
    question: "Where Did It Originate:Salteña",
    options: ["France", "Bolivia", "Cuba", "Iceland"], // store options in an array
    correct: "Bolivia",
    hint: "", // optional
    fact: "A baked empanada made with beef or chicken mixed with olives, potatoes, vegetables, hard-boiled egg, raisins, and spices in a sweet and slightly spicy sauce", // optional
  },
  {
    id: 10, // optional
    question: "Where Did It Originate:Chicken Machboos",
    options: ["Ghana", "France", "Bahrain", "Japan"], // store options in an array
    correct: "Bahrain",
    hint: "", // optional
    fact: " Spiced chicken and rice", // optional
  },
  {
    id: 11, // optional
    question: "True or False: Apples belong to the rose family.",
    options: ["Partially True", "False", "True", "Partially False"], // store options in an array
    correct: "True",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 12, // optional
    question:
      "True or False: Oysters and Lobsters used to be the food of the working class.",
    options: ["Partially True", "False", "True", "Partially False"], // store options in an array
    correct: "True",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 13, // optional
    question: "True or False: Pepsi was the first soft drink drunk in space.",
    options: ["Partially True", "False", "True", "Partially False"], // store options in an array
    correct: "False",
    hint: "", // optional
    fact: "It was Coke, but only by 8 hours!", // optional
  },
  {
    id: 14, // optional
    question:
      "True or False: Queensland, Australia produces 75% of the world's pineapples.",
    options: ["Partially True", "False", "True", "Partially False"], // store options in an array
    correct: "False",
    hint: "", // optional
    fact: "It's Costa Rica", // optional
  },
];
const Sports = [
  {
    id: 0, // optional
    question:
      "Founded by Bobby Jones and Clifford Roberts, which golf course was designed by Jones and Alister MacKenzie and opened for play in 1932?",
    options: [
      "Augusta National Golf Club",
      "Pine Valley Golf Club",
      "Cypress Point Club",
      "Pebble Beach Golf Links.",
    ], // store options in an array
    correct: "Augusta National Golf Club",
    hint: "This golf course is famous for hosting the annual Masters Tournament, one of the most prestigious events in professional golf.", // optional
    fact: "", // optional
  },
  {
    id: 1, // optional
    question:
      " As mentioned on the USGA website, The Country Club in Atlantic City lay claim to the first use of which term that comes from the early 20th century American slang term meaning 'anything excellent'?",
    options: ["Mulligan", "Handicap", "Birdie", "Bogey"], // store options in an array
    correct: "Birdie",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 2, // optional
    question:
      "A golfer on the PGA Tour carries how many golf clubs in their bag?",
    options: ["13", "14", "12", "15"], // store options in an array
    correct: "14",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 3, // optional
    question: "Which well-known golfer is nicknamed 'El Nino'?",
    options: ["Sergio Garcia", "Bobby Locke", "Seve Ballesteros", "Ernie Els"], // store options in an array
    correct: "Sergio Garcia",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 4, // optional
    question:
      "Which of the following dismissals is NOT a valid way to get out?",
    options: ["Bailed", "Caught", "Run Out", "Bowled"], // store options in an array
    correct: "Bailed",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 5, // optional
    question: "What is a cricket ball made of?",
    options: [
      "Rubber",
      "Leather",
      " Leather Outer/Cork Inner",
      "Leather Outer/Rubber Inner",
    ], // store options in an array
    correct: " Leather Outer/Cork Inner",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 6, // optional
    question: "Which of these cricket fielding positions are NOT real?",
    options: [
      "Silly Short Leg.",
      "Silly Mid Off.",
      "Silly Point.",
      "Silly Mid On.",
    ], // store options in an array
    correct: "Silly Short Leg.",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 7, // optional
    question:
      "Which countries team has had the lowest recorded test innings in history?",
    options: [
      "India. (36 vs Australia in 2020)",
      "Australia. (36 vs England in 1902)",
      "South Africa. (30 vs England in 1924) ",
      " New Zealand. (26 vs England in 1955)",
    ], // store options in an array
    correct: " New Zealand. (26 vs England in 1955)",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 8, // optional
    question: "Where was England legend David Beckham born?",
    options: ["Manchester", "Norwich", "London", "Carlisle"], // store options in an array
    correct: "London",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 9, // optional
    question: "Which English Premier side are known as The Red Devils?",
    options: ["Arsenal", "Newcastle United", "Manchester United", "Chelsea"], // store options in an array
    correct: "Manchester United",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 10, // optional
    question: "Which club won the Scottish Premiership in 2022-23?",
    options: ["Rangers", "Celtic", "Motherwell", "Kilmarnock"], // store options in an array
    correct: "Celtic",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 11, // optional
    question: "What does VAR stand for?",
    options: [
      "Very Awful Referee",
      "Virtual Assistant Referee",
      "Vincent and Rupert",
      "Video Assisted Referee",
    ], // store options in an array
    correct: "Video Assisted Referee",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 12, // optional
    question: "Guess The Anagrams:ENTIRE REGION",
    options: ["Erogentirn", "Tonerigern", "Girenteron", "Orienteering"], // store options in an array
    correct: "Orienteering",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 13, // optional
    question: "Guess The Anagrams:SNOUT BAIL",
    options: [" Usain Bolt", "Justin Gatlin", "Allyson Felix", "Mo Farah"], // store options in an array
    correct: " Usain Bolt",
    hint: "Atheletics", // optional
    fact: "", // optional
  },
  {
    id: 14, // optional
    question: "Guess The Anagrams:LOVELY BALL",
    options: ["Lleyvolab", "Volleyball", "Yallvobell", "Voblyalle"], // store options in an array
    correct: "Volleyball",
    hint: "", // optional
    fact: "", // optional
  },
];
const Nature = [
  {
    id: 0, // optional
    question: "Which dog breeds were originally bred to fight badgers?",
    options: ["Dachshunds", "Greyhounds", "Beagles", "Boxers"], // store options in an array
    correct: "Dachshunds",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 1, // optional
    question: "What is the largest dog breed in the world?",
    options: [
      "Scottish Deerhound",
      "Great Pyrenees",
      " Greyhound",
      "English Mastiff",
    ], // store options in an array
    correct: "English Mastiff",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 2, // optional
    question: "How many teeth do normal adult dogs have?",
    options: ["42", "36", "44", "69"], // store options in an array
    correct: "42",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 3, // optional
    question: "Which snake has the longest fangs?",
    options: ["Gaboon Viper", "Black Mamba", "Green anaconda", "Cottonmouths"], // store options in an array
    correct: "Gaboon Viper",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 4, // optional
    question:
      " When a copperhead is threatened, it emits a musk that smells vaguely like:",
    options: ["Cucumbers", "Orange", "Pineapple", "Mango"], // store options in an array
    correct: "Cucumbers",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 5, // optional
    question: "Which is the most venomous species of snake in the world?",
    options: [
      " Egyptian Cobra",
      "Mozambique Spitting Cobra.",
      "King Cobra",
      " Inland Taipan",
    ], // store options in an array
    correct: " Inland Taipan",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 6, // optional
    question: "True or False: You can hypnotise a chicken?",
    options: ["Partially True", "False", "True", "Partially False"], // store options in an array
    correct: "True",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 7, // optional
    question: "True or False: An Ostrich's eye is bigger than its brain?",
    options: ["Partially True", "False", "True", "Partially False"], // store options in an array
    correct: "True",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 8, // optional
    question:
      "When animals are the same size, which is stronger, a donkey or a horse?",
    options: ["Donkey", "Horse", "Both will be same", "Mule"], // store options in an array
    correct: "Donkey",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 9, // optional
    question:
      "True or False: Coral (in coral reefs) are plants and not animals?",
    options: ["Partially True", "False", "True", "Partially False"], // store options in an array
    correct: "Flse",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 10, // optional
    question: "Guess The Anagram: RAPTOR",
    options: ["Parrot", "Raptor", "Trapor", "Raprot"], // store options in an array
    correct: "Parrot",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 11, // optional
    question: "True or False: An octopus is an invertebrate?",
    options: ["Partially True", "False", "True", "Partially False"], // store options in an array
    correct: "True",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 12, // optional
    question: "What type of creature is a Pacific Sea Wasp?",
    options: ["Jellyfish", "Octopus", "Sea urchin", "Stingray"], // store options in an array
    correct: "Jellyfish",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 13, // optional
    question: "Guess The Anagrams: SOCCER IDOLS",
    options: ["Crocodiles", "Crockodiles", "Socerlodes", "Idolcress"], // store options in an array
    correct: "Crocodiles",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 14, // optional
    question: "What is the name of the horse of Alexander the Great?",
    options: ["Copenhagen", "Comanche", "Bucephalus", "Chaitak"], // store options in an array
    correct: "Bucephalus",
    hint: "", // optional
    fact: "", // optional
  },
];
const Spicy = [
  {
    id: 0, // optional
    question:
      "What's the best part of your special one's body to lick honey from?",
    options: ["Fingertip", "Neck", "Collarbone", "Earlobe"], // store options in an array
    correct: "Fingertip",
    hint: "", // optional
    fact: "What else do you eat food with?", // optional
  },
  {
    id: 1, // optional
    question:
      "When I am big, a girl screams harder, and when I am smaller, she doesn't react. Guess what I am?",
    options: ["Cockroach", "Ghost", "Shadow", "Ant"], // store options in an array
    correct: "Cockroach",
    hint: "", // optional
    fact: "It's Cockroach!", // optional
  },
  {
    id: 2, // optional
    question:
      "I once allowed over a thousand men in before something long and rough ripped me open. Do you know who I am?",
    options: ["The Titanic", "Castle", "Prison", "Palace"], // store options in an array
    correct: "The Titanic",
    hint: "", // optional
    fact: "What did you think, huh?", // optional
  },
  {
    id: 3, // optional
    question:
      "You put me in your mouth and have endless fun blowing me. What am I?",
    options: [
      "Chewing Gum",
      "Gummy Bears",
      "Caramel Chocolates",
      "Jaw Breaker",
    ], // store options in an array
    correct: "Chewing Gum",
    hint: "", // optional
    fact: "Chewing Gums are fun to chew and have fun right?", // optional
  },
  {
    id: 4, // optional
    question:
      "I'm stretched out before getting devoured. Your tongue irritates me. Occasionally, people lick my nuts. Who or what am I?",
    options: ["Chewing Gum", "Peanut Butter", "Leather", "Kimchi"], // store options in an array
    correct: "Peanut Butter",
    hint: "", // optional
    fact: "A peanut is transformed into so many things like as the answer Peanut Butter!!", // optional
  },
  {
    id: 5, // optional
    question:
      "When I enter, I have the potential to create discomfort. When you ask me to, I'll fill your gaps. Additionally, I request that you spit rather than swallow. Who or what am I?",
    options: ["Dentist", "Parents", "Surgeon", "Relatives"], // store options in an array
    correct: "Dentist",
    hint: "", // optional
    fact: "Who even swallows the liquid with medecine smell right?", // optional
  },
  {
    id: 6, // optional
    question:
      "I'm the focal point of many dates. I'm receptive when you insert your fingers deep inside me. Who or what am I?",
    options: ["A Bowling Ball", "Pipes", "Cream Container", "Washing Machine"], // store options in an array
    correct: "A Bowling Ball",
    hint: "", // optional
    fact: "Believe it or not Bowling Arcade is a the most common place for dates!", // optional
  },
  {
    id: 7, // optional
    question:
      "What is brittle and hairy on the exterior yet soft and moist on the inside? The word starts with 'c,' finishes with 't,' and contains both a 'u' and an 'n.'",
    options: ["Cachet", "Coconut", "Cadet", "Cadet"], // store options in an array
    correct: "Coconut",
    hint: "", // optional
    fact: "There isn't any part of a Coconut tree that goes to waste.", // optional
  },
  {
    id: 8, // optional
    question:
      "What four-letter word starts with the letter 'F and finishes with the letter 'k,' and if you're unable to get it, you can always use your hands?",
    options: ["Funk", "Fork", "Fusk", "Fisk"], // store options in an array
    correct: "Fork",
    hint: "", // optional
    fact: "Or you can ask someone at the table to pass it to you!", // optional
  },
  {
    id: 9, // optional
    question: " What's the best part of your body to put into a pie?",
    options: ["Face", "Finger", "Toe", "Teeth"], // store options in an array
    correct: "Teeth",
    hint: "", // optional
    fact: "Like yeah what else?", // optional
  },
];
const Coding = [
  {
    id: 0, // optional
    question: "Who is the father of C language?",
    options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"], // store options in an array
    correct: "Dennis Ritchie",
    hint: "", // optional
    fact: "Dennis Ritchie is the father of C Programming Language. C programming language was developed in 1972 at American Telephone & Telegraph Bell Laboratories of USA.", // optional
  },
  {
    id: 1, // optional
    question: "Which of the following declaration is not supported by C language?",
    options: ["String str;", "char *str;", "float str = 3e2;", "Both “String str;” and “float str = 3e2;”"], // store options in an array
    correct: "String str;",
    hint: "", // optional
    fact: " It is legal in Java, but not in C language.", // optional
  },
  {
    id: 2, // optional
    question: " In C language, FILE is of which data type?",
    options: ["int", "char*", "struct", "None of the above"], // store options in an array
    correct: "struct",
    hint: "", // optional
    fact: "", // optional
  },
  {
    id: 3, // optional
    question: "Who invented Java Programming?",
    options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"], // store options in an array
    correct: "James Gosling",
    hint: "", // optional
    fact: " Java programming was developed by James Gosling at Sun Microsystems in 1995. James Gosling is well known as the father of Java.", // optional
  },
  {
    id: 4, // optional
    question: " Which one of the following is not a Java feature?",
    options: ["Object-oriented", " Use of pointers", "Portable", "Dynamic and Extensible"], // store options in an array
    correct: " Use of pointers",
    hint: "", // optional
    fact: "Pointers is not a Java feature. Java provides an efficient abstraction layer for developing without using a pointer in Java. Features of Java Programming are Portable, Architectural Neutral, Object-Oriented, Robust, Secure, Dynamic and Extensible, etc.", // optional
  },
  {
    id: 5, // optional
    question: "Which environment variable is used to set the java path?",
    options: ["MAVEN_Path", "JavaPATH", "JAVA", "JAVA_HOME"], // store options in an array
    correct: "JAVA_HOME",
    hint: "", // optional
    fact: "JAVA_HOME is used to store a path to the java installation", // optional
  },
  {
    id: 6, // optional
    question: "Which of the following is not javascript data types?",
    options: ["Null type", "Undefined type", "Number type", " All of the mentioned"], // store options in an array
    correct: " All of the mentioned",
    hint: "", // optional
    fact: " JavaScript is a dynamic, loosely typed language. Variables in JavaScript aren't tied to any specific value type, and each variable can be assigned and reassigned to values of all the types", // optional
  },
  {
    id: 7, // optional
    question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
    options: ["Position", "Window", "Standard", "Location"], // store options in an array
    correct: "Window",
    hint: "", // optional
    fact: "All client-side JavaScript features and APIs are accessed through the Window object. It represents a web browser window or frame, and the identifier window can be used to refer to it.", // optional
  },
  {
    id: 8, // optional
    question: "Which of the following can be used to call a JavaScript Code Snippet?",
    options: ["Function/Method", "Preprocessor", "Triggering Event", "RMI"], // store options in an array
    correct: "Function/Method",
    hint: "", // optional
    fact: "A function call to the element on which JavaScript is to be run can be used to invoke JavaScript code. Other techniques include onclick, onload, and onsubmit, among others.", // optional
  },
  {
    id: 9, // optional
    question: "Who developed Python Programming Language?",
    options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum", "Niene Stom"], // store options in an array
    correct: "Guido van Rossum",
    hint: "", // optional
    fact: "Python language is designed by a Dutch programmer Guido van Rossum in the Netherlands.", // optional
  },
  {
    id: 10, // optional
    question: "All keywords in Python are in _________",
    options: ["Capitalized", "lower case", "UPPER CASE", "None of the mentioned"], // store options in an array
    correct: "None of the mentioned",
    hint: "", // optional
    fact: "True, False and None are capitalized while the others are in lower case.", // optional
  },
  {
    id: 11, // optional
    question: "Python supports the creation of anonymous functions at runtime, using a construct called __________",
    options: ["pi", "anonymous", "lambda", "none of the mentioned"], // store options in an array
    correct: "lambda",
    hint: "", // optional
    fact: "Python supports the creation of anonymous functions (i.e. functions that are not bound to a name) at runtime, using a construct called lambda. Lambda functions are restricted to a single expression. They can be used wherever normal functions can be used.", // optional
  },
  {
    id: 12, // optional
    question: "Which of the following is basis for SQL?",
    options: ["SQL Server", "DBMS", "RDBMS", "Oracle"], // store options in an array
    correct: "RDBMS",
    hint: "", // optional
    fact: "RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL and Microsoft Access.", // optional
  },
  {
    id: 13, // optional
    question: " What is the full form of PL in PL/SQL?",
    options: ["Programming Language", "Programming Logic", "Procedural Language", "Procedural Logic"], // store options in an array
    correct: "Procedural Language",
    hint: "", // optional
    fact: "PL in PL/SQL stands for Procedural Language. It is a block structured language that enables developers to combine the power of SQL with procedural language.", // optional
  },
  {
    id: 14, // optional
    question: "The SQL LIKE operator is used in which of the following clause?",
    options: ["Having", "Select", "Where", "Group by"], // store options in an array
    correct: "Where",
    hint: "", // optional
    fact: "The SQL LIKE operator is used in a WHERE clause to search for a specified pattern in a column.", // optional
  },
];

module.exports = {
  Movie: Movie,
  Food: Food,
  Sports: Sports,
  Nature: Nature,
  Spicy: Spicy,
  Coding: Coding,
};
