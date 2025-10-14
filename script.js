// questions.js
// This script defines an array of quiz questions and handles the quiz logic.

// Array of question objects. Each object has:
// - type: 'mcq' for multiple choice or 'tf' for true/false
// - question: the question text (Arabic with English terms where appropriate)
// - options: array of possible answers (order matters for correctness)
// - correctIndex: the index of the correct answer in the options array
// Comprehensive question bank covering the BFIN404 course.  Each entry contains
// the type ('mcq' or 'tf'), the question text, an array of answer options and
// the index of the correct answer within the options.  See accompanying
// documentation for more details on the subject matter.
const questions = [
  // Chapter 1 – Introduction to Banking
  {
    type: 'mcq',
    question: 'Which of the following is a primary function of a bank as a financial intermediary?',
    options: [
      'Channeling funds from savers to borrowers and providing payment services',
      'Manufacturing consumer goods',
      'Regulating other banks',
      'Maintaining fiscal policy'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A bank’s balance sheet lists assets such as loans and investments on one side and which of the following on the other side?',
    options: [
      'Liabilities like deposits, bonds and equity capital',
      'Only land and buildings',
      'Taxes owed to the government',
      'Clients’ personal belongings'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Equity on a bank’s balance sheet represents:',
    options: [
      'The ownership interest of the shareholders',
      'Deposits from customers',
      'Amounts owed to other banks',
      'Corporate tax liability'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of these is a financial claim?',
    options: [
      'A bank loan contract',
      'A car tyre',
      'An office building',
      'A computer software license'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'In financial intermediation, lenders generally want investments that are:',
    options: [
      'Low-risk, low-cost and liquid',
      'Illiquid and high-risk',
      'Very long term regardless of risk',
      'Non-diversified and unregulated'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Borrowers generally require funds that are:',
    options: [
      'Available for specific amounts, at specific dates and low cost',
      'Unlimited in amount and free of repayment',
      'Only short-term regardless of project life',
      'Only available in foreign currency'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following best describes direct finance?',
    options: [
      'Savers and borrowers transact with each other without an intermediary',
      'A bank lends to a borrower using depositors’ funds',
      'A government regulates financial markets directly',
      'Banks purchase assets on behalf of clients'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Indirect finance is characterized by:',
    options: [
      'The involvement of a financial intermediary such as a bank',
      'Direct negotiation between lenders and borrowers',
      'No need for contracts or screening',
      'Transactions taking place on a stock exchange'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Size transformation refers to a bank’s ability to:',
    options: [
      'Transform many small deposits into larger loans to single borrowers',
      'Convert long-term liabilities into short-term assets',
      'Create money through government printing',
      'Sell assets on behalf of the central bank'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Maturity transformation in banking involves:',
    options: [
      'Funding long-term loans with short-term deposits',
      'Selling long-term assets and buying short-term liabilities',
      'Borrowing and lending for identical maturities',
      'Only investing in securities with variable rates'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'What is liquidity risk in the context of maturity transformation?',
    options: [
      'The possibility that depositors will withdraw funds faster than the bank can realise its assets',
      'The chance that a borrower defaults on a loan',
      'The risk of losing money due to foreign exchange movements',
      'The risk of cyber‑attack on e‑banking systems'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Risk transformation by banks is achieved primarily through:',
    options: [
      'Diversifying loans, screening borrowers and holding capital buffers',
      'Gambling on speculative stock market positions',
      'Ignoring credit histories of borrowers',
      'Avoiding any form of monitoring after lending'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Economies of scale in banking occur when:',
    options: [
      'The average cost per transaction declines as the number of transactions increases',
      'All services cost the same to provide regardless of volume',
      'The bank produces only one product and sells it to many clients',
      'The bank’s profits decline as it grows larger'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Economies of scope in banking are best described as:',
    options: [
      'Cost savings achieved by offering several related services using shared inputs',
      'Reducing risk by limiting the range of services offered',
      'Lower costs due to hiring only senior managers',
      'Earning profits solely from interest rate differences'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Asymmetric information in financial transactions refers to:',
    options: [
      'One party having more or better information than the other',
      'Both parties having identical information',
      'The absence of any legal contracts',
      'The bank disclosing its entire business strategy publicly'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is an aspect of information asymmetry?',
    options: [
      'Adverse selection before contracting',
      'Total transparency about borrower risk',
      'Lenders and borrowers possessing equal knowledge',
      'Unlimited disclosure by all financial institutions'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Adverse selection in lending occurs when:',
    options: [
      'Borrowers with higher risk are more likely to seek loans and be selected',
      'All borrowers are perfectly screened for risk',
      'Lenders deliberately choose safe borrowers',
      'Borrowers voluntarily provide collateral to reduce interest rates'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Moral hazard in banking refers to the possibility that:',
    options: [
      'Borrowers may engage in riskier behavior after receiving a loan',
      'Deposit insurance encourages saving',
      'Banks have no influence on borrower actions',
      'Interest rates fall when inflation increases'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Relationship banking is characterized by:',
    options: [
      'Long‑term, personalized interaction between bank and customer',
      'Purely one‑time transactions based on price alone',
      'No sharing of any customer information',
      'Online only interactions without human contact'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Transaction banking emphasises:',
    options: [
      'Standardised products and short‑term interactions',
      'Customized contracts for each client',
      'Full disclosure of client credit history to the public',
      'Loans only for large corporations'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Delegated monitoring theory argues that banks exist to:',
    options: [
      'Collect and analyse information on borrowers on behalf of depositors',
      'Produce consumer goods and services',
      'Perform manufacturing activities',
      'Avoid any regulatory oversight'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which theory of banking emphasises that banks help households smooth consumption over time?',
    options: [
      'Consumption smoothing theory',
      'Risk transformation theory',
      'Adverse selection theory',
      'Economies of scale theory'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Liquidity transformation theory suggests that banks exist because they:',
    options: [
      'Provide customers with deposit accounts while investing in illiquid loans',
      'Eliminate the need for any financial regulation',
      'Guarantee high returns on every investment',
      'Operate only with short‑term assets and liabilities'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Commitment mechanisms in banking refer to the ability to:',
    options: [
      'Enforce long‑term contracts that bind borrowers to repay',
      'Offer unlimited credit without any covenants',
      'Increase interest rates arbitrarily on old loans',
      'Avoid the need for any legal agreements'
    ],
    correctIndex: 0
  },
  // Chapter 2 – Banking Activities and Current Issues
  {
    type: 'mcq',
    question: 'Why are deposit‑taking institutions (DTIs) subject to heavier regulation than non‑deposit‑taking institutions?',
    options: [
      'Because deposits are part of the money supply and their withdrawal is at the discretion of depositors',
      'Because they make more profits than non‑deposit‑taking institutions',
      'Because they do not lend to the public',
      'Because they have no role in monetary policy'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is NOT a function of monetary financial institutions (MFIs)?',
    options: [
      'Manufacturing consumer electronics',
      'Accepting deposits',
      'Issuing electronic money',
      'Managing investments'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A debit transfer is best described as:',
    options: [
      'A payment where the payer hands over a completed cheque to the beneficiary',
      'An instruction for the bank to transfer funds directly to the beneficiary’s account',
      'A recurring payment initiated by the beneficiary',
      'A payment using a credit card facility'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A standing order is:',
    options: [
      'An instruction from the customer to the bank to pay a fixed amount at regular intervals',
      'An agreement for the bank to guarantee a cheque',
      'An instruction to transfer funds on demand',
      'An order to issue new shares to the public'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following best describes a direct debit?',
    options: [
      'An authority given to the beneficiary to collect variable amounts from the payer’s account',
      'A request by the customer for cash from the bank',
      'A fixed payment instruction by the payer for the same amount each time',
      'The use of a credit card to make a payment'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Credit cards differ from debit cards in that:',
    options: [
      'Credit cards allow the holder to borrow funds up to a limit, whereas debit cards draw directly from deposit accounts',
      'Debit cards always attract high interest on balances',
      'Credit cards require the account balance to be positive before a transaction',
      'Debit cards provide unsecured revolving credit'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A cheque guarantee card is used to:',
    options: [
      'Ensure the bank will honour a cheque up to a specified limit',
      'Provide immediate cash advances through ATMs',
      'Serve as proof of identity when applying for a loan',
      'Guarantee that a standing order will always be paid'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'What is e‑banking?',
    options: [
      'The provision of banking services through electronic networks like the internet and mobile apps',
      'Issuing only plastic cards for payments',
      'Printing bank statements using paper',
      'Exchanging goods and services in physical branches only'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is an example of a process innovation in banking?',
    options: [
      'Automated teller machines (ATMs) that allow cash withdrawals outside banking hours',
      'The invention of a new type of savings account',
      'The merger between two banks',
      'Offering fixed‑rate mortgages only'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A product innovation in banking could be:',
    options: [
      'The development of a new derivative instrument for risk management',
      'Installing security cameras in branches',
      'Encouraging employees to work from home',
      'Publishing financial regulations on the internet'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is an institutional innovation?',
    options: [
      'The creation of a new financial intermediary to perform functions formerly carried out by banks',
      'The introduction of online banking services',
      'The issuance of credit cards',
      'The use of ATMs to withdraw cash'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Deregulation in the banking sector typically leads to:',
    options: [
      'Increased competition and the entry of non‑bank financial firms',
      'A reduction in the number of financial products available',
      'Elimination of all risk associated with banking',
      'A total ban on electronic payments'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Re‑regulation occurs when:',
    options: [
      'New rules are introduced to address risks created by deregulation',
      'Banks decide to self‑regulate without government intervention',
      'Customers set their own interest rates',
      'Technology eliminates the need for any regulation'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'What is disintermediation in the financial sector?',
    options: [
      'Economic units bypass banks and invest directly in financial markets',
      'Banks increase the number of intermediaries between savers and borrowers',
      'All bank deposits are transferred to the central bank',
      'Clients use only cash for transactions'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following statements about mergers and acquisitions (M&As) in banking is correct?',
    options: [
      'A merger involves two companies combining to form a new entity, whereas an acquisition involves one company purchasing another',
      'An acquisition always results in a loss of market share',
      'Mergers always reduce the number of products offered by banks',
      'M&As are exclusively limited to domestic transactions'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A motive for bank mergers and acquisitions is:',
    options: [
      'To increase market power and diversify product lines',
      'To reduce access to new customers',
      'To decrease economies of scale',
      'To limit services to a single region'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Conglomeration in banking refers to:',
    options: [
      'Combining banking with insurance, investment and other financial services under one corporate group',
      'Limiting a bank’s activities to deposit taking only',
      'Splitting a bank into separate entities by product line',
      'Introducing a single new financial product'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Globalization in banking is associated with:',
    options: [
      'The expansion of banking operations across national borders',
      'Closing all international branches',
      'Restricting financial transactions to domestic currency only',
      'Making all bank products identical worldwide'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is an example of a non‑deposit‑taking institution (NDTI)?',
    options: [
      'An insurance company',
      'A commercial bank',
      'A savings bank',
      'A credit union'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'The primary source of funding for banks generally includes:',
    options: [
      'Deposits, issuing bonds or shares, and retained earnings',
      'Selling assets like buildings and land',
      'Government subsidies only',
      'Unregistered private loans from individuals'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'The utilisation of funds by a bank mainly involves:',
    options: [
      'Granting loans and making investments in securities',
      'Buying personal goods for employees',
      'Making donations to any company requesting funds',
      'Keeping all funds as cash in vaults'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is a characteristic of electronic banking?',
    options: [
      'Providing 24/7 access to account information via the internet or mobile devices',
      'Opening accounts exclusively at physical branches during business hours',
      'Prohibiting any form of online payments',
      'Requiring customers to use cash for all transactions'
    ],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'In a standing order, the customer instructs the bank to pay a fixed amount at regular intervals.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'A credit card transaction always requires the account balance to be positive before the payment can be made.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Disintermediation occurs when individuals or firms invest directly in capital markets rather than through banks.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Process innovations in banking include things like ATMs and electronic payment systems.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Re‑regulation increases competition by removing all rules governing financial institutions.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'A merger is always identical to an acquisition.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Conglomeration involves splitting a bank into separate entities to reduce its size.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Electronic banking eliminates the need for any physical branches.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  // Chapter 3 – Types of Banking
  {
    type: 'mcq',
    question: 'Which of the following best distinguishes commercial banking from investment banking?',
    options: [
      'Commercial banks serve individuals and small businesses through deposit accounts and loans, while investment banks serve large corporations by underwriting securities and advising on M&As',
      'Investment banks primarily provide personal mortgages to individuals',
      'Commercial banks focus exclusively on wealth management for the wealthy',
      'Investment banks charge no fees for their services'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Retail (personal) banking typically provides which of the following services?',
    options: [
      'Payment services, savings accounts, loans, mortgages, insurance and pensions',
      'Advising on corporate mergers and acquisitions',
      'Issuing and underwriting corporate bonds',
      'Managing large pension funds for global corporations only'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A saving bank is primarily distinguished from a commercial bank because it:',
    options: [
      'Has mutual ownership and aims to serve its members and local community',
      'Is listed on a stock exchange and owned by external shareholders',
      'Offers only investment banking services',
      'Does not accept any customer deposits'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Co‑operative banks differ from commercial banks mainly in that they:',
    options: [
      'Are owned by their members and focus on serving them rather than external shareholders',
      'Provide services exclusively to multinational corporations',
      'Operate solely as investment banks',
      'Issue only credit cards and mortgages'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Credit unions are best described as:',
    options: [
      'Member‑owned non‑profit institutions that lend only to their members',
      'Government agencies that regulate the banking sector',
      'For‑profit corporations trading on the stock exchange',
      'Investment firms that specialise in underwriting corporate bonds'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Finance houses differ from banks because they:',
    options: [
      'Provide loans but do not accept deposits',
      'Accept deposits and provide full retail banking services',
      'Specialise only in foreign exchange transactions',
      'Act as central banks within their countries'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Private banking services are targeted at:',
    options: [
      'High‑net‑worth individuals requiring tailored financial advice and wealth management',
      'Young students seeking small consumer loans',
      'All employees of a bank with standardised products',
      'Government agencies seeking to raise funds in capital markets'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Key characteristics of private banking include:',
    options: [
      'Tailored services, anticipation of client needs, long‑term relationships and confidentiality',
      'Standardised mass marketing, no personal contact, and publicly available client information',
      'Providing only credit cards and mortgages',
      'Restrictions to corporate clients only'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Corporate banking primarily serves:',
    options: [
      'Mid‑sized and large firms by offering payment services, financing and risk management',
      'Individual savers with current accounts and small loans',
      'Members of a credit union seeking consumer finance',
      'Only foreign governments looking to issue debt'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is a cash management service offered to corporate clients?',
    options: [
      'Controlled disbursement accounts that manage the timing of payments',
      'Providing home mortgages to employees',
      'Underwriting a company’s initial public offering',
      'Offering private banking to high‑net‑worth individuals'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Account reconciliation services in corporate banking help firms by:',
    options: [
      'Matching the firm’s internal accounting records with the bank’s records',
      'Determining the best time to issue corporate bonds',
      'Negotiating mergers and acquisitions',
      'Calculating personal income tax returns for employees'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Wholesale lockbox facilities are used by companies to:',
    options: [
      'Accelerate the collection of payments by having customers send cheques directly to a bank‑controlled mailbox',
      'Store physical cash in safe deposit boxes',
      'Guarantee a minimum return on investment',
      'Provide internet access to clients free of charge'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Funds concentration services involve:',
    options: [
      'Gathering funds from multiple accounts into one central account for better cash management',
      'Distributing all funds evenly across all subsidiary accounts',
      'Investing funds solely in foreign currency denominated assets',
      'Avoiding any transfers between accounts'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Electronic funds transfer (EFT) allows companies to:',
    options: [
      'Move funds electronically between accounts quickly and securely',
      'Send physical cash via courier services',
      'Avoid any record of payment transactions',
      'Conduct only cross‑border money transfers'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Treasury management software in corporate banking helps firms:',
    options: [
      'Monitor cash positions, manage liquidity and forecast cash flows',
      'Engage employees through social media',
      'Manage human resources and payroll exclusively',
      'Analyse marketing data for consumer products'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Short‑term financing for corporations can include which of the following instruments?',
    options: [
      'Commercial papers, Euro notes and repurchase agreements',
      'Syndicated loans and corporate bonds',
      'Equity shares issued on the stock exchange',
      'Long‑term fixed mortgages'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Long‑term financing for corporations commonly involves:',
    options: [
      'Syndicated loans and corporate bonds',
      'Commercial papers and Euro notes',
      'Cheques and standing orders',
      'Credit card advances'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Why might a company choose to borrow in a foreign currency?',
    options: [
      'To match the currency of its revenues and hedge against exchange rate risk',
      'To guarantee that exchange rates will always be favourable',
      'Because foreign currency loans never carry interest',
      'To avoid any legal obligations in its home country'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Commitments provided by banks to corporate clients include:',
    options: [
      'Unused overdraft facilities and credit lines that can be drawn upon when needed',
      'Interest rate swaps and currency options',
      'Insurance policies for personal vehicles',
      'Underwriting services for initial public offerings'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'In corporate banking, guarantees differ from commitments in that guarantees:',
    options: [
      'Obligate the bank to pay a third party if the client fails to meet its obligations',
      'Represent a promise to lend money at a future date only',
      'Offer no legal liability to the bank',
      'Always last less than one day'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which instrument allows a company to lock in an exchange rate for a future transaction?',
    options: [
      'Forward foreign exchange contract',
      'Standing order',
      'Cheque guarantee card',
      'Time deposit'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A currency option provides:',
    options: [
      'The right, but not the obligation, to buy or sell currency at a predetermined rate in the future',
      'An obligation to exchange currency at whatever rate prevails on the date of settlement',
      'A free hedge with no premium cost',
      'Protection only against interest rate fluctuations'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Interest rate caps and collars are used by companies to:',
    options: [
      'Limit the range within which their interest payments can fluctuate',
      'Guarantee a zero interest rate on all future borrowing',
      'Eliminate the need for debt financing',
      'Convert short‑term debt into equity'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'An interest rate swap allows two parties to:',
    options: [
      'Exchange fixed and floating interest payment streams with each other',
      'Exchange currency at a future date at a fixed rate',
      'Issue new equity shares on the stock market',
      'Guarantee repayment of all loans by a third party'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Securities underwriting in investment banking involves:',
    options: [
      'Helping firms raise capital by issuing stocks or bonds and guaranteeing sale of the securities',
      'Managing personal savings accounts for clients',
      'Providing home mortgages to consumers',
      'Facilitating foreign exchange transactions for small businesses'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Fund management services offered by banks to corporate clients include:',
    options: [
      'Managing portfolios of financial assets, including pension funds and investments',
      'Administering standing orders and direct debits',
      'Issuing cheque guarantee cards',
      'Guaranteeing payments on behalf of retail customers'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Universal banking refers to a system in which a bank:',
    options: [
      'Offers all financial services such as commercial banking, investment banking and insurance under one roof',
      'Specialises exclusively in one area of finance',
      'Operates only as a not‑for‑profit organisation',
      'Does not provide retail services to individuals'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A specialist bank is one that:',
    options: [
      'Focuses on a limited range of services such as mortgage lending or investment banking only',
      'Provides all financial services including insurance and investment banking',
      'Is owned by a government regulator',
      'Accepts deposits from the general public without lending'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'An advantage of universal banking is that it:',
    options: [
      'Allows cross‑selling across different financial services and provides convenience to customers',
      'Ensures all customers receive identical products with no tailoring',
      'Eliminates any possibility of conflicts of interest',
      'Prevents banks from growing beyond a small local area'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A drawback of universal banking could be that:',
    options: [
      'The bank may become too complex to manage and increase systemic risk',
      'The bank benefits from economies of scope',
      'Customers have a single point of contact for all services',
      'Banks generate higher profitability due to cross‑selling'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Bancassurance is the practice of:',
    options: [
      'A bank collaborating with an insurance company to distribute insurance products',
      'Exchanging shares of one bank for another',
      'Selling only credit cards and personal loans',
      'Lending only to government entities'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which bancassurance model involves the bank distributing insurance products without owning the insurance company?',
    options: [
      'Distribution agreement model',
      'Joint venture model',
      'Fully integrated model',
      'Universal bank model'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'A joint venture bancassurance model is where:',
    options: [
      'The bank and the insurance company establish a jointly owned new company',
      'The bank owns 100% of the insurance company',
      'The insurance company operates without any involvement of the bank',
      'The bank sells insurance without receiving any commission'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'In a fully integrated bancassurance model, the relationship between bank and insurer is characterised by:',
    options: [
      'Common ownership and unified management of banking and insurance activities',
      'Only a simple distribution agreement between independent firms',
      'Two completely separate legal entities with no cooperation',
      'An insurer owning shares in a competing bank'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Why do banks engage in bancassurance?',
    options: [
      'To generate additional fee income and strengthen customer relationships through cross‑selling',
      'To avoid dealing with insurance regulation',
      'To ensure that banks only sell home mortgages',
      'To reduce economies of scope in their operations'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Islamic banking differs from conventional banking primarily because:',
    options: [
      'It prohibits the payment or receipt of interest (riba) and adopts profit‑and‑loss sharing principles',
      'It only offers services to clients of one religion',
      'It invests solely in government bonds',
      'It has no concern for risk management'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Which of the following is an Islamic financing instrument based on cost‑plus sale?',
    options: [
      'Murabaha',
      'Mudaraba',
      'Musharaka',
      'Ijara'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'In a Mudaraba contract:',
    options: [
      'One partner provides capital and the other provides expertise; profits are shared but losses are borne by the capital provider',
      'Both partners provide equal capital and labour',
      'The financier receives a fixed interest rate regardless of project outcome',
      'The bank guarantees the capital against any loss'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Musharaka differs from Mudaraba because:',
    options: [
      'All partners contribute capital and may contribute labour, sharing profits and losses according to capital contribution',
      'Only one partner contributes capital in Musharaka',
      'Losses are always borne solely by the working partner in Musharaka',
      'Profits are fixed regardless of business success'
    ],
    correctIndex: 0
  },
  {
    type: 'mcq',
    question: 'Ijara in Islamic finance refers to:',
    options: [
      'A lease contract where the bank buys an asset and leases it to the client',
      'A profit‑sharing contract between two partners',
      'A cost‑plus sale transaction',
      'An interest‑bearing bond issued by the government'
    ],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Commercial banks provide deposit accounts and loans primarily to individuals and small businesses.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Investment banks primarily focus on personal banking services such as savings accounts and debit cards.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Saving banks are typically shareholder owned and aim to maximise short‑term profits.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Co‑operative banks are owned and controlled by their members who are also customers.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Credit unions can lend to anyone, regardless of membership status.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Finance houses both take deposits from customers and provide loans.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Private banking offers standardised services identical for all clients.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Corporate banking services include cash management, financing and foreign exchange services.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Companies use wholesale lockbox services to delay the collection of cheques.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Treasury management software helps companies forecast cash flows and manage liquidity.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Commitments provided by banks guarantee payment to a third party if the corporate client defaults.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Guarantees oblige the bank to pay on behalf of the client if the client fails to honour its obligation.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Forward contracts lock in an exchange rate today for a transaction that will occur in the future.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Interest rate caps and collars ensure that a company always pays zero interest on its loans.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'An interest rate swap involves exchanging fixed and floating interest payment streams between two parties.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Universal banking combines commercial banking, investment banking and insurance services under one roof.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Specialist banks offer a wide variety of financial services to all types of customers.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Bancassurance allows banks to earn additional fee income by selling insurance products.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'In Islamic banking, riba (interest) is prohibited and replaced with profit‑and‑loss sharing arrangements.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Murabaha is a profit‑sharing contract in which partners contribute both capital and labour.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Mudaraba allows for losses to be shared between the capital provider and the manager according to their capital contributions.',
    options: ['True', 'False'],
    correctIndex: 1
  },
  {
    type: 'tf',
    question: 'Musharaka is a partnership in which all partners contribute capital and share profits and losses.',
    options: ['True', 'False'],
    correctIndex: 0
  },
  {
    type: 'tf',
    question: 'Ijara is an Islamic financial instrument involving lease financing.',
    options: ['True', 'False'],
    correctIndex: 0
  }
];

// Number of questions to present during each quiz attempt.  Set to 15 to
// provide a manageable sample from the larger question bank.
const QUIZ_LENGTH = 15;

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

// Progress bar element used to visualise quiz progress.  The corresponding
// HTML element must exist with id="progress-bar" in the page.
const progressBar = document.getElementById('progress-bar');

// Update the progress bar based on the current question index.  Shows both
// percentage completion and a simple fraction indicator.
function updateProgress() {
  const percent = (currentIndex / QUIZ_LENGTH) * 100;
  progressBar.style.width = `${percent}%`;
  progressBar.setAttribute('aria-valuenow', percent.toFixed(0));
  progressBar.textContent = `${currentIndex} / ${QUIZ_LENGTH}`;
}

// Start quiz: shuffle questions and show the first
startBtn.addEventListener('click', startQuiz);

// Next question handler
nextBtn.addEventListener('click', handleNext);

// Retake quiz handler
retakeBtn.addEventListener('click', startQuiz);

// Function to start or restart the quiz
function startQuiz() {
  // Shuffle questions and select a random subset equal to QUIZ_LENGTH
  shuffledQuestions = shuffle(questions).slice(0, QUIZ_LENGTH);
  currentIndex = 0;
  score = 0;
  selectedIndex = null;
  // Hide start and result, show quiz
  startScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  quizContainer.style.display = 'block';
  // Reset progress bar and show first question
  updateProgress();
  showQuestion();
}

// Display current question and options
function showQuestion() {
  const q = shuffledQuestions[currentIndex];
  questionNumber.textContent = `Question ${currentIndex + 1} of ${QUIZ_LENGTH}`;
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

  // Update progress bar after rendering options
  updateProgress();
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
  scoreText.textContent = `You answered correctly ${score} out of ${QUIZ_LENGTH} questions.`;
  // At the end of the quiz the progress bar should be full
  currentIndex = QUIZ_LENGTH;
  updateProgress();
  // Reset to start screen state so user can retake easily
}