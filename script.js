// 1. GESTION DU SCROLL ET HEADER
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('header h1');
    const nav = document.querySelector('.soleil');
    const darkMode = document.querySelector('.dark-mode-toggle');

    if (h1 && nav) { // Sécurité : n'exécute que si les éléments existent
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 150; 

            if (scrollPosition > 0) {
                const opacity = Math.max(0, 1 - (scrollPosition / maxScroll));
                h1.style.opacity = opacity;
                nav.style.opacity = opacity;

                if (opacity <= 0) {
                    nav.style.visibility = 'hidden';
                    h1.style.visibility = 'hidden';
                } else {
                    nav.style.visibility = 'visible';
                    h1.style.visibility = 'visible';
                }
            } else {
                h1.style.opacity = 1;
                nav.style.opacity = 1;
                nav.style.visibility = 'visible';
                h1.style.visibility = 'visible';
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const overlayMenu = document.getElementById('overlayMenu');
    
    if (burger && overlayMenu) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche la fermeture immédiate
            burger.classList.toggle('active');
            overlayMenu.classList.toggle('open');
        });

        // Fermer le menu si on clique ailleurs sur la page
        document.addEventListener('click', () => {
            burger.classList.remove('active');
            overlayMenu.classList.remove('open');
        });

        // Empêcher la fermeture si on clique à l'intérieur du menu
        overlayMenu.addEventListener('click', (e) => e.stopPropagation());
    }
});


// 2. DONNÉES DES PROJETS
const projects = [
    {
        title: "Direction de la Sécurité de l'Aviation Civile",
        category: "360°",
        year: "2025 - 2027",
        frontImage: "images/DGAC/logo.png",
        gallery: [
            "images/DGAC/A5 DSAC_Moindre buit_voilures fixes_Page_4.jpg", 
            "images/DGAC/Affiche-paysage.png",
            "images/DGAC/logo-anime.gif",
            "images/DGAC/Symposium/Couverture-20ans.jpg",
            "images/DGAC/Symposium/banniere_affiche.jpg"
        ],
        description: "Chargée de communication multimédia en alternance au sein de la DSAC.",
        longDescription: `Actuellement en alternance au sein de la Direction de la Sécurité de l'Aviation Civile, mes missions couvrent l'ensemble de la chaîne de communication interne, institutionnelle et technique.

        Mes réalisations clés :
        - Édition Technique : Conception et mise en page de guides de bonnes pratiques (vol en montagne, réduction des nuisances sonores pour les voilures fixes) à destination des usagers de l'espace aérien.
        - Vidéo & Motion Design : Production de l'émission "DSAC Online TV" (bilan d'actualités centralisé) et création d'un logo animé pour dynamiser l'identité visuelle de la direction.
        - Événementiel : Organisation complète des 20 ans de Symposium (700 participants). Gestion de l'identité visuelle (affiches, bannières), du programme, de la logistique et des outils de diffusion (mailing, présentations).
        - Communication Digitale : Rédaction et design de newsletters internes pour maintenir le lien entre l'échelon central et les directions régionales.

        Ce poste demande une grande rigueur et une capacité à adapter des messages techniques pour des publics variés.`,
        details: ["Événementiel", "Indesign", "After Effects", "Newsletter", "Communication Publique"],
        lien: "https://drive.google.com/drive/folders/1tVFcl52VM6m5uUIhOcueLJBPh-9jrZKw?usp=sharing" 
    },{
        title: "TRIBU",
        frontImage: "images/Tribu/restaurant-tribu.png",
        gallery: ["images/Tribu/Menu-Tribu.png", "images/Tribu/Set-table.jpeg", "images/Tribu/Evenements-Tribu.png"],
        year: "Octobre 2025",
        description: "Refonte de la stratégie de communication d'un restaurant de village.",
        longDescription: `TRIBU est un restaurant de village à Roquemaure conçu comme un véritable point de ralliement pour les familles et les amis. 

        Sur ce projet, j'ai réalisé l'analyse du marché food et défini une stratégie de communication 360° axée sur la proximité. 
        J'ai piloté la refonte du menu (format A3 kraft, valorisation des producteurs locaux, menu enfant détaillé) et conçu des outils de communication hors-ligne (set de table, affichage). 

        Le volet événementiel, incluant des partenariats locaux et une présence sur les marchés, a été le pilier central pour ancrer le restaurant dans son territoire.`,
        category: "360°",
        lien: "https://drive.google.com/drive/folders/1h-ahVPXqOpPVGM8M0LYqywohiyBJnQAF?usp=sharing",
        details: ["PRINT & DESIGN", "ÉVÉNEMENTIEL", "SEO/SEA", "Influence", "Relations presse"]
    },{
        title: "Caisse d'Épargne IDF",
        category: "Gestion",
        year: "2024 - 2025",
        frontImage: "images/CEIDF/logo.jpg",
        gallery: [
            "images/CEIDF/intranet-refonte.png", 
            "images/CEIDF/PLV-Page1.jpg",
            "images/CEIDF/PLV-Page2.jpg",
            "images/CEIDF/mail1.png", 
            "images/CEIDF/mail2.png",
            "images/CEIDF/campagne-digitale.png"
        ],
        description: "Alternance d'un an en tant que Chargée de communication commerciale et pilotage de la stratégie multimédia.",
        longDescription: `Durant mon alternance d'un an à la Caisse d'Épargne Île-de-France, j'ai évolué au sein du pôle Communication Commerciale. Mon mémoire porte sur l'optimisation de la stratégie de communication à travers la création de supports, la collaboration interne et le levier du numérique.

        Mes missions principales :
        - Refonte de l'Intranet : Analyse de l'expérience utilisateur et propositions de nouvelles interfaces (UX/UI) pour améliorer la visibilité des actualités commerciales et l'engagement des collaborateurs.
        - Création Graphique 360° : Conception de nombreux supports print et digitaux (flyers, affiches, PLV, bannières) en respectant les codes d'une charte graphique bancaire rigoureuse.
        - Gestion de Projet : Coordination entre les différents services métiers pour traduire des besoins bancaires complexes en outils d'aide à la vente clairs et impactants.

        Cette expérience en grand groupe m'a permis de maîtriser les enjeux d'une communication omnicanale performante et de renforcer ma capacité à gérer des projets à forte responsabilité`,
        details: ["Communication Commerciale", "UX/UI Design", "Gestion de projet", "PAO", "Stratégie Digitale"],
        lien: "https://drive.google.com/drive/folders/1QCY9bM7UNxL5Vfytweqk01RkuLE0cgpJ?usp=sharing"
    },{
        title: "LEGO",
        frontImage: "images/Lego/logo.png",
        gallery: ["images/Lego/sacs.png", "images/Lego/goodies.png", "images/Lego/web.png"],
        year: "Mars 2025",
        description: "Éco-branding et stratégie de développement durable pour une marque iconique.",
        longDescription: `Dans le cadre de ce projet de groupe, nous avons repensé la stratégie de marque de LEGO pour l'aligner sur des enjeux de développement durable. L'objectif était de réduire l'empreinte écologique de la marque sur l'ensemble de ses points de contact, sans perdre son identité iconique.

        Mon travail s'est concentré sur l'analyse et la mise en œuvre de solutions concrètes :
        - Éco-Branding : Création d'une charte graphique optimisée utilisant des éco-couleurs pour limiter la consommation d'encre et simplification du logo pour les supports imprimés.
        - Packaging & Goodies : Conception de solutions d'emballage en carton recyclé avec impression à l'encre à l'eau, et proposition de goodies durables en céramique recyclée.
        - Web Éco-conçu : Analyse et optimisation de l'interface web pour réduire la consommation de ressources (eau bleue et émissions de CO2). Pour 1000&nbspvisites, nous avons réussi à maintenir une empreinte très basse (2.84&nbspkgCO2e).

        Ce projet m'a permis de maîtriser les outils de mesure d'impact environnemental et de comprendre comment le design peut devenir un levier de transition écologique pour une multinationale.`,
        category: "PAO",
        lien: "https://www.canva.com/design/DAHAwVjDJ4Y/fbCjnaWEn-dr305Xx_25yw/view?utm_content=DAHAwVjDJ4Y&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h00bddbc4d6",
        details: ["Éco-conception", "Branding", "UI/UX", "Audit", "Développement durable"]
    },{
        title: "APF France handicap",
        frontImage: "images/APF/0.png",
        gallery: ["images/APF/1.png", "images/APF/2.jpg", "images/APF/3.png", "images/APF/4.png"],
        year: "Juin 2025",
        description: "Musée virtuel des oeuvres d'artistes en situation de handicap.",
        longDescription: `En collaboration avec l’APF France handicap, nous avons travaillé directement avec des personnes en situation de handicap afin de créer un musée virtuel qui met en valeur leurs œuvres. Ce projet visait à offrir une plateforme inclusive où ces artistes pouvaient exposer leurs créations et partager leurs histoires.

        Mon rôle principal était la gestion de projet. J'ai coordonné les différentes étapes du développement du projet, en veillant à ce que les besoins des artistes soient pris en compte tout au long du processus. J'ai également assuré la communication entre les différentes parties prenantes, y compris l'APF France Handicap, les artistes, les développeurs et les designers.
        
        J'ai aussi supervisé la planification des tâches, la gestion des délais et la résolution des problèmes, tout en participant à toute la création visuelle et au design du site.
        
        Mes contributions techniques :
        - Développement & Design : Participation au développement du <a href="https://atelier-chromatique.vercel.app/" target="_blank">site web</a>, de la conception UI/UX jusqu'à l'intégration du code.
        - Audiovisuel : Organisation et participation au tournage des interviews des artistes.
        - Communication 360° : Conception des supports print (affiches et dépliants de l'exposition).`,
        category: "Gestion",
        lien: "https://www.canva.com/design/DAHAwTWU7mg/16btiHz1_K88WHXVcEsuFw/view?utm_content=DAHAwTWU7mg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h966246b7c9",
        details: ["Vidéo", "Photoshop", "Notion","Tournage", "Premiere Pro", "Figma"]
    },{
        title: "EON",
        frontImage: "images/Eon/eon.jpg",
        gallery: ["images/Eon/eon1.png", "images/Eon/eon2.png", "images/Eon/eon3.png", "images/Eon/eon4.png"],
        year: "Janvier 2025",
        description: "Voiture autonome électrique.",
        longDescription: `Dans le cadre de notre cours de Direction Artistique, nous avons travaillé en équipe de trois sur un projet de communication autour d’un sujet tiré au sort : voiture électrique autonome. Passionné par l’automobile, ce projet m’a particulièrement enthousiasmé, car il m’a permis d’allier design, innovation et stratégie de marque.

        Nous avons commencé par un benchmark et un brainstorming pour poser les bases de notre concept. Nous avons ensuite développé une marque complète, en étudiant ses forces, ses faiblesses et son positionnement sur le marché. Nous avons également défini un persona représentant notre client type.

        Pour aller plus loin, nous avons conçu notre propre modèle de voiture, en réalisant un blueprint puis une modélisation 3D sous Blender.

        Nous avons ensuite travaillé sur l’identité visuelle, avec :

        - Un moodboard, une palette de couleurs et des typographies cohérentes
        - Un logo et un slogan impactants
        - Une vidéo promotionnelle pour présenter le véhicule
        - Des affiches publicitaires et des bannières web
        - Des maquettes de site web inspirées des grandes marques automobiles
        - Un compte Instagram dédié à la communication

        Enfin, nous avons établi un budget détaillé pour évaluer le coût global de cette stratégie de communication.

        Ce projet nous a permis d’explorer toutes les facettes du branding, du design et de la stratégie digitale pour un produit innovant.`,
        category: "PAO",
        lien: "https://www.figma.com/deck/gOMkpgAXvXjP9YH0woXHrj",
        details: ["Direction artistique", "Photoshop", "Blender"]
    },
    {
        title: "Art&Misia",
        frontImage: "images/Art&Misia/artemisia.png",
        gallery: ["images/Art&Misia/artemisia2.jpg", "images/Art&Misia/artemisia3.png", "images/Art&Misia/artemisia4.png"],
        year: "Mars 2024",
        description: "Musée virtuel dédié à Artemisia Gentileschi.",
        longDescription: `Dans le cadre de ce projet de fin d’année, notre équipe a conçu un musée virtuel dédié à Artemisia Gentileschi, une artiste emblématique de la période baroque et pionnière du féminisme à travers l'art. Ce musée virtuel comprend un site de l'exposition et un espace immersif et interactif en ligne, créés par notre équipe de développeurs. En tant que créative, j'ai collaboré avec mon binôme pour gérer toute la communication autour de l'exposition.
        <a href="https://world.expo-artemisia.site/" target="_blank">Voir l'exposition</a>

        Mes contributions spécifiques :
        Réseaux sociaux : En charge de la stratégie et du contenu pour Instagram et Facebook, j'ai conçu des publications, stories et visuels engageants pour promouvoir le musée. Mon binôme s’est concentré sur TikTok et a réalisé le trailer officiel de l'exposition.
        Supports visuels : J’ai conçu l’affiche, le flyer, ainsi que le livret de l’exposition, mettant en valeur la personnalité d'Artemisia et ses œuvres.
        Maquettes web : Réalisation des maquettes des deux sites web (site de l'agence et <a href="https://expo-artemisia.site" target="_blank">site de l'exposition</a>), en veillant à une navigation intuitive et une esthétique inspirée de l’univers baroque d'Artemisia Gentileschi.

        Ce projet m'a permis de mettre en pratique mes compétences en communication visuelle et en design digital tout en collaborant étroitement avec des développeurs pour créer une expérience immersive et mémorable.`,
        category: "PAO",
        lien: "https://drive.google.com/drive/folders/1MtrGi-CViMg9ddpM50SH1ZXnC6CyHOM0?usp=sharing",
        details: ["Indesign", "Photoshop", "Figma"]
    },
    {
        title: "CV Vidéo",
        frontImage: "images/CVVideo/cvvideo.png",
        gallery: ["images/CVVideo/cvvideo2.png", "images/CVVideo/cvvideo3.png"],
        year: "Jan 2024",
        description: "Montage et tournage d'un CV dynamique.",
        longDescription: `En tant qu'étudiante passionnée, j'ai conçu mon CV vidéo pour illustrer mes compétences naissantes dans l'utilisation de logiciels de montage vidéo tels qu'Adobe Premiere Pro, After Effects et Adobe Audition. Cette réalisation démontre ma volonté d'apprendre et de maîtriser ces outils techniques essentiels dans le domaine du multimédia et de l'audiovisuel. De plus, la création de mon CV vidéo en anglais vise à mettre en avant mes compétences linguistiques, soulignant ainsi ma capacité à évoluer dans un environnement international.

        Ce projet reflète mon engagement à développer mes compétences de manière créative tout en relevant des défis concrets.`,
        category: "Video",
        lien: "https://www.youtube.com/watch?v=hVmLhVdehLE",
        details: ["After Effects", "Premiere Pro", "Tournage", "Anglais"]
    },
    {
        title: "Resaweb",
        frontImage: "images/Resaweb/fast&serious.jpg",
        gallery: ["images/Resaweb/resaweb3.jpg", "images/Resaweb/resaweb4.jpg"],
        year: "Mai 2023",
        description: "Site de réservation fictif avec base de données.",
        longDescription: `Ce projet ResaWeb consistait à créer un site de réservation fictif en utilisant les langages HTML, CSS, JavaScript et PHP, avec une base de données. L'objectif principal était de garantir l'accessibilité et l'ergonomie du site, en respectant également quelques règles Opquast. Ce site devait être fluide entre 768 et 1280 pixels et les fichiers ne pas dépasser plus de 2 Mo par page.

        J'ai rajouté quelques fonctionnalités interactives et dynamiques en JavaScript, pour rendre le processus de réservation plus fluide et intuitif pour les utilisateurs. De plus, j'ai intégré une base de données pour stocker les informations relatives aux réservations, en assurant la sécurité et la confidentialité des données.
        
        Soucieuse de l'accessibilité pour tous, j'ai veillé à ce que le site soit conforme aux normes WCAG (Web Content Accessibility Guidelines) afin de garantir une expérience utilisateur inclusive pour les personnes handicapées. Cela comprend notamment l'utilisation d'attributs d'accessibilité, d'une structure de navigation claire et de contrastes visuels appropriés.
        Ce projet m'a permis d'apprendre et de maîtriser efficacement le langage PHP, ainsi que de comprendre le fonctionnement et l'utilité d'une base de données.
        
        Grâce à ce projet, j'ai acquis des compétences pratiques dans la manipulation de PHP et dans l'interaction avec une base de données, ce qui est extrêmement précieux dans le développement web.`,
        category: "Dev",
        lien: "",
        details: ["HTML", "CSS", "PHP"]
    },
    {
        title: "Podcast",
        frontImage: "images/Podcast/zombie3.jpg",
        gallery: ["images/Podcast/zombie4.jpg", "images/Podcast/zombie2.jpg", "images/Podcast/Zombie.jpg"],
        year: "Nov 2023",
        description: "Analyse sonore et visuelle.",
        longDescription: `Au sein d'un projet de groupe, nous avons entrepris l'analyse approfondie de trois visuels d'horreur issus de bandes dessinées. Notre choix s'est porté sur un visuel tiré de "The Walking Dead". Nous avons décidé de le détourné pour sensibiliser sur une drogue bien réelle, surnommée la "drogue du zombie", une substance dont les effets font agir les consommateurs comme des zombies après en avoir pris. Bien que plus présente aux États-Unis, des rumeurs évoquent sa possible apparition en France, ce qui a renforcé notre volonté de prévention.
                    
        Dans ce projet, j'ai assumé la responsabilité centrale du montage du podcast et de la retouche de l'image pour qu'elle corresponde à notre message.
            
        En utilisant des logiciels d'édition audio pour le podcast et des outils de retouche d'image pour adapter le visuel original, nous avons créé un podcast percutant, mettant en garde contre les dangers de cette drogue, en utilisant l'univers visuel emblématique de "The Walking Dead" pour renforcer notre message préventif.
            
        Cette expérience m'a permis non seulement de développer mes compétences en édition audio et en retouche d'image, mais elle a aussi souligné l'importance cruciale de la communication visuelle pour transmettre un message sérieux et impactant.`,
        category: "PAO",
        lien: "",
        audio: "images/Podcast.mp3",
        details: ["Adobe audition", "Photoshop"]
    },
    {
        title: "Dataviz",
        frontImage: "images/Dataviz/dataviz.jpg",
        gallery: ["images/Dataviz/dataviz2.jpg", "images/Dataviz/dataviz3.jpg"],
        year: "Nov 2023",
        description: "Visualisation de données JSON.",
        longDescription: `Avec mon binôme, nous avons entrepris un projet de visualisation de données, baptisé DataF1, centré sur l'évolution de la F1 de 2000 à 2022. Tout a commencé par une phase de conception sur Figma où nous avons imaginé les maquettes, défini les graphiques en forme de podium pour illustrer les performances des pilotes et des écuries.
                
        Ensuite, nous avons comencé à développé en HTML, CSS, et JavaScript pour donner vie à notre concept. Un aspect important de notre travail était la collecte et l'organisation des données nécessaires, que nous avons consignées de manière structurée dans un fichier JSON pour les exploiter dans notre projet.
            
        Par ailleurs, nous avons consacré une attention particulière à la conformité légale de notre site, en veillant à respecter scrupuleusement toutes les mentions légales requises. 
        
        Pour rendre notre visualisation plus attrayante et dynamique, nous avons intégré des animations avec GSAP, afin d'offrir une expérience immersive et interactive à nos utilisateurs.
            
        Cette expérience m'a apporté une compréhension approfondie du processus de création d'une visualisation de données interactive. J'ai acquis des compétences techniques solides en développement web et en utilisation d'outils de conception. 
        L'un des points forts de cette expérience, pour moi, a été de comprendre le fossé entre les idées créatives et leur réalisation technique. En tant que personne orientée créativité, j'ai réalisé combien il est complexe de traduire des concepts créatifs en solutions techniques. Ce projet m'a permis d'apprécier pleinement les défis auxquels font face les développeurs pour concrétiser des idées parfois complexes, voire hors du commun.`,
        category: "Dev",
        lien: "https://pegazel.github.io/Dataviz/",
        details: ["Javascript", "JSON", "Design"]
    },
    {
        title: "Refonte UX/UI",
        frontImage: "images/ParcAsterix/parcasterix.jpg",
        gallery: ["images/ParcAsterix/parcasterix2.jpg", "images/ParcAsterix/parcasterix3.jpg", "images/ParcAsterix/parcasterix4.jpg", "images/ParcAsterix/parcasterix5.png"],
        year: "Avril 2023",
        description: "Transformation luxe du site Parc Astérix.",
        longDescription: `Nous avons fait la refonte complète du site du Parc Astérix, en binôme, un exercice visant à créer un contraste total avec son univers actuel. Le choix du Parc Astérix a été motivé par son environnement festif et coloré.
        
        Notre mission consistait à opérer une transformation radicale, passant de l'ambiance ludique à quelque chose de luxueux et chic. Tout en préservant les éléments essentiels du site, nous avons repensé chaque détail pour apporter une esthétique sophistiquée et haut de gamme.
        
        Le résultat est un site qui défie les attentes, avec une palette de couleurs raffinée, des éléments visuels élégants et une interface utilisateur repensée. 
        
        Cette expérience m'a permis de développer des compétences approfondies en conception UX/UI, tout en démontrant ma capacité à repenser de manière créative une identité visuelle établie.`,
        category: "UX/UI",
        lien: "https://www.figma.com/proto/MZ4eLzWOym7wM3EX2rLZOI/Pauline-GAZENGEL-et-Lou-Anne-DUBILLE--%3E-Parc-Ast%C3%A9rix?page-id=0%3A1&type=design&node-id=241-109&viewport=513%2C24%2C0.1&t=zIb5xJ2TSR3Pumxd-1&scaling=min-zoom",
        details: ["Figma", "UX", "UI"]
    },
    {
        title: "Projet citoyen",
        frontImage: "images/Maraude/maraudes.png",
        gallery: ["images/Maraude/maraudes4.png", "images/Maraude/maraudes2.png", "images/Maraude/maraudes3.png", "images/Maraude/maraudes5.png"],
        year: "Mars 2023",
        description: "Charte graphique pour une association.",
        longDescription: `Au cours du second semestre de mon cursus, notre groupe s'est engagé dans un projet citoyen impliquant la reprise d'une initiative de l'association "L'Équipage Solidaire". Cette association visait à organiser des maraudes dans les quartiers de Paris pour aider les personnes dans le besoin. Cependant, ce projet ne disposait pas d'une communication établie, c'est pourquoi notre équipe a décidé de créer une communication complète pour cette noble cause.
                
        Nous avons débuté en définissant une identité visuelle forte pour l'association. Pour cela, nous avons conçu un logo distinctif qui incarne l'engagement et les valeurs de "L'Équipage Solidaire". Ce logo a été décliné sur divers supports tels que des affiches percutantes, des mock-ups illustrant l'action de l'association, des stickers pour une visibilité marquante, des cartes de visites, ainsi que la création d'un site web complet sur WordPress pour promouvoir l'association et mobiliser les personnes intéressées.
        
        En parallèle, nous avons développé une stratégie de communication en élaborant une charte éditoriale et une charte graphique. Ces documents ont joué un rôle essentiel dans la cohérence et la transmission du message de manière uniforme et impactante à travers tous les supports créés.
        
        Par ailleurs, pour toucher un public plus large et dynamique, nous avons produit un motion design. Cette vidéo avait pour but de sensibiliser et mobiliser la communauté via les réseaux sociaux et autres plateformes numériques.
        
        Ce projet m'a permis d'explorer l'ensemble du processus de communication, depuis la création visuelle jusqu'à la diffusion en ligne, et m'a offert une expérience concrète et enrichissante dans le domaine de la communication et du design pour des initiatives citoyennes.`,
        category: "PAO",
        lien: "",
        details: ["Illustrator", "Photoshop"]
    },
    {
        title: "Journal de quartier",
        frontImage: "images/JQ/journal2.jpg",
        gallery: ["images/JQ/journal.jpg", "images/JQ/journal3.jpg", "images/JQ/journal4.jpg"],
        year: "Nov 2022",
        description: "Mise en page éditoriale.",
        longDescription: `Au cours du premier semestre de mon parcours en BUT MMI, j'ai eu l'opportunité de créer un journal de quartier dédié à un petit village lorrain, développé sur 8 pages. Cette expérience m'a offert une immersion complète dans le processus de rédaction journalistique, tout en me permettant de découvrir l'importance cruciale de l'agencement et du design graphique pour un support imprimé tel qu'un journal.
            
        J'ai particulièrement trouvé la rédaction enrichissante, car elle m'a permis de mener des recherches approfondies sur le village, ses habitants et ses événements, et de retranscrire ces informations de manière concise et captivante. Cette étape m'a sensibilisé à l'importance de la clarté, de l'objectivité et de la qualité rédactionnelle pour toucher efficacement les lecteurs.
            
        En parallèle, la conception du journal m'a permis d'explorer le monde passionnant du design graphique appliqué à la presse. J'ai appris à structurer visuellement les informations, à sélectionner les visuels appropriés et à organiser harmonieusement le contenu pour créer une lecture fluide et agréable.
            
        J'ai eu l'opportunité d'appliquer mes compétences et ma créativité pour concevoir un journal non seulement informatif mais aussi attractif visuellement, renforçant ainsi mon intérêt pour le design graphique et la mise en page éditoriale.`,
        category: "PAO",
        lien: "https://drive.google.com/file/d/1E09o9ChxbDSZXP1y5HQ11qbGbAQ2rlcc/view",
        details: ["Indesign", "Photoshop"]
    }
];

// 3. LOGIQUE GÉNÉRATION DES PROJETS (DANS UN BLOC SÉCURISÉ)
// --- GESTION DES PROJETS ET FILTRES ---
document.addEventListener("DOMContentLoaded", () => {
    const projectWrapper = document.getElementById("projectWrapper");
    const filterButtons = document.querySelectorAll(".filter-btn");

    // Éléments de la modale
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const closeModal = document.querySelector(".close-modal");

    if (projectWrapper) {
        // 1. Définition des couleurs (utilisées pour les cartes et les boutons)
        const categoryColors = {
            "PAO": { 
                gradient: "linear-gradient(to right, #ea580c, #f59e0b)", 
                color: "#ea580c", 
                shadow: "rgba(234, 88, 12, 0.4)", 
                label: "PAO" 
            },
            "Dev": { 
                gradient: "linear-gradient(to right, #3b82f6, #06b6d4)", 
                color: "#3b82f6", 
                shadow: "rgba(59, 130, 246, 0.4)", 
                label: "Dev" 
            },
            "UX/UI": { 
                gradient: "linear-gradient(to right, #622ae3ff, #ec48bbff)", 
                color: "#8b5cf6", 
                shadow: "rgba(139, 92, 246, 0.4)", 
                label: "UX/UI" 
            },
            "Video": { 
                gradient: "linear-gradient(to right, #ef4444, #d1029aff)", 
                color: "#ef4444", 
                shadow: "rgba(239, 68, 68, 0.4)", 
                label: "Vidéo" 
            },
            "Gestion": { 
                gradient: "linear-gradient(to right, #95cf3dff, #167c5eff)", 
                color: "#10b981", 
                shadow: "rgba(16, 185, 129, 0.4)", 
                label: "Gestion de projet" 
            },
            "360°": { 
                gradient: "linear-gradient(to right, #10b981, #3b82f6)", 
                color: "#10b981", 
                shadow: "rgba(16, 185, 129, 0.4)", 
                label: "Stratégie 360°" 
            },
            "Tous": { 
                color: "#f4b01cff", 
                shadow: "rgba(209, 144, 6, 0.4)", 
                label: "Tous" }
        };

        // Variable pour savoir quel projet est ouvert (index dans le tableau projects)
        let currentProjectIndex = 0;

        function openModal(index) {
            currentProjectIndex = index;
            const project = projects[index];
            
            // Sécurité au cas où l'index est invalide
            if (!project) return;

            const style = categoryColors[project.category] || categoryColors["Tous"];
            let projectActionHTML = "";

            if (project.audio && project.audio !== "") {
                // Cas 1 : C'est un Podcast / Audio
                projectActionHTML = `
                    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); margin-top: 10px;">
                        <p style="margin-bottom: 12px; font-size: 0.9rem; color: #ea580c; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
                            <i class="fas fa-headphones"></i> Écouter le podcast
                        </p>
                        <audio controls src="${project.audio}" style="width: 100%; filter: invert(100%) hue-rotate(180deg) brightness(1.5);"></audio>
                    </div>`;
            } else if (project.lien && project.lien !== "") {
                // Cas 2 : C'est un lien classique
                projectActionHTML = `
                    <a href="${project.lien}" target="_blank" class="filter-btn active" style="text-decoration:none; display:inline-block; --active-color:${style.color}; --shadow-color:${style.shadow}">
                        Voir le projet
                    </a>`;
            } else {
                // Cas 3 : Aucun des deux
                projectActionHTML = `
                    <p style="font-style: italic; color: rgba(255,255,255,0.4); font-size: 0.9rem; border: 1px dashed rgba(255,255,255,0.2); padding: 15px; border-radius: 10px;">
                        Ce projet n'est plus accessible en ligne.
                    </p>`;
            }

            // --- ENSUITE TU MODIFIES LE INNERHTML ---
            modalBody.innerHTML = `
            <div class="modal-header" style="text-align:center; margin-bottom:40px;">
                <h1 style="font-size:3rem; text-transform:uppercase;">${project.title}</h1>
                <span class="category-badge" style="background: ${style.gradient}">${project.category} — ${project.year}</span>
            </div>
            
            <div class="modal-grid">
                <div class="modal-left">
                    <img src="${project.frontImage}" id="mainModalImg" class="big-img">
                    
                    <div class="modal-gallery">
                        ${project.gallery ? project.gallery.map(img => `<img src="${img}" class="modal-small-img">`).join('') : ''}
                    </div>

                    <div class="modal-action-zone" style="margin-top:20px;">
                        <h3 style="margin-bottom:15px;">Expertises</h3>
                        <div class="tags" style="margin-bottom:30px;">
                            ${project.details.map(d => `<span>#${d}</span>`).join('')}
                        </div>

                        ${projectActionHTML}

                    </div>
                </div>
                
                <div class="modal-right">
                    <h2>À propos</h2>
                    <p>${project.longDescription || project.description}</p>
                </div>
            </div>

            <div class="modal-footer">
                <button class="nav-btn" id="prevProject">← Projet précédent</button>
                <button class="nav-btn" id="nextProject">Projet suivant →</button>
            </div>
            `;

            // --- LOGIQUE DE LA GALERIE (ton ancien code projet.js adapté) ---
            const thumbs = modalBody.querySelectorAll('.modal-small-img');
            const bigImg = document.getElementById('mainModalImg');

            thumbs.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    const oldBigSrc = bigImg.src;
                    bigImg.src = thumb.src;
                    thumb.src = oldBigSrc;
                });
            });

            // --- LOGIQUE DE NAVIGATION ---
            document.getElementById('prevProject').onclick = () => {
                let newIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
                openModal(newIndex);
            };

            document.getElementById('nextProject').onclick = () => {
                let newIndex = (currentProjectIndex + 1) % projects.length;
                openModal(newIndex);
            };

            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }

        // Mise à jour de displayProjects pour envoyer l'index
        function displayProjects(filter = "Tous") {
            projectWrapper.innerHTML = "";
            projects.forEach((project, index) => {
                if (filter === "Tous" || project.category === filter) {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    card.style.cursor = "pointer";
                
                    const style = categoryColors[project.category] || categoryColors["Tous"];

                    card.innerHTML = `
                        <img src="${project.frontImage}" alt="${project.title}">
                        <div class="card-overlay">
                            <div class="card-content">
                            
                                <span class="category-badge" style="background: ${style.gradient}">${style.label}</span>
                                
                                <h3>${project.title}</h3>
                                <p class="card-description">${project.description}</p>
                                <div class="card-footer">
                                    <div class="tags">
                                        ${project.details.slice(0, 3).map(d => `<span>#${d}</span>`).join('')}
                                    </div>
                                    <div class="arrow-icon">↗</div>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    // ON GARDE UN SEUL ÉCOUTEUR ICI <span class="category-badge" style="background: ${style.gradient}">${project.category}</span>
                    card.addEventListener("click", () => openModal(index));

                    const arrow = card.querySelector('.arrow-icon');
                    card.addEventListener('mouseenter', () => {
                        arrow.style.background = style.gradient;
                        arrow.style.color = 'white';
                        arrow.style.transform = 'rotate(45deg)';
                    });
                    card.addEventListener('mouseleave', () => {
                        arrow.style.background = 'white';
                        arrow.style.color = 'black';
                        arrow.style.transform = 'rotate(0deg)';
                    });
                    projectWrapper.appendChild(card);
                }
            });
        }

                
        // 3. Gestion des clics sur les filtres (Couleur bouton + Filtrage)
        filterButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const filterValue = btn.getAttribute("data-filter");
                const style = categoryColors[filterValue] || categoryColors["Tous"];

                // On applique les variables au bouton pour le CSS
                btn.style.setProperty('--active-color', style.color);
                btn.style.setProperty('--shadow-color', style.shadow);

                // Gère la classe active
                const currentActive = document.querySelector(".filter-btn.active");
                if (currentActive) currentActive.classList.remove("active");
                btn.classList.add("active");

                displayProjects(filterValue);
            });
        });

        // Fermeture de la modale
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        });

        window.addEventListener("click", (event) => {
            if (event.target == modal) {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });

        // 4. Initialisation (Premier affichage + Style du bouton "Tous")
        const firstBtn = document.querySelector(".filter-btn[data-filter='Tous']");
        if (firstBtn) {
            firstBtn.style.setProperty('--active-color', categoryColors["Tous"].color);
            firstBtn.style.setProperty('--shadow-color', categoryColors["Tous"].shadow);
        }
        displayProjects();
    }
});




// --- SLIDER (Sécurisée) ---
document.addEventListener('DOMContentLoaded', function () {
    const logoContainer = document.querySelector('.logo-container');
    
    // Si on n'est pas sur une page avec le slider, on s'arrête là
    if (!logoContainer) return; 
    const skills = [
        { img: 'PS.svg', name: 'Photoshop' },
        { img: 'css.svg', name: 'CSS3' },
        { img: 'html5.svg', name: 'HTML5' },
        { img: 'figma.svg', name: 'Figma' },
        { img: 'LR.svg', name: 'Lightroom' },
        { img: 'ID.svg', name: 'InDesign' },
        { img: 'notion.svg', name: 'Notion' },
        { img: 'libreoffice.svg', name: 'LibreOffice' },
        { img: 'wordpress.svg', name: 'WordPress' },
        { img: 'PR.svg', name: 'Premiere Pro' },
        { img: 'vscode.svg', name: 'VS Code' },
        { img: 'audition.svg', name: 'Audition' },
        { img: 'powerpoint.svg', name: 'PowerPoint' },
        { img: 'php.svg', name: 'PHP' },
        { img: 'excel.svg', name: 'Excel' },
        { img: 'js.svg', name: 'JavaScript' },
        { img: 'AI.svg', name: 'Illustrator' },
        { img: 'AE.svg', name: 'After Effects' }
    ];
    
    const logoCount = skills.length;
    let logoWidth = 200;
    let logoMargin = 40;

    function updateLogoWidth() {
        if (!logoContainer) return;
        logoContainer.innerHTML = ''; 
        const screenWidth = window.innerWidth;
        // logoWidth = screenWidth < 769 ? 100 : 200;

        if (screenWidth < 769) {
            logoWidth = 60;   // Logos plus petits sur mobile (au lieu de 100)
            logoMargin = 20;  // Marge réduite (au lieu de 40)
        } else {
            logoWidth = 200;  // Taille originale PC
            logoMargin = 40;  // Marge originale PC
        }

        for (let i = 0; i < 3 * logoCount; i++) {
            const currentSkill = skills[i % logoCount];

            const logoWrapper = document.createElement('div');
            logoWrapper.classList.add('logo-item');
            logoWrapper.style.width = logoWidth + 'px';
            logoWrapper.style.marginRight = logoMargin + 'px';

            // On crée la div de l'image (ton ancien .logo)
            const logoImg = document.createElement('div');
            logoImg.classList.add('logo');
            logoImg.style.backgroundImage = `url('images/logo/${currentSkill.img}')`;
            
            // On crée le texte
            const logoText = document.createElement('span');
            logoText.classList.add('logo-name');
            logoText.innerText = currentSkill.name;

            logoWrapper.appendChild(logoImg);
            logoWrapper.appendChild(logoText);
            logoContainer.appendChild(logoWrapper);
        }
    }

    updateLogoWidth();
    window.addEventListener('resize', updateLogoWidth);
    
    var currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        const newPosition = -currentIndex * (logoWidth + logoMargin) + 'px'; // Inclure la marge dans le calcul
        logoContainer.style.transition = 'transform 0.5s ease'; // Ajout d'une transition
    
        if (currentIndex >= logoCount) {
            setTimeout(function () {
                currentIndex = 0;
                logoContainer.style.transition = 'none';
                logoContainer.style.transform = 'translateX(' + (-(currentIndex * (logoWidth + logoMargin))) + 'px)'; // Réinitialisation à la position initiale
                void logoContainer.offsetWidth;
                logoContainer.style.transition = 'transform 0.5s ease';
            }, 500); // Retard pour donner l'illusion d'une transition en douceur
        }
    
        logoContainer.style.transform = 'translateX(' + newPosition + ')';
    }

    setInterval(showNextSlide, 2000); // Défilement automatique
});


// A PROPOS
// Animation Parallaxe des mots-clés au mouvement de la souris
document.querySelector('.about-visual').addEventListener('mousemove', (e) => {
    if (window.innerWidth > 1140) {
        const { clientX, clientY } = e;
    
        // On calcule la position de la souris par rapport au centre de l'image
        const rect = document.querySelector('.image-wrapper').getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        document.querySelectorAll('.kw').forEach(word => {
            const speed = word.getAttribute('data-speed');
            
            // Augmentation du multiplicateur (ici 15 au lieu de 100) pour plus de mouvement
            const x = (centerX - clientX) * speed / 15; 
            const y = (centerY - clientY) * speed / 15;

            gsap.to(word, {
                x: x,
                y: y,
                duration: 1.5,
                ease: "power2.out"
            });
        });
    }
});

// Réinitialisation douce quand la souris quitte la zone
document.querySelector('.about-visual').addEventListener('mouseleave', () => {
    document.querySelectorAll('.kw').forEach(word => {
        gsap.to(word, {
            x: 0,
            y: 0,
            duration: 2,
            ease: "elastic.out(1, 0.3)"
        });
    });
});



window.addEventListener('scroll', () => {
    const sideContact = document.querySelector('.side-contact');
    const aboutSection = document.querySelector('.section-parcours');
    
    if (window.innerWidth <= 768 && aboutSection && sideContact) {
        // Calcul du bas de la section À propos
        const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Si le bas de la page dépasse la fin de la section À propos
        if (scrollPosition > aboutBottom) {
            sideContact.style.opacity = "1";
            sideContact.style.visibility = "visible";
            sideContact.style.transform = "translateY(0)";
        } else {
            sideContact.style.opacity = "0";
            sideContact.style.visibility = "hidden";
            sideContact.style.transform = "translateY(20px)";
        }
    }
});



gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 70%", // L'animation commence quand le haut de la timeline arrive à 70% de l'écran
        end: "bottom 80%", // Elle finit quand le bas arrive à 80%
        scrub: 1, // L'animation suit la vitesse du doigt/souris
    }
});

// 1. On fait descendre la ligne blanche et le cercle
timeline.to(".timeline-progress", {
    height: "100%",
    ease: "none"
}, 0);

timeline.to(".timeline-dot", {
    top: "100%",
    ease: "none"
}, 0);

// 2. On fait apparaître chaque expérience quand la ligne passe dessus
const items = document.querySelectorAll(".timeline-item");

items.forEach((item, index) => {
    gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: item,
            start: "top 80%", // Apparaît quand l'item est presque au milieu de l'écran
            toggleActions: "play none none reverse" // S'inverse si on remonte
        }
    });
});


// 6. Animation GSAP

gsap.from(".ligneH1", { 
    duration: 3,
    opacity: 0,
    x: -900,
});

gsap.from(".ligneH2", { 
    duration: 3,
    opacity: 0,
    x: 900,
});

gsap.from(".ligneV3", { 
    duration: 3,
    opacity: 0,
    y: -500,
});

gsap.from(".ligneV4", { 
    duration: 3,
    opacity: 0,
    y: 500,
});

gsap.from(".ligneD1", { 
    duration: 3,
    opacity: 0,
    x: -900,
    y: -500,
});

gsap.from(".ligneD2", { 
    duration: 3,
    opacity: 0,
    x: 900,
    y: 500,
});

gsap.from(".ligneD3", { 
    duration: 3,
    opacity: 0,
    y: 500,
    x: -900,
});

gsap.from(".ligneD4", { 
    duration: 3,
    opacity: 0,
    y: -500,
    x: 500,
});
