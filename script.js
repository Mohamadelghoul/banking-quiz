// Updated questions from Chapters 7–10 (Risk Management, Portfolio Management and Bank Management)
// Each question object includes:
// - type: 'mcq' for multiple choice or 'tf' for true/false
// - question: the text in English
// - options: array of possible answers in English
// - correctIndex: index of the correct answer within options

const questions = [
  {
    type: 'mcq',
    question: 'What is the primary objective of risk management in banks?',
    options: [
      'Maximizing shareholder wealth within acceptable risk limits',
      'Avoiding all types of risk without exception',
      'Increasing the loan portfolio regardless of risk',
      'Eliminating all investment activities completely'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'The term risk measurement refers to:',
    options: [
      'Measuring the size of risk without taking any action to address it',
      'Taking immediate decisions to reduce risk',
      'Hiring new employees at the bank',
      'Managing the investment portfolio'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Within asset-liability management (ALM), mismatching maturities of assets and liabilities refers to the risk of:',
    options: [
      'Liquidity risk',
      'Credit risk',
      'Derivative risk',
      'Currency risk'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'The Basel Committee requires banks to hold additional capital when:',
    options: [
      'The risk of the loan portfolio increases',
      'Bank profits decline',
      'The number of branches increases',
      'The exchange rate changes'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Credit risk management aims to:',
    options: [
      'Achieve the highest possible return within acceptable risk',
      'Avoid granting any loans',
      'Increase cash reserves only',
      'Eliminate electronic payment operations'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'What does the term correlated defaults mean?',
    options: [
      'Default of a large number of borrowers because they are linked to a single sector or region',
      'Repayment of all loans at once',
      'Decline in interest rates',
      'Floating the currency in the markets'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Retail credit differs from wholesale credit in that the former has:',
    options: [
      'A large number of borrowers and small loans',
      'Large loans to a few companies',
      'No credit risk',
      'Full government guarantee for all loans'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Risk–return trade-off means:',
    options: [
      'A trade-off between the level of risk and the expected return',
      'Eliminating all risks from operations',
      'Converting risks into foreign currency',
      'Increasing risks without any return'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Gap analysis in interest rate risk management measures:',
    options: [
      'The difference between interest rate-sensitive assets and liabilities',
      'The level of internal corruption in the bank',
      'The number of employees in the bank',
      'Changes in the exchange rate'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Duration analysis is used to measure:',
    options: [
      'The sensitivity of the value of an asset to changes in interest rates',
      'The length of service of employees in the bank',
      'The number of branches',
      'The inflation rate in the economy'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'One cause of liquidity shortage in banks (liquidity risk) is:',
    options: [
      'Large withdrawals of deposits while assets are long-term and illiquid',
      'A sharp increase in the bank\'s profits',
      'Continuous reduction of interest rates',
      'Increase in paid-up capital'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Value at Risk (VaR) is used to measure:',
    options: [
      'The potential loss due to market fluctuations over a specified period',
      'The total fixed assets in the bank',
      'The total deposits',
      'The number of new customers in the branch'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Operational risk includes:',
    options: [
      'Human errors, system failures, fraud and external events',
      'Fluctuations in stock prices in the market',
      'Changes in interest rates in the markets',
      'Fluctuations in foreign exchange rates'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Country risk is the risk arising from:',
    options: [
      'Political or economic problems in the foreign country where the bank operates',
      'The customer\'s inability to repay',
      'Hacking of the bank\'s information systems',
      'Changes in oil prices in global markets'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'In bank portfolio management, loans are:',
    options: [
      'A principal asset generating high profits but carrying high risk',
      'A worthless asset generating no profit',
      'A fixed asset without any risk',
      'A continuous loss for the bank'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'The objectives of the bank\'s investment portfolio include:',
    options: [
      'Safety, liquidity, yield, diversification, interest rate risk management, and pledging requirements',
      'Increasing risk only to achieve quick profits',
      'Eliminating investment in all bonds and stocks',
      'Focusing only on high-risk stocks'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Money market instruments are characterized by:',
    options: [
      'Short-term, high liquidity, low risk',
      'Long-term, high risk',
      'Complex real estate investments',
      'Shares only in technology companies'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Capital market instruments include:',
    options: [
      'Long-term bonds, stocks and mortgage-backed securities',
      'Current deposits and savings accounts',
      'Credit cards and personal loans only',
      'Cryptocurrencies without regulations'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Held-to-maturity bonds are recorded in the books:',
    options: [
      'At amortized cost with no recognition of market changes in profits or losses',
      'At market value with changes recognized in the income statement',
      'At fair value with changes recorded in equity',
      'According to historical cost with annual revaluation'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Trading securities are characterized by:',
    options: [
      'Valued at market value with changes immediately recognized in the income statement',
      'Held to maturity without sale',
      'Cannot be sold before a certain date',
      'No recognition of any profits or losses'
    ],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'The risk manager in the bank always strives to achieve a balance between return and risk.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Risk measurement focuses only on measuring risk without taking actions to deal with it.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Correlated defaults are considered less risky than uncorrelated defaults.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'In gap analysis, if interest-sensitive liabilities exceed interest-sensitive assets, the bank benefits from an increase in the interest rate.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Having adequate liquidity is necessary for the safety of the bank even if its profits are high.',
    options: ['True', 'False'],
    correctIndex: 0
  }
];

// Number of questions to display in each quiz attempt. You can adjust this value as needed.
const QUIZ_LENGTH = 15;

// Function to shuffle an array (Fisher-Yates algorithm)
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

// To track wrong answers and display them at the end
let wrongAnswers = [];

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
const wrongAnswersContainer = document.getElementById('wrong-answers');
const scoreText = document.getElementById('score-text');

// Progress bar
const progressBar = document.getElementById('progress-bar');

// Update the progress bar based on the current question index
function updateProgress() {
  const progress = ((currentIndex + 1) / QUIZ_LENGTH) * 100;
  progressBar.style.width = `${progress}%`;
}
