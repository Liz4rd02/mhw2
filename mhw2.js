function Menu(event){
    const menuButton = event.currentTarget;
    const menu = document.querySelector('#menu');

    if(menuButton.classList.contains('active')){
        menuButton.classList.remove('active');
        menu.classList.add('hidden');
    }
    else{
        menuButton.classList.add('active');
        menu.classList.remove('hidden');
    }
}
/*********************************************************/

function openFAQMenu(event){
    const menuButton = event.currentTarget;
    menuButton.removeEventListener('click', openFAQMenu);
    menuButton.addEventListener('click', closeFAQMenu);

    /* Creazione elementi */
    const FAQinfo = document.createElement('div');
    FAQinfo.id = "FAQ-info"; 

    const span = document.createElement('span');
    span.textContent = "Contact Us";

    const a = document.createElement('a')
    a.textContent = "Help Center";
    a.href ="https://opgg.helpscoutdocs.com/collection/1-league-of-legends";

    const headerEnding = document.querySelector("#header-ending");
    headerEnding.appendChild(FAQinfo);
    FAQinfo.appendChild(span);
    FAQinfo.appendChild(a);
}

function closeFAQMenu(event){
    const menuButton = event.currentTarget;
    menuButton.removeEventListener('click', closeFAQMenu);
    menuButton.addEventListener('click', openFAQMenu);

    const FAQinfo = document.querySelector("#FAQ-info");
    FAQinfo.remove();
}

/*********************************************************/

function changeLightMode(event){
    const colorModeButton = event.currentTarget;
    const body = document.querySelector('body');
    const colorModeInfo = document.querySelector('#colorModeInfo');
    const playeroftheweekLogo = document.querySelector('#POW-logo');

    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');

        colorModeButton.src = 'https://s-lol-web.op.gg/images/icon/icon-darkmode.svg';
        colorModeInfo.textContent="Dark mode";
        if(playeroftheweekLogo) playeroftheweekLogo.src = 'https://s-lol-web.op.gg/static/images/esports/logo-pow-white.svg?v=1710914129937';
    }

    else{
        body.classList.remove('dark');
        body.classList.add('light');

        colorModeButton.src = 'https://s-lol-web.op.gg/images/icon/icon-lightmode.svg';
        colorModeInfo.textContent="Light mode"
        if(playeroftheweekLogo) playeroftheweekLogo.src = 'https://s-lol-web.op.gg/static/images/esports/logo-pow-black.svg?v=1710914129937';
    }
}

/*********************************************************/

function colorModeHover(){
    const triangle = document.querySelector('#triangle');
    triangle.classList.remove('hidden');
    const colorModeInfo = document.querySelector('#colorModeInfo');
    colorModeInfo.classList.remove('hidden');
}

function colorModeNotHover(){
    const triangle = document.querySelector('#triangle');
    triangle.classList.add('hidden');
    const colorModeInfo = document.querySelector('#colorModeInfo');
    colorModeInfo.classList.add('hidden');
}

/*********************************************************/
function changeLanguage(event) {
    const selectedLanguage = event.currentTarget.textContent;

    const languageDependantWordsList = document.querySelectorAll('.LanguageDependant');


    for (let i = 0; i < languageDependantWordsList.length; i++) {
        languageDependantWordsList[i].textContent = LanguageMap[selectedLanguage][i];
    }

    LanguageList.classList.add('hidden');
}

function LanguageMenu(){
    const LanguageList = document.querySelector('#LanguageList');
    if(LanguageList.classList.contains('hidden')){
        LanguageList.classList.remove('hidden'); 
    }
    else{
        LanguageList.classList.add('hidden');
    }
}
/*********************************************************/

function RegionMenu(event){
    const RegionList = event.currentTarget.nextSibling.nextSibling

    if(RegionList.classList.contains('hidden')){
        RegionList.classList.remove('hidden'); 
    }
    else{
        RegionList.classList.add('hidden');
    }
}


function changeRegion(event){
    const selectedRegion = event.currentTarget.textContent;
    const RegionList = event.currentTarget.parentNode;

    if(RegionList.parentNode.classList.contains('little')){
        /* SE SONO NELLA PAGINA LOL CHAMPIONS*/
        /* cutSelectedRegion = cutSelectedRegion.replace(/\d/, '') */
        /* /\d/ è un meta-carattere che corrisponde a qualsiasi cifra numerica in una stringa */
        /* altrimenti avrei potuto usare il medoto replace per ogni cifra numerica con un ciclo*/
        /* Oppure mi accorgo che nei nameTag ci sono solo '1' o '2', quindi rimpiazzo solo questi*/
        let cutSelectedRegion = gameTagMap[selectedRegion];
        cutSelectedRegion = cutSelectedRegion.replace('1', '');
        cutSelectedRegion = cutSelectedRegion.replace('2', '');
        
        document.querySelector('#regionName').textContent = cutSelectedRegion;
    }

    else{
        document.querySelector('#regionName').textContent = selectedRegion;
    }
    
    const gameTag = document.querySelector('#gameTag');
    gameTag.textContent = '#'+gameTagMap[selectedRegion];

    RegionList.classList.add('hidden');
}
/**********************************************************/


function ChangeFilterRegion(event){
    const selectedOption = event.currentTarget.textContent;
    const Menu = event.currentTarget.parentNode;
    const section = document.querySelector('#champRegion');

    section.querySelector('.selectedOptionText').textContent = selectedOption;
    section.querySelector('.selectedOptionImg').src = event.currentTarget.childNodes[0].src
    Menu.classList.add('hidden');
}


/**********************************************************/


function Input(event){
    if(event.currentTarget.value.length > 0){
        event.currentTarget.classList.add('writing');
    }

    else{
        event.currentTarget.classList.remove('writing')
    }
}

/**********************************************************/

function ChangeFilterDivision(event){
    const selectedOption = event.currentTarget.textContent;
    const Menu = event.currentTarget.parentNode;
    const section = document.querySelector('#division');

    section.querySelector('.selectedOptionText').textContent = selectedOption;
    section.querySelector('.selectedOptionImg').src = event.currentTarget.childNodes[0].src
    Menu.classList.add('hidden');
}


/*********************************************************/



const menuButton = document.querySelector('#menu-img');
menuButton.addEventListener('click', Menu);

const colorModeButton = document.querySelector('#darkmode');
colorModeButton.addEventListener('click', changeLightMode);
colorModeButton.addEventListener('mouseover', colorModeHover);
colorModeButton.addEventListener('mouseout', colorModeNotHover);

const FAQ = document.querySelector('#FAQ');
FAQ.addEventListener('click', openFAQMenu);

const italianWords = ['Italiano', 'Home', 'Champions', 'Game Mode', 'Statistiche', 'Classifiche', 'Pro Matches', 'Multi-Search', 'Usa OP.GG senza pubblicità, con funzionalità premium', 'Impostazione automatica di rune in tempo reale', 'Campioni più usati, gare a squadre e altro ancora', 'Ultime raccomandazionidi Meta e OP.GG', 'Funzionalità di sovrapposizione migliorate per maggiore praticità'];
const englishWords = ['English', 'Home', 'Champions', 'Game Mode', 'Stats', 'Leaderboards', 'Pro Matches', 'Multi-Search', 'Use OP.GG, ad-free, with premium features', 'Real-time Auto Rune Setting', 'OP Champions, Team Comps, and More', 'Latest Meta and OP.GG Recommendations', 'Enhanced Overlay Features for Better Convenience'];
const frenchWords = ['Français', 'Accueil', 'Champions', 'Game Mode', 'Statistiques', 'Classements', 'Pro Matches', 'Recherche multiple', 'Utilisez OP.GG sans publicités, avec des fonctionnalités premium', 'Paramétrage des runesauto en temps réel', "Champions OP, compos d'équipes et plus", 'Meta en courset recommandations OP.GG', 'Fonctionnalités de superposition améliorées pour le confort'];
const spanishWords = ['Español', 'Inicio', 'Análisis de Campeones', 'Game Mode', 'Estadísticas', 'Ránking', 'Partidas Pro', 'Búsqueda Multiple', 'Usa OP.GG sin anuncios, con funciones premium', 'Ajuste automático de runasen tiempo real', 'Los campeones más fuertes, composiciones de equipos y más', 'Último Meta y recomendaciones de OP.GG', 'Funciones de superposición mejoradaspara mayor comodidad'];
const germanWords = ['Deutsch', 'Home', 'Champions', 'Game Mode', 'Statistik', 'Rangliste', 'Pro Matches', 'Multi-Suche', 'Nutzen Sie OP.GG werbefrei, mit Premium-Funktionen', 'Automatische Echtzeit-Runeneinstellung', 'OP-Champions, Team-Wettbewerbe und mehr', 'Aktuelle Meta- und OP.GG-Empfehlungen', 'Verbesserte Overlay-Funktionenfür mehr Komfort'];
const nederlandsWords = ['Nederlands', 'Home', 'Champions', 'Game Mode', 'Statistieken', 'Rangen', 'Pro Matches', 'Multi-Search', 'Gebruik OP.GG zonder advertenties, met premium functies', 'Real-time auto-rune-instelling', 'OP-kampioenen, teamcomposities en meer', 'OP-kampioenen, teamcomposities en meer', 'Verbeterde overlay-functiesvoor meer gemak'];
const polishWords = ['Język polski', 'Home', 'Champions', 'Game Mode', 'Statystyki', 'Rankingi', 'Pro Matches', 'Multi-Search', 'Korzystaj z OP.GG bez reklam, z funkcjami premium', 'Automatyczne ustawianie runw czasie rzeczywistym', 'Bohaterowie OP, zawody drużynowe i nie tylko', 'Najnowsze zasady metagryoraz rekomendacje OP.GG', 'Ulepszona nakładkadla większej wygody'];
const portugueseWords = ['Português', 'Início', 'Análise de Campeões', 'Game Mode', 'Estatísticas', 'Classificações', 'Partidas Profissionais', 'Busca Múltipla', 'Use OP.GG, ad-free, with premium features', 'Ajuste automático de runasem tempo real', 'Campeões OP, competições por equipe e mais', 'Últimas recomendaçõesmeta e OP.GG', 'Recursos de sobreposição aprimoradospara sua conveniência'];
const danishWords = ['Dansk', 'Home', 'Champions', 'Game Mode', 'Statistik', 'Rang', 'Pro Matches', 'Multi-Search', 'Brug OP.GG uden reklamer, med premium funktioner', 'Automatisk runeindstillingi realtid', 'OP Champions, holdkonkurrencer m. m.', 'Nye Meta-og OP.GG-anbefalinger', 'Bedre og mere bekvemmeoverlejringsfunktioner'];

const LanguageMap = {
    'Italiano': italianWords,
    'English': englishWords,
    'Français': frenchWords,
    'Español': spanishWords,
    'Deutsch': germanWords,
    'Nederlands': nederlandsWords,
    'Język polski': polishWords,
    'Português': portugueseWords,
    'Dansk': danishWords
};

const selectLanguage = document.querySelector('#scegli');
selectLanguage.addEventListener('click', LanguageMenu);
const LanguageOptions = document.querySelectorAll('#LanguageList span');
for(const item of LanguageOptions){
    item.addEventListener('click', changeLanguage);
}

const gameTagMap = {
    'Europe West': 'EUW',
    'North America': 'NA1',
    'Europe Nordic & East': 'EUNE',
    'Oceania': 'OCE',
    'Korea': 'KR1',
    'Japan': 'JP1',
    'Brazil': 'BR1',
    'LAS': 'LAS',
    'LAN': 'LAN',
    'Russia': 'RU1',
    'Türkiye': 'TR1',
    'Singapore': 'SG2',
    'Philippines': 'PH2',
    'Taiwan': 'TW2',
    'Vietnam': 'VN2',
    'Thailand': 'TH2'
};


const Region = document.querySelector('#region');
Region.addEventListener('click', RegionMenu);


const RegionOptions = document.querySelectorAll('#RegionList .RegionOption');
for(const item of RegionOptions){
    item.addEventListener('click', changeRegion);
}

const inputs = document.querySelectorAll('input');
for(const item of inputs){
    item.addEventListener('input', Input);
}

const champRegion = document.querySelector('#champRegion');
champRegion.addEventListener('click', RegionMenu);

const ChampRegionOptions = document.querySelectorAll('#RegionList .ChampRegionOption');
for(const item of ChampRegionOptions){
    item.addEventListener('click', ChangeFilterRegion);
}

const division = document.querySelector('#division');
division.addEventListener('click', RegionMenu);

const DivisionOptions = document.querySelectorAll('#DivisionList .DivisionOption');
for(const item of DivisionOptions){
    item.addEventListener('click', ChangeFilterDivision);
}
