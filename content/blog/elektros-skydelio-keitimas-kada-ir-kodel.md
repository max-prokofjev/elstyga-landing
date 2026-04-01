---
title: "Elektros skydelio keitimas: požymiai ir procesas"
description: "Elektros skydelio keitimas ir modernizavimas — požymiai, MCB ir RCBO parinkimas, DIN modulių skaičius ir montavimo eiga. Patarimai iš praktikos."
date: "2025-05-15"
dateModified: "2026-03-31"
tags: ["elektros skydelis", "skydelio modernizavimas", "automatinis jungiklis", "RCD", "RCBO", "saugumas"]
image: "/images/blog/elektros-skydelio-keitimas-kada-ir-kodel.jpg"
---

# Elektros skydelio keitimas: kada laikas ir ką gausite

Elektros skydelis — tai jūsų namų elektros sistemos centras. Jis paskirsto elektrą po kambarius, saugo nuo perkrovų ir trumpųjų jungimų, o svarbiausia — apsaugo jus nuo elektros smūgio per RCD relesm. Kai skydelis senas ar netinkamas, visa ši apsauga neveikia taip, kaip turėtų.

## Kada laikas keisti skydelį

### Pavojaus signalai — kreipkitės nedelsiant

- **Skydelis karštas liečiant** — perkrova arba blogi kontaktai, galimas gaisro pavojus
- **Girdimas zyzimas ar traškėjimas** — gali degti kontaktai
- **Degėsių kvapas** — reikia skubios [diagnostikos](/blog/elektros-gedimu-salinimas-vilniuje-kada-kvisti-elektrika)
- **Matomi apdegimai** — rudos ar juodos žymės ant automatų ar laidų
- **Automatai dažnai iššoka** — sistema nebeatlaiko apkrovos

### Modernizavimo požymiai

- Skydelis senesnis nei **25 metų**
- Naudojami kištukiniai saugikliai (korkai) vietoj automatų
- **Nėra RCD** — srovės nuotėkio relė privaloma pagal LST HD 60364
- Nepakanka vietų naujiems automatams
- Planuojate [didinti galią](/blog/eso-prijungimas-ir-galios-didinimas) ar jungti galingus prietaisus
- Nėra SPD apsaugos nuo [žaibo](/blog/izeminimas-ir-zaibosauga-ka-reikia-zinoti)

### Tipinės situacijos

Skydelio keitimas dažniausiai reikalingas:

1. Renovuojant ir atnaujinant [elektros instaliaciją](/blog/elektros-instaliacijos-namuose-ka-reikia-zinoti)
2. Diegiant [elektromobilio krovimo stotelę](/blog/elektromobilio-krovimo-stotele-namuose)
3. Montuojant saulės elektrinę
4. Jungiant galingus prietaisus (pirtis, šildymas, kaitlentė)
5. Keičiant vienfazį tinklą į trifazį per [ESO](/blog/eso-prijungimas-ir-galios-didinimas)
6. Montuojant naują [apšvietimo sistemą](/blog/apsvietimo-sprendimai-namams-ir-biurams)

## Skydelio dydis: kiek DIN modulių reikia

| Būsto tipas | Grandinės | Skydelis | Moduliai |
|---|---|---|---|
| 1–2 kambarių butas | 8–12 | 24 modulių | 24 DIN |
| 3–4 kambarių butas | 12–18 | 36 modulių | 36 DIN |
| Nedidelis namas | 16–24 | 36–54 modulių | 36–54 DIN |
| Didelis namas (trifazis) | 24–40 | 54–72 modulių | 54–72 DIN |
| Namas su saulės/EV | 30–50+ | 72+ modulių | 72+ DIN |

**Taisyklė:** visada rinkitės skydelį su **20–30% laisvų vietų** plėtrai. Jei šiandien reikia 28 modulių — imkite 36 modulių skydelį. Papildoma investicija minimali, bet ateityje sutaupys daug.

## Kas yra moderniame skydelyje

### Pagrindiniai komponentai

- **Įvadinis automatinis jungiklis** — apsaugo visą sistemą, leidžia greitai atjungti elektrą
- **RCD / RCBO** — srovės nuotėkio relė, apsauganti nuo elektros smūgio
- **Grupiniai automatai (MCB)** — po vieną kiekvienai grandinei
- **SPD** — viršįtampių apsauga nuo [žaibo](/blog/izeminimas-ir-zaibosauga-ka-reikia-zinoti)
- **Busbar** — patogi ir saugi automatų jungtis DIN bėgelyje

### MCB charakteristikos — ką reiškia B, C, D raidės

| Raidė | Suveikimo daugiklis | Kur naudoti |
|---|---|---|
| **B** | 3–5 × In | Rozetės, apšvietimas, šildytuvai — daugumos namų grandinėms |
| **C** | 5–10 × In | Siurbliai, kondicionieriai, kompresoriai — prietaisai su varikliais |
| **D** | 10–20 × In | Pramoniniai varikliai, transformatoriai |

Neteisingai parinktas automatas arba iššoks be priežasties, arba — dar blogiau — neapsaugos laido nuo perkrovos.

### RCBO vs RCD + MCB

| Kriterijus | RCD + MCB (atskiri) | RCBO (kombinuotas) |
|---|---|---|
| **Vieta skydelyje** | 3 DIN moduliai | 1–2 moduliai |
| **Kaina** | Pigiau (RCD dalijasi kelioms grandinėms) | Brangiau, bet kompaktiškiau |
| **Gedimo lokalizacija** | RCD atjungia visą grupę | Atjungiama tik viena grandinė |

RCBO rekomenduojame vonios kambariui, virtuvei ir lauko rozetėms — ten, kur svarbu, kad vienas gedimas neatjungtų visos grupės.

### Kaip grupuoti automatus

- **Apšvietimas** — atskiri automatai kiekvienam aukštui ar zonai
- **Rozetės** — atskiros grandinės kiekvienam kambariui
- **Virtuvė** — atskiros linijos orkaitei, kaitlentei, indaplovei, šaldytuvui
- **Vonios kambarys** — privaloma atskira RCD (30 mA)
- **Lauko rozetės** — atskira grandinė su RCD
- **EV krovimas** — atskira grandinė su RCBO (Type A arba B)

## Keitimo procesas

Visas darbas paprastai trunka **vieną darbo dieną** (4–8 val.).

### 1. Apžiūra ir projektas
- Elektrikas įvertina instaliaciją ir [laidų būklę](/blog/elektros-instaliacijos-namuose-ka-reikia-zinoti)
- Suskaičiuoja automatų ir modulių skaičių
- Parengia schemą su grandinių žymėjimu

### 2. Medžiagos
- Naudojame sertifikuotus komponentus, atitinkančius IEC standartus
- Automatai pagal IEC 60898, RCD pagal IEC 61008/61009
- Skydelio korpusas pagal IEC 61439, IP40 ar aukštesnis

### 3. Montavimas
- Elektros atjungimas (koordinuojama su ESO, jei reikia keisti įvadą ar [didinti galią](/blog/eso-prijungimas-ir-galios-didinimas))
- Seno skydelio demontavimas, laidų identifikavimas
- Naujo skydelio montavimas, automatų ir RCD/RCBO sujungimas
- Kiekvieno automato žymėjimas — aiški etiketė

### 4. Testavimas ir dokumentacija
- [Izoliacijos varžos matavimas](/blog/elektros-irenginiu-testavimas-ir-matavimai)
- Trumpojo jungimo kilpos varžos patikra
- RCD suveikimo laiko testas (turi suveikti per ≤40 ms)
- Fazių tvarkos patikra (trifaziam tinklui)
- [Elektros instaliacijos aktas](/blog/elektros-tinklo-prieziura-ir-dokumentacija) su matavimais

## Ką gausite po skydelio keitimo

- **Šeimos apsauga** — RCD ir RCBO gali išgelbėti gyvybę
- **Turto apsauga** — SPD saugo brangius prietaisus nuo viršįtampių
- **Patogumas** — aiškus grupavimas ir žymėjimas
- **Būsto vertė** — [dokumentuota instaliacija](/blog/elektros-tinklo-prieziura-ir-dokumentacija) kelia vertę
- **Ateities lankstumas** — laisvos vietos naujiems automatams

## Dažniausiai užduodami klausimai

### Kiek laiko trunka skydelio keitimas?

Bute — **4–8 valandos**. Sudėtingesniais atvejais (vienfazis → trifazis, pilna [instaliacijos renovacija](/blog/elektros-instaliacijos-namuose-ka-reikia-zinoti)) — 1–2 dienos.

### Ar reikia ESO leidimo?

Jei keičiamas tik vidinis skydelis ir nesikeičia įvadinė apsauga ar galia — ESO leidimo nereikia. Jei planuojate [galios didinimą](/blog/eso-prijungimas-ir-galios-didinimas) — būtina iš anksto suderinti.

### Ar galima keisti skydelį pačiam?

Ne. Tai kvalifikuoto elektriko darbas. Netinkamai atlikti darbai kelia gaisro ir elektros smūgio pavojų, be to — pažeidžia draudimo sąlygas. [Kaip rasti patikimą elektriką?](/blog/kaip-issirinkti-elektrika-vilniuje)

### Kuo skiriasi automatas (MCB) nuo RCBO?

MCB apsaugo tik nuo perkrovos ir trumpojo jungimo. RCBO papildomai apsaugo nuo srovės nuotėkio — elektros smūgio pavojaus. RCBO = MCB + RCD viename modulyje.

## Elstyga — skydelių montavimas Vilniuje

Kasdien atliekame elektros skydelių keitimą ir modernizavimą:

- Sertifikuotos medžiagos
- Visi privalomi [matavimai ir testai](/blog/elektros-irenginiu-testavimas-ir-matavimai)
- [Dokumentacija](/blog/elektros-tinklo-prieziura-ir-dokumentacija)
- Garantija visiems darbams
- Konsultacijos dėl [elektros saugos](/blog/elektros-saugos-patarimai-2026) ir ateities plėtros

Norite modernizuoti skydelį? Kreipkitės dėl nemokamos apžiūros.
