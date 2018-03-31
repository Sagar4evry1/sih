function weightConverter(valNum) {

var choseval = $("#chose1").val();
if(choseval == "A"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*0.0016;
document.getElementById("su").innerHTML='1 PARAMANU = 0.0016 MG';


}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.0000016;
document.getElementById("su").innerHTML='1 PARAMANU = 0.0000016 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.0000000016;
document.getElementById("su").innerHTML='1 PARAMANU = 0.0000000016 kG';

}
}
if(choseval == "B"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*0.05;
document.getElementById("su").innerHTML='1 Dhavanshi = 0.05 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.00005;
document.getElementById("su").innerHTML='1 Dhavanshi = 0.00005 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.00000005;
document.getElementById("su").innerHTML='1 Dhavanshi = 0.00000005 KG';

}
}
if(choseval == "C"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*0.32;
document.getElementById("su").innerHTML='1 Marichi = 0.32 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.00032;
document.getElementById("su").innerHTML='1 Marichi = 0.00032 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.00000032;
document.getElementById("su").innerHTML='1 Marichi = 0.00000032 KG';

}
}
if(choseval == "D"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*1.95;
document.getElementById("su").innerHTML='1 Lal Sarshap = 1.95 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.00195;
document.getElementById("su").innerHTML='1 Lal Sarshap = 0.00195 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.00000195;
document.getElementById("su").innerHTML='1 Lal Sarshap = 0.00000195 KG';

}
}



if(choseval == "H"){

var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*15.62;
document.getElementById("su").innerHTML='1 TUNDAL = 15.62 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.01562;
document.getElementById("su").innerHTML='1 TUNDAL = 0.01562 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.00001562;
document.getElementById("su").innerHTML='1 TUNDAL = 0.00001562 KG';

}
}

if(choseval == "I"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*31.25;
document.getElementById("su").innerHTML='1 DHANYAMASH = 31.25 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.03125;
document.getElementById("su").innerHTML='1 DHANYAMASH = 0.03125 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.00003125;
document.getElementById("su").innerHTML='1 DHANYAMASH = 0.00003125 KG';
}
}



if(choseval == "J"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*62.5;
document.getElementById("su").innerHTML='1 YAVA = 62.5 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.0625;
document.getElementById("su").innerHTML='1 YAVA = 0.0625 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.0000625;
document.getElementById("su").innerHTML='1 YAVA = 0.0000625 KG';

}
}

if(choseval == "RA"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*125;
document.getElementById("su").innerHTML='1 RATTI = 125 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.125;
document.getElementById("su").innerHTML='1 RATTI = 0.125 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.000125;
document.getElementById("su").innerHTML='1 RATTI = 0.000125 KG';

}
}



if(choseval == "K"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*250;
document.getElementById("su").innerHTML='1 ANDIKA = 250 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*0.250;
document.getElementById("su").innerHTML='1 ANDIKA = 0.250 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.000250;
document.getElementById("su").innerHTML='1 ANDIKA = 0.000250 KG';
}
}

if(choseval == "L"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*1000;
document.getElementById("su").innerHTML='1 MASHAK = 1000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*1;
document.getElementById("su").innerHTML='1 MASHAK = 1 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.001;
document.getElementById("su").innerHTML='1 MASHAK = 0.001 KG';
}
}



if(choseval == "M"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*3000;
document.getElementById("su").innerHTML='1 SHAAN = 3000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*3;
document.getElementById("su").innerHTML='1 SHAAN = 3 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.003;
document.getElementById("su").innerHTML='1 SHAAN = 0.003 KG';

}
}




if(choseval == "N"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*6000;
document.getElementById("su").innerHTML='1 KOL = 6000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*6;
document.getElementById("su").innerHTML='1 KOL = 6 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.006;
document.getElementById("su").innerHTML='1 KOL = 0.006 KG';

}
}

if(choseval == "O"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*12000;
document.getElementById("su").innerHTML='1 TOLA = 12000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*12;
document.getElementById("su").innerHTML='1 TOLA = 12 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.012;
document.getElementById("su").innerHTML='1 TOLA = 0.012 KG';

}
}


if(choseval == "P"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*12000;
document.getElementById("su").innerHTML='1 KARSHA = 12000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*12;
document.getElementById("su").innerHTML='1 KARSHA = 12 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.012;
document.getElementById("su").innerHTML='1 KARSHA = 0.012 KG';

}
}


if(choseval == "Q"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*24000;
document.getElementById("su").innerHTML='1 SHUKTI = 24000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*24;
document.getElementById("su").innerHTML='1 SHUKTI = 24 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.024;
document.getElementById("su").innerHTML='1 SHUKTI = 0.024 KG';

}
}




if(choseval == "R"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*48000;
document.getElementById("su").innerHTML='1 PAL = 48000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*48;
document.getElementById("su").innerHTML='1 PAL = 48 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.048;
document.getElementById("su").innerHTML='1 PAL = 0.048 KG';

}
}

if(choseval == "S"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*60000;
document.getElementById("su").innerHTML='1 CHHATANK = 60000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*60;
document.getElementById("su").innerHTML='1 CHHATANK = 60 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.060;
document.getElementById("su").innerHTML='1 CHHATANK = 0.060 KG';

}
}



if(choseval == "T"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*96000;
document.getElementById("su").innerHTML='1 PRASRTIS = 96000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*96;
document.getElementById("su").innerHTML='1 PRASRTIS = 96 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.096;
document.getElementById("su").innerHTML='1 PRASRTIS = 0.096 KG';

}
}

if(choseval == "U"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*186000;
document.getElementById("su").innerHTML='1 CHHATAAK = 186000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*186;
document.getElementById("su").innerHTML='1 CHHATAAK = 186 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.186;
document.getElementById("su").innerHTML='1 CHHATAAK = 0.186 KG';

}
}

if(choseval == "V"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*192000;
document.getElementById("su").innerHTML='1 KUDAV = 192000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*192;
document.getElementById("su").innerHTML='1 KUDAV = 192 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.192;
document.getElementById("su").innerHTML='1 KUDAV = 0.192 KG';

}
}




if(choseval == "W"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*384000;
document.getElementById("su").innerHTML='1 MANIKA = 384000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*384;
document.getElementById("su").innerHTML='1 MANIKA = 384 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.384;
document.getElementById("su").innerHTML='1 MANIKA = 0.384 KG';

}
}


if(choseval == "X"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*768000;
document.getElementById("su").innerHTML='1 PRASTHA = 768000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*768;
document.getElementById("su").innerHTML='1 PRASTHA = 768 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.768;
document.getElementById("su").innerHTML='1 PRASTHA = 0.768 KG';

}
}
if(choseval == "Y"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*960000;
document.getElementById("su").innerHTML='1 SER = 960000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*960;
document.getElementById("su").innerHTML='1 SER = 960 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*0.960;
document.getElementById("su").innerHTML='1 SER = 0.960 KG';


}
}
if(choseval == "Z"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*3073000;
document.getElementById("su").innerHTML='1 ADHAKA = 3073000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*3073;
document.getElementById("su").innerHTML='1 ADHAKA = 3073 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*3.073;
document.getElementById("su").innerHTML='1 ADHAKA = 3.073 KG';

}
}

if(choseval == "AA"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*4800000;
document.getElementById("su").innerHTML='1 TULA = 4800000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*4800;
document.getElementById("su").innerHTML='1 TULA = 4800 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*4.8;
document.getElementById("su").innerHTML='1 TULA = 4.8 KG';

}
}

if(choseval == "AB"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*12228000;
document.getElementById("su").innerHTML='1 DRONA = 12228000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*12228;
document.getElementById("su").innerHTML='1 DRONA = 12228 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*12.228;
document.getElementById("su").innerHTML='1 DRONA = 12.228 KG';

}
}

if(choseval == "AC"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*24576000;
document.getElementById("su").innerHTML='1 SURPA =24576000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*24576;
document.getElementById("su").innerHTML='1 SURPA = 24576 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*24.576;
document.getElementById("su").innerHTML='1 SURPA = 24.576 KG';

}
}

if(choseval == "AD"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*49152000;
document.getElementById("su").innerHTML='1 DRONI =49152000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*49152;
document.getElementById("su").innerHTML='1 DRONI =49152 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*49.152;
document.getElementById("su").innerHTML='1 DRONI = 49.152 KG';

}
}

if(choseval == "AE"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*96000000;
document.getElementById("su").innerHTML='1 BHARA =96000000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*96000;
document.getElementById("su").innerHTML='1 BHARA =96000 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*96;
document.getElementById("su").innerHTML='1 BHARA = 96 KG';

}
}

if(choseval == "AF"){
var convert=document.getElementById("chose2").value;
if(convert=="E")
{
document.getElementById("inputKg").value=valNum*196108000;
document.getElementById("su").innerHTML='1 KHARI =196108000 MG';

}
if(convert=="F")
{
document.getElementById("inputKg").value=valNum*196108;
document.getElementById("su").innerHTML='1 KHARI =196108 G';

}
if(convert=="G")
{
document.getElementById("inputKg").value=valNum*196.108;
document.getElementById("su").innerHTML='1 KHARI = 196.108 KG';

}

}

}
function weightConverter1(valNum) {
var choseval = $("#chose2").val();
if(choseval == "E"){
var convert=document.getElementById("chose1").value;
if(convert=="A")
{
document.getElementById("inputPounds").value=valNum/0.0016;
document.getElementById("su").innerHTML='1 PARAMANU = 0.0016 MG';
}
if(convert=="B")
{
document.getElementById("inputPounds").value=valNum/0.05;
document.getElementById("su").innerHTML='1 DHAVANSHI = 0.05 MG';
}
if(convert=="C")
{
document.getElementById("inputPounds").value=valNum/0.32;
document.getElementById("su").innerHTML='1 MARICHI = 0.32 MG';
}
if(convert=="D")
{
document.getElementById("inputPounds").value=valNum/1.95;
document.getElementById("su").innerHTML='1 LAL SARSHAP = 1.95 MG';
}
if(convert=="H")
{
document.getElementById("inputPounds").value=valNum/15.62;
document.getElementById("su").innerHTML='1 TUNDAL = 15.62 MG';
}
if(convert=="I")
{
document.getElementById("inputPounds").value=valNum/31.25;
document.getElementById("su").innerHTML='1 DHANYAMASH = 31.25 MG';
}
if(convert=="J")
{
document.getElementById("inputPounds").value=valNum/62.5;
document.getElementById("su").innerHTML='1 YAVA = 62.5 MG';
}
if(convert=="RA")
{
document.getElementById("inputPounds").value=valNum/125;
document.getElementById("su").innerHTML='1 RATTI = 125 MG';
}
if(convert=="K")
{
document.getElementById("inputPounds").value=valNum/250;
document.getElementById("su").innerHTML='1 ANDIKA = 250 MG';
}
if(convert=="L")
{
document.getElementById("inputPounds").value=valNum/1000;
document.getElementById("su").innerHTML='1 MASHAK = 1000 MG';
}
if(convert=="M")
{
document.getElementById("inputPounds").value=valNum/3000;
document.getElementById("su").innerHTML='1 SHAAN = 3000 MG';
}
if(convert=="N")
{
document.getElementById("inputPounds").value=valNum/6000;
document.getElementById("su").innerHTML='1 KOL = 6000 MG';
}
if(convert=="O")
{
document.getElementById("inputPounds").value=valNum/12000;
document.getElementById("su").innerHTML='1 TOLA = 12000 MG';
}
if(convert=="P")
{
document.getElementById("inputPounds").value=valNum/12000;
document.getElementById("su").innerHTML='1 KARSHA = 12000 MG';
}
if(convert=="Q")
{
document.getElementById("inputPounds").value=valNum/24000;
document.getElementById("su").innerHTML='1 SHUKTI = 24000 MG';
}
if(convert=="R")
{
document.getElementById("inputPounds").value=valNum/48000;
document.getElementById("su").innerHTML='1 PAL = 48000 MG';
}
if(convert=="S")
{
document.getElementById("inputPounds").value=valNum/60000;
document.getElementById("su").innerHTML='1 CHHATANK = 60000 MG';
}
if(convert=="T")
{
document.getElementById("inputPounds").value=valNum/96000;
document.getElementById("su").innerHTML='1 PRASRTIS = 96000 MG';
}
if(convert=="U")
{
document.getElementById("inputPounds").value=valNum/186000;
document.getElementById("su").innerHTML='1 CHHATAAK = 186000 MG';
}

if(convert=="V")
{
document.getElementById("inputPounds").value=valNum/192000;
document.getElementById("su").innerHTML='1 KUDAV = 192000 MG';
}
if(convert=="W")
{
document.getElementById("inputPounds").value=valNum/384000;
document.getElementById("su").innerHTML='1 MANIKA = 384000 MG';
}

if(convert=="X")
{
document.getElementById("inputPounds").value=valNum/768000;
document.getElementById("su").innerHTML='1 PRASTHA = 768000 MG';
}
if(convert=="Y")
{
document.getElementById("inputPounds").value=valNum/960000;
document.getElementById("su").innerHTML='1 SER = 960000 MG';
}
if(convert=="Z")
{
document.getElementById("inputPounds").value=valNum/3073000;
document.getElementById("su").innerHTML='1 ADHAKA = 3073000 MG';
}
if(convert=="AA")
{
document.getElementById("inputPounds").value=valNum/4800000;
document.getElementById("su").innerHTML='1 TULA = 4800000 MG';
}
if(convert=="AB")
{
document.getElementById("inputPounds").value=valNum/12228000;
document.getElementById("su").innerHTML='1 DRONA = 12228000 MG';
}
if(convert=="AC")
{
document.getElementById("inputPounds").value=valNum/24576000;
document.getElementById("su").innerHTML='1 SURPA =24576000 MG';
}
if(convert=="AD")
{
document.getElementById("inputPounds").value=valNum/49152000;
document.getElementById("su").innerHTML='1 DRONI =49152000 MG';
}
if(convert=="AE")
{
document.getElementById("inputPounds").value=valNum/96000000;
document.getElementById("su").innerHTML='1 BHARA =96000000 MG';
}
if(convert=="AF")
{
document.getElementById("inputPounds").value=valNum/196108000;
document.getElementById("su").innerHTML='1 KHARI =196108000 MG';
}

}
 
if(choseval == "F"){
var convert=document.getElementById("chose1").value;
if(convert=="A")
{
document.getElementById("inputPounds").value=valNum/0.0000016;
document.getElementById("su").innerHTML='1 PARAMANU = 0.0000016 G';
}
if(convert=="B")
{
document.getElementById("inputPounds").value=valNum/0.00005;
document.getElementById("su").innerHTML='1 DHAVANSHI = 0.00005 G';
}
if(convert=="C")
{
document.getElementById("inputPounds").value=valNum/0.00032;
document.getElementById("su").innerHTML='1 MARICHI = 0.00032 G';
}
if(convert=="D")
{
document.getElementById("inputPounds").value=valNum/0.00195;
document.getElementById("su").innerHTML='1 LAL SARSHAP = 0.00195 G';
}
if(convert=="H")
{
document.getElementById("inputPounds").value=valNum/0.01562;
document.getElementById("su").innerHTML='1 TUNDAL = 0.01562 G';
}
if(convert=="I")
{
document.getElementById("inputPounds").value=valNum/0.03125;
document.getElementById("su").innerHTML='1 DHANYAMASH = 0.03125 G';
}
if(convert=="J")
{
document.getElementById("inputPounds").value=valNum/0.0625;
document.getElementById("su").innerHTML='1 YAVA = 0.0625 G';
}
if(convert=="RA")
{
document.getElementById("inputPounds").value=valNum/0.125;
document.getElementById("su").innerHTML='1 YATTI = 0.125 G';
}
if(convert=="K")
{
document.getElementById("inputPounds").value=valNum/0.250;
document.getElementById("su").innerHTML='1 ANDIKA = 0.250 G';
}
if(convert=="L")
{
document.getElementById("inputPounds").value=valNum/1;
document.getElementById("su").innerHTML='1 MASHAK = 1 G';
}
if(convert=="M")
{
document.getElementById("inputPounds").value=valNum/3;
document.getElementById("su").innerHTML='1 SHAAN = 3 G';
}
if(convert=="N")
{
document.getElementById("inputPounds").value=valNum/6;
document.getElementById("su").innerHTML='1 KOL = 6 G';
}
if(convert=="O")
{
document.getElementById("inputPounds").value=valNum/12;
document.getElementById("su").innerHTML='1 TOLA = 12 G';
}
if(convert=="P")
{
document.getElementById("inputPounds").value=valNum/12;
document.getElementById("su").innerHTML='1 KARSHA = 12 G';
}
if(convert=="Q")
{
document.getElementById("inputPounds").value=valNum/24;
document.getElementById("su").innerHTML='1 SHUKTI = 24 G';
}
if(convert=="R")
{
document.getElementById("inputPounds").value=valNum/48;
document.getElementById("su").innerHTML='1 PAL = 48 G';
}

if(convert=="S")
{
document.getElementById("inputPounds").value=valNum/60;
document.getElementById("su").innerHTML='1 CHHATANK = 60 G';
}
if(convert=="T")
{
document.getElementById("inputPounds").value=valNum/96;
document.getElementById("su").innerHTML='1 PRASRTIS = 96 G';
}
if(convert=="U")
{
document.getElementById("inputPounds").value=valNum/186;
document.getElementById("su").innerHTML='1 CHHATAAK = 186 G';
}
if(convert=="V")
{
document.getElementById("inputPounds").value=valNum/192;
document.getElementById("su").innerHTML='1 KUDAV = 192 G';
}
if(convert=="W")
{
document.getElementById("inputPounds").value=valNum/384;
document.getElementById("su").innerHTML='1 MANIKA = 384 G';
}
if(convert=="X")
{
document.getElementById("inputPounds").value=valNum/768;
document.getElementById("su").innerHTML='1 PRASTHA = 768 G';
}
if(convert=="Y")
{
document.getElementById("inputPounds").value=valNum/960;
document.getElementById("su").innerHTML='1 SER = 960 G';
}
if(convert=="Z")
{
document.getElementById("inputPounds").value=valNum/3073;
document.getElementById("su").innerHTML='1 ADHAKA = 3073 G';
}
if(convert=="AA")
{
document.getElementById("inputPounds").value=valNum/4800;
document.getElementById("su").innerHTML='1 TULA = 4800 G';
}
if(convert=="AB")
{
document.getElementById("inputPounds").value=valNum/12228;
document.getElementById("su").innerHTML='1 DRONA = 12228 G';
}
if(convert=="AC")
{
document.getElementById("inputPounds").value=valNum/24576;
document.getElementById("su").innerHTML='1 SURPA =24576 G';
}
if(convert=="AD")
{
document.getElementById("inputPounds").value=valNum/49152;
document.getElementById("su").innerHTML='1 DRONI =49152 G';
}
if(convert=="AE")
{
document.getElementById("inputPounds").value=valNum/96000;
document.getElementById("su").innerHTML='1 BHARA =96000 G';
}
if(convert=="AF")
{
document.getElementById("inputPounds").value=valNum/196108;
document.getElementById("su").innerHTML='1 KHARI =196108 G';
}

}

if(choseval == "G"){
var convert=document.getElementById("chose1").value;
if(convert=="A")
{
document.getElementById("inputPounds").value=valNum/0.0000000016;
document.getElementById("su").innerHTML='1 PARAMANU = 0.0000000016 kG';
}
if(convert=="B")
{
document.getElementById("inputPounds").value=valNum/0.00000005;
document.getElementById("su").innerHTML='1 DHAVANSHI = 0.00000005 kG';
}
if(convert=="C")
{
document.getElementById("inputPounds").value=valNum/0.00000032;
document.getElementById("su").innerHTML='1 MARICHI = 0.00000032 kG';
}
if(convert=="D")
{
document.getElementById("inputPounds").value=valNum/0.00000195;
document.getElementById("su").innerHTML='1 LAL SARSHAP = 0.00000195 kG';
}
if(convert=="H")
{
document.getElementById("inputPounds").value=valNum/0.00001562;
document.getElementById("su").innerHTML='1 TUNDAL = 0.00001562 kG';
}
if(convert=="I")
{
document.getElementById("inputPounds").value=valNum/0.00003125;
document.getElementById("su").innerHTML='1 DHANYAMASH = 0.00003125 kG';
}
if(convert=="J")
{
document.getElementById("inputPounds").value=valNum/0.0000625;
document.getElementById("su").innerHTML='1 YAVA = 0.0000625 kG';
}
if(convert=="RA")
{
document.getElementById("inputPounds").value=valNum/0.000125;
document.getElementById("su").innerHTML='1 RATTI = 0.000125 kG';
}
if(convert=="K")
{
document.getElementById("inputPounds").value=valNum/0.000250;
document.getElementById("su").innerHTML='1 ANDIKA = 0.000250 kG';
}
if(convert=="L")
{
document.getElementById("inputPounds").value=valNum/0.001;
document.getElementById("su").innerHTML='1 MASHAK = 0.001 kG';
}
if(convert=="M")
{
document.getElementById("inputPounds").value=valNum/0.003;
document.getElementById("su").innerHTML='1 SHAAN = 0.003 kG';
}
if(convert=="N")
{
document.getElementById("inputPounds").value=valNum/0.006;
document.getElementById("su").innerHTML='1 KOL = 0.006 kG';
}
if(convert=="O")
{
document.getElementById("inputPounds").value=valNum/0.012;
document.getElementById("su").innerHTML='1 TOLA = 0.012 kG';
}
if(convert=="P")
{
document.getElementById("inputPounds").value=valNum/0.012;
document.getElementById("su").innerHTML='1 KARSHA = 0.012 kG';
}
if(convert=="Q")
{
document.getElementById("inputPounds").value=valNum/0.024;
document.getElementById("su").innerHTML='1 SHUKTI = 0.024 kG';
}
if(convert=="R")
{
document.getElementById("inputPounds").value=valNum/0.048;
document.getElementById("su").innerHTML='1 PAL = 0.048 kG';
}
if(convert=="S")
{
document.getElementById("inputPounds").value=valNum/0.060;
document.getElementById("su").innerHTML='1 CHHATANK = 0.060 kG';
}
if(convert=="T")
{
document.getElementById("inputPounds").value=valNum/0.096;
document.getElementById("su").innerHTML='1 PRASRTIS = 0.096 kG';
}
if(convert=="U")
{
document.getElementById("inputPounds").value=valNum/0.186;
document.getElementById("su").innerHTML='1 CHHATAAK = 0.186 kG';
}

if(convert=="V")
{
document.getElementById("inputPounds").value=valNum/0.192;
document.getElementById("su").innerHTML='1 KUDAV = 0.192 kG';
}
if(convert=="W")
{
document.getElementById("inputPounds").value=valNum/0.384;
document.getElementById("su").innerHTML='1 MANIKA = 0.384 kG';
}
if(convert=="X")
{
document.getElementById("inputPounds").value=valNum/0.768;
document.getElementById("su").innerHTML='1 PRASTHA = 0.768 kG';
}
if(convert=="Y")
{
document.getElementById("inputPounds").value=valNum/0.960;
document.getElementById("su").innerHTML='1 SER = 0.960 kG';
}
if(convert=="Z")
{
document.getElementById("inputPounds").value=valNum/3.073;
document.getElementById("su").innerHTML='1 ADHAKA = 3.073 KG';
}
if(convert=="AA")
{
document.getElementById("inputPounds").value=valNum/4.800;
document.getElementById("su").innerHTML='1 TULA = 4.800 KG';
}
if(convert=="AB")
{
document.getElementById("inputPounds").value=valNum/12.228;
document.getElementById("su").innerHTML='1 DRONA = 12.228 KG';
}
if(convert=="AC")
{
document.getElementById("inputPounds").value=valNum/24.576;
document.getElementById("su").innerHTML='1 SURPA =24.576 KG';
}
if(convert=="AD")
{
document.getElementById("inputPounds").value=valNum/49.152;
document.getElementById("su").innerHTML='1 DRONI =49.152 KG';
}
if(convert=="AE")
{
document.getElementById("inputPounds").value=valNum/96;
document.getElementById("su").innerHTML='1 BHARA =96 KG';
}
if(convert=="AF")
{
document.getElementById("inputPounds").value=valNum/196.108;
document.getElementById("su").innerHTML='1 KHARI =196.108 KG';
}

}


}

function  myfunction(){
var bla = $("#inputPounds").val();
weightConverter(bla);
}

function  myfunction1(){
var blaa = $("#inputKg").val();
console.log($("#inputKg").val());
weightConverter1(blaa);
}
