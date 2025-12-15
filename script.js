// Updated questions from Chapters 7–10 (Risk Management, Portfolio Management and Bank Management)
// Each question object includes:
// - type: 'mcq' for multiple choice or 'tf' for true/false
// - question: the text in Arabic with English terminology where appropriate
// - options: array of possible answers
// - correctIndex: index of the correct answer within options

const questions = [
  {
    type: 'mcq',
    question: 'ما هو الهدف الأساسي لإدارة المخاطر (Risk Management) في البنوك؟',
    options: [
      'تعظيم ربحية المساهمين ضمن حدود المخاطر المقبولة',
      'تجنب كل أنواع المخاطر بدون استثناء',
      'زيادة حجم القروض مهما كان الخطر',
      'إلغاء أنشطة الاستثمار بالكامل'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'يشير مصطلح Risk Measurement إلى:',
    options: [
      'قياس حجم المخاطر دون اتخاذ أي إجراءات لمعالجتها',
      'اتخاذ قرارات فورية لتقليل المخاطر',
      'توظيف موظفين جدد في البنك',
      'إدارة المحفظة الاستثمارية'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'في إطار إدارة الأصول والخصوم (ALM)، يشير عدم التوافق بين آجال الأصول والخصوم إلى خطر:',
    options: [
      'السيولة (Liquidity Risk)',
      'الائتمان (Credit Risk)',
      'المشتقات (Derivative Risk)',
      'العملة (Currency Risk)'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'تفرض لجنة بازل (Basel Committee) على البنوك الاحتفاظ برأس مال إضافي عندما:',
    options: [
      'ترتفع مخاطر محفظة القروض',
      'تنخفض أرباح البنك',
      'يزداد عدد الفروع',
      'يتغير سعر الصرف'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Credit Risk Management يهدف إلى:',
    options: [
      'تحقيق أعلى عائد ممكن ضمن مخاطر مقبولة',
      'تجنب منح أي قروض',
      'زيادة حجم المخزون النقدي فقط',
      'إلغاء عمليات الدفع الإلكتروني'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'ماذا يعني مصطلح Correlated Defaults؟',
    options: [
      'تعثر عدد كبير من المقترضين بسبب ارتباطهم بقطاع أو منطقة واحدة',
      'سداد جميع القروض في وقت واحد',
      'تراجع أسعار الفائدة',
      'تعويم العملة في الأسواق'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Retail Credit يختلف عن Wholesale Credit بأن الأول يتميز بـ:',
    options: [
      'عدد كبير من المقترضين وقروض صغيرة',
      'قروض كبيرة لعدد قليل من الشركات',
      'عدم وجود مخاطر ائتمانية',
      'تأمين حكومي كامل لجميع القروض'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Risk–Return Trade‑Off يعني:',
    options: [
      'مقايضة بين مستوى المخاطرة والعائد المتوقع',
      'إلغاء جميع المخاطر من العمليات',
      'تحويل المخاطر إلى عملة أجنبية',
      'زيادة المخاطر بدون أي عائد'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Gap Analysis في إدارة مخاطر سعر الفائدة يقيس:',
    options: [
      'الفرق بين الأصول والخصوم الحساسة لمعدلات الفائدة',
      'مستوى الفساد الداخلي في البنك',
      'عدد الموظفين في البنك',
      'التغيرات في سعر الصرف'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Duration Analysis يستخدم لقياس:',
    options: [
      'حساسية قيمة الأصل لتغير معدلات الفائدة',
      'مدة خدمة الموظف في البنك',
      'عدد الفروع المنتشرة',
      'معدل التضخم في الاقتصاد'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'من أسباب نقص السيولة في البنوك (Liquidity Risk) وجود:',
    options: [
      'سحوبات كبيرة للودائع بينما الأصول طويلة الأجل وغير سائلة',
      'ارتفاع أرباح البنك بشكل كبير',
      'تخفيض معدلات الفائدة بشكل مستمر',
      'زيادة رأس المال المدفوع'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Value at Risk (VaR) يُستخدم لقياس:',
    options: [
      'الخسارة المحتملة نتيجة تقلبات السوق خلال فترة محددة',
      'إجمالي الأصول الثابتة في البنك',
      'إجمالي الودائع الموجودة',
      'عدد العملاء الجدد في الفرع'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'يشمل Operational Risk:',
    options: [
      'أخطاء بشرية، فشل الأنظمة، احتيال وأحداث خارجية',
      'تقلبات أسعار الأسهم في السوق',
      'تغير أسعار الفائدة في الأسواق',
      'تذبذب أسعار العملات الأجنبية'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Country Risk هو الخطر الناتج عن:',
    options: [
      'مشاكل سياسية أو اقتصادية في الدولة الأجنبية التي يعمل فيها البنك',
      'عدم قدرة العميل على السداد',
      'اختراق أنظمة البنك المعلوماتية',
      'تغير أسعار النفط في الأسواق العالمية'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'في إدارة محفظة البنك (Portfolio Management)، تعتبر القروض:',
    options: [
      'أصل رئيسي يحقق ربحاً مرتفعاً لكنه يحمل مخاطر عالية',
      'أصل عديم الفائدة ولا يدر أي ربح',
      'أصل ثابت بدون أي مخاطر',
      'خسارة مستمرة للبنك'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'من أهداف محفظة الاستثمار لدى البنك:',
    options: [
      'الأمان، السيولة، العائد، التنويع، إدارة مخاطر الفائدة، ومتطلبات الرهن',
      'زيادة المخاطر فقط لتحقيق أرباح سريعة',
      'إلغاء الاستثمار في جميع السندات والأسهم',
      'التركيز على الأسهم عالية المخاطر فقط'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'أدوات Money Market تتميز بأنها:',
    options: [
      'قصيرة الأجل، عالية السيولة، ذات مخاطر منخفضة',
      'طويلة الأجل، ذات مخاطر عالية',
      'استثمارات عقارية معقدة',
      'حصص في شركات التكنولوجيا فقط'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'أدوات Capital Market تشمل:',
    options: [
      'سندات طويلة الأجل، أسهم، وأوراق مالية مدعومة بالرهون',
      'ودائع جارية وحسابات توفير',
      'بطاقات ائتمان وقروض شخصية فقط',
      'عملات رقمية بدون ضوابط'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'سندات Held‑to‑Maturity تُسجل في الدفاتر:',
    options: [
      'بالقيمة المطفأة (amortized cost) ولا تظهر التغيرات السوقية في الأرباح أو الخسائر',
      'بالقيمة السوقية وتُسجل التغيرات في قائمة الدخل',
      'بالقيمة العادلة وتُسجل التغيرات في حقوق الملكية',
      'وفقاً لطريقة التكلفة التاريخية مع إعادة تقييم سنوية'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Trading Securities تتميز بأنها:',
    options: [
      'تُقيّم بالقيمة السوقية وتنعكس التغيرات فوراً في قائمة الدخل',
      'يتم الاحتفاظ بها حتى تاريخ الاستحقاق دون بيع',
      'لا يمكن بيعها قبل تاريخ معين',
      'لا يتم الاعتراف بأي أرباح أو خسائر عليها'
    ],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'مدير المخاطر في البنك يسعى دائماً إلى تحقيق توازن بين العائد والمخاطرة.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Risk Measurement يركز فقط على قياس المخاطر دون اتخاذ إجراءات للتعامل معها.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Correlated Defaults تعتبر أقل خطورة من التعثرات غير المترابطة.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'في Gap Analysis، إذا كانت الخصوم الحساسة للفائدة أكبر من الأصول الحساسة للفائدة، يستفيد البنك من ارتفاع معدل الفائدة.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'امتلاك سيولة كافية أمر ضروري لسلامة البنك حتى لو كانت أرباحه مرتفعة.',
    options: ['True', 'False'],
    correctIndex: 0
  }
];

// عدد الأسئلة التي ستظهر في كل محاولة من الاختبار. يمكن تعديل الرقم حسب الحاجة.
const QUIZ_LENGTH = 15;

// دالة لخلط مصفوفة الأسئلة (خوارزمية فيشر-ياتس)
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// متغيرات الحالة
let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedIndex = null;

// لتتبع الإجابات الخاطئة وعرضها في النهاية
let wrongAnswers = [];

// عناصر DOM
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

// شريط التقدم
const progressBar = document.getElementById('progress-bar');

// تحديث شريط التقدم بحسب السؤال الحالي
function updateProgress() {
  const percent = (currentIndex / QUIZ_LENGTH) * 100;
  progressBar.style.width = `${percent}%`;
  progressBar.setAttribute('aria-valuenow', percent.toFixed(0));
  progressBar.textContent = `${currentIndex} / ${QUIZ_LENGTH}`;
}

// بدء أو إعادة بدء الاختبار
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNext);
retakeBtn.addEventListener('click', startQuiz);

function startQuiz() {
  shuffledQuestions = shuffle(questions).slice(0, QUIZ_LENGTH);
  currentIndex = 0;
  score = 0;
  selectedIndex = null;
  wrongAnswers = [];
  if (wrongAnswersContainer) {
    wrongAnswersContainer.innerHTML = '';
  }
  startScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  quizContainer.style.display = 'block';
  updateProgress();
  showQuestion();
}

// عرض السؤال الحالي وخياراته
function showQuestion() {
  const q = shuffledQuestions[currentIndex];
  questionNumber.textContent = `Question ${currentIndex + 1} of ${QUIZ_LENGTH}`;
  questionText.textContent = q.question;
  optionsContainer.innerHTML = '';
  selectedIndex = null;
  nextBtn.disabled = true;
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
  updateProgress();
}

// معالجة اختيار الإجابة والانتقال للسؤال التالي أو إظهار النتيجة
function handleNext() {
  if (selectedIndex === null) return;
  const currentQuestion = shuffledQuestions[currentIndex];
  if (selectedIndex === currentQuestion.correctIndex) {
    score++;
  } else {
    wrongAnswers.push({
      question: currentQuestion.question,
      selected: currentQuestion.options[selectedIndex],
      correct: currentQuestion.options[currentQuestion.correctIndex]
    });
  }
  currentIndex++;
  if (currentIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// إظهار نتيجة الاختبار
function showResult() {
  quizContainer.style.display = 'none';
  resultScreen.style.display = 'block';
  scoreText.textContent = `أجبت بشكل صحيح على ${score} من أصل ${QUIZ_LENGTH} سؤال.`;
  currentIndex = QUIZ_LENGTH;
  updateProgress();
  if (wrongAnswersContainer) {
    if (wrongAnswers.length > 0) {
      let listHtml = '<h5 class="mt-4">الإجابات الخاطئة:</h5><ul class="list-group">';
      wrongAnswers.forEach(item => {
        listHtml += `<li class="list-group-item">
          <strong>السؤال:</strong> ${item.question}<br>
          <strong>إجابتك:</strong> ${item.selected}<br>
          <strong>الإجابة الصحيحة:</strong> ${item.correct}
        </li>`;
      });
      listHtml += '</ul>';
      wrongAnswersContainer.innerHTML = listHtml;
    } else {
      wrongAnswersContainer.innerHTML = '<p class="mt-4">عمل رائع! جميع الإجابات صحيحة.</p>';
    }
  }
}
