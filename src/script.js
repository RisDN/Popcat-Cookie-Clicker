const macska = document.getElementById('macska');
const pont_kijelzo = document.getElementById('pont_kijelzo');
const szorzo_kijelzo = document.getElementById('szorzo_kijelzo');
const nincseleg_kijelzo = document.getElementById('nincseleg_kijelzo');
const sikeres_kijelzo = document.getElementById('sikeres_kijelzo');

var pontok_szama = parseInt(localStorage.getItem('pontok'));
var szorzo_szama = parseInt(localStorage.getItem('szorzo'));

for (let i = 0; i < 3; i++) {
    if (isNaN(pontok_szama)) {
        localStorage.setItem('pontok', 0)
    }
    if (isNaN(szorzo_szama)) {
        localStorage.setItem('szorzo', 1)
    }
}

var pontok_szama = parseInt(localStorage.getItem('pontok'));
var szorzo_szama = parseInt(localStorage.getItem('szorzo'));
kijelzo_frissitese();


macska.addEventListener('click', function() {
    clearInterval(kep_csere, 150);
    pontok_szama = pontok_szama + szorzo_szama;
    localStorage.setItem('pontok', pontok_szama);
    macska.src = 'src/img/2.png';
    kijelzo_frissitese();
    setTimeout(kep_csere, 150);
})

function kep_csere() {
    macska.src = 'src/img/1.png';
}


function nincseleg_pontod(megadott_szam) {
    t = setInterval(() => {
        nincseleg_kijelzo.style.display = 'none';
    }, 2500);
    let hianyzik = kulonbseg(pontok_szama, megadott_szam)
    console.log(hianyzik)
    console.log(nincseleg_kijelzo)
    nincseleg_kijelzo.innerHTML = `Nincs elég pontod a megvásárláshoz!<br>Ennyi kellene még: ${hianyzik}`;
    nincseleg_kijelzo.style.display = 'block';
}


function kulonbseg(a, b) {
    return Math.abs(a - b);
}

function vasarlas(levon, kap) {
    console.log('Levontunk pontok:', levon)
    console.log('Kaptál szorzót:', kap)

    var pontok_szama_ideiglenes = parseInt(localStorage.getItem('pontok'));
    var szorzo_szama_ideiglenes = parseInt(localStorage.getItem('szorzo'));

    pontok_szama = pontok_szama_ideiglenes - levon;
    szorzo_szama = szorzo_szama_ideiglenes + kap;

    localStorage.setItem('pontok', pontok_szama);
    localStorage.setItem('szorzo', szorzo_szama);
    kijelzo_frissitese();

    ta = setInterval(() => {
        sikeres_kijelzo.style.display = 'none';
    }, 2500);
    sikeres_kijelzo.innerHTML = `Sikeres szorzó vásárlás!<br>Kaptál: ${kap} szorzót<br>Levontunk: ${levon} pontot`;
    sikeres_kijelzo.style.display = 'block';

}

function kijelzo_frissitese() {
    pont_kijelzo.innerHTML = `Pontjaid: ${pontok_szama}`;
    szorzo_kijelzo.innerHTML = `Szorzód: ${szorzo_szama}`;
    document.title = `Popcat Clicker - ${pontok_szama}`;
}


const elso = document.getElementById('1');
const masodik = document.getElementById('2');
const harmadik = document.getElementById('3');
const negyedik = document.getElementById('4');
const otodik = document.getElementById('5');


elso.addEventListener('click', function() {
    console.log(pontok_szama)
    if (pontok_szama > 99) {
        vasarlas(100, 1);
    } else {
        nincseleg_pontod(100);
        console.log('Nincs elég pontod!')
    }
});
masodik.addEventListener('click', function() {
    console.log(pontok_szama)
    if (pontok_szama > 499) {
        vasarlas(500, 5);
    } else {
        nincseleg_pontod(500);
        console.log('Nincs elég pontod!')
    }
});
harmadik.addEventListener('click', function() {
    console.log(pontok_szama)
    if (pontok_szama > 4999) {
        vasarlas(5000, 50);
    } else {
        nincseleg_pontod(5000);
        console.log('Nincs elég pontod!')
    }
});
negyedik.addEventListener('click', function() {
    console.log(pontok_szama)
    if (pontok_szama > 49999) {
        vasarlas(50000, 500);
    } else {
        nincseleg_pontod(50000);
        console.log('Nincs elég pontod!')
    }
});
otodik.addEventListener('click', function() {
    console.log(pontok_szama)
    if (pontok_szama > 499999) {
        vasarlas(500000, 5000);
    } else {
        nincseleg_pontod(500000);
        console.log('Nincs elég pontod!')
    }
});