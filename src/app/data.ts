const bio = "I am a master's student in Computer Science at Cornell Tech, with an Engineering background"
  + " from CentraleSupelec. I love optimizing processes and creating powerful software tools,"
  + " with interests in full-stack development, DevOps and ML. I am curious, hard-working,"
  + " and my analysis skills allow me to lead projects with efficiency."
  + " I contributed to manage the network infrastructure of my school's student residences"
  + " and developed numerous MVPs through the Paris Digital Lab incubator, before interning "
  + "as a Software Engineer at Forvis Mazars, an audit and consulting firm."

const education = [
  {
    title: "Cornell University", time_period: "2025-2026", institution: "MEng in Computer Science", description: "Coursework: "
      + "Applied Machine Learning, Machine Learning Engineering, Trustworthy AI, Algorithms and Data Structures. "
      + "Project on content moderation: how to protect minors online in a way that gives parents meaningful visibility, "
      + "while offering teens fairness and voice?"
  },
  {
    title: "CentraleSupélec", time_period: "2022-2026", institution: "MS in Engineering", description: "Coursework: "
      + "Computer Science: Web Data Intelligence, Information Systems, Algorithms, Networks and Security;"
      + "Mathematics: Integration, Probability, Partial Differential Equations;"
      + "Corporate: Corporate finance, Business management, Economy & Law;"
  },
  {
    title: "Collège Stanislas Paris", time_period: "2020-2022", institution: "Preparation courses",
    description: "I followed an intensive two-year preparation in Mathematics, Computer Science, Physics & Engineering "
      + "for the highly selective French School of Engineering. This is equivalent to a BS in Engineering,"
      + "with a major in Math and Computer Science"
  },
]

const experiences = [
  { title: "Software Engineer", time_period: "Fall 2024", institution: "Forvis Mazars", description: "Software & Data Engineering in Data Services team of Forvis Mazars. Working on applied and R&D projects." },
  { title: "Software Engineer", time_period: "Spring 2024", institution: "Paris Digital Lab", description: "Prototyping tech projects for major corporations and start-ups through MVPs." },
  { title: "DevOps Engineer", time_period: "2023-2024", institution: "ViaRézo", description: "ViaRézo provides internet access to 2000+ residents on Paris-Saclay campus and operates several websites and applications related to CentraleSupélec's associative life through an OpenStack virtualization cluster. The whole infrastructure is monitored and protected by backup systems." },
  { title: "TA in Computer Science", time_period: "Sept & Oct 2023", institution: "CentraleSupélec", description: "Leading 20h of Information Systems and Programming tutorials for 30 students." },
]


const items = [
  { title: "Twitter insult detector", date: "10/01/2022", link: "https://github.com/alexgravx/Coding-Week-2022", image: "", body: "Development of a website dashboard tracking tweets including insults. Creation of a data pipeline using Twitter API and Pandas. Insults retrieved via Twitter API. Data processing and analysis using a Random Forest algorithm (AI) and a list of keywords.", tags: ["Python", "Pandas", "Plotly & Dash"] },
  { title: "Satellite based soil analysis", date: "01/01/2023", link: "https://github.com/alexgravx/EI-Soil-Classification", image: "/ProjectsImages/pres-satellite.jpg", body: "Development of an artificial intelligence algorithm to classify soils according to their category (city, forest, field, water, etc.). Use of several methods: SVM, K-Means, and deep neural networks", tags: ["Python", "Scikit Learn", "SVM & K-Means"] },
  { title: "Movie Streaming Platform", date: "06/01/2023", link: "https://github.com/alexgravx/EI-Web-Design", image: "", body: "Development over 1 week of a user-friendly website interface, similar to Netflix, to make user-defined recommendations on what movie they could like.", tags: ["JS", "React", "Express"] },
  { title: "Frontend redesign of two websites", date: "01/01/2023", link: "private", image: "", body: "Redesign of the frontend of two websites of my association in 2023: the showcase site and a carpooling site for the CentraleSupélec campus.", tags: ["JS", "React"] },
  { title: "Prototyping of an IOS audio Companion", date: "02/01/2024", link: "https://github.com/alexgravx/Swift-audio-utils", image: "/ProjectsImages/Sencial.jpg", body: "Development of an IOS companion app for hearing impaired people using audio modulation and AI. Our app retrieve audio data and audiograms from Apple Health app, and can also create audiograms with an experimental method. Our app is able to modulate more than 10 frequencies of the environnment around in real time you while you're listenting to your music or talking to a colleague. This audio modulation can be personalized based on your imported or created audiogram.", tags: ["Swift", "AVAudioEngine"] },
  { title: "Prototyping of tax credit file Companion", date: "04/01/2024", link: "private", image: "/ProjectsImages/eliccir.jpg", body: "Developement of a tax credit file companion using data parsing and AI.", tags: ["Python", "TGI", "Langchain"] },
  { title: "Drone race leaderboard", date: "03/01/2024", link: "private", image: "/ProjectsImages/leaderboard.jpg", body: "Development of a leaderboard for drone races. This leaderboard includes the ability to add participants, and to get their time with numerical chronometers. A live leaderboard displays each player ranking and time.", tags: ["JS", "Electron"] },
  { title: "Betting bot for Telegram", date: "05/01/2024", link: "private", image: "", body: "Creation of a Telegram bot, which can advice betting players how to convert their 'freebet' money into real one with combined bets.", tags: ["Python", "BeautifulSoup"] },
  { title: "A/B Testing Platform", date: "06/12/2024", link: "private", body: "Development of an A/B Testing platform using a complex pipeline. The plateform should massively test virtual user profiles and provide detailed metrics in order to choose the best coach.", image: "", tags: ["Docker", "Kubernetes", "Helm", "RabbitMQ", "Go"] },
]



export { bio, education, experiences, items };