---
title: "Generatorius ir atsarginis maitinimas namams"
description: "Generatorius, UPS ir baterija atsarginiam maitinimui namuose -- tipai, galios parinkimas, ATS montavimas ir saugos reikalavimai. Elektriko patarimai."
date: "2026-03-31"
dateModified: "2026-03-31"
tags: ["generatorius", "atsarginis maitinimas", "UPS", "automatinis perjungimas", "ATS"]
image: "/images/blog/generatorius-ir-atsarginis-maitinimas.jpg"
---

# Generatorius ir atsarginis maitinimas namams: ką reikia žinoti

Prieš dešimt metų elektros dingimas reiškė -- nėra šviesos ir televizoriaus. Šiandien viskas kitaip. Šilumos siurblys sustoja -- namuose šalta. [Signalizacija](/blog/signalizacijos-sistemu-irengimas) neveikia -- namas neapsaugotas. Internetas dingo -- nuotolinis darbas neįmanomas. Kuo labiau namai priklauso nuo elektros, tuo svarbiau turėti atsarginį planą.

## Kodėl atsarginis maitinimas tapo būtinas

- **Šilumos siurbliai** -- vienintelis šilumos šaltinis daugelyje naujų namų. Dingus elektrai žiemą -- problemos per kelias valandas
- **Išmanusis namas** -- [elektros instaliacija](/blog/elektros-instaliacijos-namuose-ka-reikia-zinoti) su protingu valdymu, centrinis šildymo reguliavimas -- visa tai mirę be elektros
- **Nuotolinis darbas** -- valanda be elektros reiškia prarastas pajamas
- **Apsaugos sistemos** -- kameros, [signalizacija](/blog/signalizacijos-sistemu-irengimas), vartų automatika
- **Medicininė įranga** -- CPAP, deguonies koncentratoriai -- prietaisai, nuo kurių priklauso sveikata

## Atsarginio maitinimo tipai

| Parametras | Nešiojamas generatorius | Stacionarus generatorius | UPS | Baterijų sistema |
|---|---|---|---|---|
| **Perjungimas** | Rankinis (5--15 min.) | Automatinis (10--30 s) | Momentinis (<20 ms) | Automatinis (<20 ms) |
| **Trukmė** | Valandos--dienos (kol yra kuro) | Dienos--savaitės (kol yra kuro) | 15--60 min. | 4--24 val. (pagal talpą) |
| **Triukšmas** | 65--80 dB (garsus) | 55--70 dB (vidutinis) | Beveik tylus | Tylus |
| **Priežiūra** | Degalai, alyvos keitimas | Reguliari techninė priežiūra | Baterijos keitimas kas 3--5 m. | Minimali |
| **Automatika** | Ne | Taip (su ATS) | Taip | Taip |
| **Tipinė galia** | 2--8 kW | 5--20 kW | 0,5--3 kW | 3--10 kW |

**Nešiojamas generatorius** -- pigiausias variantas, bet rankinis paleidimas ir prijungimas. **Stacionarus generatorius** -- prijungtas prie [skydelio](/blog/elektros-skydelio-keitimas-kada-ir-kodel) per ATS, užsiveda pats. **UPS** -- momentinis perjungimas, bet tik minutėms. **Baterijų sistema** -- [energijos kaupiklis](/blog/elektros-energijos-kaupikliai-namuose) su hibridiniu inverteriu, idealiai kartu su [saulės elektrine](/blog/saules-elektrine-namuose).

## Galios skaičiavimas: ką maitinti pirmiausia

Didžiausia klaida -- bandyti maitinti viską. Reikia prioritetų:

| Prioritetas | Prietaisas | Tipinė galia | Pastaba |
|---|---|---|---|
| 1 | Šaldytuvas / šaldiklis | 100--200 W | Produktų apsauga |
| 2 | Šildymo cirkuliacinis siurblys | 50--100 W | Kad sistema neužšaltų |
| 3 | Interneto maršrutizatorius | 15--30 W | Ryšys ir darbas |
| 4 | Apšvietimas (LED) | 50--100 W | Pagrindinės lempos |
| 5 | Apsaugos sistema | 30--50 W | Signalizacija, kameros |
| 6 | Šilumos siurblys | 1 500--3 000 W | Tik jei generatorius pajėgia |

**Bazinis poreikis** (be šilumos siurblio): **300--500 W** -- pakelią net nedidelė baterijų sistema. **Su šildymu**: **2 000--3 500 W** -- reikia rimto generatoriaus. Svarbu atsižvelgti į **paleidimo srovę** -- šaldytuvo kompresorius startuodamas pareikalauja 3--5 kartus daugiau galios.

## Nešiojamo generatoriaus sauga

Čia turiu būti labai tiesus -- tai gyvybės ir mirties klausimas.

**NIEKADA nejunkite generatoriaus patalpose.** CO (anglies monoksidas) yra bekvapis ir nematomas -- žmonės miršta kiekvienais metais, paleidę generatorių garaže ar rūsyje. Generatorius turi stovėti **lauke**, bent **3--5 m** nuo langų ir durų. Ne garaže. Ne pavėsinėje.

Kitos taisyklės:
- **[Įžeminimas](/blog/izeminimas-ir-zaibosauga-ka-reikia-zinoti)** -- privalomas. Įkaltas strypas ir laidininkas -- tai minimum
- **Kuro saugojimas** -- tik tam skirtose talpyklose. Nepilkite kuro į karštą generatorių
- **NIEKADA nejunkite į sieninę rozetę** -- tai „backfeed", mirtinai pavojingas (detaliau -- žemiau)

## ATS: automatinis perjungimo jungiklis

ATS (Automatic Transfer Switch) -- tai raktas į patikimą atsarginį maitinimą. Veikimo principas: ATS stebi tinklo įtampą, dingus elektrai duoda signalą generatoriui, sulaukia stabilios generatoriaus įtampos ir **fiziškai perjungia** skydelį nuo tinklo prie generatoriaus. Grįžus tinklo elektrai -- perjungia atgal.

### Kodėl ATS privalomas -- ne pasirinkimas

Jei prijungiate generatorių be ATS -- jūsų generatoriaus elektra keliauja **atgal į tinklą**. Per transformatorių ji pakelia įtampą ir patenka į gatvės laidus. ESO elektrikas, manydamas, kad linija atjungta -- gauna mirtinai pavojingą smūgį. Tai nėra teorija -- tai nutinka.

Generatoriaus prijungimas be ATS arba rankinio perjungiklio yra **neteisėtas**, **mirtinai pavojingas** tinklo darbuotojams ir **pavojingas jūsų prietaisams** (dvi nesusinchronizuotos sistemos susiduria grįžus tinklo elektrai).

### ATS montavimas

ATS montuojamas [elektros skydelyje](/blog/elektros-skydelio-keitimas-kada-ir-kodel) arba šalia jo -- tai kvalifikuoto elektriko darbas. Jungiklis eina tarp tinklo įvado ir skydelio, nuo generatoriaus vedamas atskiras kabelis su automatu, reikia tinkamo [įžeminimo](/blog/izeminimas-ir-zaibosauga-ka-reikia-zinoti) ir perjungimo parametrų programavimo.

## Stacionarus generatorius: dydis ir kuras

| Namo tipas | Rekomenduojama galia | Ką maitina |
|---|---|---|
| Butas / mažas namas | 5--7 kW | Baziniai poreikiai + dalis prietaisų |
| Vidutinis namas | 8--12 kW | Visi pagrindiniai prietaisai be el. šildymo |
| Didelis namas su šilumos siurbliu | 12--20 kW | Pilnas namo maitinimas |

**Dyzelis** -- patikimiausias ilgam darbui, bet garsesnis. **Benzinas** -- pigesnis generatorius, bet didesnis suvartojimas. **Dujos (gamtinės/LPG)** -- tyliausia ir švariausia, bet galia mažesnė. Montavimas: lauke ant betoninio pagrindo, bent 1,5 m nuo langų, per ATS prie skydelio.

## UPS jautriems prietaisams

UPS nėra alternatyva generatoriui -- tai papildomas sluoksnis. Net su ATS, tų 10--30 sekundžių kol generatorius užsiveda pakanka, kad kompiuteris prarastų darbą ar serveris sugadintų duomenis.

Kur UPS būtinas: **namų biuras** (kompiuteris, monitorius, maršrutizatorius), **NAS/serverinė**, **medicininė įranga**, **[apsaugos sistemos](/blog/signalizacijos-sistemu-irengimas) centrinis blokas**. Paprastą UPS prijungia naudotojas pats, bet centrinis UPS visam namui -- tai jau elektros projektas su instaliacija [skydelyje](/blog/elektros-skydelio-keitimas-kada-ir-kodel).

## Baterijų sistema ir saulės elektrinė

Hibridinė [baterijų sistema](/blog/elektros-energijos-kaupikliai-namuose) su [saulės elektrine](/blog/saules-elektrine-namuose) -- galingiausias atsarginio maitinimo sprendimas: momentinis perjungimas (<20 ms), ilgalaikis maitinimas, tylus, nereikia kuro, kasdienis energijos taupymas. Trūkumas -- didesnė pradinė investicija.

Generatorių galima derinti su baterijų sistema: hibridinis inverteris maitina namus iš baterijos, o generatorius užsiveda tik kai baterija beveik tuščia -- pakrauna ją ir vėl išsijungia. Tai ženkliai mažina kuro suvartojimą ir triukšmą.

## Dažniausiai užduodami klausimai

### Ar galiu generatorių tiesiog įjungti į rozetę?

**Ne. Niekada.** Tai vadinama backfeed -- jūsų generatoriaus elektra pasieks gatvės tinklą ir gali nutrenkti tinklo darbuotojus. Be to, grįžus tinklo elektrai, susiduria dvi nesusinchronizuotos sistemos ir gali sugesti jūsų prietaisai. Visada naudokite ATS arba rankinį perjungiklį.

### Kiek laiko veiks generatorius be sustojimo?

Nešiojamas benzininis 3--5 kW su pilnu baku -- 6--10 valandų. Stacionarus dyzelinis -- tol, kol yra kuro, bet rekomenduojama kas 24 val. sustabdyti techniniam patikrinimui.

### Automatinis ar rankinis perjungimas?

Jei norite, kad viskas veiktų be jūsų dalyvavimo -- ATS yra vienintelis teisingas pasirinkimas. Rankinis perjungiklis tinka tik kaip biudžetinis variantas, bet jūs turite būti namuose. Išvykus -- nepadės.

### Ar generatorius gali veikti kartu su saulės elektrine?

Taip, bet reikia hibridinio inverterio. Paprastas on-grid inverteris dingus elektrai [nustoja veikti](/blog/elektros-energijos-kaupikliai-namuose), net jei turite generatorių. Tai [elektros projektas](/blog/elektros-projektas-namui), kurį turėtų suprojektuoti specialistas.

### Ar reikia [skydelio keitimo](/blog/elektros-skydelio-keitimas-kada-ir-kodel) prieš montuojant generatorių?

Nebūtinai, bet dažnai -- taip. ATS montuojamas skydelyje arba šalia jo. Jei skydelis senas ar neatitinka [saugos reikalavimų](/blog/elektros-saugos-patarimai-2026) -- pirmiausia reikia modernizuoti.

## Elstyga -- atsarginio maitinimo sprendimai Vilniuje

Projektuojame ir montuojame atsarginio maitinimo sistemas privatiems namams:

- **ATS jungiklių montavimas** -- automatinis perjungimas prie generatoriaus
- **Generatoriaus prijungimas** -- kabeliai, skydelio paruošimas, [įžeminimas](/blog/izeminimas-ir-zaibosauga-ka-reikia-zinoti)
- [Baterijų sistemų montavimas](/blog/elektros-energijos-kaupikliai-namuose) -- hibridiniai inverteriai ir kaupikliai
- [Skydelio modernizavimas](/blog/elektros-skydelio-keitimas-kada-ir-kodel) -- paruošimas naujai įrangai
- Pilna [dokumentacija](/blog/elektros-tinklo-prieziura-ir-dokumentacija) ir garantija

Norite atsarginio maitinimo sprendimo? Susisiekite dėl nemokamos konsultacijos -- įvertinsime poreikius ir pasiūlysime optimalų variantą.
