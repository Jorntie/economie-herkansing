// Paragraaf 4.5: Marktvormen.
// Eigen samenvattingen en vragen. Bij elke vraag is het EERSTE antwoord het goede; de app husselt de volgorde.
window.THEMAS = window.THEMAS || [];
THEMAS.push({
  id: 4.5,
  boek: "Hoofdstuk 4",
  titel: "Marktvormen",
  icoon: "🏪",
  bs: [
    {
      titel: "Marktvormen herkennen",
      kern: [
        "Een marktvorm herken je met drie vragen: (1) hoeveel aanbieders zijn er: één, weinig of veel? (2) Is het product homogeen of heterogeen? (3) Kunnen nieuwe bedrijven makkelijk toetreden?",
        "Er zijn vier marktvormen: volkomen concurrentie, monopolistische concurrentie, oligopolie en monopolie.",
        "Volkomen concurrentie is de enige marktvorm met volkomen concurrentie. De andere drie zijn vormen van onvolkomen concurrentie.",
        "Bij onvolkomen concurrentie heeft de aanbieder marktmacht: hij kan zelf zijn prijs bepalen (prijszetter). Hoe minder concurrenten, hoe groter die macht.",
        "Heterogeen product: kopers zien verschil tussen de producten van verschillende aanbieders, bijvoorbeeld door merk, kwaliteit of service.",
        "Marktaandeel = omzet (of afzet) van één bedrijf : totale omzet (of afzet) op de markt × 100%."
      ],
      fig: ["marktvormen"],
      begrippen: [
        ["Marktvorm", "Type markt, bepaald door het aantal aanbieders, het soort product en de mogelijkheid om toe te treden."],
        ["Onvolkomen concurrentie", "Elke marktvorm die niet aan alle kenmerken van volkomen concurrentie voldoet."],
        ["Marktmacht", "De mogelijkheid van een aanbieder om zelf de prijs te beïnvloeden."],
        ["Prijszetter", "Aanbieder die zelf zijn prijs kan vaststellen."],
        ["Heterogeen product", "Product dat volgens kopers per aanbieder verschilt (merk, kwaliteit, service)."],
        ["Homogeen product", "Product dat volgens kopers bij elke aanbieder hetzelfde is."],
        ["Marktaandeel", "Het deel van de totale omzet of afzet op een markt dat van één bedrijf is, in procenten."]
      ],
      vragen: [
        { q: "In een grote stad zijn honderden kappers, elk met een eigen stijl en sfeer. Welke marktvorm is dit?", a: ["Monopolistische concurrentie", "Volkomen concurrentie", "Oligopolie", "Monopolie"], u: "Veel aanbieders en een heterogeen product (elke kapper is anders): monopolistische concurrentie." },
        { q: "Het Nederlandse spoorwegnet wordt door één organisatie beheerd. Welke marktvorm is dit?", a: ["Monopolie", "Oligopolie", "Monopolistische concurrentie", "Volkomen concurrentie"], u: "Eén aanbieder zonder concurrenten: monopolie." },
        { q: "De markt voor mobiele netwerken in Nederland wordt beheerst door drie grote aanbieders. Welke marktvorm is dit?", a: ["Oligopolie", "Monopolie", "Monopolistische concurrentie", "Volkomen concurrentie"], u: "Weinig aanbieders die elk een groot marktaandeel hebben: oligopolie." },
        { q: "Duizenden boeren verkopen dezelfde soort consumptieaardappelen. Welke marktvorm is dit?", a: ["Volkomen concurrentie", "Monopolistische concurrentie", "Oligopolie", "Monopolie"], u: "Veel aanbieders en een homogeen product: volkomen concurrentie." },
        { q: "Wat is het verschil tussen volkomen concurrentie en monopolistische concurrentie?", a: ["Bij monopolistische concurrentie is het product heterogeen", "Bij monopolistische concurrentie is er maar één aanbieder", "Bij volkomen concurrentie zijn er weinig aanbieders", "Bij volkomen concurrentie is toetreden moeilijk"], u: "Beide hebben veel aanbieders en makkelijke toetreding. Het verschil zit in het product: homogeen tegenover heterogeen." },
        { q: "Een bedrijf heeft een omzet van € 30 miljoen op een markt met een totale omzet van € 120 miljoen. Hoe groot is het marktaandeel?", a: ["25%", "30%", "40%", "4%"], u: "Marktaandeel = 30 : 120 × 100% = 25%." },
        { q: "Bij welke marktvorm heeft een aanbieder GEEN invloed op de prijs?", a: ["Volkomen concurrentie", "Monopolie", "Oligopolie", "Monopolistische concurrentie"], u: "Alleen bij volkomen concurrentie is de aanbieder prijsnemer. Bij de andere drie is hij prijszetter." },
        { q: "Welke marktvormen hebben hoge toetredingsdrempels?", a: ["Monopolie en oligopolie", "Volkomen concurrentie en monopolie", "Monopolistische concurrentie en oligopolie", "Alle vier"], u: "Bij monopolie en oligopolie is toetreden moeilijk (hoge startkosten, octrooien, vergunningen). Bij de andere twee is het makkelijk." }
      ],
      open: { q: "Je krijgt een krantenartikel over de markt voor supermarkten in Nederland. Leg in stappen uit hoe je bepaalt welke marktvorm dit is.", a: "Stap 1: tel de aanbieders. Een paar grote ketens hebben samen het grootste deel van de markt: weinig aanbieders. Stap 2: kijk naar het product. Supermarkten verschillen in merk, assortiment en service: heterogeen. Stap 3: kijk naar toetreding. Een landelijke keten opzetten kost veel geld: hoge drempel. Conclusie: (heterogeen) oligopolie." }
    },
    {
      titel: "Monopolie",
      kern: [
        "Bij een monopolie is er één aanbieder zonder directe concurrenten. Nieuwe bedrijven kunnen (bijna) niet toetreden.",
        "Oorzaken van toetredingsdrempels: een octrooi (patent), een wettelijk alleenrecht, het bezit van een unieke grondstof, of zulke hoge vaste kosten dat één bedrijf de hele markt het goedkoopst bedient (natuurlijk monopolie, zoals een leidingnet).",
        "De monopolist is prijszetter. Toch kan hij niet alles vragen: bij een hogere prijs kopen consumenten minder. De collectieve vraaglijn is zijn prijsafzetlijn (= GO-lijn).",
        "Wil hij meer verkopen, dan moet de prijs omlaag voor álle producten. Daardoor is de MO lager dan de prijs. De MO-lijn daalt twee keer zo steil als de prijsafzetlijn.",
        "Voorbeeld: p = −q + 100 geeft TO = −q² + 100q en MO = −2q + 100.",
        "Maximale winst: MO = MK. Reken daarmee de afzet uit en vul die in de prijsafzetlijn in voor de prijs. Lees de prijs dus nooit af op de MO-lijn.",
        "Maximale omzet: MO = 0.",
        "In de grafiek is de winst een rechthoek: (prijs − GTK) × afzet. De hoogte is de winst per product, de breedte de afzet.",
        "Vergeleken met volkomen concurrentie: een hogere prijs en een kleinere hoeveelheid. Daarom houdt de overheid toezicht op monopolies of stelt ze een maximumprijs vast."
      ],
      fig: ["mono", "mono_winst"],
      voorbeeld: {
        titel: "Rekenvoorbeeld: maximale winst van een monopolist",
        stappen: [
          "Gegeven: prijsafzetlijn p = −q + 100, MK = 20 (ook de variabele kosten per stuk), constante kosten € 1.000.",
          "MO-lijn: twee keer zo steil → MO = −2q + 100.",
          "MO = MK → −2q + 100 = 20 → 2q = 80 → q = 40.",
          "Prijs: invullen in de prijsafzetlijn → p = −40 + 100 = € 60.",
          "TO = 60 × 40 = € 2.400. TK = 20 × 40 + 1.000 = € 1.800.",
          "Maximale winst = 2.400 − 1.800 = € 600."
        ]
      },
      begrippen: [
        ["Monopolie", "Marktvorm met één aanbieder en (bijna) onmogelijke toetreding."],
        ["Octrooi (patent)", "Wettelijk recht om een uitvinding een aantal jaren als enige te maken en te verkopen."],
        ["Natuurlijk monopolie", "Monopolie dat ontstaat doordat de vaste kosten zo hoog zijn dat één aanbieder het goedkoopst is, zoals bij een leidingnet."],
        ["Prijsafzetlijn", "Lijn die laat zien hoeveel de aanbieder bij elke prijs verkoopt. Bij een monopolie de collectieve vraaglijn. Ook de GO-lijn."],
        ["MO bij een monopolie", "De extra opbrengst van één extra product; lager dan de prijs, omdat de prijs voor alle producten omlaag moet."],
        ["Maximale winst", "De winst is het hoogst bij de afzet waar MO = MK."],
        ["Maximale omzet", "De omzet is het hoogst bij de afzet waar MO = 0."],
        ["Prijszetter", "Aanbieder die zelf zijn prijs kiest (en daarmee ook zijn afzet)."]
      ],
      vragen: [
        { q: "De prijsafzetlijn van een monopolist is p = −q + 100. Wat is de MO-lijn?", a: ["MO = −2q + 100", "MO = −q + 50", "MO = −q + 100", "MO = −2q + 200"], u: "De MO-lijn begint op hetzelfde punt en daalt twee keer zo steil: MO = −2q + 100." },
        { q: "Prijsafzetlijn p = −q + 100, MK = 20. Bij welke afzet is de winst maximaal?", a: ["40", "80", "50", "20"], u: "MO = MK → −2q + 100 = 20 → q = 40." },
        { q: "Prijsafzetlijn p = −q + 100. De winst is maximaal bij q = 40. Welke prijs vraagt de monopolist?", a: ["€ 60", "€ 20", "€ 40", "€ 100"], u: "Vul de afzet in de prijsafzetlijn in: p = −40 + 100 = € 60. De € 20 is de MO (en MK), niet de prijs." },
        { q: "Een monopolist verkoopt 40 stuks voor € 60. De variabele kosten zijn € 20 per stuk en de constante kosten € 1.000. Hoe groot is de winst?", a: ["€ 600", "€ 1.600", "€ 2.400", "€ 1.400"], u: "TO = 2.400. TK = 20 × 40 + 1.000 = 1.800. Winst = 2.400 − 1.800 = € 600." },
        { q: "Prijsafzetlijn p = −q + 100. Bij welke afzet is de omzet maximaal?", a: ["50", "40", "100", "25"], u: "Maximale omzet bij MO = 0 → −2q + 100 = 0 → q = 50." },
        { q: "Welke situatie is een voorbeeld van een toetredingsdrempel?", a: ["Een geneesmiddel is beschermd door een octrooi", "Er zijn veel kopers op de markt", "Het product is homogeen", "De markt is transparant"], u: "Door het octrooi mag geen ander bedrijf het middel maken. Concurrenten kunnen dus niet toetreden." },
        { q: "Waarom kan een monopolist niet elke prijs vragen die hij wil?", a: ["Bij een hogere prijs kopen consumenten minder", "Omdat concurrenten dan zijn klanten overnemen", "Omdat hij prijsnemer is", "Omdat zijn MO gelijk is aan de prijs"], u: "De monopolist heeft geen concurrenten, maar de vraaglijn daalt wel: hoe hoger de prijs, hoe lager de afzet." },
        { q: "Waarom is de MO van een monopolist lager dan de prijs?", a: ["Om één product extra te verkopen moet de prijs van alle producten omlaag", "Omdat de kosten stijgen als hij meer produceert", "Omdat de overheid een deel van de opbrengst afroomt", "Omdat hij een hoeveelheidsaanpasser is"], u: "Het extra product levert de nieuwe prijs op, maar op alle andere producten verdient hij nu iets minder. Samen is dat minder dan de prijs." },
        { fig: "mono", q: "Bij welke afzet maakt deze monopolist maximale winst?", a: ["40", "50", "80", "100"], u: "Maximale winst bij het snijpunt van MO en MK. Dat ligt bij q = 40." },
        { fig: "mono", q: "Welke prijs hoort bij maximale winst?", a: ["€ 60", "€ 20", "€ 40", "€ 80"], u: "Ga bij q = 40 omhoog tot de prijsafzetlijn (GO) en lees daar de prijs af: € 60. Bij € 20 lees je de MK af, niet de prijs." },
        { fig: "mono", q: "Bij welke afzet is de omzet maximaal?", a: ["50", "40", "80", "100"], u: "Maximale omzet bij MO = 0: het punt waar de MO-lijn de horizontale as snijdt, q = 50." },
        { fig: "mono_winst", q: "Wat stelt het gekleurde vlak voor?", a: ["De totale winst", "De totale opbrengst", "De totale kosten", "Het consumentensurplus"], u: "Het vlak ligt tussen de prijs (€ 60) en de GTK (€ 45) en loopt tot de afzet (40): winst per product × afzet = totale winst." },
        { fig: "mono_winst", q: "Hoe groot is de totale winst?", a: ["€ 600", "€ 1.600", "€ 2.400", "€ 1.800"], u: "(prijs − GTK) × afzet = (60 − 45) × 40 = € 600." },
        { fig: "mono_winst", q: "Hoe groot zijn de totale kosten bij q = 40?", a: ["€ 1.800", "€ 800", "€ 2.400", "€ 45"], u: "TK = GTK × q = 45 × 40 = € 1.800." }
      ],
      open: { q: "Leg uit waarom een monopolie voor consumenten nadeliger is dan volkomen concurrentie, en noem één manier waarop de overheid kan ingrijpen.", a: "Een monopolist heeft geen concurrenten en kiest de afzet waarbij zijn winst maximaal is (MO = MK). De prijs ligt dan boven de kosten per product en de hoeveelheid is kleiner dan bij volkomen concurrentie. Consumenten betalen dus meer en kopen minder. De overheid kan ingrijpen met een maximumprijs, met toezicht door een toezichthouder (ACM) of door het bedrijf zelf in handen te houden." }
    },
    {
      titel: "Oligopolie",
      kern: [
        "Bij een oligopolie zijn er weinig aanbieders, die elk een groot marktaandeel hebben. Toetreden is moeilijk door hoge startkosten.",
        "Het product kan homogeen zijn (benzine, staal) of heterogeen (auto's, telecom, supermarkten).",
        "De aanbieders zijn onderling afhankelijk: de winst van de één hangt af van de keuze van de ander. Ze gedragen zich dus strategisch. Hier komt de speltheorie van paragraaf 3.1 terug.",
        "Een prijsverlaging wordt meestal direct gevolgd door de concurrenten. Dan ontstaat een prijzenoorlog waarbij iedereen minder verdient: een gevangenendilemma.",
        "Daarom zijn prijzen vaak star en concurreren oligopolisten liever met reclame, service, kwaliteit en spaaracties.",
        "Kartel: aanbieders maken afspraken over prijs, productie of verdeling van de markt. Samen gedragen ze zich dan als een monopolist. Kartels zijn verboden; de ACM controleert en kan hoge boetes geven.",
        "Een kartel is niet stabiel: elk lid verdient meer door stiekem onder de afgesproken prijs te gaan zitten.",
        "Clementieregeling: het bedrijf dat een kartel als eerste meldt, krijgt geen of een lagere boete. Dat maakt het aantrekkelijk om het kartel te verraden."
      ],
      fig: ["m_prijs"],
      begrippen: [
        ["Oligopolie", "Marktvorm met weinig aanbieders die elk een groot marktaandeel hebben."],
        ["Onderlinge afhankelijkheid", "De uitkomst voor het ene bedrijf hangt af van de keuzes van de andere bedrijven."],
        ["Prijzenoorlog", "Bedrijven verlagen om de beurt hun prijs om klanten van elkaar af te pakken; iedereen verdient minder."],
        ["Prijsstarheid", "Prijzen veranderen weinig, omdat geen aanbieder een prijzenoorlog wil uitlokken."],
        ["Kartel", "Verboden afspraak tussen bedrijven om de concurrentie te beperken, bijvoorbeeld een prijsafspraak."],
        ["ACM", "Autoriteit Consument en Markt: de toezichthouder die in Nederland de concurrentie bewaakt."],
        ["Clementieregeling", "Regeling waarbij een bedrijf dat een kartel meldt, geen of een lagere boete krijgt."],
        ["Niet-prijsconcurrentie", "Concurreren met reclame, service of kwaliteit in plaats van met de prijs."]
      ],
      vragen: [
        { q: "Waarom houden oligopolisten bij hun prijs sterk rekening met elkaar?", a: ["Er zijn weinig aanbieders, dus de keuze van de één raakt direct de winst van de ander", "Omdat ze de marktprijs niet kunnen beïnvloeden", "Omdat hun product altijd homogeen is", "Omdat ze wettelijk verplicht zijn te overleggen"], u: "Bij weinig aanbieders merkt elke concurrent het meteen als één bedrijf zijn prijs verandert: onderlinge afhankelijkheid." },
        { q: "Wat is een kartel?", a: ["Een afspraak tussen bedrijven om de onderlinge concurrentie te beperken", "Een markt met één aanbieder", "Een bedrijf met een octrooi", "Een toezichthouder op de markt"], u: "Bij een kartel maken bedrijven afspraken over bijvoorbeeld prijs of productie, zodat ze samen meer verdienen." },
        { q: "Waarom zijn kartels verboden?", a: ["Consumenten betalen een hogere prijs doordat de concurrentie wordt uitgeschakeld", "Omdat de bedrijven er verlies door maken", "Omdat er dan te veel aanbieders komen", "Omdat de prijzen dan te laag worden"], u: "Een kartel gedraagt zich als een monopolist: hogere prijs, minder keuze. Dat gaat ten koste van de consument." },
        { q: "Welke organisatie controleert in Nederland of bedrijven verboden prijsafspraken maken?", a: ["De ACM", "De Nederlandsche Bank", "Het CBS", "De Belastingdienst"], u: "De Autoriteit Consument en Markt (ACM) houdt toezicht op de concurrentie en kan boetes opleggen." },
        { q: "Waarom concurreren oligopolisten vaak met reclame en service in plaats van met de prijs?", a: ["Een prijsverlaging wordt direct gevolgd, waardoor iedereen minder verdient", "Omdat reclame gratis is", "Omdat de overheid prijsverlagingen verbiedt", "Omdat consumenten niet op de prijs letten"], u: "Een lagere prijs lokt een prijzenoorlog uit. Reclame en service zijn minder makkelijk te kopiëren." },
        { q: "Wat is het doel van de clementieregeling?", a: ["Kartelleden verleiden om het kartel te verraden", "Bedrijven helpen om een kartel op te richten", "Kleine bedrijven beschermen tegen grote", "Consumenten hun geld teruggeven"], u: "Wie het kartel als eerste meldt, ontloopt de boete. Daardoor vertrouwen kartelleden elkaar minder en vallen kartels sneller uit elkaar." },
        { fig: "m_prijs", q: "Twee tankstations kiezen tegelijk hun prijs. Wat is het Nash-evenwicht?", a: ["Beide een lage prijs (30 ; 30)", "Beide een hoge prijs (50 ; 50)", "Tango laag, Vito hoog (60 ; 20)", "Tango hoog, Vito laag (20 ; 60)"], u: "Een lage prijs is voor beide dominant (60 is beter dan 50 en 30 is beter dan 20). Het evenwicht is dus laag-laag." },
        { fig: "m_prijs", q: "Tango en Vito spreken af om allebei een hoge prijs te vragen. Hoeveel extra winst maakt Tango door stiekem toch een lage prijs te vragen?", a: ["10 duizend euro", "30 duizend euro", "40 duizend euro", "60 duizend euro"], u: "Tango gaat van 50 (beide hoog) naar 60 (Tango laag, Vito hoog): 10 duizend euro extra. Daarom is een kartel niet stabiel." },
        { fig: "m_prijs", q: "Bij welke combinatie is de winst van de twee tankstations samen het hoogst?", a: ["Beide een hoge prijs", "Beide een lage prijs", "Tango laag en Vito hoog", "Tango hoog en Vito laag"], u: "Beide hoog: 50 + 50 = 100. De andere combinaties geven samen 80 of 60. Dat verklaart waarom bedrijven in de verleiding komen een kartel te vormen." }
      ],
      open: { q: "Vier bouwbedrijven spreken in het geheim af wie welke opdracht krijgt en tegen welke prijs. Leg met speltheorie uit waarom zo'n kartel vaak uit elkaar valt.", a: "Voor de bedrijven samen is de afspraak het beste: hoge prijzen en hoge winst. Maar elk bedrijf afzonderlijk verdient nog meer door stiekem net onder de afgesproken prijs te bieden en zo extra opdrachten te krijgen. Afwijken is dus aantrekkelijk (gevangenendilemma). Omdat de afspraak verboden is, kan niemand hem afdwingen bij de rechter. De clementieregeling maakt verraden nog aantrekkelijker: wie het eerst meldt, krijgt geen boete." }
    },
    {
      titel: "Monopolistische concurrentie",
      kern: [
        "Bij monopolistische concurrentie zijn er veel aanbieders met een heterogeen product. Toetreden is makkelijk.",
        "Aanbieders proberen zich te onderscheiden: productdifferentiatie. Dat kan met merk, kwaliteit, ontwerp, service of locatie.",
        "Daardoor heeft elke aanbieder een beetje marktmacht: een klein 'monopolie' op zijn eigen variant. Hij kan zijn prijs iets verhogen zonder al zijn klanten te verliezen.",
        "Die macht is beperkt, want er zijn veel alternatieven (substituten). Bij een te hoge prijs stappen klanten over.",
        "Reclame is belangrijk: daarmee bouwt een aanbieder merkentrouw op, zodat klanten minder snel overstappen.",
        "Maken aanbieders winst, dan komen er nieuwe concurrenten bij. De klanten worden over meer bedrijven verdeeld en de winst daalt op lange termijn.",
        "Voorbeelden: kappers, restaurants, kledingwinkels, bakkers."
      ],
      begrippen: [
        ["Monopolistische concurrentie", "Marktvorm met veel aanbieders, een heterogeen product en makkelijke toetreding."],
        ["Productdifferentiatie", "Je product anders maken dan dat van concurrenten, zodat kopers verschil zien."],
        ["Merkentrouw", "Klanten blijven een merk kopen, ook als een ander merk goedkoper is."],
        ["Substituut", "Product dat een ander product kan vervangen."],
        ["Marktmacht", "De mogelijkheid om zelf de prijs te bepalen; bij monopolistische concurrentie beperkt."],
        ["Reclame", "Middel om het eigen product bekend te maken en te onderscheiden van dat van concurrenten."]
      ],
      vragen: [
        { q: "Welke kenmerken horen bij monopolistische concurrentie?", a: ["Veel aanbieders, heterogeen product, makkelijke toetreding", "Veel aanbieders, homogeen product, makkelijke toetreding", "Weinig aanbieders, heterogeen product, moeilijke toetreding", "Eén aanbieder, uniek product, geen toetreding"], u: "Het lijkt op volkomen concurrentie (veel aanbieders, makkelijke toetreding), maar het product is heterogeen." },
        { q: "Een pizzeria verhoogt haar prijzen met 5%. Ze verliest een deel van haar klanten, maar niet allemaal. Waarom niet allemaal?", a: ["Klanten zien haar pizza's als anders dan die van concurrenten", "Er zijn geen andere pizzeria's", "Het product is homogeen", "De pizzeria is een hoeveelheidsaanpasser"], u: "Door het heterogene product (smaak, sfeer, locatie) heeft de pizzeria een beetje marktmacht. Een deel van de klanten blijft trouw." },
        { q: "Wat is productdifferentiatie?", a: ["Je product laten verschillen van dat van concurrenten", "De prijs verlagen om klanten te trekken", "Prijsafspraken maken met concurrenten", "Meer van hetzelfde product maken"], u: "Met merk, kwaliteit, ontwerp of service zorgt een aanbieder dat kopers verschil zien." },
        { q: "Waarom is de marktmacht van een aanbieder bij monopolistische concurrentie beperkt?", a: ["Er zijn veel aanbieders met producten die erop lijken", "Omdat de overheid de prijs vaststelt", "Omdat hij de enige aanbieder is", "Omdat het product homogeen is"], u: "Er zijn veel substituten. Wordt het verschil in prijs te groot, dan stappen klanten over." },
        { q: "In een wijk maken de koffiebars goede winst. Wat gebeurt er op lange termijn?", a: ["Er openen nieuwe koffiebars, waardoor de winst per zaak daalt", "De koffiebars verhogen samen de prijs", "De winst blijft hoog, want niemand kan toetreden", "De overheid stelt een maximumprijs in"], u: "Toetreden is makkelijk. Winst trekt nieuwe zaken aan en de klanten worden over meer aanbieders verdeeld." },
        { q: "Waarom maken aanbieders bij monopolistische concurrentie veel reclame?", a: ["Om hun product te onderscheiden en klanten aan hun merk te binden", "Omdat hun product precies hetzelfde is als dat van anderen en reclame verplicht is", "Omdat ze de marktprijs moeten volgen", "Om nieuwe aanbieders te verbieden toe te treden"], u: "Reclame versterkt het verschil in de ogen van de klant en bouwt merkentrouw op. Dat geeft ruimte voor een hogere prijs." },
        { q: "Wat is het belangrijkste verschil tussen monopolistische concurrentie en oligopolie?", a: ["Het aantal aanbieders: veel tegenover weinig", "Het product: homogeen tegenover heterogeen", "Bij oligopolie is toetreden makkelijker", "Bij monopolistische concurrentie is de aanbieder prijsnemer"], u: "Bij monopolistische concurrentie zijn er veel (kleine) aanbieders, bij oligopolie een paar grote. Daardoor is bij oligopolie de onderlinge afhankelijkheid veel sterker." }
      ],
      open: { q: "Een bakker verkoopt hetzelfde soort brood als de supermarkt, maar vraagt er meer voor. Leg uit hoe de bakker dat kan volhouden en waarom hij zijn prijs toch niet onbeperkt kan verhogen.", a: "De bakker onderscheidt zich (productdifferentiatie): vers gebakken, betere smaak, persoonlijke service, dichtbij. Klanten zien zijn brood daardoor als een ander product en zijn bereid meer te betalen. Dat geeft hem een beetje marktmacht. Maar brood van de supermarkt en van andere bakkers is een substituut: wordt het prijsverschil te groot, dan stappen klanten over." }
    },
    {
      titel: "Prijsdiscriminatie en surplus",
      kern: [
        "Consumentensurplus: het verschil tussen wat consumenten maximaal willen betalen (hun betalingsbereidheid) en de prijs die ze echt betalen. In de grafiek is dat de driehoek onder de vraaglijn en boven de prijs.",
        "Producentensurplus: het verschil tussen de prijs die producenten krijgen en het bedrag waarvoor ze minimaal willen leveren.",
        "Een monopolist vraagt een hogere prijs en verkoopt minder dan bij volkomen concurrentie. Daardoor is het consumentensurplus kleiner en is ook het totale surplus (de welvaart) lager.",
        "Prijsdiscriminatie: hetzelfde product aan verschillende groepen kopers verkopen tegen verschillende prijzen, zonder dat de kosten verschillen.",
        "Het doel is het consumentensurplus afromen: wie veel wil betalen, betaalt veel; wie weinig wil betalen, koopt toch tegen een lagere prijs. De omzet en de winst van de aanbieder stijgen.",
        "Voorwaarden: (1) de aanbieder is prijszetter, (2) er zijn groepen kopers met een verschillende betalingsbereidheid die je uit elkaar kunt houden, (3) doorverkopen is niet mogelijk.",
        "Voorbeelden: studentenkorting, kinderkaartjes, dal- en spitstarief, vliegtickets die duurder worden naarmate de vertrekdatum nadert.",
        "Geen prijsdiscriminatie: een prijsverschil dat komt door een verschil in kosten, zoals hogere bezorgkosten naar het buitenland."
      ],
      fig: ["mono_surplus"],
      voorbeeld: {
        titel: "Rekenvoorbeeld: consumentensurplus bij monopolie en bij volkomen concurrentie",
        stappen: [
          "Gegeven: vraaglijn p = −q + 100 en MK = 20. De hoogste prijs die iemand wil betalen is € 100 (bij q = 0).",
          "Monopolie: p = € 60 en q = 40. Consumentensurplus = ½ × 40 × (100 − 60) = € 800.",
          "Volkomen concurrentie: de prijs zakt naar de kosten, p = € 20. Dan is q = 80.",
          "Consumentensurplus = ½ × 80 × (100 − 20) = € 3.200.",
          "Door het monopolie is het consumentensurplus dus € 2.400 lager."
        ]
      },
      begrippen: [
        ["Consumentensurplus", "Het verschil tussen de betalingsbereidheid van consumenten en de prijs die ze betalen."],
        ["Betalingsbereidheid", "Het bedrag dat een consument maximaal voor een product wil betalen."],
        ["Producentensurplus", "Het verschil tussen de prijs en het bedrag waarvoor producenten minimaal willen leveren."],
        ["Totale surplus", "Consumentensurplus en producentensurplus samen; een maat voor de welvaart op een markt."],
        ["Prijsdiscriminatie", "Hetzelfde product tegen verschillende prijzen verkopen aan verschillende groepen kopers, zonder kostenverschil."],
        ["Surplus afromen", "Een deel van het consumentensurplus naar de aanbieder halen door kopers meer te laten betalen."],
        ["Deelmarkt", "Groep kopers met een eigen betalingsbereidheid, bijvoorbeeld studenten of zakelijke reizigers."]
      ],
      vragen: [
        { q: "Wat is prijsdiscriminatie?", a: ["Hetzelfde product tegen verschillende prijzen verkopen aan verschillende groepen kopers", "Een hogere prijs vragen voor een beter product", "De prijs verlagen om concurrenten weg te jagen", "Prijsafspraken maken met concurrenten"], u: "Het gaat om hetzelfde product en dezelfde kosten, maar een andere prijs per groep kopers." },
        { q: "Welk voorbeeld is prijsdiscriminatie?", a: ["Een bioscoop geeft studenten korting op dezelfde film", "Een webwinkel rekent hogere bezorgkosten naar het buitenland", "Een bakker vraagt meer voor een taart dan voor een brood", "Een supermarkt verlaagt de prijs van brood dat bijna over de datum is"], u: "Studenten zien dezelfde film op dezelfde stoel voor minder geld. Bij de andere voorbeelden verschillen de kosten of het product." },
        { q: "Waarom zet een vliegmaatschappij de naam van de passagier op het ticket?", a: ["Zo kunnen goedkope tickets niet worden doorverkocht", "Om de kosten per ticket te verlagen", "Omdat de overheid dat verplicht voor de belasting", "Om het product homogeen te maken"], u: "Prijsdiscriminatie werkt alleen als kopers van een goedkoop ticket het niet kunnen doorverkopen aan iemand die anders de hoge prijs had betaald." },
        { q: "Wat wil een aanbieder bereiken met prijsdiscriminatie?", a: ["Consumentensurplus afromen en zo meer winst maken", "Het consumentensurplus vergroten", "De kosten per product verlagen", "Nieuwe aanbieders laten toetreden"], u: "Kopers met een hoge betalingsbereidheid betalen meer dan bij één prijs. Een deel van hun surplus gaat naar de aanbieder." },
        { q: "Wat is het consumentensurplus?", a: ["Het verschil tussen wat consumenten maximaal willen betalen en wat ze echt betalen", "De winst van de producent", "Het verschil tussen de prijs en de kosten per product", "De totale uitgaven van consumenten"], u: "Wie € 80 over heeft voor een product van € 60, heeft een surplus van € 20." },
        { q: "De vraaglijn is p = −q + 100. De prijs is € 60 en de afzet 40. Hoe groot is het consumentensurplus?", a: ["€ 800", "€ 1.600", "€ 2.400", "€ 400"], u: "Driehoek: ½ × basis × hoogte = ½ × 40 × (100 − 60) = € 800." },
        { q: "Welke voorwaarde is NIET nodig voor prijsdiscriminatie?", a: ["Het product is homogeen", "De aanbieder kan zelf zijn prijs bepalen", "De groepen kopers zijn van elkaar te scheiden", "De groepen verschillen in betalingsbereidheid"], u: "De aanbieder moet prijszetter zijn en groepen met een verschillende betalingsbereidheid kunnen scheiden. Of het product homogeen is, doet er niet toe." },
        { q: "Wat gebeurt er met het consumentensurplus als een markt van volkomen concurrentie een monopolie wordt?", a: ["Het wordt kleiner, want de prijs stijgt en de afzet daalt", "Het wordt groter, want de monopolist maakt meer winst", "Het blijft gelijk", "Het wordt nul"], u: "Een hogere prijs en een kleinere hoeveelheid maken de driehoek onder de vraaglijn kleiner." },
        { fig: "mono_surplus", q: "Wat stelt de gekleurde driehoek voor?", a: ["Het consumentensurplus", "De winst van de monopolist", "De totale opbrengst", "De totale kosten"], u: "De driehoek ligt onder de prijsafzetlijn en boven de prijs (€ 60): het verschil tussen betalingsbereidheid en prijs." },
        { fig: "mono_surplus", q: "Hoe groot is het gekleurde vlak?", a: ["€ 800", "€ 1.600", "€ 2.400", "€ 3.200"], u: "½ × 40 × (100 − 60) = € 800." }
      ],
      open: { q: "Een pretpark vraagt € 45 voor een volwassene en € 30 voor een kind tot 12 jaar. Leg uit waarom dit prijsdiscriminatie is en waarom het pretpark hier meer aan verdient dan aan één prijs.", a: "Het is hetzelfde product (een dag in het park) met dezelfde kosten, maar de prijs verschilt per groep: prijsdiscriminatie. Gezinnen met kinderen hebben per kaartje een lagere betalingsbereidheid. Met één hoge prijs zouden veel gezinnen wegblijven; met één lage prijs betalen volwassenen minder dan ze over hebben. Met twee prijzen komen de gezinnen toch en betalen volwassenen de hoge prijs: het park roomt consumentensurplus af. De groepen zijn te scheiden (leeftijd) en een kinderkaartje is niet door te verkopen aan een volwassene." }
    }
  ]
});
