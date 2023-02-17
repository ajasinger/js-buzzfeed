const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://unsplash.com/photos/SQxcZIIZHV8",
                alt: "Photo of the Empire State Building",
                credit: "Wilmer Martinez"
            },
            {
                text: "Austin",
                image: "https://unsplash.com/photos/zjrAEvnynm8",
                alt: "Photo of people paddle boarding with a backdrop of the city of Austin",
                credit: "Tomek Baginski"
            },
            {
                text: "Portland",
                image: "https://unsplash.com/photos/4A56VJzKh2c",
                alt: "Photo of a movie theatre with a sign that says Portland",
                credit: "Peter Bucks"
            },
            {
                text: "New Orleans",
                image: "https://unsplash.com/photos/nUkxLPE5Fto",
                alt: "Photo of an old building with a balcony and trees",
                credit: "Rosie Kerr"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers:[
            {
                text: "Pizza",
                image: "https://unsplash.com/photos/60nzTP7_hMQ",
                alt: "Photo of pizza with arugala and cheese",
                credit: "Saundarya Srinivasan"
            },
            {
                text: "Sandwich",
                image: "https://unsplash.com/photos/mAQZ3X_8_l0",
                alt: "Photo of a sandwich with tomato and cheese",
                credit: "Eiliv Aceron"
            },
            {
                text: "Pasta",
                image: "https://unsplash.com/photos/flFd8L7_B3g",
                alt: "Photo of a bowl of pasta with tomato sauce",
                credit: "Ben Lei"
            },
            {
                text: "Hamburger",
                image: "https://unsplash.com/photos/DHxLfzqhoIk",
                alt: "Photo of a hamburger and fries",
                credit: "Emanuel Ekstrom"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home:",
        answers:[
            {
                text: "Traditional",
                image: "https://unsplash.com/photos/L7EwHkq1B2s",
                alt: "Photo of house interior",
                credit: "Kara Eads"
            },
            {
                text: "Modern",
                image: "https://unsplash.com/photos/rOk4VSMS3Ck",
                alt: "Photo of a modern home interior",
                credit: "R Architecture"
            },
            {
                text: "House",
                image: "https://unsplash.com/photos/1ddol8rgUH8",
                alt: "Photo of a house with a fence",
                credit: "Scott Webb"
            },
            {
                text: "Mountains",
                image: "https://unsplash.com/photos/cQxwarmp4ag",
                alt: "Photo of a cabin on a snowy lake",
                credit: "Alex Hawthorne"
            }
        ]
    }
    
]

//Array of all possible answers
const answers = [
    {
        combination: ["New York", "Pizza", "Traditional"],
        text: "Blue Cheese",
        image: "ADD LINK",
        alt: "Blue Cheese"
    },
    {
        combination: ["Austin", "Pasta", "Modern"],
        text: "Cheddar",
        image: "ADD LINK",
        alt: "Cheddar Cheese"
    },
    {
        combination: ["Portland", "Sandwich", "Mountains"],
        text: "Feta",
        image: "ADD LINK",
        alt: "Feta Cheese"
    },
    {
        combination: ["New Orleans", "Hamburger", "House"],
        text: "Halloumi",
        image: "ADD LINK",
        alt: "Halloumi Cheese"
    }
];
// need default answer due to not all combinations listed

const unansweredQuestions = [];
const chosenAnswers = [];

const populateQuestions = () => {
    questions.forEach(question => {

        //Add question block 
        const titleBlock = document.createElement('div');
        titleBlock.id = question.id;
        titleBlock.classList.add('title-block');

        //Add header
        const titleHeading = document.createElement('h2');
        titleHeading.innerHTML = question.text;
        titleBlock.append(titleHeading);
        questionDisplay.append(titleBlock);

        //Add answers
        const answersBlock = document.createElement('div');
        answersBlock.id = question.id + "-questions";
        answersBlock.classList.add('answer-options');

        //Push question id into empty array as looping over question array
        unansweredQuestions.push(question.id);

        //Add individual answers
        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div');
            answerBlock.classList.add('answer-block');
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text));

            //Add image
            const answerImage = document.createElement('img');
            answerImage.setAttribute('src', answer.image);
            answerImage.setAttribute('alt', answer.alt);

            //Add title to images 
            const answerTitle = document.createElement('h3');
            answerTitle.innerHTML = answer.text;

            //Add image info
            const answerInfo = document.createElement('p');
            const imageLink = document.createElement('a');
            imageLink.setAttribute('href', answer.credit);
            imageLink.innerHTML = answer.credit;

            //Add clickable image link 
            const sourceLink = document.createElement('a');
            sourceLink.innerHTML = 'Unsplash';
            sourceLink.setAttribute('src', 'https://unsplash.com');
            answerInfo.append(imageLink, ' to ', sourceLink);

            //Add image then title
            answerBlock.append(answerImage, answerTitle, answerInfo)

            //Add answerBlock after answersBlock
            answersBlock.append(answerBlock);
        })

        questionDisplay.append(answersBlock);

    })
}

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
    
    //add chosen answer to array only if it is included in unanswered questions
    if (unansweredQuestions.includes(questionId)) 
    chosenAnswers.push(chosenAnswer);
    const itemToRemove = unansweredQuestions.indexOf(questionId);

    //Remove item from unansweredQuestions array once it has been answered
    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1);
    }

    console.log(chosenAnswers);
    console.log(unansweredQuestions);

    //disableQuestionBlock(questionId, chosenAnswer)
   
    //scroll to first unanswered question byt destructuring array
    const lowestquestionId = Math.min(...unansweredQuestions);
    location.href = '#' + lowestquestionId;

    // when unansweredQuestions array is empty, show answer
    if (!unansweredQuestions.length) {
        // scroll to answer div
        showAnswer()
    }
}

//create answer block to display answer

const showAnswer= () => {
    let result;
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
            ) {
                //answer is object
                result = answer;
            } else {
                //first answer object is defualt
                result = answers[0];
            }
    })

    console.log(result);

    const answerBlock = document.createElement('div');
    answerBlock.classList.add('result-block');

    //add title to answer
    const answerTitle = document.createElement('h3');
    answerTitle.innerHTML = result.text;
    //create image
    const answerImage = document.createElement('img');
    answerImage.setAttribute()
}