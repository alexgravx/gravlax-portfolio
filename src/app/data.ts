const bio = "I am a MEng student at CentraleSupelec, 2nd highly selective Engineering french school and 16th Engineering school worldwide."
+ " I am curious, hard-working, and particularly motivated by the subjects I am passionate about: computer science, chemistry, physics."
+ " My skills of analysis and synthesis allow me to lead projects with efficiency. My thoroughness and my ability to listen to advice are part of my strengths."
+ " In addition to my engineering studies, I am a member of several associations that allow me to develop my technical, artistic and soft skills."

const education = [
  {title: "CentraleSupélec", time_period: "2022-2026", institution: "Master Engineering degree", description: "Coursework:"
  +"Computer Science: Web Data Intelligence, Information Systems, Algorithms, Networks and Security;"
  +"Corporate: Corporate finance, Business management, Law (contracts and intellectual property), Economy & Industrial Engineering;"
  +"Physics: Fluid mechanics, Study of materials, Satellite imagery analysis with radiometry and polarimetry;"
  +"Mathematics: Integration, Probability, Partial Differential Equations;"},
  {title: "Collège Stanislas Paris", time_period: "2013-2022", institution: "Scientific bachelor degree", description: "I followed an intensive two-year preparation in Mathematics, Physics, Engineering, Computer Science & Chemistry for the highly selective French School of Engineering (2020-2022)"},
] 

const experiences = [
  {title: "Software Engineer", time_period: "2024", institution: "Paris Digital Lab", description: "Prototyping tech projects for major corporations and start-ups through MVPs."},
  {title: "DevOps Engineer", time_period: "2023-2024", institution: "ViaRézo", description: "ViaRézo provides internet access to 2000+ residents on Paris-Saclay campus and operates several websites and applications related to CentraleSupélec's associative life through an OpenStack virtualization cluster. The whole infrastructure is monitored and protected by backup systems."},
  {title: "TA in Information Systems", time_period: "Sept & Oct 2023", institution: "CentraleSupélec", description: "Leading 20h of Information Systems and Programming tutorials for 30 students."},
  {title: "Operator in Perfume Production", time_period: "July 2023", institution: "Dior", description: "Perfume manufacturing agent at Parfums Christian Dior's worldwide production and research center"},
]


const items = [
    {title: "Twitter insult detector", date: "10/01/2022", image: "", body: "Development of a website dashboard tracking tweets including insults. Creation of a data pipeline using Twitter API and Pandas. Insults retrieved via Twitter API. Data processing and analysis using a Random Forest algorithm (AI) and a list of keywords.", tags: ["Python", "Pandas", "Plotly & Dash"]},
    {title: "Satellite based soil analysis", date: "01/01/2023", image: "/ProjectsImages/pres-satellite.jpg", body: "Development of an artificial intelligence algorithm to classify soils according to their category (city, forest, field, water, etc.). Use of several methods: SVM, K-Means, and deep neural networks", tags: ["Python", "Scikit Learn", "SVM & K-Means"]},
    {title: "Movie Streaming Platform", date: "06/01/2023", image: "", body: "Development over 1 week of a user-friendly website interface, similar to Netflix, to make user-defined recommendations on what movie they could like.", tags: ["JS", "React", "Express"]},
    {title: "Frontend redesign of two websites", date: "01/01/2023", image: "", body: "Redesign of the frontend of two websites of my association in 2023: the showcase site and a carpooling site for the CentraleSupélec campus.", tags: ["JS", "React"]},
    {title: "Prototyping of an IOS audio Companion", date: "02/01/2024", image: "/ProjectsImages/Sencial.jpg", body: "Development of an IOS companion app for hearing impaired people using audio modulation and AI. Our app retrieve audio data and audiograms from Apple Health app, and can also create audiograms with an experimental method. Our app is able to modulate more than 10 frequencies of the environnment around in real time you while you're listenting to your music or talking to a colleague. This audio modulation can be personalized based on your imported or created audiogram.", tags: ["Swift", "AVAudioEngine"]},
    {title: "Prototyping of tax credit file Companion", date: "04/01/2024", image: "/ProjectsImages/eliccir.jpg", body: "Developement of a tax credit file companion using data parsing and AI.", tags: ["Python", "TGI", "Langchain"]},
    {title: "Drone race leaderboard", date: "03/01/2024", image: "/ProjectsImages/leaderboard.jpg", body: "Development of a leaderboard for drone races. This leaderboard includes the ability to add participants, and to get their time with numerical chronometers. A live leaderboard displays each player ranking and time.", tags: ["JS", "Electron"]},
    {title: "Betting bot for Telegram", date: "05/01/2024", image: "", body: "Creation of a Telegram bot, which can advice betting players how to convert their 'freebet' money into real one with combined bets.", tags: ["Python", "BeautifulSoup"]},
    {title: "A/B Testing Platform", date: "06/12/2024", body: "Development of an A/B Testing platform using a complex pipeline. The plateform should massively test virtual user profiles and provide detailed metrics in order to choose the best coach.", image: "", tags: ["Docker", "Kubernetes", "Helm", "RabbitMQ", "Go"]},
  ]



export {bio, education, experiences, items};