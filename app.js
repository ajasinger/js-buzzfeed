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

        //Add individual answers
        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div');
            answerBlock.classList.add('answer-block');
            answerBlock.addEventListener('click', handleClick);

            //Add image
            const answerImage = document.createElement('img');
            answerImage.setAttribute('src', answer.image);
            answerImage.setAttribute('alt', answer.alt);

            //Add title to images 
            const answerTitle = document.createElement('h3');
            answerTitle.innerHTML = answer.text;

            //Add image then title
            answerBlock.append(answerImage, answerTitle)
        })

        questionDisplay.append(answersBlock);

    })
}

populateQuestions();

const handleClick = () => {
    console.log('click');
}