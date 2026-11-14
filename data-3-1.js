// Paragraaf 3.1: Speltheorie.
// Eigen samenvattingen en vragen. Bij elke vraag is het EERSTE antwoord het goede; de app husselt de volgorde.
// fig = naam van een figuur uit figs.js. Nieuwe vragen altijd achteraan toevoegen, dan blijft de voortgang kloppen.
window.THEMAS = window.THEMAS || [];
THEMAS.push({
  id: 3.1,
  boek: "Hoofdstuk 3",
  titel: "Speltheorie",
  icoon: "🎲",
  bs: [
    {
      titel: "Spel, strategie en pay-off matrix",
      kern: [
        "Speltheorie gaat over keuzes waarbij jouw uitkomst ook afhangt van wat een ander kiest. Spelers (bedrijven, consumenten, overheden) houden daarom rekening met elkaars keuze: strategisch gedrag.",
        "Een spel bestaat uit spelers, strategieën (de keuzes die een speler heeft) en opbrengsten (pay-offs: wat elke combinatie van keuzes elke speler oplevert).",
        "Bij een statisch spel wordt het spel één keer gespeeld en kiezen de spelers tegelijk (simultaan): ze weten niet wat de ander kiest. Zo'n spel zet je in een pay-off matrix.",
        "Zo lees je de matrix: de rijen zijn de keuzes van de ene speler, de kolommen die van de andere. In elke cel staan twee getallen: eerst de opbrengst van de rijspeler, dan die van de kolomspeler.",
        "Een dominante strategie is de keuze die voor een speler het beste is, wát de ander ook kiest.",
        "Niet elke speler heeft een dominante strategie. Soms hangt de beste keuze af van wat de ander doet."
      ],
      fig: ["m_reclame"],
      voorbeeld: {
        titel: "Zo zoek je de dominante strategie van Frisco (figuur hierboven)",
        stappen: [
          "Houd de keuze van Kola vast op 'geen reclame' (linkerkolom). Frisco verdient 10 zonder reclame en 13 met reclame. Beste keuze: wel reclame.",
          "Houd de keuze van Kola vast op 'wel reclame' (rechterkolom). Frisco verdient 4 zonder reclame en 7 met reclame. Beste keuze: wel reclame.",
          "In beide gevallen is 'wel reclame' het beste. Dat is dus de dominante strategie van Frisco.",
          "Voor Kola doe je hetzelfde, maar dan vergelijk je per rij het tweede getal."
        ]
      },
      begrippen: [
        ["Speltheorie", "Theorie over keuzes waarbij de uitkomst voor een speler ook afhangt van de keuzes van anderen."],
        ["Strategisch gedrag", "Bij je keuze rekening houden met de (verwachte) keuze en reactie van anderen."],
        ["Strategie", "Een keuze die een speler in het spel kan maken."],
        ["Pay-off (opbrengst)", "Wat een speler krijgt bij een bepaalde combinatie van keuzes, bijvoorbeeld winst."],
        ["Pay-off matrix", "Schema van een spel met de spelers, hun keuzes en de pay-offs bij elke combinatie van keuzes."],
        ["Statisch spel", "Spel dat één keer wordt gespeeld en waarbij de spelers tegelijk (simultaan) kiezen."],
        ["Dominante strategie", "De keuze die voor een speler het meeste oplevert, ongeacht wat de ander kiest."],
        ["Dynamisch spel", "Spel dat meerdere keren wordt gespeeld (herhaald spel) of waarbij de spelers na elkaar kiezen (sequentieel spel)."]
      ],
      vragen: [
        { q: "Wanneer is er sprake van strategisch gedrag?", a: ["Als je bij je keuze rekening houdt met de verwachte keuze van anderen", "Als je altijd de laagste prijs vraagt", "Als je de keuze van de ander al kent", "Als je zo veel mogelijk produceert"], u: "Strategisch gedrag betekent dat je meeweegt wat de ander waarschijnlijk doet, omdat jouw uitkomst daarvan afhangt." },
        { q: "Wat staat er in één cel van een pay-off matrix?", a: ["De opbrengst van elke speler bij één combinatie van keuzes", "De totale winst van beide spelers samen", "De beste keuze van de rijspeler", "De kans dat een speler die keuze maakt"], u: "Elke cel hoort bij één combinatie van keuzes. Er staan twee getallen in: eerst de rijspeler, dan de kolomspeler." },
        { q: "Wat is een dominante strategie?", a: ["De keuze die voor een speler het beste is, wat de ander ook kiest", "De keuze die voor beide spelers samen het meeste oplevert", "De keuze van de grootste speler", "De keuze die de ander het meeste schaadt"], u: "Dominant betekent: altijd de beste keuze voor jezelf, ongeacht de keuze van de ander." },
        { q: "Twee supermarkten bepalen op maandagochtend tegelijk hun weekaanbiedingen, zonder die van de ander te kennen. Wat voor spel is dit?", a: ["Een statisch spel: ze kiezen tegelijk", "Een sequentieel spel: ze kiezen na elkaar", "Een spel met collectieve dwang", "Geen spel, want er is geen overleg"], u: "Ze kiezen tegelijk (simultaan) en kennen elkaars keuze niet. Bekijk je één week, dan is dat een statisch spel." },
        { fig: "m_reclame", q: "Kola maakt geen reclame. Hoeveel winst maakt Frisco als het wél reclame maakt?", a: ["13 miljoen", "10 miljoen", "7 miljoen", "4 miljoen"], u: "Kijk in de kolom 'geen reclame' van Kola en de rij 'wel reclame' van Frisco: daar staat 13 ; 4. Het eerste getal is van Frisco." },
        { fig: "m_reclame", q: "Wat is de dominante strategie van Frisco?", a: ["Wel reclame maken", "Geen reclame maken", "Frisco heeft geen dominante strategie", "Hetzelfde doen als Kola"], u: "Maakt Kola geen reclame, dan is 13 beter dan 10. Maakt Kola wel reclame, dan is 7 beter dan 4. Wel reclame is dus altijd het beste." },
        { fig: "m_uitbreiden", q: "Wat is de dominante strategie van Groot?", a: ["Uitbreiden", "Niet uitbreiden", "Groot heeft geen dominante strategie", "Dat hangt af van Klein"], u: "Als Klein uitbreidt: 6 is beter dan 4. Als Klein niet uitbreidt: 9 is beter dan 7. Uitbreiden is voor Groot altijd het beste." },
        { fig: "m_uitbreiden", q: "Heeft Klein een dominante strategie?", a: ["Nee, de beste keuze van Klein hangt af van wat Groot doet", "Ja, uitbreiden", "Ja, niet uitbreiden", "Ja, hetzelfde als Groot"], u: "Breidt Groot uit, dan kiest Klein 'niet uitbreiden' (3 is beter dan 2). Breidt Groot niet uit, dan kiest Klein 'uitbreiden' (5 is beter dan 4). Er is dus geen keuze die altijd het beste is." }
      ],
      open: { q: "Twee bakkers in één dorp beslissen tegelijk of ze op zondag open gaan. Leg uit waarom dit een spel is en welke gegevens je nodig hebt om er een pay-off matrix van te maken.", a: "Het is een spel omdat de winst van elke bakker ook afhangt van de keuze van de ander: gaat alleen jij open, dan krijg je alle zondagklanten; gaan beiden open, dan deel je ze. Voor de matrix heb je nodig: de twee spelers, hun keuzes (open of dicht) en voor elk van de vier combinaties de winst van elke bakker." }
    },
    {
      titel: "Gevangenendilemma en Nash-evenwicht",
      kern: [
        "Een Nash-evenwicht is een combinatie van keuzes waarbij geen enkele speler er in zijn eentje op vooruitgaat door iets anders te kiezen. Gegeven de keuze van de ander heeft niemand spijt.",
        "Hebben beide spelers een dominante strategie, dan is de combinatie van die twee keuzes het Nash-evenwicht.",
        "Heeft maar één speler een dominante strategie? Die speler kiest die. De ander kiest dan de beste reactie daarop.",
        "Gevangenendilemma: beide spelers kiezen hun dominante strategie, maar de uitkomst is voor allebei slechter dan wanneer ze hadden samengewerkt.",
        "Het eigenbelang botst dan met het gezamenlijke belang. Samenwerken is beter, maar elke speler heeft een prikkel om af te wijken van de afspraak.",
        "Het bekende verhaal: twee verdachten worden apart verhoord. Bekennen is voor elk dominant, waardoor ze allebei langer vastzitten dan als ze allebei hadden gezwegen.",
        "Voorbeelden uit de economie: reclameoorlog, prijzenoorlog, overbevissing, niet meebetalen aan iets gezamenlijks.",
        "Het gevangenendilemma is een niet-coöperatief spel: de spelers kunnen geen bindende afspraken maken. Bij een coöperatief spel kan dat wel."
      ],
      fig: ["m_reclame"],
      voorbeeld: {
        titel: "Het Nash-evenwicht vinden met de best response-methode (figuur hierboven)",
        stappen: [
          "Bekijk per kolom (per keuze van Kola) wat voor Frisco het beste is en zet een streep onder dat getal: 13 in de linkerkolom, 7 in de rechterkolom.",
          "Bekijk per rij (per keuze van Frisco) wat voor Kola het beste is en zet een streep onder dat getal: 13 in de bovenste rij, 7 in de onderste rij.",
          "De cel waarin beide getallen een streep hebben is het Nash-evenwicht: wel reclame / wel reclame (7 ; 7).",
          "Staan alle strepen van een speler bij dezelfde keuze, dan is dat zijn dominante strategie."
        ]
      },
      begrippen: [
        ["Nash-evenwicht", "Combinatie van keuzes waarbij geen speler beter wordt door als enige een andere keuze te maken."],
        ["Gevangenendilemma (prisoner's dilemma)", "Spel waarin beide spelers hun dominante strategie kiezen en daardoor allebei slechter af zijn dan bij samenwerking."],
        ["Eigenbelang", "Wat voor één speler zelf het beste is."],
        ["Gezamenlijk (collectief) belang", "Wat voor de spelers samen het beste is."],
        ["Samenwerken (coöperatief gedrag)", "Kiezen wat voor de groep het beste is, bijvoorbeeld je aan een afspraak houden."],
        ["Afwijken", "Je niet aan de afspraak houden omdat dat jou zelf meer oplevert."],
        ["Suboptimale uitkomst", "Uitkomst waarbij het voor alle spelers beter had gekund."],
        ["Best response-methode", "Manier om de uitkomst van een statisch spel te vinden: bepaal bij elke keuze van de ander je beste antwoord."],
        ["Niet-coöperatief spel", "Spel waarbij de spelers geen bindende afspraken kunnen maken."],
        ["Coöperatief spel", "Spel waarbij de spelers wel bindende afspraken kunnen maken."]
      ],
      vragen: [
        { q: "Wat is een Nash-evenwicht?", a: ["Een uitkomst waarbij geen speler beter wordt door als enige iets anders te kiezen", "De uitkomst met de hoogste winst voor beide spelers samen", "Een uitkomst waarbij beide spelers evenveel verdienen", "Een afspraak die de spelers vooraf maken"], u: "In een Nash-evenwicht heeft niemand reden om in zijn eentje van keuze te veranderen. Dat is niet altijd de beste uitkomst voor de groep." },
        { q: "Wat is kenmerkend voor een gevangenendilemma?", a: ["Beide spelers volgen hun eigenbelang en zijn daardoor allebei slechter af dan bij samenwerking", "Geen van de spelers heeft een dominante strategie", "De spelers kunnen een bindende afspraak maken", "Eén speler wint altijd ten koste van de ander"], u: "Beiden hebben een dominante strategie. Kiezen ze die allebei, dan is de uitkomst voor beiden slechter dan als ze hadden samengewerkt." },
        { fig: "m_reclame", q: "Wat is het Nash-evenwicht in dit spel?", a: ["Beide maken wel reclame (7 ; 7)", "Beide maken geen reclame (10 ; 10)", "Alleen Frisco maakt reclame (13 ; 4)", "Alleen Kola maakt reclame (4 ; 13)"], u: "Voor beide is 'wel reclame' dominant. De combinatie daarvan is het Nash-evenwicht: 7 ; 7." },
        { fig: "m_reclame", q: "Waarom is dit spel een gevangenendilemma?", a: ["In het evenwicht verdienen beide 7, terwijl ze zonder reclame allebei 10 hadden verdiend", "Omdat Frisco en Kola evenveel verdienen", "Omdat geen van beide een dominante strategie heeft", "Omdat reclame maken altijd verlies oplevert"], u: "Het evenwicht (7 ; 7) is voor allebei slechter dan (10 ; 10). Eigenbelang leidt hier tot een slechtere uitkomst voor beiden." },
        { fig: "m_reclame", q: "Frisco en Kola spreken af om allebei geen reclame te maken. Waarom is die afspraak wankel?", a: ["Wie zich er niet aan houdt, verdient 13 in plaats van 10", "Omdat ze dan allebei verlies maken", "Omdat geen reclame maken de dominante strategie is", "Omdat de winst samen dan lager is dan in het evenwicht"], u: "Houdt de ander zich aan de afspraak, dan levert stiekem toch reclame maken 13 op in plaats van 10. Afwijken loont dus." },
        { fig: "m_uitbreiden", q: "Wat is het Nash-evenwicht in dit spel?", a: ["Groot breidt uit, Klein breidt niet uit (9 ; 3)", "Beide breiden uit (6 ; 2)", "Beide breiden niet uit (7 ; 4)", "Groot breidt niet uit, Klein wel (4 ; 5)"], u: "Uitbreiden is dominant voor Groot. Klein reageert daarop met de beste keuze: niet uitbreiden (3 is beter dan 2)." },
        { fig: "m_uitbreiden", q: "Is dit spel een gevangenendilemma?", a: ["Nee, er is geen andere uitkomst die voor beide spelers beter is dan het evenwicht", "Ja, want Groot heeft een dominante strategie", "Ja, want Klein verdient minder dan Groot", "Ja, want ze kiezen tegelijk"], u: "Bij een gevangenendilemma is er een uitkomst die voor allebei beter is dan het evenwicht. Hier niet: elke andere cel is slechter voor Groot (9 is zijn hoogste winst)." },
        { q: "Twee vissersbedrijven vissen in hetzelfde meer. Elk verdient het meest door zo veel mogelijk te vangen, wat de ander ook doet. Als beide dat doen, raakt het meer leeg. Dit is een voorbeeld van …", a: ["een gevangenendilemma", "collectieve dwang", "zelfbinding", "een transparante markt"], u: "Veel vangen is voor elk dominant, maar als beiden dat doen zijn ze allebei slechter af dan wanneer ze zich hadden ingehouden." }
      ],
      open: { q: "Twee tankstations aan dezelfde weg verdienen allebei goed zolang ze een hoge prijs vragen. Toch eindigen ze vaak allebei met een lage prijs. Leg dit uit met de begrippen dominante strategie en gevangenendilemma.", a: "Voor elk tankstation is een lage prijs dominant: vraagt de ander een hoge prijs, dan trek je met een lage prijs zijn klanten naar je toe; vraagt de ander een lage prijs, dan moet je mee om je klanten te houden. Beide kiezen dus een lage prijs. De winst is dan voor allebei lager dan wanneer ze allebei een hoge prijs hadden gehouden: een gevangenendilemma." }
    },
    {
      titel: "Uit het dilemma: zelfbinding, dwang en reputatie",
      kern: [
        "Een gevangenendilemma doorbreek je alleen als spelers erop kunnen vertrouwen dat de ander samenwerkt. Een losse belofte is niet geloofwaardig, want afwijken loont.",
        "Zelfbinding: een speler legt zich vast op een keuze om het gedrag van de ander te beïnvloeden. Een vrijblijvende belofte is ongeloofwaardige zelfbinding.",
        "Geloofwaardige zelfbinding: de speler verbindt een nadeel aan afwijken (een borg, een laagsteprijsgarantie) of heeft een reputatie opgebouwd van doen wat hij zegt (dreigen en nakomen).",
        "Collectieve dwang: een groep dwingt af dat iedereen zich aan de regels houdt. Voorbeelden: een contract afsluiten, belasting heffen, vangstquota, een verplichte verzekering.",
        "Herhaald spel: komen spelers elkaar steeds opnieuw tegen, dan loont samenwerken vaker. Wie nu afwijkt, wordt de volgende keer gestraft. Een goede reputatie is dan geld waard.",
        "Sociale normen: ongeschreven regels uit je omgeving die je gedrag sturen. Wie zich er niet aan houdt, wordt erop aangekeken.",
        "Onthoud het rijtje van het boek: in een herhaald spel vermijd je een gevangenendilemma met sociale normen, zelfbinding of collectieve dwang.",
        "Een herhaald spel is een dynamisch spel. Dat geldt ook voor een sequentieel spel, waarin de spelers na elkaar kiezen. Zo'n spel teken je als beslisboom (spelboom); wie begint heet de first mover.",
        "Meeliftgedrag: profiteren van iets zonder eraan mee te betalen. Dit speelt bij collectieve goederen (dijken, straatverlichting, defensie): je kunt niemand uitsluiten van het gebruik.",
        "Omdat iedereen wil meeliften, komen collectieve goederen niet via de markt tot stand. De overheid betaalt ze uit belasting: collectieve dwang."
      ],
      begrippen: [
        ["Zelfbinding", "Jezelf vastleggen op een keuze, zodat afwijken onmogelijk of duur wordt en je belofte geloofwaardig is."],
        ["Geloofwaardige zelfbinding", "Zelfbinding waarbij afwijken een nadeel oplevert of waarbij de speler een reputatie heeft van doen wat hij zegt."],
        ["Collectieve dwang", "Iedereen wordt (meestal door de overheid) verplicht om mee te doen of mee te betalen."],
        ["Herhaald spel", "Spel dat dezelfde spelers steeds opnieuw met elkaar spelen."],
        ["Reputatie", "De naam die je hebt opgebouwd met eerder gedrag; in een herhaald spel een reden om je aan afspraken te houden."],
        ["Meeliftgedrag", "Profiteren van een voorziening zonder eraan mee te betalen. Ook: free riding."],
        ["Collectief goed", "Goed waarvan je niemand kunt uitsluiten en dat daarom niet via de markt te verkopen is, zoals een dijk."],
        ["Sociale norm", "Ongeschreven regel in een groep; wie zich er niet aan houdt, wordt erop aangesproken."],
        ["Ongeloofwaardige zelfbinding", "Een vrijblijvende afspraak of belofte: afwijken kost niets, dus de ander kan er niet op rekenen."],
        ["Sequentieel spel", "Spel waarbij de spelers na elkaar kiezen. Je tekent het als beslisboom (spelboom)."],
        ["First mover", "De speler die in een sequentieel spel als eerste kiest."]
      ],
      vragen: [
        { q: "Een winkel belooft: 'Elders goedkoper? Dan krijg je het verschil terug.' Hiermee laat de winkel zien dat hij zijn prijzen laag houdt. Dit is een voorbeeld van …", a: ["zelfbinding", "collectieve dwang", "meeliftgedrag", "een statisch spel"], u: "De winkel legt zichzelf vast: een hogere prijs dan de concurrent kost hem geld. Zo wordt de belofte geloofwaardig." },
        { q: "De overheid legt alle vissers een maximale vangst op om overbevissing te voorkomen. Dit is een voorbeeld van …", a: ["collectieve dwang", "zelfbinding", "reputatie", "een dominante strategie"], u: "Iedereen wordt verplicht zich in te houden. Zo wordt de uitkomst bereikt die voor alle vissers samen het beste is." },
        { q: "Waarom houden spelers zich in een herhaald spel vaker aan een afspraak?", a: ["Wie nu afwijkt, kan in de volgende ronde door de ander worden gestraft", "Omdat de opbrengsten in elke ronde hoger worden", "Omdat afwijken in een herhaald spel verboden is", "Omdat de spelers dan geen dominante strategie meer hebben"], u: "De winst van één keer afwijken weegt niet op tegen het verlies in alle volgende rondes, als de ander dan ook niet meer samenwerkt." },
        { q: "Welk voorbeeld laat meeliftgedrag zien?", a: ["Een bewoner betaalt niet mee aan de gezamenlijke schoonmaak van het trappenhuis, maar gebruikt het wel", "Een bedrijf verlaagt zijn prijs om klanten te winnen", "Een huurder betaalt een borg aan de verhuurder", "Een bedrijf sluit een contract met een boeteclausule"], u: "Meeliften is profiteren zonder mee te betalen. De bewoner heeft een schoon trappenhuis op kosten van de anderen." },
        { q: "Waarom bouwt geen enkel bedrijf uit zichzelf een zeedijk om die daarna aan de bewoners te verkopen?", a: ["Je kunt niet-betalers niet uitsluiten van de bescherming, dus iedereen wil meeliften", "Omdat dijken altijd verlies opleveren voor de bewoners", "Omdat de overheid dat verbiedt", "Omdat er te veel aanbieders van dijken zijn"], u: "Een dijk is een collectief goed. Wie niet betaalt, wordt toch beschermd. Daarom betaalt de overheid dijken uit belasting (collectieve dwang)." },
        { q: "Twee bedrijven beloven elkaar mondeling hun prijs hoog te houden. Waarom is die belofte niet geloofwaardig?", a: ["Elk bedrijf verdient meer door zich er niet aan te houden, en er staat geen straf op", "Omdat een hoge prijs voor beide de dominante strategie is", "Omdat de bedrijven elkaar dan niet meer tegenkomen", "Omdat de klanten de afspraak niet kennen"], u: "Zonder zelfbinding of straf loont afwijken. Beide weten dat van elkaar, dus de belofte is weinig waard." },
        { q: "Een huurder betaalt bij het begin van de huur een borg van twee maanden huur. Wat bereikt de verhuurder daarmee?", a: ["De huurder heeft er nu zelf belang bij om de woning netjes achter te laten", "De huurder kan nu gratis meeliften", "De overheid dwingt de huurder om netjes te zijn", "De huur wordt daardoor lager"], u: "De borg is zelfbinding: de huurder verliest geld als hij zich niet aan de afspraken houdt. Dat maakt zijn belofte geloofwaardig." },
        { q: "Een bedrijf zegt tegen een concurrent: 'Wij verlagen onze prijs niet.' Er staat niets op papier en er is geen straf. Hoe noem je dit?", a: ["Ongeloofwaardige zelfbinding", "Geloofwaardige zelfbinding", "Collectieve dwang", "Een sociale norm"], u: "Het is een vrijblijvende belofte. Afwijken kost het bedrijf niets, dus de concurrent kan er niet op rekenen." },
        { q: "Wat is het verschil tussen een statisch en een dynamisch spel?", a: ["Een statisch spel wordt één keer en tegelijk gespeeld; een dynamisch spel meerdere keren of na elkaar", "Bij een statisch spel is er altijd een dominante strategie, bij een dynamisch spel nooit", "Een statisch spel heeft twee spelers, een dynamisch spel meer", "Bij een dynamisch spel zijn bindende afspraken altijd mogelijk"], u: "Statisch: één keer, de spelers beslissen tegelijk. Dynamisch: een herhaald spel of een sequentieel spel." },
        { q: "In een vriendengroep geeft iedereen om de beurt een rondje. Wie dat nooit doet, wordt erop aangekeken. Waardoor houdt iedereen zich hieraan?", a: ["Door een sociale norm", "Door collectieve dwang van de overheid", "Door een dominante strategie", "Door een pay-off matrix"], u: "Het is een ongeschreven regel uit de sociale omgeving die het gedrag stuurt: een sociale norm." },
        { q: "Een nieuw bedrijf beslist eerst of het een markt betreedt. Daarna beslist het bestaande bedrijf of het zijn prijs verlaagt. Wat voor spel is dit?", a: ["Een sequentieel spel", "Een statisch spel", "Een gevangenendilemma", "Een coöperatief spel"], u: "De spelers kiezen na elkaar. Het nieuwe bedrijf is de first mover. Je tekent dit spel als beslisboom." }
      ],
      open: { q: "Landen spreken af om minder CO2 uit te stoten. Leg uit waarom dit een gevangenendilemma is en noem twee manieren om het te doorbreken.", a: "Elk land heeft er voordeel van als de andere landen minder uitstoten, maar minder uitstoten kost het land zelf geld. Niet meedoen (meeliften) is dus voor elk land aantrekkelijk. Doen alle landen dat, dan is iedereen slechter af door klimaatverandering. Doorbreken kan met collectieve dwang (een bindend verdrag met boetes) of zelfbinding (doelen vastleggen in de eigen wet). Ook reputatie helpt, omdat landen elkaar steeds opnieuw nodig hebben (herhaald spel)." }
    }
  ]
});
