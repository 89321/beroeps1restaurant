let totaalPrijsAppels = 0;
let totaalPrijsPeren = 0;
let totaalPrijsBananen = 0;
let totaalPrijssteak = 0;
koopProduct(0, 0); //Aaak eerst variabelen aan waarbij je de totaalprijs van de appels, peren en bananen bijhoudt.



function koopProduct(fruit, prijs) {
    if (fruit == "appel") {
        let hoeveelAppels = Number(document.getElementById("totaal_appel").value);
        hoeveelAppels++;
        document.getElementById("totaal_appel").value = hoeveelAppels;
        totaalPrijsAppels = hoeveelAppels * prijs;
        document.getElementById("totaalPrijs_appel").value = totaalPrijsAppels;
        berekenPrijs();
    }
    if (fruit == "peer") {
        let hoeveelPeren = Number(document.getElementById("totaal_peer").value);
        hoeveelPeren++;
        document.getElementById("totaal_peer").value = hoeveelPeren;
        totaalPrijsPeren = hoeveelPeren * prijs;
        document.getElementById("totaalPrijs_peer").value = totaalPrijsPeren;
        berekenPrijs();
    }
    if (fruit == "banaan") {
        let hoeveelBananen = Number(document.getElementById("totaal_banaan").value);
        hoeveelBananen++;
        document.getElementById("totaal_banaan").value = hoeveelBananen;
        totaalPrijsBananen = hoeveelBananen * prijs;
        document.getElementById("totaalPrijs_banaan").value = totaalPrijsBananen;
        berekenPrijs();
    }

    if (fruit == "steak") {
        let hoeveelsteaks = Number(document.getElementById("totaal_steak").value);
        hoeveelsteaks++;
        document.getElementById("totaal_steak").value = hoeveelsteaks;
        totaalPrijsBananen = hoeveelBananen * prijs;
        document.getElementById("totaalPrijs_banaan").value = totaalPrijsBananen;
        berekenPrijs();
    }


} //maak een functie waar het product wordt gekocht. Gebruik argumenten om door te geven welk fruit gekocht wordt.


function verwijderProduct(fruit, prijs) {
    if (fruit == "appel") {
        let hoeveelAppels = Number(document.getElementById("totaal_appel").value);
        if (hoeveelAppels > 0) {
            hoeveelAppels--;
        }
        document.getElementById("totaal_appel").value = hoeveelAppels;
        totaalPrijsAppels = hoeveelAppels * prijs;
        document.getElementById("totaalPrijs_appel").value = totaalPrijsAppels;
        berekenPrijs();
    }
    if (fruit == "peer") {
        let hoeveelPeren = Number(document.getElementById("totaal_peer").value);
        if (hoeveelPeren > 0) {
            hoeveelPeren--;
        }
        document.getElementById("totaal_peer").value = hoeveelPeren;
        totaalPrijsPeren = hoeveelPeren * prijs;
        document.getElementById("totaalPrijs_peer").value = totaalPrijsPeren;
        berekenPrijs();
    }
    if (fruit == "banaan") {
        let hoeveelBananen = Number(document.getElementById("totaal_banaan").value);
        if (hoeveelBananen > 0) {
            hoeveelBananen--;
        }
        document.getElementById("totaal_banaan").value = hoeveelBananen;
        totaalPrijsBananen = hoeveelBananen * prijs;
        document.getElementById("totaalPrijs_banaan").value = totaalPrijsBananen;
        berekenPrijs();
    }

    if (fruit == "steak") {
        let hoeveelsteaks = Number(document.getElementById("totaal_steak").value);
        if (hoeveelsteaks > 0) {
            hoeveelsteaks--;
        }
        document.getElementById("totaal_steak").value = hoeveelsteaks;
        totaalPrijssteak = hoeveelsteaks * prijs;
        document.getElementById("totaalPrijs_steaks").value = totaalPrijssteak;
        berekenPrijs();
    }
}

function berekenPrijs() {
    document.getElementById("totaalPrijs").value = totaalPrijsAppels * totaalPrijsPeren * totaalPrijsBananen * totaalPrijssteak;
    return true;
}




//maak een functie waar het product wordt verkocht. Gebruik ook hier argumenten om door te geven om welk fruit het gaat.



//maak  een aparte functie waarin je de totaalprijs berekend.