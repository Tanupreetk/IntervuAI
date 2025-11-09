import { CodeIcon, WebDevIcon, UserIcon, PythonIcon, JavaScriptIcon, SystemDesignIcon } from './icons';

export const CATEGORIES = {
  dsa: {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    description: 'Test your knowledge on fundamental computer science concepts.',
    icon: CodeIcon,
    mock: [
      { id: 1, question: 'What is the time complexity of a binary search?', options: ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'], answer: 'O(log n)' },
      { id: 2, question: 'Which data structure uses LIFO (Last-In, First-Out)?', options: ['Queue', 'Stack', 'Array', 'Linked List'], answer: 'Stack' },
      { id: 3, question: 'What is a hash collision?', options: ['Two keys having the same hash', 'A key not found in the map', 'A hash map being full', 'A key pointing to null'], answer: 'Two keys having the same hash' },
    ],
    prep: [
      { id: 1, question: 'Explain the difference between a stack and a queue.', answer: 'A stack is a Last-In, First-Out (LIFO) structure, like a stack of plates. A queue is a First-In, First-Out (FIFO) structure, like a line at a store.' },
      { id: 2, question: 'What is recursion?', answer: 'Recursion is a programming technique where a function calls itself to solve a problem. It must have a base case to prevent an infinite loop.' },
    ],
  },
  'web-dev': {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Frontend, backend, databases, and everything in between.',
    icon: WebDevIcon,
    mock: [
       { id: 1, question: 'Which of the following is NOT a valid CSS selector?', options: ['.class', '#id', ':element', 'tag'], answer: ':element' },
       { id: 2, question: 'What does the `useState` hook in React do?', options: ['Fetches data from an API', 'Adds state to a functional component', 'Creates a new component', 'Styles a component'], answer: 'Adds state to a functional component' },
    ],
    prep: [
      { id: 1, question: 'What is the purpose of a "key" prop in React lists?', answer: 'The "key" prop is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed, which helps in efficiently updating the UI.' },
      { id: 2, question: 'Describe the box model in CSS.', answer: 'The CSS box model is a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. It allows us to add a border around elements, and to space elements in relation to other elements.' },
    ],
  },
  'system-design': {
    id: 'system-design',
    name: 'System Design',
    description: 'Explore concepts for designing scalable and reliable systems.',
    icon: SystemDesignIcon,
    mock: [
      { id: 1, question: 'What is the purpose of a load balancer?', options: ['To cache data', 'To distribute traffic across servers', 'To secure the database', 'To compile code'], answer: 'To distribute traffic across servers' },
      { id: 2, question: 'What does "CAP Theorem" stand for?', options: ['Consistency, Availability, Partition tolerance', 'Concurrency, Atomicity, Performance', 'Cache, API, Protocol', 'Client, Application, Persistence'], answer: 'Consistency, Availability, Partition tolerance' },
    ],
    prep: [
       { id: 1, question: 'Explain the difference between vertical and horizontal scaling.', answer: 'Vertical scaling (scaling up) means increasing the resources of a single server (e.g., more CPU, RAM). Horizontal scaling (scaling out) means adding more servers to your pool of resources.' },
       { id: 2, question: 'What is database sharding?', answer: 'Sharding is a database architecture pattern where you split a large database into smaller, faster, more easily managed parts called shards. Each shard is a separate database, and collectively they form a single logical database.' },
    ],
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Master the language of the web, from vanilla JS to modern frameworks.',
    icon: JavaScriptIcon,
    mock: [
      { id: 1, question: 'What is the difference between `==` and `===`?', options: ['They are identical', '`===` checks for type and value equality, `==` only value', '`==` checks for type and value equality, `===` only value', '`==` is for assignment'], answer: '`===` checks for type and value equality, `==` only value' },
      { id: 2, question: 'What does `...` operator do?', options: ['It is for comments', 'It creates a new variable', 'It is the spread/rest operator', 'It is for string concatenation'], answer: 'It is the spread/rest operator' },
    ],
    prep: [
       { id: 1, question: 'What is a closure in JavaScript?', answer: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function.' },
       { id: 2, question: 'Explain `event bubbling` and `event capturing`.', answer: 'Event bubbling and capturing are two ways of event propagation in the HTML DOM. In bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. In capturing, the event is first captured by the outermost element and propagated to the inner elements. The default is bubbling.' },
    ],
  },
  hr: {
    id: 'hr',
    name: 'HR & Behavioral',
    description: 'Prepare for the non-technical questions about your experience.',
    icon: UserIcon,
    mock: [], // No mock tests for HR, only prep
    prep: [
      { id: 1, question: 'Tell me about a time you had a conflict with a coworker.', answer: 'Focus on the STAR method: Situation (describe the context), Task (what was your role), Action (what specific steps you took to resolve it), and Result (what was the outcome). Emphasize communication and a positive resolution.' },
      { id: 2, question: 'What are your biggest strengths and weaknesses?', answer: 'For strengths, choose qualities relevant to the job and provide examples. For weaknesses, be honest but choose a real weakness you are actively working on improving. Show self-awareness and a growth mindset.' },
    ],
  },
  python: {
    id: 'python',
    name: 'Python',
    description: 'Sharpen your skills in this versatile and popular language.',
    icon: PythonIcon,
    mock: [
      { id: 1, question: 'What is the difference between a list and a tuple in Python?', options: ['Lists are mutable, tuples are immutable', 'Tuples are mutable, lists are immutable', 'They are the same', 'Lists can only store integers'], answer: 'Lists are mutable, tuples are immutable' },
      { id: 2, question: 'What keyword is used to define a function in Python?', options: ['func', 'def', 'function', 'define'], answer: 'def' },
    ],
    prep: [
       { id: 1, question: 'What are decorators in Python?', answer: 'Decorators are a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure. Decorators are usually called before the definition of a function you want to decorate.' },
       { id: 2, question: 'Explain the Global Interpreter Lock (GIL) in Python.', answer: 'The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at the same time. This means that only one thread can be in a state of execution for any Python program.' },
    ],
  },
};
