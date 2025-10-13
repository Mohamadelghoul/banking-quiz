// questions.js
// This script defines an array of quiz questions and handles the quiz logic.

// Array of question objects. Each object has:
// - type: 'mcq' for multiple choice or 'tf' for true/false
// - question: the question text (Arabic with English terms where appropriate)
// - options: array of possible answers (order matters for correctness)
// - correctIndex: the index of the correct answer in the options array
const questions = [
  {
    type: 'mcq',
    question: 'What are the main functions of a bank as a financial intermediary?',
    options: [
      'Channel funds from savers to borrowers and provide payment services',
      'Sell only insurance products',
      'Invest solely in real estate',
      'Mint coins only'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'What is the primary source of bank funding?',
    options: [
      'Deposits, issuing bonds and shares, and retained earnings',
      'Only government aid',
      'Selling real estate',
      'Employee expenses'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'What is the difference between deposit-taking institutions (DTIs) and non-deposit-taking institutions (NDTIs)?',
    options: [
      'DTIs accept cash deposits and are more regulated because of their monetary role, while NDTIs like insurance companies do not accept deposits',
      'NDTIs accept deposits, DTIs do not',
      'There is no difference between them',
      'DTIs are private companies only'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is a credit transfer?',
    options: [
      'An instruction from the customer to the bank to transfer funds directly to the beneficiary\'s account',
      'Writing a cheque and handing it to the beneficiary',
      'Withdrawing cash from an ATM',
      'Using a cheque guarantee card'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'What is the fundamental difference between direct and indirect finance?',
    options: [
      'In direct finance the borrower and saver deal directly without an intermediary, whereas in indirect finance a bank or intermediary is involved',
      'Direct finance uses only loans',
      'Indirect finance doesn\'t require contracts',
      'There is no difference between them'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which statement best distinguishes commercial banks from investment banks?',
    options: [
      'Commercial banks serve individuals and small businesses through loans and accounts, while investment banks serve large corporations and provide M&A and underwriting services',
      'Investment banks offer personal mortgages to individuals',
      'Commercial banks focus only on wealth management for the wealthy',
      'Investment banks charge no fees'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is a retail banking service?',
    options: [
      'Current and savings accounts, loans, mortgages, insurance and pensions',
      'Issuing corporate shares',
      'Advising on mergers and acquisitions',
      'Venture capital financing'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'What is the concept of bancassurance?',
    options: [
      'A collaboration between a bank and an insurance company to market insurance products through the bank\'s branches',
      'A bank purchasing an insurance company outright',
      'Selling shares and bonds in the market',
      'Issuing credit cards'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following instruments are used in Islamic banks instead of interest?',
    options: [
      'Musharaka (partnership), Mudaraba (profit sharing) and Murabaha (cost-plus sale)',
      'Only interest-bearing debts',
      'Fixed-rate mortgages',
      'There are no alternatives to interest'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is a corporate banking finance service?',
    options: [
      'Syndicated loans and bonds',
      'Personal savings accounts',
      'Personal credit cards',
      'Employee compensation'
    ],
    correctIndex: 0
  },
  // True/False questions
  {
    type: 'tf',
    question: 'An investment bank provides personal loans to individual customers.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Private banking focuses on wealthy clients and offers wealth management and financial planning services.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Islamic banks may charge interest on loans if both parties agree.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Credit transfers are instructions from the customer to the bank to transfer funds to the beneficiary\'s account.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'A joint venture in bancassurance means the bank owns the insurance company outright.',
    options: ['True', 'False'],
    correctIndex: 1
  }
];

// Utility function to shuffle an array (Fisher-Yates shuffle)
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// State variables
let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedIndex = null;

// DOM elements
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const retakeBtn = document.getElementById('retake-btn');
const quizContainer = document.getElementById('quiz-container');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreText = document.getElementById('score-text');

// Start quiz: shuffle questions and show the first
startBtn.addEventListener('click', startQuiz);

// Next question handler
nextBtn.addEventListener('click', handleNext);

// Retake quiz handler
retakeBtn.addEventListener('click', startQuiz);

// Function to start or restart the quiz
function startQuiz() {
  shuffledQuestions = shuffle(questions);
  currentIndex = 0;
  score = 0;
  selectedIndex = null;
  // Hide start and result, show quiz
  startScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  quizContainer.style.display = 'block';
  // Show first question
  showQuestion();
}

// Display current question and options
function showQuestion() {
  const q = shuffledQuestions[currentIndex];
  questionNumber.textContent = `Question ${currentIndex + 1} of ${shuffledQuestions.length}`;
  questionText.textContent = q.question;
  optionsContainer.innerHTML = '';
  selectedIndex = null;
  nextBtn.disabled = true;
  // Create radio buttons or buttons for options
  q.options.forEach((option, index) => {
    const optionId = `option-${currentIndex}-${index}`;
    const div = document.createElement('div');
    div.className = 'form-check';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'question-options';
    input.id = optionId;
    input.className = 'form-check-input';
    input.value = index;
    input.addEventListener('change', () => {
      selectedIndex = parseInt(input.value);
      nextBtn.disabled = false;
    });
    const label = document.createElement('label');
    label.className = 'form-check-label';
    label.htmlFor = optionId;
    label.textContent = option;
    div.appendChild(input);
    div.appendChild(label);
    optionsContainer.appendChild(div);
  });
}

// Handle next button click: evaluate answer and move to next question or show result
function handleNext() {
  if (selectedIndex === null) return;
  const currentQuestion = shuffledQuestions[currentIndex];
  if (selectedIndex === currentQuestion.correctIndex) {
    score++;
  }
  currentIndex++;
  if (currentIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Display result screen with score
function showResult() {
  quizContainer.style.display = 'none';
  resultScreen.style.display = 'block';
  scoreText.textContent = `You answered correctly ${score} out of ${shuffledQuestions.length} questions.`;
  // Reset to start screen state so user can retake easily
}
