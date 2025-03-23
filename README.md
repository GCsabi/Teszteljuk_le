# Tree View:
```
.
├─README.md
├─package-lock.json
├─package.json
├─playwright.config.ts
├─tests
│ ├─pages
│ │ └─teszteljukle.page.ts
│ └─specs
│   └─teszteljukle.spec.ts
└─tsconfig.json
```

Hogyan használd a projektet:

miután beimportáltad, installáld a függőségeket:

    npm install

A következő tesztfuttatási lehetőségek állnak rendelkezésre:

    npm test            - Futtasd az összes tesztet
    npm run test:headed - Futtasd az összes tesztet látható módon
    npm run test:ui     - Nyisd meg a Playwright UI módot
    npm run report      - Mutasd a playwright HTML reportot
