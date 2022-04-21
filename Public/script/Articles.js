function a(){
    var a = '<h1>Meracia stanica</h1>' +
        '<p>Táto meracia stanica fyzikálnych veličín' +
        'slúži na meranie teploty, tlaku, vlhkosti a svietivosti na Predmete Metrológia.</p>' +
        '<p>Aktuálny stav prostredia si vieme odčítať pomocou displeja na danej meracej stanici. Čo sa týka údajov' +
        ' zpbrazených na webovaj stránke v sekcii Domov, sú v miernom oneskorení. Toto oneskorenie môžme zistiť podĺa času ' +
        ' aktualizovania, ktoré sa nam zobrazuje nad nameranými hodnotami.</p>' +
        '<p>Samotná meracia stanica funguje na základe mikrokontroléra Arduino Uno. Samotné meranie fyzikálnych veličín zabezpečujú' +
        'snímače DHT22, BMP280 a TEMT6000.</p>' +
        '<p>Na karte domov môžeme pozorovať aj históriu v podobe grafou. Medzi týmito grafmi sa preklikáme pomocou tlačidiel' +
        'umiestených pod grafom</p>';
    $("#article").html(a);
}

function b(){
    var a = '<h1>LED dióda</h1>' +
        '<p>Slúži na signalizáciu aktuálneho stavu.</br>' +
        'Môže svietiť troma farbami:' +
        '<UL class="led">' +
        ' <LI class="ledOdrazka">Zelená: signalizuje hodnotu svetla v miesnosti nad 100 lux </LI>' +
        ' <LI class="ledOdrazka">Červená: signalizuje pokles svetla v miestnosti nad 100 lux</LI>' +
        ' <LI class="ledOdrazka">Modrá: signalizuje režim prenosu dát na webovú stránku</LI>' +
        '</UL></p>';
    $("#article").html(a);
}
function c(){
    var a = '<h1> Tlačidlo </h1>' +
        '<p>Slúži na prepínanie sa medzi úsporným a zobrazovacím režimom.</p>' +
        '<p>V úspornom režime sa merací systém zachová tak, že rozsvieti sa modrá LED dióda ,displej ' +
        'zhasne, meranie nebude prebiehať tak často ako v zobrazovacom režime a bude sa vykonávať prenos' +
        'nameraných údajov na server v určitých intervaloch <p>' +
        '<p>V zobrazovacom režime merací systém sa zachová tak, že sa nám rozsvieti LED dióda ne zeleno,' +
        'respektíve na červeno v závislosti od svetla v miestnosti, rozsvieti sa LCD displej z ktorého si' +
        'budeme môcť odčítať aktuálne namerané hodnoty. Meranie fyzikálnych veličín v tomto môde prebieha' +
        'v rýchlich intervaloch. V tomto režime neprebieha prenos údajov na server.</p>';
    $("#article").html(a);



}
function d(){
    var a = '<img src="fig/schema.png" style=" width: 70%;' +
        '    height: 70%;\n' +
        '    position: absolute;\n' +
        '    top: absolute;\n' +
        '    right: absolute;' +
        '    padding-left: 10%">';

    $("#article").html(a);
}

