---
title: "Išmanus namas: elektros instaliacija ir automatizavimas"
description: "Išmanaus namo elektros instaliacija — KNX, Zigbee, apšvietimo valdymas, klimato automatizavimas ir planavimo patarimai iš elektriko praktikos."
date: "2026-03-31"
dateModified: "2026-03-31"
tags: ["išmanus namas", "namų automatizavimas", "KNX", "išmanus apšvietimas", "elektros instaliacija"]
image: "/images/blog/ismanus-namas-elektros-instaliacija.jpg"
---

# Išmanus namas: ką iš tikrųjų reiškia „smart home" iš elektriko perspektyvos

Daugelis galvoja, kad išmanus namas -- tai telefonas, per kurį įjungi šviesą. Arba balso komanda, kuri uždaro žaliuzes. Bet tai -- tik ledkalnio viršūnė. Iš tikrųjų išmanus namas prasideda ne nuo programėlės, o nuo **laidų sienoje**.

Jei laidai nutiesti neteisingai, jokia programėlė nepadės. Jei [skydelyje](/blog/elektros-skydelio-keitimas-kada-ir-kodel) nėra vietos automatikos moduliams, sistema neveiks. Jei jungiklinėje dėžutėje nėra nulinio laido -- daugumos išmaniųjų jungiklių ten tiesiog nepastatysite.

Per daugelį metų montuodami išmaniąsias sistemas matėme visko: nuo puikiai suplanuotų namų iki situacijų, kai statybos jau baigtos, sienos užtinkuotos -- ir tada klientas sako: „O gal dar galima padaryti išmanų apšvietimą?" Galima. Bet tai kainuos **2--3 kartus** daugiau nei iš anksto suplanuota sistema.

Šiame straipsnyje -- viskas, ką reikia žinoti apie išmanaus namo elektros instaliaciją: nuo protokolų pasirinkimo iki konkrečių klaidų, kurių verta vengti.

## Laidinė vs belaidė sistema: ką rinktis

Tai pirmasis ir svarbiausias sprendimas. Nuo jo priklauso viskas -- kabelių kiekis, [skydelio dydis](/blog/elektros-skydelio-keitimas-kada-ir-kodel), biudžetas ir galutinis patikimumas.

| Parametras | KNX (laidinis) | Zigbee / Z-Wave (belaidis) | Wi-Fi (belaidis) |
|---|---|---|---|
| **Patikimumas** | Labai aukštas -- nėra radijo trukdžių | Geras -- tinklinis (mesh) protokolas | Vidutinis -- priklauso nuo Wi-Fi tinklo |
| **Reakcijos laikas** | <100 ms | 100--500 ms | 200--1000 ms |
| **Baterijos** | Nereikia -- maitinama per magistralę | Dalis jutiklių ant baterijų | Nereikia -- maitinama per rozetę |
| **Ilgaamžiškumas** | 20+ metų, atviras standartas | 5--10 metų, priklausomai nuo gamintojo | Priklausomai nuo debesijos paslaugos |
| **Kabeliai** | Reikia papildomo BUS kabelio (2x2x0,8) | Nereikia papildomų kabelių | Nereikia papildomų kabelių |
| **Kaina (medžiagos)** | Aukšta | Žema--vidutinė | Žema |
| **Kaina (montavimas)** | Vidutinė--aukšta | Žema | Žema |
| **Geriausiai tinka** | Nauji namai, kapitalinis remontas | Renovacija, laipsniškas diegimas | Pradžiai, paprastiems uždaviniams |

### Kodėl naujai statybai rekomenduojame laidinę KNX

Kai sienos dar atviros ir laidus galima kloti laisvai -- nėra jokios prasmės rinktis belaidę sistemą. KNX yra **atviras standartas nuo 1990 m.**, palaikomas šimtų gamintojų. Tai reiškia, kad už 20 metų vis dar rasite suderinamų komponentų -- ko tikrai negalima pasakyti apie daugelį Wi-Fi ar Zigbee ekosistemų.

KNX magistralė (BUS kabelis) maitina jutiklius ir jungiklius tiesiogiai -- jokių baterijų, jokio Wi-Fi ryšio. Jungiklis sienoje veiks net tada, kai internetas neveikia.

### Belaidės sistemos -- renovacijos sprendimas

Jei namai jau pastatyti ir negalite [kloti naujų kabelių](/blog/elektros-instaliacijos-namuose-ka-reikia-zinoti) per sienas -- belaidės sistemos yra puikus variantas. Zigbee su tinkliniu protokolu yra patikimesnė nei grynai Wi-Fi sprendimai, nes kiekvienas įrenginys sustiprina signalą.

**Svarbu:** net belaidei sistemai reikia **nulinio laido** jungiklinėje dėžutėje ir stabilaus Wi-Fi tinklo visame name. Senesnėse Lietuvos instaliacijose to dažnai trūksta.

## Ką reikalauja išmani instaliacija: techniniai pagrindai

Štai kur daugiausiai klaidų ir nesusipratimų. Išmani instaliacija -- tai ne paprastas jungiklių pakeitimas. Reikia papildomų dalykų, apie kuriuos daugelis nesusimąsto, kol nėra per vėlu.

### Papildomi kabeliai

- **KNX BUS kabelis** (2x2x0,8 mm) -- vedamas prie kiekvieno jungiklio, jutiklio, aktoriaus
- **Neutralus laidas (N)** -- turi būti kiekvienoje jungiklinėje dėžutėje. Tai dažniausiai trūkstamas elementas senesnėse instaliacijose
- **CAT6/CAT7 kabelis** -- kamerams, prieigos taškams, laidiniam tinklui
- **Papildomi maitinimo kabeliai** -- žaliuzių varikliams, įmontuojamiems garsiakalbiams ir pan.

### Gilesnės jungiklinės dėžutės

Standartinė 40 mm dėžutė per sekli KNX aktoriui. Reikia **60 mm gylio** dėžučių -- tai turi būti suplanuota prieš mūrijant sienas.

### Didesnis elektros skydelis

Išmanus namas reikalauja **žymiai daugiau vietos skydelyje** nei įprasta instaliacija. Be standartinių automatų, reikia vietos:

- KNX maitinimo šaltiniui
- Loginiam kontroleriui
- Dimeriniams moduliams
- Žaliuzių valdymo moduliams
- Šildymo valdikliams

Mūsų rekomendacija: planuokite skydelį su **40--50% laisvos vietos** (įprastai rekomenduojame [20--30%](/blog/elektros-skydelio-keitimas-kada-ir-kodel)).

### UPS valdikliui

Loginis kontroleris turi veikti visada -- net kai dingsta elektra. Nedidelė UPS (nepertraukiamo maitinimo šaltinis) skydelyje tai užtikrina. Be jos, kiekvienas elektros dingimas reikš sistemos perkrovimą ir laikinus sutrikimus.

## Išmanus apšvietimas: kas keičiasi instaliacijoje

Apšvietimas -- tai pirmas dalykas, kurį žmonės nori automatizuoti. Ir būtent čia dažniausiai iškyla problemų, nes [apšvietimo instaliacija](/blog/apsvietimo-sprendimai-namams-ir-biurams) turi svarbių skirtumų nuo įprastos.

### Nulinis laidas -- būtinas

Tradiciniame jungiklyje nulinis laidas eina tiesiai prie šviesos, aplenkiant jungiklį. Išmaniam jungikliui elektra reikalinga nuolat -- todėl nulinis laidas **privalo būti** jungiklinėje dėžutėje. Jei jo nėra -- reikia traukti naują kabelį, o tai sienoje su užbaigtu tinkuojimu yra brangus ir sudėtingas darbas.

### Dimerio suderinamumas

Ne visos LED lemputės veikia su dimeriais, ir ne visi dimeriai veikia su LED. Išmaniuose namuose dimavimas dažniausiai atliekamas per **trailing edge** (MOSFET) dimerius DIN bėgelyje, o ne tradicinius sieninius reguliatorius. Tai reiškia, kad lemputės **privalo** būti „dimmable" tipo.

### Centralizuotas vs decentralizuotas valdymas

- **Centralizuotas** (KNX/DALI) -- visi laidai eina į skydelį, ten stovi dimeriniai moduliai. Jungiklis sienoje tik siunčia komandą
- **Decentralizuotas** (Wi-Fi/Zigbee relės) -- perjungimo modulis stovi jungiklinėje dėžutėje prie jungiklio

Centralizuotas variantas reikalauja daugiau kabelio, bet yra patikimesnis ir lengviau aptarnaujamas. Jei kažkas sugenda -- keičiate modulį skydelyje, o ne ardote sieną.

## Klimato valdymo automatizavimas

Šilumos siurbliai, grindinis šildymas su zonų valdymu, rekuperacinė ventiliacija -- visa tai galima valdyti iš vienos sistemos.

### Ką galima automatizuoti

- **Grindinio šildymo zonas** -- kiekvienas kambarys pagal savo grafiką ir temperatūrą
- **Šilumos siurblio režimus** -- automatinis perjungimas tarp šildymo ir vėsinimo pagal lauko temperatūrą
- **Rekuperatoriaus ventiliaciją** -- pagal CO2 jutiklių duomenis ar drėgmės lygį
- **Kondicionierių** -- integruotas valdymas per IR arba tiesioginę sąsają

### Ką tai reikalauja instaliacijoje

- **Termostato kabeliai** kiekviename kambaryje (KNX BUS arba 230V maitinimas + jutiklio laidas)
- **Servo pavara** kiekvienai grindinio šildymo grandinei
- **Valdiklis** skydelyje, kuris jungia zonas pagal nustatytą temperatūrą
- Tinkama [elektros instaliacija](/blog/elektros-instaliacijos-namuose-ka-reikia-zinoti) su atskiromis grandinėmis šildymo sistemai

## Žaliuzių ir roletų automatizavimas

Automatinės žaliuzės -- ne tik patogumas, bet ir energijos taupymas. Vasarą jos uždaro langus nuo saulės automatiškai, žiemą -- atsidaro, kad įleistų šilumą.

### Kas reikalinga instaliacijoje

- **230V maitinimo kabelis** prie kiekvieno lango viršaus (trys gyslos: fazė, nulis, žemė)
- **Valdymo kabelis** (KNX BUS arba papildoma grandinė jungikliui)
- **Pakankamai gili niša** varikliui lango angoje -- tai turi būti suplanuota architekto etape

**Dažna klaida:** pamiršta nutiesti maitinimo kabelį prie lango dar prieš tinkavimu. Pridėti vėliau -- reiškia kapoti sieną.

## Apsaugos sistemos integracija

Signalinės sistemos, vaizdo kameros, durų skambučiai -- visa tai gali būti dalis vienos išmanios ekosistemos. Bet kiekvienas komponentas reikalauja **savo kabelio**.

### Kabelių poreikis apsaugai

- **Vaizdo kameros** -- CAT6 kabelis (PoE maitinimas ir vaizdo perdavimas vienu kabeliu). Detaliau apie kamerų montavimą -- [vaizdo stebėjimo sistemų gide](/blog/vaizdo-stebejimo-sistemu-montavimas)
- **Durų skambutis su kamera** -- CAT6 arba specialus kabelis, priklausomai nuo gamintojo
- **Judesio jutikliai** -- signalinė grandinė arba KNX BUS
- **Durų/langų kontaktai** -- signalinė grandinė arba belaidis ryšys
- **Sirena** -- 230V maitinimas + signalinė grandinė

Pagrindinė taisyklė: **kabelis yra pigus, darbas -- brangus**. Kol sienos atviros, nutiesti papildomą kabelį kainuoja centus. Kai sienos užtinkuotos -- tiesimas kainuoja dešimtis kartų daugiau.

## Energijos monitoringas

Moderniame išmaniame name galite matyti kiekvienos grandinės suvartojimą realiu laiku. Tai ne tik smalsumo reikalas -- taip galite nustatyti, kuris prietaisas „ėda" daugiausiai elektros, ir optimizuoti vartojimą.

### Kaip tai veikia

- **Srovės transformatoriai (CT)** montuojami ant kiekvieno automato skydelyje
- Duomenys perduodami į monitoringo modulį (KNX, Modbus arba Wi-Fi)
- Matote suvartojimą programėlėje arba namų valdymo ekrane

Tai ypač vertinga, jei turite saulės elektrinę -- matote, kiek gaminate, kiek vartojate ir kiek atiduodate į tinklą. Visa tai turi būti suplanuota jau [elektros projekto](/blog/elektros-projektas-namui) etape.

## Planavimas: kodėl spręsti reikia DAR PRIEŠ uždarant sienas

Tai pats svarbiausias patarimas šiame straipsnyje. Išmanaus namo instaliacija turi būti suplanuota **kartu su bazine elektros instaliacija** -- ne po jos, ne atskirai, ne „vėliau pagalvosim".

### Ką reikia nuspręsti prieš pradedant instaliacijos darbus

1. **Kokia sistema** -- KNX, Zigbee, ar hibridinė
2. **Kokias funkcijas** norite automatizuoti -- apšvietimas, klimatas, žaliuzės, apsauga
3. **Kur stovės skydelis** ir ar jis bus pakankamai didelis
4. **Kur bus serveris/hub** -- reikia elektros, tinklo ir vėdinimo
5. **Kabelių trasas** -- kur eis BUS kabeliai, CAT kabeliai, maitinimo linijos

Visa tai fiksuojama [elektros projekte](/blog/elektros-projektas-namui). Be projekto -- bus improvizacija, o improvizacija išmaniame name baigiasi prastai.

## Dažniausios klaidos -- iš realios praktikos

Per metus matome tų pačių klaidų kartojimą. Štai trejetą, kurios kainuoja daugiausiai:

1. **Nepravestas nulinis laidas prie jungiklių.** Statybininkai pakloja standartinius dviejų gyslų kabelius -- to pakanka paprastam jungikliui, bet nepakanka išmaniajam. Pervesti vėliau -- reiškia ardyti sieną

2. **Per mažas elektros skydelis.** Užsakovas pasirinko 36 modulių skydelį, nes „turėtų pakakti". Po automatikos modulių pridėjimo trūksta 15 vietų. Sprendimas -- antras skydelis arba viskas iš naujo. Kaip to [išvengti](/blog/elektros-skydelio-keitimas-kada-ir-kodel)

3. **Nepalikti kabeliai žaliuzių varikliams.** Klientas nusprendė automatines žaliuzes jau po tinkavimu. Kabelių prie langų nėra. Lieka tik belaidis variantas, kuris yra brangesnis, mažiau patikimas ir ant baterijų

4. **Neplanuota Wi-Fi infrastruktūra.** Net laidinei KNX sistemai reikia gero Wi-Fi -- programėlei, balso valdymui, belaidėms kamerams. CAT6 kabeliai Wi-Fi prieigos taškams turi būti nutiesti iš anksto

5. **Per vėlai įtrauktas elektrikas.** Kai projektas jau parengtas be elektros specialisto, paprasčiausiai per vėlu keisti kabelių trasas ar dėžučių vietas. Elektrikas turi dalyvauti nuo [projektavimo etapo](/blog/elektros-projektas-namui)

## Dažniausiai užduodami klausimai

### Kiek papildomai kainuoja išmani instaliacija lyginant su standartine?

Paprastai išmani instaliacija kainuoja **30--60% daugiau** nei standartinė, priklausomai nuo funkcijų apimties. Didžioji dalis papildomų kaštų -- tai kabeliai, gilesnės dėžutės ir didesnis skydelis. Pati automatikos įranga (KNX moduliai, jutikliai) sudaro apie 40% papildomų kaštų. Bet jei diegiate po remonto -- kaina gali būti ir **2--3 kartus** didesnė vien dėl sienų ardymo. Geriausia -- susisiekti su mumis ir paskaičiuoti konkrečiai jūsų namui.

### Ar galiu pradėti nuo paprastos instaliacijos ir pridėti išmanias funkcijas vėliau?

Taip, bet **tik jei iš anksto pasiruošite**. Tai reiškia -- pravedamas BUS kabelis prie visų jungiklių, CAT6 kabeliai kamerų ir Wi-Fi taškų vietose, nulinis laidas kiekvienoje jungiklinėje dėžutėje, pakankamai didelis [skydelis](/blog/elektros-skydelio-keitimas-kada-ir-kodel). Tada vėliau galėsite pridėti valdymo modulius be sienų ardymo. Be šio pasiruošimo -- „pridėti vėliau" praktiškai reiškia kapoti sienas.

### KNX, Zigbee ar Wi-Fi -- kurį protokolą rinktis?

Jei statote naują namą -- **KNX** laidinė sistema yra geriausias ilgalaikis sprendimas dėl patikimumo ir ilgaamžiškumo. Jei renovuojate ir negalite traukti naujų kabelių -- **Zigbee** su tinkliniu protokolu yra optimalus pasirinkimas: pakankamai patikimas, nebrangus, lengvai plečiamas. **Wi-Fi** tinka pavieniams prietaisams (rozetės, lemputės), bet nerekomenduojame kaip visos sistemos pagrindo -- per daug priklauso nuo maršrutizatoriaus ir interneto.

### Ar išmani sistema veiks be interneto?

Laidinė KNX sistema -- **taip, pilnai**. Visi jungikliai, scenų valdymas ir automatizacijos veikia lokaliai, be interneto. Zigbee hub sistemos -- dažniausiai taip pat veikia lokaliai, nebent naudojate tik gamintojo debesijos sprendimą. Wi-Fi įrenginiai -- priklauso nuo gamintojo; dalis reikalauja debesijos ir be interneto tiesiog neveikia. Tai viena iš priežasčių, kodėl rekomenduojame KNX -- [saugumas](/blog/elektros-saugos-patarimai-2026) ir patikimumas yra svarbiausias dalykas namų automatikoje.

### Ar man reikia elektros projekto išmaniam namui?

**Būtinai.** Išmani instaliacija be projekto -- kaip namo statyba be architektūrinio plano. [Elektros projektas](/blog/elektros-projektas-namui) numato kabelių trasas, dėžučių vietas, skydelio konfigūraciją ir automatikos modulius. Be jo elektrikas spėlioja, o spėlionės kainuoja brangiai.

## Elstyga -- išmanaus namo elektros instaliacija Vilniuje

Projektuojame ir montuojame išmaniųjų namų elektros sistemas -- nuo pirminės konsultacijos iki pilnai veikiančio sprendimo:

- **Konsultacija ir planavimas** -- padedame pasirinkti tinkamą sistemą pagal jūsų poreikius ir biudžetą
- **Elektros projektas** -- su visomis kabelių trasomis, dėžučių vietomis ir skydelio schema
- **Instaliacija** -- BUS kabeliai, maitinimo linijos, [apšvietimas](/blog/apsvietimo-sprendimai-namams-ir-biurams), apsaugos kabeliai
- **Automatikos konfigūracija** -- scenos, grafikai, jutiklių logika
- **[Matavimai ir dokumentacija](/blog/elektros-irenginiu-testavimas-ir-matavimai)** -- visa privaloma dokumentacija ir instaliacijos aktas
- **Aptarnavimas** -- sistemos palaikymas ir plėtimas ateityje

Planuojate statyti ar renovuoti? **Kreipkitės kuo anksčiau** -- kuo anksčiau įtrauksime elektriką, tuo pigiau ir kokybiškiau bus rezultatas. Nemokama konsultacija padės suprasti, kas realu jūsų biudžetui ir kokios galimybės jūsų namui.
