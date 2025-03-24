# language: hu
Jellemző: Mobilweboldal tesztelése Chrome böngészőben
  Azért, hogy biztosítsuk a weboldal megfelelő működését mobileszközökön
  Mint tesztelő
  Szeretném automatikusan ellenőrizni a weboldal betöltődését és tartalmát

  Forgatókönyv: Weboldal megnyitása és ellenőrzése Android eszközön - pozitív eset 
    Amennyiben megnyitom a Chrome böngészőt az Android emulátorban 
    És betöltöm a 'https://teszteljukle.hu' weboldalt
    Akkor a weboldal címének tartalmaznia kell "<expectedTitle>"
    És az oldalon lennie kell "<expectedText>" szövegnek
    Akkor a weboldal címének nem kell tartalmaznia "Ne Testeljuk le"
    És az oldalon nem kell lennie "Német szoftvertesztelő közösség" szövegnek
    És bezárom a böngészőt

    Példák:
    | expectedTitle | expectedText |
    | Teszteljük le | Magyar szoftvertesztelő közösség |