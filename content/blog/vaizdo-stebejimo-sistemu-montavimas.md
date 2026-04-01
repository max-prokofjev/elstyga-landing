---
title: "Vaizdo stebėjimo sistemų montavimas namuose ir versle"
description: "Vaizdo stebėjimo sistemų montavimas -- IP kameros, PoE, NVR, kabelių infrastruktūra ir praktiniai patarimai iš elektriko patirties Vilniuje."
date: "2026-03-31"
dateModified: "2026-03-31"
tags: ["vaizdo stebėjimas", "apsaugos kameros", "IP kameros", "PoE", "CCTV montavimas"]
image: "/images/blog/vaizdo-stebejimo-sistemu-montavimas.jpg"
---

# Vaizdo stebėjimo sistemų montavimas: ką iš tikrųjų lemia elektrikas

Daugelis žmonių renkasi kameras pagal megapikselius ar prekės ženklą. Bet iš praktikos galime pasakyti -- **90% problemų su vaizdo stebėjimu kyla ne dėl kamerų, o dėl blogai nutiestų kabelių**. Prastai užpresavota jungtis, per plonas kabelis, netinkamas maitinimas -- ir net brangiausia kamera rodo artefaktus arba tiesiog neveikia šaltą žiemos naktį.

Šiame straipsnyje -- viskas apie vaizdo stebėjimo sistemų montavimą iš elektriko perspektyvos: kabeliai, maitinimas, įrašymo įranga ir klaidos, kurias matome kas savaitę.

## IP kameros vs analoginės: kodėl analogas jau praeitis

Jei kas nors siūlo analoginę (HD-TVI, HD-CVI) sistemą -- klauskite „kodėl". Šiandien **IP kameros su PoE** yra standartas.

| Parametras | Analoginė (HD-TVI/CVI) | IP kamera su PoE |
|---|---|---|
| **Vaizdo kokybė** | Iki 8 MP, ribotas | Iki 12 MP ir daugiau |
| **Kabelis** | Koaksialinis + atskiras maitinimas | Vienas CAT6 -- vaizdas + maitinimas |
| **Atstumas** | 300--500 m (koaksialinis) | 100 m (CAT6), iki 250 m su extenderiu |
| **Išmanumas** | Minimalus | Judesio zonos, AI analitika |
| **Montavimas** | Du kabeliai kiekvienai kamerai | Vienas kabelis viskam |

Analogas prasmingas tik kai renovuojate seną sistemą ir koaksialinis kabelis jau nutiestas. Bet net tada rekomenduojame pereiti prie IP -- ilgalaikėje perspektyvoje tai atsiperka.

## PoE -- vienas kabelis viskam

**PoE (Power over Ethernet)** per vieną CAT6 kabelį perduoda ir duomenis, ir maitinimą. Kamerai nereikia atskiros rozetės -- viskas ateina per tinklo kabelį. Iš elektriko perspektyvos tai reiškia:

- **Mažiau kabelių** -- viena trasa vietoj dviejų
- **Paprastesnis montavimas** -- ypač aukštai ant sienos ar po stogu
- **Centralizuotas maitinimas** -- visas kameras maitina vienas PoE switch [skydelyje](/blog/elektros-skydelio-keitimas-kada-ir-kodel)
- **Lengviau apsaugoti UPS** -- vienas UPS maitina switch, o per jį -- visas kameras

PoE standartas (IEEE 802.3af/at) tiekia iki **30 W** per kabelį -- pakanka daugumai kamerų, įskaitant PTZ su IR pašvietimu.

## Kamerų tipai: kada kurią naudoti

**Bullet (cilindrinė)** -- klasikinė lauko kamera. Matosi iš tolo -- atbaido, bet lengviau sugadinti. Tinka fasadams, kiemams, aikštelėms. Geresnė IR pašvietimas dėl didesnio korpuso.

**Dome (kupolo formos)** -- kompaktiška, sunkiau sugadinti. Tinka viduje (biurai, parduotuvės) ir lauke po stogeliu. Mažiau pastebima -- privalumas komercinėse erdvėse.

**PTZ (pasukama)** -- valdoma nuotoliniu būdu: pasukti, priartinti, sekti objektą. Tinka didelėms teritorijoms. Brangesnė ir reikalauja PoE+ maitinimo (iki 60 W).

**Praktinė taisyklė:** daugumai privačių namų pakanka 4--6 bullet kamerų lauke ir 1--2 dome viduje. PTZ retai reikalinga, nebent teritorija viršija 2000 m².

## NVR ir jo vieta

**NVR (Network Video Recorder)** priima vaizdo srautą iš IP kamerų ir įrašo ant HDD. Modernus NVR turi integruotus PoE prievadus -- kameras jungiate tiesiai į jį.

Kur statyti: **rakinamoje patalpoje** (serverinėje, užrakintoje spintelėje), vėsioje vietoje su ventiliacija, su UPS maitinimu ir tinklo prieiga nuotoliniam peržiūrėjimui.

**Dažna klaida:** NVR pastatomas atvirai koridoriuje. Įsilaužėlis pirmiausia ieško įrašymo įrenginio -- jei jį pasiima, kameros nieko nebeįrodys.

## Kur montuoti kameras

Kamerų pozicijos -- ne mažiau svarbu nei pačios kameros.

**Privatus namas:** pagrindinės durys (fiksuoti veidus), galinės durys / terasa (dažniausias įsilaužimo taškas), garažo įvažiavimas (numeriai), kiemo perimetras (kampinės kameros su plačiu kampu), aklosios zonos (šoniniai langai, tvoros tarpai).

**Verslo objektas:** visi įėjimai ir išėjimai, kasos zona (kamera iš viršaus), sandėlio durys, stovėjimo aikštelė (siauras kampas numeriams), perimetras.

**Patarimas:** prieš montuodami, vakare pasivaikščiokite aplink pastatą. Pamatysite, kur tamsu ir kur yra aklosios zonos.

## Kabelių infrastruktūra: CAT6

Kabeliai lieka sienoje 10--15 metų. Kameras pakeisite, NVR atnaujinsite, bet kabelių -- ne. Todėl čia taupyti -- pati blogiausia vieta.

- **CAT6** -- minimalus standartas. CAT5e veiks, bet CAT6 suteikia atsargą ateičiai
- **Lauko kabelis (outdoor rated)** -- jei trasa eina lauke ar drėgnose patalpose. Vidinis kabelis drėgmėje suyra per 2--3 metus
- **Apsauginiai vamzdžiai** -- kabeliai lauke vedami per [vamzdžius ar kanalus](/blog/elektros-instaliacijos-namuose-ka-reikia-zinoti), ne tiesiog kabinami prie sienos
- **Maksimalus ilgis** -- 100 m nuo kameros iki switch/NVR
- **RJ45 jungtys** -- spausti tik kokybiškais įrankiais. Blogai užpresuota jungtis -- dažniausia gedimo priežastis

Kur tik galima, kabelius planuokite dar [instaliacijos etape](/blog/elektros-instaliacijos-namuose-ka-reikia-zinoti) -- kol sienos atviros.

## Maitinimas: PoE switch ir UPS

**PoE switch parinkimas:** prievadų skaičius = kamerų skaičius + 20--30% atsarga. Bendras PoE biudžetas -- suma visų kamerų galios. Tipinė kamera reikalauja 10--15 W, PTZ -- iki 60 W. Verslo objektams rekomenduojamas valdomas (managed) switch su VLAN palaikymu.

**Pavyzdys:** 8 kameros po 12 W = 96 W. Rinkitės switch su bent **150 W** PoE biudžetu.

**UPS** -- vienas svarbiausių [elektros saugos](/blog/elektros-saugos-patarimai-2026) elementų. Maitina PoE switch ir NVR, kai dingsta elektra. Rekomenduojama talpa -- **30--60 min**. Net jei namas turi [energijos kaupiklį](/blog/elektros-energijos-kaupikliai-namuose) -- UPS reikalingas trumpalaikiam perėjimui.

## Naktinis matymas ir IR pašvietimas

Daugiausiai įvykių nutinka tamsiu paros metu. Ką reikia žinoti:

- **IR LED** -- integruotas infraraudonasis pašvietimas, atstumas 20--80 m priklausomai nuo modelio
- **Starlight sensoriai** -- mato spalvotai net esant 0,001 lux
- **Papildomas IR prožektorius** -- kai kameros integruoto nepakanka
- **Vengti atspindinčių paviršių** -- baltos sienos ir langai „apakina" IR

**Patarimas:** nemontuokite kameros po lauko šviesos šaltiniu -- vabzdžiai nuolat aktyvins judesio aptikimą.

## Saugykla: HDD parinkimas

| Kamerų skaičius | Kokybė | Laikotarpis | HDD talpa |
|---|---|---|---|
| 4 kameros | 4 MP, 15 fps | 14 dienų | ~2 TB |
| 8 kameros | 4 MP, 15 fps | 14 dienų | ~4 TB |
| 8 kameros | 4 MP, 15 fps | 30 dienų | ~8 TB |
| 16 kamerų | 4 MP, 15 fps | 30 dienų | ~16 TB |

Naudokite **surveillance-class** HDD (WD Purple, Seagate SkyHawk) -- paprastas kompiuterinis diskas nuolatinėje apkrovoje gali sugesti per kelis mėnesius. Judesio aptikimo įrašymas sumažina saugyklos poreikį **2--3 kartus**.

## Išmanios funkcijos ir integracija

Modernios IP kameros siūlo kur kas daugiau nei paprastą įrašymą:

- **Judesio aptikimo zonos** -- reaguoja tik ten, kur nurodote
- **Push pranešimai** -- su nuotrauka realiu laiku
- **Žmonių / transporto atpažinimas** -- AI filtruoja, nereaguoja į kates ar paukščius
- **Linijos kirtimo aptikimas** -- signalas, kai objektas kerta virtualią liniją

Visa tai puikiai dera su [išmanaus namo sistema](/blog/ismanus-namas-elektros-instaliacija) -- kamera aptinka judesį kieme, įsijungia lauko [šviesa](/blog/apsvietimo-sprendimai-namams-ir-biurams), atsiunčiamas pranešimas. Integracija su signalizacija ir prieigos kontrole reikalauja, kad visi įrenginiai palaikytų bendrus protokolus (ONVIF, RTSP).

## Teisiniai aspektai: BDAR ir kameros

Lietuvoje galioja **BDAR**, kuris taikomas ir vaizdo stebėjimui:

- **Privati teritorija** -- galite filmuoti savo kiemą, bet kamera neturi apimti kaimynų teritorijos ar viešosios erdvės
- **Informavimas** -- verslo objekte privaloma informuoti apie stebėjimą (lipdukai, ženklai)
- **Saugojimo terminas** -- įrašai negali būti saugomi ilgiau nei būtina, paprastai **iki 30 dienų**
- **Darbo vieta** -- filmuoti darbuotojus galima tik dėl pagrįstų priežasčių ir tik informavus

**Patarimas:** prieš montuodami kameras verslo objekte -- pasitarkite su teisininkais. BDAR pažeidimai kainuoja brangiai.

## Dažniausiai užduodami klausimai

### Kiek kamerų man reikia?

Privačiam namui -- paprastai **4--8 kameros**: visos durys, garažas, kiemo perimetras. Butui gali pakakti 1--2. Verslo objektui -- **8--16 kamerų**, priklausomai nuo ploto. Geriausia -- pasikviesti [elektriką](/blog/kaip-issirinkti-elektrika-vilniuje) apžiūrai.

### Belaidės kameros ar laidinės?

**Laidinės (PoE) -- beveik visada.** Belaidės vis tiek reikalauja maitinimo (rozetės arba baterijos). Baterija baigiasi per 2--6 mėnesius, Wi-Fi signalas nestabilus per storas sienas. Belaidės tinka tik ten, kur fiziškai neįmanoma nutiestas kabelio.

### Ar galiu sumontuoti pats?

Techniškai -- taip. Bet praktikoje savarankiškas montavimas dažnai baigiasi blogai užpresuotomis jungtimis, netinkamu kabeliu lauke ir prastomis kamerų pozicijomis. Kamera ant sienos -- paprasta. Kabelis sienoje -- ne. Rekomenduojame bent konsultaciją su [profesionalu](/blog/kaip-issirinkti-elektrika-vilniuje).

### Kiek laiko saugomi vaizdo įrašai?

Priklauso nuo HDD talpos. Su 4 TB disku ir 8 kameromis -- apie **14 dienų**. Su 8 TB -- apie mėnesį. BDAR rekomenduoja **14--30 dienų**.

### Kiek kainuoja montavimas?

Kaina priklauso nuo kamerų skaičiaus ir kabelių trasų sudėtingumo. 4 kamerų sistema namui su montavimu -- nuo **800--1500 EUR**. 8--16 kamerų verslo sistema -- nuo **2000 EUR**. Tikslią kainą galime pasakyti tik įvertinę objektą.

## Elstyga -- vaizdo stebėjimo sistemų montavimas Vilniuje

Montuojame vaizdo stebėjimo sistemas privatiems namams ir verslo objektams:

- **Objekto apžiūra ir konsultacija** -- kamerų pozicijos, kabelių trasos, maitinimo poreikiai
- **Kabelių infrastruktūra** -- CAT6 tiesimas per [sienas, vamzdžius ir tranšėjas](/blog/transeju-kasimas-ir-kabeliu-tiesimas)
- **Montavimas ir konfigūracija** -- kameros, NVR, PoE switch, UPS
- **Integracija** -- su [signalizacija, išmaniu namu](/blog/ismanus-namas-elektros-instaliacija) ir prieigos kontrole
- **[Matavimai ir dokumentacija](/blog/elektros-irenginiu-testavimas-ir-matavimai)** -- visa privaloma dokumentacija
- **Aptarnavimas** -- priežiūra, plėtimas ir konsultacijos

Planuojate vaizdo stebėjimą? Susisiekite dėl nemokamos konsultacijos -- padėsime parinkti sprendimą pagal jūsų poreikius ir biudžetą.
