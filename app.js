const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt: "Photo of the Empire State building during daytime",
                credit: "Oliver Niblett"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"Time-lapse photography car lights on bridge",
                credit: "Carlos Alfonso"
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"High-rise buildings",
                credit: "Elena Kuchko"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1549965738-e1aaf1168943?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"Road with people and house",
                credit: "João Francisco"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers:[
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"Pepperoni Pizza",
                credit: "Alan Hardman"
            },
            {
                text: "Sandwich",
                image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"ham sandwich on white surface",
                credit: "Eaters Collective"
            },
            {
                text: "Pasta",
                image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"Pasta in tomato sauce",
                credit: "Mgg Vitchakorn"
            },
            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"hamburger",
                credit: "sk"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a home:",
        answers:[
            {
                text: "Traditional",
                image: "https://images.unsplash.com/photo-1555040479-c949debe66c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"focus photography of building windows",
                credit: "Burgess Milner"
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"low angle view of building",
                credit: "Brandon Giggs"
            },
            {
                text: "House",
                image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
                alt:"trees beside white house",
                credit: "Phil Hearing"
            },
            {
                text: "Mountains",
                image: "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
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
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&w=400&h=400&fit=fillmax",
        alt: "Blue Cheese"
    },
    {
        combination: ["Austin", "Pasta", "Modern"],
        text: "Cheddar",
        image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Cheddar Cheese"
    },
    {
        combination: ["Portland", "Sandwich", "Mountains"],
        text: "Feta",
        image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        alt: "Feta Cheese"
    },
    {
        combination: ["New Orleans", "Hamburger", "House"],
        text: "Halloumi",
        image: "https://images.unsplash.com/photo-1505281036624-fac2862357b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
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
            //handleClick function defined below
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
            imageLink.setAttribute('href', answer.image);
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

//call function
populateQuestions();


//define handleClick event
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
        location.href = '#answer';
        showAnswer();
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
            } else if (!result) {
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
    //show answer image
    answerImage.setAttribute('src', result.image);
    answerImage.setAttribute('alt', result.alt);

    answerBlock.append(answerTitle, answerImage);

    answerDisplay.append(answerBlock);

    //disable multiple answer
    const allAnswerBlocks = document.querySelectorAll('.answer-block');
    //can't remove event listener to this is workaround
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)));
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")
    
    //make array from question block, for each
    //if title in text doesn't equal chosen answer than add opacity
    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText != chosenAnswer) {
            block.style.opacity = "50%";
        }
    })

}