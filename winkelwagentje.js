//maak eerst variabelen aan waarbij je de totaalprijs van de appels, peren en bananen bijhoudt.
let prijzen = [1, 2, 3];

let winkelwagen = [0, 0, 0];
let totaalprijs = [0, 0, 0];
let finalPrijs;

//maak een functie waar het product wordt gekocht. Gebruik argumenten om door te geven welk fruit gekocht wordt.
function KoopProduct(fruit)
{
    winkelwagen[fruit]++;

    BerekenPrijs();
    UpdateText();
}

function VerwijderProduct(fruit)
{
    if(winkelwagen[fruit] > 0)
    {
        winkelwagen[fruit]--;
    }

    BerekenPrijs();
    UpdateText();
}

//maak een functie waar het product wordt verkocht. Gebruik ook hier argumenten om door te geven om welk fruit het gaat.
function BerekenPrijs()
{
    for (let i = 0; i < 3; i++) 
    {
        totaalprijs[i] = prijzen[i] * winkelwagen[i];
    }

    UpdateText();
}


//maak  een aparte functie waarin je de totaalprijs berekend.
function BerekenTotaalPrijs()
{
    finalPrijs = 0;

    for (let i = 0; i < 3; i++) 
    {
        finalPrijs += totaalprijs[i];
    }

    document.querySelector("#totaalPrijs").value = finalPrijs;

    window.alert("Je hebt besteld.");
}


function UpdateText()
{   
    let aantalAppel = document.querySelector("#totaal_appel");
    let aantalPeer = document.querySelector("#totaal_peer");
    let aantalBanaan = document.querySelector("#totaal_banaan");

    let totaalPrijsAppel = document.querySelector("#totaalPrijs_appel");
    let totaalPrijsPeer = document.querySelector("#totaalPrijs_peer");
    let totaalPrijsBanaan = document.querySelector("#totaalPrijs_banaan");
    let aantal = document.querySelector("#aantal");

    aantalAppel.value = winkelwagen[0];
    aantalPeer.value = winkelwagen[1];
    aantalBanaan.value = winkelwagen[2];
    aantal.value = winkelwagen[0] + winkelwagen[1] + winkelwagen[2];

    totaalPrijsAppel.value = totaalprijs[0];
    totaalPrijsPeer.value = totaalprijs[1];
    totaalPrijsBanaan.value = totaalprijs[2];
}