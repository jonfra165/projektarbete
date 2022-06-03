# GIF-dagboken

Det må vara klyschigt men sant, en bild säger mer än tusen ord. Men vad gör då inte en GIF? Vi älskar GIF:s och det har varit en otroligt stor del av vår kommunikation under våra två första år på Malmö Universitet, där nästan hela denna period varit på distans.

Vi ville därför hylla GIF:sen och det kändes självklart att försöka involvera dem i vårt projekt. Därför har vi skapat GIF-dagboken, som bilddagboken (nostalgi!) fast roligare! 

Sök på det humör du känner dig på för stunden, t ex happy, sad eller angry (det fungerar på svenska men det ger inte lika många sökträffar) och när du hittat en GIF som representerar ditt mående, klicka på den så sparas den i din dagbok (tack vare local storage).

## How to run the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Vilket ramverk vi valt och varför

## React

När vi hade bestämt att vi ville bygga någonting med Gifs, började vi söka runt efter ett lämpligt API vi skulle kunna använda oss av, och det var då vi hittade API:et GIPHY. GIPHY erbjuder två olika sätt att bygga en Gif-App med, del med API och dels med SDK som står för Software Development Kit. SDK använder något som heter React Native SDKsom erbjuder ett “paket” med bland annat färdiga omslag, uppvisning av gifs, användarvänligt gränssnitt och styling när man bygger en App). Vi valde bort SDK och körde på API, som innebär att man gör allting själv istället för att få det serverat.. och därför kollade vi vidare på vad andra hade valt för ramverk att arbeta med relaterat till det valda API:et. Många andra har valt just React och eftersom vi redan hade börjat lite smått i inlämning 6 så ville vi fortsätta på de spåret. React kanske är lite för stort för det vi skapat men att kunna jobba i React ser vi som en fördel då chansen finns att vi kommer att använda det i våra yrkesliv.  

För att anropa GIPHY har vi valt att använda oss av ett tredjeparts paket som heter **Axios**, som även gör det enklare att hantera data. 

## Angular

Vi valde bort Angular i princip direkt då det sägs ha den högsta inlärningskurvan, med många begrepp och syntax. Ramverket har flera mindre inbyggda bibliotek som främst  är till hjälp när ett större och mer avancerat projekt ska byggas. Dessutom är Angular mer strikta om hur applikationen bör struktureras medan React ger mer frihet. Vi valde främst React framför Angular baserat på dess enkelhet och att vi inte bygger en komplex webbapplikation.

## Vue

Vue var ett alternativ vi funderade på då det sägs vara relativt enkelt att lära sig och att inlärningskurvan kan vara lägre än React. Vue ska vara ett bra alternativ till lite mindre projekt, vilket hade fungerat bra till vår webbapplikation. Men vi i gruppen diskuterade och bestämde oss för att gå med React då vi jobbat med det under kursens gång. Med Vue hade vi fått sätta oss in i nya begrepp och syntax vilket aldrig är fel men på grund av planering kändes React som ett säkrare kort. 

# Bootstrap

Vi använde oss av Boostrap för att på ett enklare sätt, och med minimalt med css-kod, kunna få en snygg layout och design har vi valt att använda oss av Bootstrap. som vi blir allt bekvämare med och det känns mer tidseffektivt att använda sig av det när man väl fått ett grepp om det.
