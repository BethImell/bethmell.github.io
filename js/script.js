// Menu responsive
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  menuButton.textContent = isOpen ? '✕' : '☰';
});

// Fermer le menu après avoir choisi une section
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
    menuButton.textContent = '☰';
  });
});

// Année du pied de page
 document.querySelector('#year').textContent = new Date().getFullYear();

// Liens à personnaliser : ne pas ouvrir de fausses destinations
document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", function(event) {
        const href = this.getAttribute("href");

        if (
            !href ||
            href === "#" ||
            href.includes("VOTRE_LIEN")
        ) {
            event.preventDefault();
            alert("Personnalise d'abord ton lien dans HTML");
        }
    });
});


// Traduction locale, sans service externe.
const translations = {
  "t1": {
    "fr": "Aller au contenu",
    "en": "Skip to content"
  },
  "t2": {
    "fr": "À propos",
    "en": "About"
  },
  "t3": {
    "fr": "Compétences",
    "en": "Skills"
  },
  "t4": {
    "fr": "Projets",
    "en": "Projects"
  },
  "t5": {
    "fr": "Parcours",
    "en": "Education"
  },
  "t6": {
    "fr": "Contact",
    "en": "Contact"
  },
  "t7": {
    "fr": "DATA SCIENCE · ANALYSE · MACHINE LEARNING",
    "en": "DATA SCIENCE · ANALYTICS · MACHINE LEARNING"
  },
  "t8": {
    "fr": "Transformer les données en <span>solutions concrètes.</span>",
    "en": "Turning data into <span>real-world solutions.</span>"
  },
  "t9": {
    "fr": "Étudiante en sciences des données appliquées, je développe des projets d'analyse, de visualisation et de prédiction pour répondre à des problématiques réelles.",
    "en": "Applied Data Science student developing analytics, visualization, and predictive projects to solve real-world problems."
  },
  "t10": {
    "fr": "Voir mes projets <span aria-hidden=\"true\">↗</span>",
    "en": "View my projects <span aria-hidden=\"true\">↗</span>"
  },
  "t11": {
    "fr": "Me contacter",
    "en": "Contact me"
  },
  "t12": {
    "fr": "<span>ANALYSE</span><span>→</span><span>DÉCISION</span>",
    "en": "<span>ANALYSIS</span><span>→</span><span>DECISION</span>"
  },
  "t13": {
    "fr": "01 / À PROPOS",
    "en": "01 / ABOUT"
  },
  "t14": {
    "fr": "Curieuse, analytique et orientée solutions.",
    "en": "Curious, analytical, and solution-oriented."
  },
  "t15": {
    "fr": "02 / EXPERTISE",
    "en": "02 / EXPERTISE"
  },
  "t16": {
    "fr": "Mes compétences",
    "en": "My skills"
  },
  "t17": {
    "fr": "03 / RÉALISATIONS",
    "en": "03 / PORTFOLIO"
  },
  "t18": {
    "fr": "Projets sélectionnés",
    "en": "Selected projects"
  },
  "t19": {
    "fr": "04 / PARCOURS",
    "en": "04 / BACKGROUND"
  },
  "t20": {
    "fr": "Formation",
    "en": "Education"
  },
  "t21": {
    "fr": "FORMATION EN COURS",
    "en": "CURRENT STUDIES"
  },
  "t22": {
    "fr": "Sciences des données appliquées",
    "en": "Applied Data Science"
  },
  "t23": {
    "fr": "05 / CONTACT",
    "en": "05 / CONTACT"
  },
  "t24": {
    "fr": "Construisons quelque chose ensemble.",
    "en": "Let’s build something together."
  },
  "t25": {
    "fr": "Retour en haut ↑",
    "en": "Back to top ↑"
  },
  "t26": {
    "fr": "Je suis étudiante en sciences des données appliquées à La Cité. J'aime explorer les données, identifier les tendances et construire des modèles qui aident à comprendre et à prendre de meilleures décisions.",
    "en": "I am an Applied Data Science student at La Cité. I enjoy exploring data, identifying trends, and building models that support understanding and better decisions."
  },
  "t27": {
    "fr": "Mon objectif est de contribuer à des projets concrets en analyse de données, en intelligence artificielle et en apprentissage automatique.",
    "en": "My goal is to contribute to practical projects in data analytics, artificial intelligence, and machine learning."
  },
  "t28": {
    "fr": "Programmation",
    "en": "Programming"
  },
  "t29": {
    "fr": "Analyse &amp; visualisation",
    "en": "Analytics & visualization"
  },
  "t30": {
    "fr": "Machine Learning",
    "en": "Machine learning"
  },
  "t31": {
    "fr": "Données &amp; outils",
    "en": "Data & tools"
  },
  "t32": {
    "fr": "Scikit-learn, classification, régression, évaluation de modèles",
    "en": "Scikit-learn, classification, regression, model evaluation"
  },
  "t33": {
    "fr": "Quelques exemples de projets réalisés dans le cadre de mon apprentissage.",
    "en": "A selection of projects completed as part of my learning journey."
  },
  "t34": {
    "fr": "Détection de fraude bancaire",
    "en": "Bank fraud detection"
  },
  "t35": {
    "fr": "Exploration et préparation de données transactionnelles pour identifier des comportements potentiellement frauduleux.",
    "en": "Exploring and preparing transaction data to identify potentially fraudulent behavior."
  },
  "t36": {
    "fr": "Prédiction du départ des clients",
    "en": "Customer churn prediction"
  },
  "t37": {
    "fr": "Prétraitement des données et entraînement d'un modèle de classification pour analyser le risque de désabonnement.",
    "en": "Data preprocessing and training a classification model to assess customer churn risk."
  },
  "t38": {
    "fr": "Web scraping immobilier",
    "en": "Real estate web scraping"
  },
  "t39": {
    "fr": "Conception d'un pipeline de collecte, de nettoyage et d'exportation de données de logements dans la région de l'Outaouais.",
    "en": "Building a pipeline to collect, clean, and export housing data in the Outaouais region."
  },
  "t40": {
    "fr": "Analyse de l'attrition RH",
    "en": "HR attrition analysis"
  },
  "t41": {
    "fr": "Analyse exploratoire et modélisation du départ des employés à partir de données de ressources humaines.",
    "en": "Exploratory analysis and modeling of employee attrition using HR data."
  },
  "t42": {
    "fr": "Ajoute ensuite un lien GitHub à chaque projet lorsque son dépôt est prêt à être partagé.",
    "en": "Add a GitHub link to each project when its repository is ready to share."
  },
  "t43": {
    "fr": "La Cité · Canada",
    "en": "La Cité · Canada"
  },
  "t44": {
    "fr": "Programmation, statistiques, bases de données, intelligence artificielle, visualisation et apprentissage automatique.",
    "en": "Programming, statistics, databases, artificial intelligence, visualization, and machine learning."
  },
  "t45": {
    "fr": "Je suis ouverte aux opportunités de stage, aux collaborations et aux projets en analyse de données.",
    "en": "I am open to internships, collaborations, and data analytics projects."
  },
  "t46": {
    "fr": "Mon CV ↗",
    "en": "My résumé ↗"
  },
  "t47": {
    "fr": "DATA SCIENCE · CLASSIFICATION",
    "en": "DATA SCIENCE · CLASSIFICATION"
  },
  "t48": {
    "fr": "MACHINE LEARNING",
    "en": "MACHINE LEARNING"
  },
  "t49": {
    "fr": "COLLECTE &amp; TRAITEMENT",
    "en": "DATA COLLECTION & PROCESSING"
  },
  "t50": {
    "fr": "ANALYSE PRÉDICTIVE",
    "en": "PREDICTIVE ANALYTICS"
},
"fraud1": {
    "fr": "Participation à un projet collaboratif de détection de fraude portant sur plus de 13 millions de transactions financières.",
    "en": "Collaborated on a team-based fraud detection project involving over 13 million financial transactions."
},
"fraud2": {
    "fr": "Analyse des transactions, des informations clients et des cartes bancaires pour identifier les problèmes de qualité et les relations entre les données.",
    "en": "Analyzed transaction records, customer information, and payment card datasets to identify data quality issues and relationships."
},
"fraud3": {
    "fr": "Étude des valeurs manquantes, des identifiants dupliqués, des types de données incohérents et des anomalies transactionnelles.",
    "en": "Investigated missing values, duplicate identifiers, inconsistent data types, and transaction anomalies."
},
"fraud4": {
    "fr": "Analyse du fort déséquilibre des classes : environ 0,15 % des transactions sont frauduleuses.",
    "en": "Analyzed severe class imbalance, with fraudulent transactions representing approximately 0.15% of the dataset."
},
"fraud5": {
    "fr": "Utilisation des branches Git et de GitHub pour organiser les tâches, gérer les modifications et collaborer en équipe.",
    "en": "Used Git branches and GitHub to organize development tasks, manage changes, and support team collaboration."
},
  
"hotel_category": {
    "fr": "ANALYSE DE DONNÉES · R · STATISTIQUES",
    "en": "DATA ANALYTICS · R · STATISTICS"
},
"hotel_title": {
    "fr": "Analyse exploratoire des réservations hôtelières",
    "en": "Hotel Booking Demand – Exploratory Data Analysis"
},
"hotel_description": {
    "fr": "Analyse de 119 390 réservations hôtelières à l'aide de R pour étudier les tendances de réservation, les annulations et les caractéristiques des séjours.",
    "en": "Analyzed 119,390 hotel bookings using R to explore booking trends, cancellations, and stay characteristics."
},
"hotel1": {
    "fr": "Réalisation d'une analyse exploratoire d'un jeu de données comprenant 119 390 réservations et 32 variables.",
    "en": "Conducted exploratory data analysis on a dataset containing 119,390 hotel bookings and 32 variables."
},
"hotel2": {
    "fr": "Identification et analyse des valeurs manquantes, des doublons, des types de variables et des valeurs aberrantes.",
    "en": "Identified and investigated missing values, duplicate records, variable types, and outliers."
},
"hotel3": {
    "fr": "Comparaison de différentes stratégies de traitement des valeurs manquantes, notamment la suppression, l'imputation et la création de catégories distinctes.",
    "en": "Compared missing-data handling strategies, including deletion, imputation, and separate missing-value categories."
},
"hotel4": {
    "fr": "Analyse statistique des délais de réservation, des tarifs journaliers, de la durée des séjours et des annulations antérieures.",
    "en": "Performed statistical analysis of booking lead times, average daily rates, stay durations, and previous cancellations."
},
"hotel5": {
    "fr": "Création de visualisations statistiques pour explorer les distributions, les tendances et les relations entre les variables.",
    "en": "Created statistical visualizations to explore distributions, trends, and relationships between variables."
},
"hotel6": {
    "fr": "Production d'un rapport reproductible avec R Markdown, présentant la méthodologie, les résultats et les observations de l'analyse.",
    "en": "Produced a reproducible R Markdown report documenting the methodology, analytical findings, and key observations."
},
  
"ml_category": {
    "fr": "MACHINE LEARNING · CLASSIFICATION",
    "en": "MACHINE LEARNING · CLASSIFICATION"
},
"ml_title": {
    "fr": "Pipeline de classification et d'évaluation ML",
    "en": "Machine Learning Classification & Evaluation Pipeline"
},
"ml_description": {
    "fr": "Développement de pipelines de Machine Learning pour la prédiction, la classification et l'évaluation de modèles supervisés.",
    "en": "Development of machine learning pipelines for prediction, classification, and supervised model evaluation."
},
"ml1": {
    "fr": "Développement de workflows de Machine Learning pour la prédiction du désabonnement client, l'analyse de l'attrition des employés et la classification du cancer du sein.",
    "en": "Developed machine learning workflows for customer churn prediction, employee attrition analysis, and breast cancer classification."
},
"ml2": {
    "fr": "Mise en œuvre du prétraitement des données, de l'encodage des variables catégorielles, de la préparation des caractéristiques et de la séparation entraînement/test.",
    "en": "Implemented data preprocessing, categorical encoding, feature preparation, and train/test splitting."
},
"ml3": {
    "fr": "Entraînement et évaluation de modèles de classification utilisant la régression logistique et d'autres algorithmes d'apprentissage supervisé.",
    "en": "Trained and evaluated classification models using logistic regression and other supervised learning algorithms."
},
"ml4": {
    "fr": "Évaluation des performances à l'aide de la précision, du rappel, du score F1, de la ROC-AUC et des matrices de confusion.",
    "en": "Assessed model performance using precision, recall, F1-score, ROC-AUC, and confusion matrices."
},
"ml5": {
    "fr": "Analyse du déséquilibre des classes, de la fiabilité des modèles et des risques de fuite de données afin d'améliorer l'interprétation des résultats.",
    "en": "Investigated class imbalance, model reliability, and potential data leakage to improve the interpretation of results."
},
"ml6": {
    "fr": "Organisation de fonctions réutilisables de prétraitement et d'évaluation pour assurer la cohérence des expérimentations.",
    "en": "Organized reusable preprocessing and evaluation functions to support consistent experimentation."
}



};
const interfaceLabels = {
  fr: { menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu', notice: 'Personnalise d’abord le lien' },
  en: { menuOpen: 'Open menu', menuClose: 'Close menu', notice: 'Please customize the link for' }
};
let currentLanguage = 'fr';
function setLanguage(lang) {
  if (!['fr', 'en'].includes(lang)) return;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const entry = translations[el.dataset.i18n];
    if (entry) el.innerHTML = entry[lang];
  });
  document.querySelectorAll('.lang-btn').forEach(button => {
    const selected = button.dataset.lang === lang;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  menuButton.setAttribute('aria-label', navLinks.classList.contains('open') ? interfaceLabels[lang].menuClose : interfaceLabels[lang].menuOpen);
  document.title = lang === 'fr' ? 'Portfolio | Science des données & Analyse' : 'Portfolio | Data Science & Analytics';
  document.querySelector('meta[name="description"]').content = lang === 'fr'
    ? 'Portfolio en analyse de données, data science et machine learning : projets, compétences et contact.'
    : 'Data science, analytics and machine learning portfolio: projects, skills and contact.';
  try { localStorage.setItem('portfolioLanguage', lang); } catch (_) {}
}
document.querySelectorAll('.lang-btn').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
try { setLanguage(localStorage.getItem('portfolioLanguage') || 'fr'); } catch (_) { setLanguage('fr'); }
