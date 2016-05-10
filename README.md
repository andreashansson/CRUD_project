# CRUD_project
project arbete

Tekniker:

Jag har använt mig av MongoDB, Mongoose, Node.js, Express, AngularJS.

Installera Appen:

Clona ner projektet från gitHub. Gå in i project mappen och kör npm Install från din terminal.
Kör sedan npm install express, npm install mongoose, npm install body-parser. Och npm install mongo
Om du inte har nodemon installerat kan du installera det globalt genom att skriva npm install -g nodemon
(OBS kör dessa installationer när du är i din project mapp)

Starta appen:
Starta först databasen genom att öppna ett terminal fönster och skriv mongod.
Öppna ett nytt terminal fönster gå in i projectmappen och skriv nodemon.
Surfar in på localhost:3500/

Använda Appen:
Längst upp ser du menyn:

"Hem" "Lägg till" "Ta bort" "Resurser"

"Hem"
Här ser du hur många resurser det finns av varje resurs.

"Lägg till"
Här fyller du i resursens namn och förklarar hur resursen fungerar.
Klicka på Lägg till och resursen finns nu inlagd i databasen.

"Ta Bort"
Här ser du en lista på alla resurser och en röd knapp med tabort. Klickar du på den så tas resursen bort från databasen och finns inte längre tillgänglig i appen.

"Resurser"
Här får du upp en meny på alla dom inlagda resurserna. Du har även en sökfunktion som kan filtrera bort resurser om du har väldigt många resurser i databasen kan den funktionen vara bra att använda.
Klickar du på en resurs i menyn till vänster så kommer informationen om resursen fram till höger om menyn.

Här har du även 2 knappar där du kan välja visa/dölj kommentarer. Klickar du på knappen visa/dölj kommentarer kommer ett kommentars formulär fram där du kan kommentera. Klicka på knappen lägg till kommentar så läggs kommentaren till på denna resurs med datum.(detta skall ändras så att det inte är en post funktion och sidan laddas om. Hade det inte vart så fint väder hade detta gjorts) Klickar du på visa/dölj knappen igen så döljs kommentearen och formuläret.

Klickar du på Visa/dölj redigera så visas ett formulär med vald resurs. Du kan nu redigera informationen för denna resursen i formuläret klicka på Uppdatera så har resursen uppdaterats med den nya informationen.
Klicka på Visa/dölj igen så döljs formuläret.