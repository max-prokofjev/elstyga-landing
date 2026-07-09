---
title: "Automatiniai jungikliai ir nuotėkio relės: kaip parinkti apsaugą namams"
description: "Automatinis jungiklis, nuotėkio relė (RCD) ir RCBO: kuo skiriasi, kaip parinkti amperažą ir B ar C charakteristiką, kokios apsaugos privalomos namuose."
date: "2026-06-23"
tags: ["elektros sauga", "automatiniai jungikliai", "nuotėkio relė", "elektros skydelis", "saugumas"]
image: "/images/blog/automatiniai-jungikliai-ir-nuotekio-reles.jpg"
faq:
  - question: "Kuo skiriasi automatinis jungiklis nuo nuotėkio relės?"
    answer: "Automatinis jungiklis saugo laidus nuo perkrovos ir trumpojo jungimo, o nuotėkio relė (RCD) saugo žmogų — ji atjungia elektrą, kai srovė nuteka ten, kur neturi, pavyzdžiui, per kūną ar pažeistą izoliaciją. Pilnai apsaugai reikia abiejų."
  - question: "Kokį automatinį jungiklį rinktis — B ar C charakteristikos?"
    answer: "Gyvenamosioms patalpoms standartas yra B charakteristika — ji jautriau reaguoja į trumpąjį jungimą ilgose buitinėse linijose. C charakteristika skirta grandinėms su didelėmis paleidimo srovėmis: varikliams, siurbliams, kai kuriai dirbtuvių technikai."
  - question: "Ar galima automatinį jungiklį pakeisti didesniu, jei jis dažnai išsijungia?"
    answer: "Ne. Automatas parenkamas pagal laido skerspjūvį, o ne pagal norimą apkrovą: 1,5 mm² laidui — maksimum 10 A, 2,5 mm² — 16 A. Įdėjus didesnį automatą laidas kais ir gali sukelti gaisrą. Jei automatas dažnai suveikia, reikia mažinti apkrovą arba vesti papildomą liniją."
  - question: "Kokio tipo nuotėkio relės reikia namams?"
    answer: "Standartas — 30 mA suveikimo srovės A tipo relė, kuri aptinka ir kintamos, ir pulsuojančios nuolatinės srovės nuotėkį. Paprastesnės AC tipo relės nebeatitinka šiuolaikinės technikos: skalbyklių, indukcinių kaitlenčių ir įkroviklių elektronika gali sukelti nuotėkį, kurio AC tipas nepamato."
---

# Automatiniai jungikliai ir nuotėkio relės: kas nuo ko saugo

Atidarius buto skydelį matosi eilė vienodų juodų ar pilkų modulių. Vieni jų saugo jūsų laidus, kiti — jūsų gyvybę, ir tai skirtingi prietaisai. Parinkti juos „iš akies" arba tiesiog nukopijuoti seno skydelio komplektaciją — dažniausia klaida, kurią matome perimdami objektus.

Šis gidas paaiškina, kaip veikia kiekvienas skydelio elementas ir pagal ką jie parenkami.

## Automatinis jungiklis: laidų apsauga

Automatinis jungiklis (dar vadinamas „automatu") atjungia grandinę dviem atvejais:

1. **Perkrova** — kai srovė ilgesnį laiką viršija nominalą (per daug prietaisų vienoje linijoje)
2. **Trumpasis jungimas** — kai srovė šokteli akimirksniu (pažeista izoliacija, gedimas prietaise)

### Nominalas parenkamas pagal laidą

Svarbiausia taisyklė: automatas saugo **laidą**, ne prietaisus. Todėl jo nominalas priklauso nuo laido skerspjūvio:

| Laido skerspjūvis (varis) | Maksimalus automatas | Tipinė paskirtis |
|---|---|---|
| 1,5 mm² | 10 A | Apšvietimas |
| 2,5 mm² | 16 A | Rozetės |
| 4 mm² | 25 A | Galinga technika, nedidelė kaitlentė |
| 6 mm² | 32 A | Indukcinė kaitlentė, [krovimo stotelė](/blog/elektromobilio-krovimo-stotele-namuose) |
| 10 mm² | 50 A | Įvadas, skirstymas |

Sename bute su [aliuminio laidais](/blog/senos-instaliacijos-keitimas-aliuminio-laidai) ribos dar žemesnės — aliuminis prastesnis laidininkas nei varis.

### B ar C charakteristika

Raidė prieš skaičių (B16, C16) rodo, kaip greitai automatas reaguoja į srovės šuolį:

- **B** — suveikia esant 3–5 kartus didesnei srovei. Standartas butams ir namams
- **C** — suveikia esant 5–10 kartų didesnei srovei. Skirta varikliams, siurbliams, kompresoriams — technikai su didele paleidimo srove

Buitinėms linijoms C charakteristika — ne „atsargesnis", o blogesnis pasirinkimas: ilgoje buitinėje linijoje trumpojo jungimo srovė gali nesiekti C automato suveikimo ribos.

## Nuotėkio relė (RCD): žmogaus apsauga

Nuotėkio relė lygina srovę, įtekančią į grandinę ir grįžtančią iš jos. Jei dalis srovės „dingsta" — teka per pažeistą izoliaciją, drėgną sieną ar žmogaus kūną — relė atjungia grandinę per kelias milisekundes.

Pagrindiniai parametrai:

- **30 mA** — žmogaus apsauga: privaloma rozečių, [vonios](/blog/elektros-instaliacija-vonios-kambaryje) ir [virtuvės](/blog/elektros-instaliacija-virtuveje) grandinėms
- **100–300 mA** — priešgaisrinė apsauga: montuojama įvade, saugo nuo izoliacijos senėjimo sukeltų gaisrų
- **A tipas** — aptinka ir pulsuojantį nuolatinį nuotėkį; šiuolaikinis standartas vietoj senojo AC tipo

Svarbu: nuotėkio relė pilnai veiksminga tik esant tvarkingam [įžeminimui](/blog/izeminimas-ir-zaibosauga-ka-reikia-zinoti).

## RCBO: du viename

RCBO (kombinuotasis jungiklis) sujungia automatą ir nuotėkio relę viename modulyje. Privalumai:

- Kiekviena linija turi individualią nuotėkio apsaugą — suveikus vienai, kitos veikia toliau
- Aiški gedimo diagnostika: iškart matosi, kuri linija problematiška

Trūkumas — kaina, todėl praktikoje dažnai daroma mišri schema: RCBO svarbiausioms linijoms (šaldytuvas, katilas, signalizacija), bendros nuotėkio relės — likusioms grupėms.

## Kiti naudingi skydelio elementai

- **Viršįtampio ribotuvai (SPD)** — saugo elektroniką nuo žaibo ir tinklo viršįtampių; būtini name su [žaibosauga](/blog/izeminimas-ir-zaibosauga-ka-reikia-zinoti), labai rekomenduojami visur
- **Įtampos relė** — atjungia butą, jei tinkle dingsta nulis ar šokteli įtampa (dažna sename daugiabutyje avarija, sudeginanti visą techniką)
- **Kontaktorius su valdymu** — pagrindas [išmaniojo namo](/blog/ismanus-namas-elektros-instaliacija) scenarijams

## Dažniausios skydelio klaidos

- Automatas didesnis nei leidžia laidas („kad nelakstytų")
- Viena nuotėkio relė visam butui — suveikus ieškokite kaltininko tamsoje
- AC tipo relės su indukcine kaitlente ir skalbykle — nuotėkio gali nepamatyti
- Skydelis be rezervo — pridėti kondicionieriaus liniją nebėra kur
- Nesurašytos linijos — po metų niekas nebežino, kuris automatas ką saugo

## Skydelio auditas — pigiausia apsauga

Jei nežinote, kas sumontuota jūsų skydelyje — greičiausiai jis rinktas pagal „kas buvo pigiau" principą. Atestuotas elektrikas per valandą įvertins, ar apsaugos atitinka laidus ir apkrovas, o [varžų matavimai](/blog/elektros-irenginiu-testavimas-ir-matavimai) parodys, ar nuotėkio relės realiai suveikia.

Norite pasitikrinti savo skydelį Vilniuje? Susisiekite — atliksime auditą ir pasiūlysime konkretų atnaujinimo planą.
