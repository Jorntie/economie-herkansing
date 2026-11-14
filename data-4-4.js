// Paragraaf 4.4: Volkomen concurrentie.
// Eigen samenvattingen en vragen. Bij elke vraag is het EERSTE antwoord het goede; de app husselt de volgorde.
window.THEMAS = window.THEMAS || [];
THEMAS.push({
  id: 4.4,
  boek: "Hoofdstuk 4",
  titel: "Volkomen concurrentie",
  icoon: "🌾",
  bs: [
    {
      titel: "Kenmerken van volkomen concurrentie",
      kern: [
        "Een markt met volkomen concurrentie heeft vier kenmerken: (1) veel vragers en veel aanbieders, (2) een homogeen product, (3) een transparante markt en (4) vrije toe- en uittreding.",
        "Homogeen betekent: in de ogen van de koper is het product van alle aanbieders precies hetzelfde. Kopers letten dan alleen op de prijs.",
        "Transparant betekent: kopers en verkopers hebben een goed overzicht van de markt (prijzen, kwaliteit, aanbod).",
        "Eén aanbieder is zo klein dat hij geen invloed heeft op de prijs. De marktprijs ontstaat door de totale vraag en het totale aanbod.",
        "De aanbieder is daarom prijsnemer en hoeveelheidsaanpasser: de prijs is voor hem een gegeven, hij kiest alleen hoeveel hij produceert.",
        "Vraagt hij meer dan de marktprijs, dan verkoopt hij niets. Minder vragen is onnodig, want tegen de marktprijs raakt hij alles kwijt.",
        "Voorbeelden die er dicht bij komen: aardappelen, graan, melk, valuta en aandelen."
      ],
      fig: ["vc_markt"],
      begrippen: [
        ["Volkomen concurrentie", "Marktvorm met veel aanbieders en vragers, een homogeen product, een transparante markt en vrije toetreding."],
        ["Homogeen product", "Product dat volgens de kopers bij elke aanbieder hetzelfde is."],
        ["Transparante markt", "Markt waarop kopers en verkopers alle informatie hebben over prijs en kwaliteit."],
        ["Vrije toetreding", "Nieuwe bedrijven kunnen zonder belemmering op de markt beginnen (en er weer uit stappen)."],
        ["Toetredingsdrempel", "Belemmering om op een markt te beginnen, zoals hoge startkosten, een vergunning of een octrooi."],
        ["Prijsnemer", "Aanbieder die de marktprijs moet accepteren en er geen invloed op heeft."],
        ["Hoeveelheidsaanpasser", "Aanbieder die alleen kan kiezen hoeveel hij produceert; de prijs ligt vast."],
        ["Marktprijs", "De prijs die ontstaat door de totale vraag en het totale aanbod op de markt. Ook: evenwichtsprijs."]
      ],
      vragen: [
        { q: "Welk kenmerk hoort NIET bij volkomen concurrentie?", a: ["Elke aanbieder heeft een eigen merk", "Veel aanbieders", "Een transparante markt", "Vrije toetreding"], u: "Een eigen merk maakt het product heterogeen. Bij volkomen concurrentie is het product homogeen." },
        { q: "Waarom heet een aanbieder bij volkomen concurrentie een hoeveelheidsaanpasser?", a: ["Hij kan de prijs niet beïnvloeden en kiest alleen hoeveel hij produceert", "Hij past de prijs aan de hoeveelheid aan", "Hij bepaalt samen met concurrenten de hoeveelheid", "Hij mag niet meer produceren dan de overheid toestaat"], u: "De marktprijs is een gegeven. Het enige wat hij zelf kan kiezen, is de hoeveelheid." },
        { q: "Een aardappelteler vraagt 5 cent per kilo meer dan de marktprijs. Wat gebeurt er?", a: ["Hij verkoopt niets, want kopers gaan naar een andere teler", "Hij verkoopt evenveel, tegen een hogere winst", "De marktprijs stijgt met 5 cent", "Andere telers volgen zijn prijs"], u: "Het product is homogeen en de markt is transparant. Kopers zien meteen dat het ergens anders goedkoper is." },
        { q: "Wat betekent een transparante markt?", a: ["Kopers en verkopers hebben een goed overzicht van prijzen en kwaliteit", "Er is maar één verkoper", "De overheid stelt de prijs vast", "Alle producten zijn gratis te vergelijken in de winkel"], u: "Door transparantie weten kopers waar het goedkoopst is en kan geen aanbieder meer vragen dan de marktprijs." },
        { q: "Welke markt lijkt het meest op volkomen concurrentie?", a: ["De markt voor tarwe", "De markt voor mobiele abonnementen", "De markt voor sportschoenen", "Het spoorwegnet"], u: "Tarwe: veel boeren, een homogeen product en een bekende wereldmarktprijs. De andere markten hebben weinig aanbieders of merken." },
        { q: "Hoe komt de prijs bij volkomen concurrentie tot stand?", a: ["Door de totale vraag en het totale aanbod op de markt", "De grootste aanbieder bepaalt de prijs", "Elke aanbieder stelt zijn eigen prijs vast", "De aanbieders spreken de prijs samen af"], u: "De marktprijs is de evenwichtsprijs van collectieve vraag en collectief aanbod." },
        { fig: "vc_markt", q: "Bij het vraagteken hoort de lijn van één aanbieder. Waarom loopt die horizontaal?", a: ["Hij kan elke hoeveelheid tegen dezelfde marktprijs verkopen", "Zijn kosten zijn bij elke productie gelijk", "Hij produceert altijd dezelfde hoeveelheid", "Hij mag van de overheid de prijs niet veranderen"], u: "Voor één aanbieder ligt de prijs vast. Elk extra product levert dezelfde prijs op: p = GO = MO." }
      ],
      open: { q: "Leg uit waarom de markt voor sportschoenen geen markt van volkomen concurrentie is. Gebruik twee kenmerken.", a: "Het product is niet homogeen: door merk, ontwerp en reclame zien kopers verschil tussen de schoenen (heterogeen product). Daarnaast zijn er maar een paar grote aanbieders, dus niet 'veel aanbieders'. Daardoor kunnen de aanbieders zelf hun prijs bepalen en zijn ze geen hoeveelheidsaanpasser." }
    },
    {
      titel: "Opbrengst, kosten en winst",
      kern: [
        "Totale opbrengst (omzet): TO = p × q. Bij volkomen concurrentie ligt p vast, dus de TO-lijn is een rechte lijn door de oorsprong.",
        "Gemiddelde opbrengst: GO = TO : q = p. Marginale opbrengst: MO = de extra opbrengst van één extra product = p. Dus p = GO = MO.",
        "Totale kosten: TK = TCK + TVK. Constante kosten (TCK) veranderen niet met de productie, zoals huur en afschrijving. Variabele kosten (TVK) wel, zoals grondstoffen.",
        "Gemiddelde totale kosten: GTK = TK : q. Marginale kosten (MK) = de extra kosten van één extra product.",
        "Totale winst: TW = TO − TK. Is TO kleiner dan TK, dan is er verlies.",
        "Break-even: TO = TK, de winst is nul. Break-evenafzet = TCK : (p − GVK), als de variabele kosten per stuk (GVK) constant zijn.",
        "Break-even kun je ook per stuk bekijken: GO = GTK. De prijs is dan precies gelijk aan de kosten per product.",
        "In een tabel reken je de MK uit als het verschil in TK tussen twee opeenvolgende hoeveelheden.",
        "Maximale winst: zolang MO groter is dan MK levert een extra product winst op, dus uitbreiden tot MO = MK.",
        "Zijn de MK constant en lager dan de prijs (rechte TK-lijn)? Dan loont elk extra product en produceert het bedrijf tot de capaciteitsgrens."
      ],
      fig: ["vc_totaal", "vc_gtk", "vc_tabel"],
      voorbeeld: {
        titel: "Rekenvoorbeeld: een kaasboerderij",
        stappen: [
          "Gegeven: marktprijs € 20 per kaas, variabele kosten € 12 per kaas, constante kosten € 4.000 per maand, capaciteit 1.000 kazen.",
          "TO = 20q en TK = 12q + 4.000.",
          "Break-even: 20q = 12q + 4.000 → 8q = 4.000 → q = 500 kazen.",
          "Controle: TO = 20 × 500 = € 10.000 en TK = 12 × 500 + 4.000 = € 10.000.",
          "Maximale winst: elk extra product levert € 20 op en kost € 12, dus produceren tot de capaciteit van 1.000.",
          "TW = 20.000 − (12.000 + 4.000) = € 4.000."
        ]
      },
      begrippen: [
        ["TO (totale opbrengst)", "Omzet: prijs × afzet (p × q)."],
        ["GO (gemiddelde opbrengst)", "Opbrengst per product: TO : q. Dat is gelijk aan de prijs."],
        ["MO (marginale opbrengst)", "De extra opbrengst van één extra verkocht product. Bij volkomen concurrentie gelijk aan de prijs."],
        ["TCK (totale constante kosten)", "Kosten die niet veranderen als de productie verandert, zoals huur."],
        ["TVK (totale variabele kosten)", "Kosten die meegroeien met de productie, zoals grondstoffen."],
        ["MK (marginale kosten)", "De extra kosten van één extra geproduceerd product."],
        ["GTK (gemiddelde totale kosten)", "Kosten per product: TK : q."],
        ["Break-evenpunt", "Productie waarbij TO = TK: geen winst en geen verlies."],
        ["Capaciteit", "De maximale hoeveelheid die een bedrijf kan produceren."]
      ],
      vragen: [
        { q: "Een tulpenkweker verkoopt 2.000 bossen tegen de marktprijs van € 3. Hoe groot is de totale opbrengst?", a: ["€ 6.000", "€ 2.003", "€ 667", "€ 3.000"], u: "TO = p × q = 3 × 2.000 = € 6.000." },
        { q: "Wat geldt voor één aanbieder bij volkomen concurrentie?", a: ["p = GO = MO", "MO is lager dan p", "GO is hoger dan p", "MO daalt als hij meer verkoopt"], u: "Elk product levert de vaste marktprijs op. Daardoor zijn de gemiddelde en de marginale opbrengst allebei gelijk aan de prijs." },
        { q: "De prijs is € 20, de variabele kosten zijn € 12 per stuk en de constante kosten € 4.000. Bij welke afzet is er break-even?", a: ["500 stuks", "200 stuks", "333 stuks", "125 stuks"], u: "Break-evenafzet = TCK : (p − GVK) = 4.000 : (20 − 12) = 500." },
        { q: "TO = 20q en TK = 12q + 4.000. Hoe groot is de winst bij q = 800?", a: ["€ 2.400", "€ 6.400", "€ 12.000", "€ 1.600"], u: "TO = 16.000. TK = 9.600 + 4.000 = 13.600. TW = 16.000 − 13.600 = € 2.400." },
        { q: "Welke kosten zijn constante kosten voor een bakkerij?", a: ["De huur van het pand", "Het meel", "De papieren broodzakken", "De gist"], u: "De huur blijft gelijk, hoeveel brood er ook wordt gebakken. Meel, zakken en gist nemen toe met de productie." },
        { q: "Bij de huidige productie is de marktprijs € 12 en zijn de marginale kosten € 9. Wat moet het bedrijf doen voor meer winst?", a: ["Meer produceren, want een extra product levert meer op dan het kost", "Minder produceren, want de kosten zijn te hoog", "De prijs verhogen naar € 15", "Niets, de winst is al maximaal"], u: "MO (= p = 12) is groter dan MK (9). Elk extra product voegt € 3 winst toe, dus uitbreiden." },
        { q: "De marktprijs is € 10. De marginale kosten stijgen: MK = 0,02q + 4. Bij welke productie is de winst maximaal?", a: ["300 stuks", "500 stuks", "200 stuks", "700 stuks"], u: "MO = MK → 10 = 0,02q + 4 → 0,02q = 6 → q = 300." },
        { fig: "vc_totaal", q: "Bij welke afzet is er break-even?", a: ["500", "200", "800", "1.000"], u: "Break-even ligt bij het snijpunt van de TO-lijn en de TK-lijn. Dat is bij q = 500 (beide € 10.000)." },
        { fig: "vc_totaal", q: "Hoe groot zijn de constante kosten?", a: ["€ 4.000", "€ 0", "€ 10.000", "€ 16.000"], u: "Bij q = 0 zijn er alleen constante kosten. De TK-lijn begint op de verticale as bij 4 (× € 1.000)." },
        { fig: "vc_totaal", q: "Hoe groot is de winst als het bedrijf op volle capaciteit produceert?", a: ["€ 4.000", "€ 20.000", "€ 16.000", "€ 10.000"], u: "Bij q = 1.000 is TO = € 20.000 en TK = € 16.000. De winst is het verschil: € 4.000." },
        { fig: "vc_totaal", q: "Het bedrijf verkoopt 300 stuks. Wat is het resultaat?", a: ["Verlies, want de TK-lijn ligt daar boven de TO-lijn", "Winst, want de TO-lijn stijgt sneller", "Precies break-even", "Dat kun je niet aflezen"], u: "Links van het break-evenpunt (q = 500) zijn de kosten hoger dan de opbrengst: verlies." },
        { fig: "vc_gtk", q: "Bij welke afzet is er break-even?", a: ["500", "200", "800", "1.000"], u: "Break-even is ook het punt waar GO = GTK. De GTK-lijn snijdt de GO-lijn (€ 20) bij q = 500." },
        { fig: "vc_gtk", q: "Bij q = 1.000 zijn de GTK € 16. Hoe groot is de totale winst?", a: ["€ 4.000", "€ 4", "€ 16.000", "€ 20.000"], u: "Winst per stuk = GO − GTK = 20 − 16 = € 4. Totale winst = 4 × 1.000 = € 4.000." },
        { fig: "vc_gtk", q: "Waarom daalt de GTK-lijn als de productie toeneemt?", a: ["De constante kosten worden over meer producten verdeeld", "De variabele kosten per stuk dalen", "De marktprijs daalt", "De totale kosten dalen"], u: "De constante kosten blijven gelijk. Per product worden ze kleiner naarmate er meer producten zijn." },
        { fig: "vc_tabel", q: "Hoe groot zijn de marginale kosten van het vijfde product?", a: ["€ 8", "€ 6", "€ 10", "€ 6,60"], u: "MK = verandering van TK = 33 − 25 = € 8. (€ 6,60 is de GTK bij q = 5.)" },
        { fig: "vc_tabel", q: "Bij welke productie is de winst maximaal?", a: ["4", "3", "5", "6"], u: "Het vierde product kost € 6 extra en levert € 7 op: doen. Het vijfde kost € 8 extra en levert € 7 op: niet doen. Maximale winst bij q = 4." },
        { fig: "vc_tabel", q: "Hoe groot is de maximale winst?", a: ["€ 3", "€ 2", "€ 7", "€ 28"], u: "Bij q = 4: TO = 28 en TK = 25. Winst = 28 − 25 = € 3." },
        { fig: "vc_tabel", q: "Bij welke productie maakt dit bedrijf voor het eerst winst?", a: ["3", "1", "2", "4"], u: "Bij q = 2 is TO 14 en TK 15 (verlies van 1). Bij q = 3 is TO 21 en TK 19: winst van 2." }
      ],
      open: { q: "Een bedrijf op een markt met volkomen concurrentie maakt bij break-even geen winst. Leg uit waarom het bedrijf bij een lagere marktprijs meer moet verkopen om break-even te draaien.", a: "Bij een lagere prijs blijft er per product minder over om de constante kosten te dekken (p − GVK wordt kleiner). De constante kosten blijven gelijk, dus er zijn meer producten nodig om ze terug te verdienen. In de grafiek loopt de TO-lijn minder steil en snijdt hij de TK-lijn verder naar rechts." }
    },
    {
      titel: "De markt op korte en lange termijn",
      kern: [
        "De marktprijs is de evenwichtsprijs: de prijs waarbij de gevraagde hoeveelheid gelijk is aan de aangeboden hoeveelheid (Qv = Qa).",
        "Verandert de vraag of het aanbod, dan verschuift de lijn en ontstaat een nieuwe evenwichtsprijs. Elke aanbieder past daar zijn productie op aan.",
        "Maken bedrijven winst, dan trekt dat nieuwe aanbieders aan. Er zijn geen toetredingsdrempels, dus het aanbod neemt toe en de prijs daalt.",
        "Maken bedrijven verlies, dan stoppen er bedrijven (uittreding). Het aanbod neemt af en de prijs stijgt.",
        "Op lange termijn verdwijnt de winst daardoor: de prijs zakt naar het niveau waarop bedrijven precies hun kosten dekken (p = GTK).",
        "Gevolg voor consumenten: een lage prijs. Bedrijven moeten zo goedkoop mogelijk produceren om te overleven.",
        "Nadeel voor bedrijven: weinig winst en dus weinig geld voor bijvoorbeeld vernieuwing."
      ],
      voorbeeld: {
        titel: "Rekenvoorbeeld: evenwichtsprijs berekenen",
        stappen: [
          "Gegeven: Qv = −2p + 100 en Qa = 3p − 20 (p in euro's, Q in duizenden stuks).",
          "Evenwicht: Qv = Qa → −2p + 100 = 3p − 20.",
          "120 = 5p → p = € 24.",
          "Invullen: Qv = −2 × 24 + 100 = 52. Controle: Qa = 3 × 24 − 20 = 52. De evenwichtshoeveelheid is 52.000 stuks."
        ]
      },
      begrippen: [
        ["Marktevenwicht", "Situatie waarin de gevraagde hoeveelheid gelijk is aan de aangeboden hoeveelheid."],
        ["Evenwichtsprijs", "De prijs waarbij Qv = Qa."],
        ["Collectieve vraag", "De vraag van alle kopers op de markt samen."],
        ["Collectief aanbod", "Het aanbod van alle aanbieders op de markt samen."],
        ["Toetreding", "Nieuwe bedrijven beginnen op de markt, bijvoorbeeld omdat er winst wordt gemaakt."],
        ["Uittreding", "Bedrijven stoppen, bijvoorbeeld omdat ze verlies maken."],
        ["Lange termijn", "Periode waarin bedrijven kunnen toe- en uittreden; bij volkomen concurrentie verdwijnt de winst dan."]
      ],
      vragen: [
        { q: "Qv = −2p + 100 en Qa = 3p − 20. Wat is de evenwichtsprijs?", a: ["€ 24", "€ 16", "€ 40", "€ 52"], u: "−2p + 100 = 3p − 20 → 120 = 5p → p = 24." },
        { q: "Qv = −2p + 100 en Qa = 3p − 20 (Q in duizenden stuks). Wat is de evenwichtshoeveelheid?", a: ["52.000 stuks", "24.000 stuks", "100.000 stuks", "80.000 stuks"], u: "De evenwichtsprijs is 24. Invullen: Qv = −2 × 24 + 100 = 52, dus 52.000 stuks." },
        { q: "Bedrijven op een markt met volkomen concurrentie maken winst. Wat gebeurt er op lange termijn?", a: ["Nieuwe bedrijven treden toe, het aanbod stijgt en de prijs daalt", "De bedrijven verhogen samen de prijs", "De vraag daalt, waardoor de prijs stijgt", "De winst blijft, want niemand kan toetreden"], u: "Winst trekt toetreders aan. Meer aanbod betekent een lagere marktprijs, tot de winst weg is." },
        { q: "De vraag naar aardbeien neemt toe. Wat is het gevolg voor één aardbeienteler op korte termijn?", a: ["De marktprijs stijgt en hij kan meer winst maken", "Hij kan nu zelf een hogere prijs vaststellen dan de marktprijs", "Zijn constante kosten stijgen", "Er verandert voor hem niets"], u: "De vraaglijn verschuift naar rechts, de evenwichtsprijs stijgt. De teler blijft prijsnemer, maar wel tegen een hogere marktprijs." },
        { q: "Veel melkveehouders maken verlies. Wat gebeurt er op lange termijn?", a: ["Bedrijven stoppen, het aanbod daalt en de prijs stijgt", "Nieuwe bedrijven treden toe en de prijs daalt verder", "De melkveehouders verhogen elk hun eigen prijs", "De vraag naar melk neemt toe"], u: "Bij verlies treden bedrijven uit. Minder aanbod leidt tot een hogere marktprijs, tot het verlies weg is." },
        { q: "Waarom kunnen bedrijven bij volkomen concurrentie niet blijvend een hoge winst maken?", a: ["Door de vrije toetreding komen er concurrenten bij zodra er winst is", "Omdat de overheid de winst afroomt", "Omdat de vraag altijd daalt als er winst is", "Omdat het product heterogeen is"], u: "Vrije toetreding is de sleutel: winst lokt nieuwe aanbieders, waardoor de prijs daalt." },
        { q: "Wat is een voordeel van volkomen concurrentie voor de consument?", a: ["Een lage prijs, omdat bedrijven elkaar scherp beconcurreren", "Veel verschillende merken", "Veel reclame en service", "Eén vaste aanbieder die je kent"], u: "Bedrijven kunnen niet meer vragen dan de marktprijs en die zakt op lange termijn naar de kostprijs." }
      ],
      open: { q: "Door een slechte oogst in het buitenland stijgt de prijs van tarwe. Beschrijf wat er achtereenvolgens gebeurt met de winst van Nederlandse tarweboeren op korte en op lange termijn.", a: "Korte termijn: de marktprijs stijgt, terwijl de kosten van de Nederlandse boeren gelijk blijven. Zij maken (meer) winst en breiden hun productie uit. Lange termijn: de winst trekt nieuwe aanbieders aan (boeren stappen over op tarwe). Het aanbod neemt toe, de prijs daalt weer en de extra winst verdwijnt." }
    }
  ]
});
