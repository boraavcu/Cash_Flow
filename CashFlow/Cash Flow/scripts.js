let anaborcMiktari = 0;
///////////////////////////G E L İ R L E R
function ekleGelir() {
    const gelirAdi = document.getElementById('gelir-ad').value;
    const gelirMiktar = document.getElementById('gelir-miktar').value;
    if (!gelirAdi || gelirMiktar <= 0) {
        alert('Lütfen Tüm Alanları Doldurunuz !');
        return;
    }
    var gelir = parseFloat(document.getElementById('gelir-miktar').value);
    if (isNaN(gelir) || gelir <= 0) {
        alert('Lütfen Geçerli Bir Miktar Giriniz.');
        return;
    }
    const kategoriElement = document.getElementById('gelir');
    const islemListesi = kategoriElement.querySelector('.islemler');
    const islemElemani = document.createElement('li');
    islemElemani.innerHTML = `
    ${gelirAdi} GELİRİNİZ : 
    <input type="text" class="miktar" value="${gelirMiktar}">
    <button onclick="islemiSil(this)">Sil</button>
    `;
    islemListesi.appendChild(islemElemani);
    const popup = document.getElementById('popup3');
    popup.style.display = 'none';
    document.getElementById('gelir-ad').value = '';
    document.getElementById('gelir-miktar').value = '';
}

function acPopup2() {
    const popup = document.getElementById('popup3');
    popup.style.display = 'block';
}
///////////////////////////G İ D E R L E R
function acPopupGider() {
    const popup = document.getElementById('popup4');
    popup.style.display = 'block';
}
function ekleGider() {
    const giderAdi = document.getElementById('gider-ad').value;
    const giderMiktar = document.getElementById('gider-miktar').value;
    if (!giderAdi || giderMiktar <= 0) {
        alert('Lütfen Tüm Alanları Doldurunuz !');
        return;
    }
    var gider = parseFloat(document.getElementById('gider-miktar').value);
    if (isNaN(gider) || gider <= 0) {
        alert('Lütfen Geçerli Bir Miktar Giriniz !');
        return;
    }
    const kategoriElement = document.getElementById('gider');
    const islemListesi = kategoriElement.querySelector('.islemler');
    const islemElemani = document.createElement('li');
    islemElemani.innerHTML = `
    ${giderAdi} Gideriniz : 
    <input type="text" class="miktar" value="${giderMiktar}">
    <button onclick="islemiSil(this)">Sil</button>
    `;
    islemListesi.appendChild(islemElemani);
    const popup = document.getElementById('popup4');
    popup.style.display = 'none';
    document.getElementById('gider-ad').value = '';
}
function acPopup() {
    document.getElementById('popup').style.display = 'block';
}
///////////////////////////B O R Ç L A R
function acPopupBorc() {
    const popup = document.getElementById('popup5');
    popup.style.display = 'block';
}
function ekleBorc() {
    const borcAdi = document.getElementById('borc-adi').value;
    const borcMiktari = parseFloat(document.getElementById('borc-miktari').value) || 0;
    const kalanTaksit = parseFloat(document.getElementById('kalan-taksit').value) || 0;
    if (!borcAdi || !borcMiktari || !kalanTaksit) {
        alert('Lütfen Tüm Alanları Doldurunuz !');
        return;
    }
    var borcmiktar = parseFloat(document.getElementById('borc-miktari').value);
    if (isNaN(borcmiktar) || borcmiktar <= 0) {
        alert('Lütfen Geçerli Bir Miktar Giriniz.');
        return;
    }
    var kalantaksit = parseFloat(document.getElementById('kalan-taksit').value);
    if (isNaN(kalantaksit) || kalantaksit <= 0) {
        alert('Lütfen Geçerli Bir Miktar Giriniz.');
        return;
    }
    const kategoriElement2 = document.getElementById('borclar');
    const islemListesi = kategoriElement2.querySelector('.islemler2');
    const islemElemani = document.createElement('li');
    islemElemani.innerHTML = `
    ${borcAdi} Borcunuz
    <input type="text" class="miktar" value="${borcMiktari.toFixed(2)}">  Kalan Taksit : ${kalanTaksit}
    <button onclick="islemiSil(this)">Sil</button>
    `;
    islemListesi.appendChild(islemElemani);
    const giderListesi = document.getElementById('gider').querySelector('.islemler');
    const taksitliBorcElemani = document.createElement('li');
    taksitliBorcElemani.innerHTML = `
    <span>${borcAdi} Borcunuz (Aylık):</span>
    <input type="text" class="miktar" value="${(borcMiktari / kalanTaksit).toFixed(2)}">
    <button onclick="islemiSil(this)">Sil</button>
    `;
    giderListesi.appendChild(taksitliBorcElemani);
    anaborcMiktari += borcMiktari;
    document.getElementById('toplamBorc').textContent = anaborcMiktari.toFixed(2);
    const popup = document.getElementById('popup5');
    popup.style.display = 'none';
    document.getElementById('borc-adi').value = '';
    document.getElementById('borc-miktari').value = '';
    document.getElementById('kalan-taksit').value = '';
}
/////////////////////////////V A R L I K L A R
function acPopup4() {
    var popup = document.getElementById('popup7');
    popup.style.display = 'block';
}
function ekleVarlik() {
    var hisseAdi = document.getElementById('hisseAdi').value;
    var adet = document.getElementById('adet').value;
    var fiyat = document.getElementById('fiyat').value;
    var temettu = document.getElementById('temettu').value;
    var aralik = document.getElementById('aralik').value;
    if (!hisseAdi || adet <= 0 || fiyat <= 0 || temettu <= 0 || aralik === 'SecTemettu') {
        alert('Lütfen Tüm Alanları Doldurunuz ve Geçerli Bir Seçim Yapınız !');
        return;
    }
    var adet = parseFloat(document.getElementById('temettu').value.replace(',', '.'));
    var fiyat = parseFloat(document.getElementById('temettu').value.replace(',', '.'));
    var temettu = parseFloat(document.getElementById('temettu').value.replace(',', '.'));
    var adet = parseFloat(document.getElementById('adet').value);
    if (isNaN(adet) || adet <= 0) {
        alert('Lütfen Geçerli Sayı Giriniz !');
        return;
    }
    var fiyat = parseFloat(document.getElementById('fiyat').value);
    if (isNaN(adet) || adet <= 0) {
        alert('Lütfen Geçerli Sayı Giriniz !');
        return;
    }
    var temettu = parseFloat(document.getElementById('temettu').value);
    if (isNaN(adet) || adet <= 0) {
        alert('Lütfen Geçerli Sayı Giriniz !');
        return;
    }
    var kategoriElementVarlik = document.getElementById('varliklar');
    var islemListesiVarlik = kategoriElementVarlik.querySelector('.islemler');
    var islemElemaniVarlik = document.createElement('li');
    islemElemaniVarlik.innerHTML = `
    Hisse : ${hisseAdi}<br>
    Maliyet : ${(adet * fiyat).toFixed(2)}<br>
    Adet : ${adet}
    <button onclick="islemiSil(this)">Sil</button>
     `;
    islemListesiVarlik.appendChild(islemElemaniVarlik);
    var kategoriElementGelir = document.getElementById('gelir');
    var islemListesiGelir = kategoriElementGelir.querySelector('.islemler');
    var islemElemaniGelir = document.createElement('li');
    islemElemaniGelir.innerHTML = `
    ${hisseAdi} Hissenizin Aylık Geliri : 
    <input type="text" class="miktar2" value="${((adet * temettu) / aralik).toFixed(2)}"> 
    <button onclick="islemiSil(this)">Sil</button>
    `;
    islemListesiGelir.appendChild(islemElemaniGelir);

    var popup = document.getElementById('popup7');
    popup.style.display = 'none';
}
function acPopupEmlak() {
    var popup = document.getElementById('popupEmlak');
    popup.style.display = 'block';
}
function kapatPopupEmlak() {
    var popup = document.getElementById('popupEmlak');
    popup.style.display = 'none';
}
function ekleEmlak() {
    var emlakTipi = document.getElementById('emlakTipi').value;
    var gelir = document.getElementById('gelir-emlak').value;
    var ay = document.getElementById('ay-emlak').value;
    if (!emlakTipi || !gelir || ay === 'SecAy') {
        alert('Lütfen Tüm Alanları Doğru Doldurununuz !');
        return;
    }
    var gelir = parseFloat(document.getElementById('gelir-emlak').value);
    if (isNaN(gelir) || gelir <= 0) {
        alert('Lütfen Geçerli Bir Miktar Giriniz !');
        return;
    }
    var kategoriElementVarlik = document.getElementById('varliklar');
    var islemListesiVarlik = kategoriElementVarlik.querySelector('.islemler2');
    var islemElemaniVarlik = document.createElement('li');
    islemElemaniVarlik.innerHTML = `
    Emlak Tipi : ${emlakTipi} <br>
    ${ay} Aylık Geliri :  ${(gelir).toFixed(2)}
    <button onclick="islemiSil(this)">Sil</button>
    `;
    islemListesiVarlik.appendChild(islemElemaniVarlik);
    var kategoriElementGelir = document.getElementById('gelir');
    var islemListesiGelir = kategoriElementGelir.querySelector('.islemler');
    var islemElemaniGelir = document.createElement('li');
    islemElemaniGelir.innerHTML = `
    Emlakınızın Aylık Geliri <input type="text" class="miktar2" value="${(gelir / ay).toFixed(2)}">
    <button onclick="islemiSil(this)">Sil</button>
    `;
    islemListesiGelir.appendChild(islemElemaniGelir);

    kapatPopupEmlak();
}
function acPopup6() {
    const popup = document.getElementById('popup6');
    popup.style.display = 'block';
}
function acPopup6() {
    const popup = document.getElementById('popup6');
    popup.style.display = 'block';
}
function ekleMevduat() {
    const mevduatMiktari = parseFloat(document.getElementById('mevduat-miktar').value);
    const faizOrani = parseFloat(document.getElementById('faiz-orani').value);
    const secilenGun = parseInt(document.getElementById('gun-secimi').value);
    if (isNaN(mevduatMiktari) || isNaN(faizOrani) || isNaN(secilenGun)) {
        alert('Lütfen Tüm Alanları Doğru Şekilde Doldurunuz !');
        return;
    }
    const faizGetirisi = ((mevduatMiktari * faizOrani * secilenGun) / 36500).toFixed(2);
    const kategoriElementVarlik = document.getElementById('varliklar');
    const islemListesiVarlik = kategoriElementVarlik.querySelector('.islemler3');
    const islemElemaniVarlik = document.createElement('li');
    islemElemaniVarlik.innerHTML = `
    ${secilenGun} Gün Vadeli Faiz Getiriniz : ${(faizGetirisi.toFixed(2) * 0.95).toFixed(2)}
    <button onclick="islemiSil(this)">Sil</button>
    `;
    var aylıkfaiz = ((faizGetirisi.toFixed(2) * 0.95) / secilenGun) * 30;
    islemListesiVarlik.appendChild(islemElemaniVarlik);
    const kategoriElementGelir = document.getElementById('gelir');
    const islemListesiGelir = kategoriElementGelir.querySelector('.islemler');
    const islemElemaniGelir = document.createElement('li');
    islemElemaniGelir.innerHTML = `
    Mevduatınız Aylık Getirisi: <input type="text" class="miktar2" value="${aylıkfaiz.toFixed(2)}">
    <button onclick="islemiSil(this)">Sil</button>
    `;
    islemListesiGelir.appendChild(islemElemaniGelir);

    kapatPopup();
}

function islemiSil(button) {
    var parentElement = button.parentElement;
    parentElement.remove();

    // Silinen öğenin içeriğindeki veriye göre gelirler kısmındaki ilgili değeri de siliyoruz
    var tip = parentElement.textContent.includes('Hisse') ? 'hisse' : parentElement.textContent.includes('Emlak') ? 'emlak' : '';

    if (tip === 'hisse') {
        var gelirListesi = document.querySelector('#gelir .islemler').children;
        for (var i = 0; i < gelirListesi.length; i++) {
            var gelir = gelirListesi[i];
            if (gelir.textContent.includes('Hissenizin Aylık Geliri')) {
                gelir.remove();

                break;
            }
        }
    } else if (tip === 'emlak') {
        var gelirListesi = document.querySelector('#gelir .islemler').children;
        for (var i = 0; i < gelirListesi.length; i++) {
            var gelir = gelirListesi[i];
            if (gelir.textContent.includes('Emlakınızın Aylık Geliri')) {
                gelir.remove();

                break;
            }
        }
    }
    var tip = parentElement.textContent.includes('Faiz Getiriniz') ? 'mevduat' : '';

    if (tip === 'mevduat') {
        var gelirListesi = document.querySelector('#gelir .islemler').children;
        for (var i = 0; i < gelirListesi.length; i++) {
            var gelir = gelirListesi[i];
            if (gelir.textContent.includes('Mevduatınız Aylık Getirisi:')) {
                gelir.remove();

                break;
            }
        }
    }
}

///////////////////////////T O P L A M L A R
function toplamlariGuncelle() {
    const gelirler = document.getElementById('gelir').querySelectorAll('.miktar');
    const giderler = document.getElementById('gider').querySelectorAll('.miktar');
    const varliklar = document.getElementById('gelir').querySelectorAll('.miktar2');
    const borclar = document.getElementById('borclar').querySelectorAll('.miktar');
    let toplamGelir = 0;
    let toplamGider = 0;
    let toplamVarlik = 0;
    let toplamBorc = 0;
    gelirler.forEach((input) => {
        toplamGelir += parseFloat(input.value) || 0;
    });
    giderler.forEach((input) => {
        toplamGider += parseFloat(input.value) || 0;
    });
    varliklar.forEach((input) => {
        toplamVarlik += parseFloat(input.value) || 0;
    });
    borclar.forEach((input) => {
        toplamBorc += parseFloat(input.value) || 0;
    });
    const netGelir = toplamGelir + toplamVarlik - toplamGider;
    document.getElementById('toplamGelir').textContent = (toplamGelir + toplamVarlik).toFixed(2);
    document.getElementById('toplamGider').textContent = toplamGider.toFixed(2);
    anaborcMiktari = toplamBorc;
    document.getElementById('toplamBorc').textContent = toplamBorc.toFixed(2);
    document.getElementById('toplamPasif').textContent = toplamVarlik.toFixed(2);
    document.getElementById('netGelir').textContent = netGelir.toFixed(2);
    const toplamPasifGelir = parseFloat(document.getElementById('toplamPasif').textContent);
    const dolulukOrani = (toplamPasifGelir / toplamGider) * 100;
    const dolulukElemani = document.querySelector('.doluluk');
    dolulukElemani.style.width = `${dolulukOrani}%`;
    var toplamBorc2 = toplamBorc;
    var aylıkPasifGelir = toplamVarlik;
    var dolulukOrani2 = (aylıkPasifGelir / toplamBorc) * 100;
    document.getElementById('doluluk2').style.width = dolulukOrani2 + '%';
    var x = toplamBorc2 / aylıkPasifGelir;
    document.getElementById('ToplamSüre').textContent = x.toFixed(2) + ' Ay';
    var y = (aylıkPasifGelir / toplamGider) * 100;
    document.getElementById('OranKarşılama').textContent = '% ' + y.toFixed(2);
    updateTrianglePosition();
}

/////////////////////////P O P  -  U P      K A P A T M A
function kapatPopup() {
    const popup = document.getElementById('popup');
    const popup3 = document.getElementById('popup3');
    const popup4 = document.getElementById('popup4');
    const popup5 = document.getElementById('popup5');
    const popup6 = document.getElementById('popup6');
    const popup7 = document.getElementById('popup7');
    // Check if the specific popup element exists before trying to hide it
    if (popup) popup.style.display = 'none';
    if (popup3) popup3.style.display = 'none';
    if (popup4) popup4.style.display = 'none';
    if (popup5) popup5.style.display = 'none';
    if (popup6) popup6.style.display = 'none';
    if (popup7) popup7.style.display = 'none';
}
function updateTrianglePosition() {
    const dolulukElemani = document.querySelector('.doluluk');
    const triangle = document.querySelector('.triangle');
    const dolulukOrani = parseFloat(dolulukElemani.style.width);
    const trianglePosition = dolulukOrani;
    triangle.style.left = `calc(${trianglePosition}%)`;
}
/////////////////////////// Ç O C U K     P A R A S I    H E S A P L A M A
function hesapla() {
    var yasGrubu = document.getElementById('yas-grubu').value;
    var cocukSayisi = parseInt(document.getElementById('cocuk-sayisi').value);
    var gider;
    if (yasGrubu === 'SeçimGrup' || cocukSayisi === 'SeçimSayi' || isNaN(cocukSayisi)) {
        alert('Lütfen Tüm Alanları Seçiniz !');
        return;
    }
    switch (yasGrubu) {
        case '0-3':
            gider = 1750;
            break;
        case '3-6':
            gider = 2500;
            break;
        case '7-14':
            gider = 3250;
            break;
        case '14-21':
            gider = 7350;
            break;
        default:
            gider = 0;
            break;
    }
    var toplamGider = gider * cocukSayisi;
    var ul = document.querySelector('.kategori#gider ul.islemler');
    var li = document.createElement('li');
    li.innerHTML = `
    <span>${yasGrubu} Yaş Grubu için ${cocukSayisi} Çocuk:</span>
    <input type="text" class="miktar" value="${toplamGider} TL" disabled>
    <button onclick="islemiSil(this)">Sil</button>
    `;
    ul.appendChild(li);
    document.getElementById('popup').style.display = 'none';
}
function toplamlariHesapla() {
    toplamlariGuncelle();
}

function hesaplaVeGuncelle() {
    const gelirler = document.getElementById('gelir').querySelectorAll('.miktar');
    const giderler = document.getElementById('gider').querySelectorAll('.miktar');
    const varliklar = document.getElementById('gelir').querySelectorAll('.miktar2');
    const borclar = document.getElementById('borclar').querySelectorAll('.miktar');

    // Kullanıcının ilgili alanları doldurup doldurmadığını kontrol et
    if (gelirler.length === 0 || giderler.length === 0) {
        alert('Barların Çalışması İçin Borç Eklemeniz Gereklidir, Borcunuz Yok İse Gelir - Gider Kısmını Doldurarak Hesaplama İşlemlerini Sağlayabilirsiniz');
        return;
    }

    let toplamGelir = 0;
    let toplamGider = 0;
    let toplamVarlik = 0;
    let toplamBorc = 0;

    gelirler.forEach((input) => {
        toplamGelir += parseFloat(input.value) || 0;
    });
    giderler.forEach((input) => {
        toplamGider += parseFloat(input.value) || 0;
    });
    varliklar.forEach((input) => {
        toplamVarlik += parseFloat(input.value) || 0;
    });
    borclar.forEach((input) => {
        toplamBorc += parseFloat(input.value) || 0;
    });

    const netGelir = toplamGelir + toplamVarlik - toplamGider;

    // NaN kontrolü yap
    if (isNaN(toplamGelir) || isNaN(toplamGider) || isNaN(toplamVarlik) || isNaN(toplamBorc) || isNaN(netGelir)) {
        alert('Bir veya daha fazla değer geçersiz. Lütfen doğru bir değer girin.');
        return;
    }

    document.getElementById('toplamGelir').textContent = (toplamGelir + toplamVarlik).toFixed(2);
    document.getElementById('toplamGider').textContent = toplamGider.toFixed(2);
    anaborcMiktari = toplamBorc;
    document.getElementById('toplamBorc').textContent = toplamBorc.toFixed(2);
    document.getElementById('toplamPasif').textContent = toplamVarlik.toFixed(2);
    document.getElementById('netGelir').textContent = netGelir.toFixed(2);

    const toplamPasifGelir = parseFloat(document.getElementById('toplamPasif').textContent);
    const dolulukOrani = (toplamPasifGelir / toplamGider) * 100;
    const dolulukElemani = document.querySelector('.doluluk');
    dolulukElemani.style.width = `${dolulukOrani}%`;

    var toplamBorc2 = toplamBorc;
    var aylıkPasifGelir = toplamVarlik;
    var dolulukOrani2 = (aylıkPasifGelir / toplamBorc) * 100;
    document.getElementById('doluluk2').style.width = dolulukOrani2 + '%';

    var y = (aylıkPasifGelir / toplamGider) * 100;
    document.getElementById('OranKarşılama').textContent = '% ' + y.toFixed(2);

    var x = toplamBorc2 / aylıkPasifGelir;
    if (isNaN(x) || !isFinite(x)) {
        x = 0;
    } else {
        document.getElementById('ToplamSüre').textContent = x.toFixed(2) + ' Ay';
    }

    updateTrianglePosition();
}

///////////////////////////S I F I R L A M A     B U T T O N U
function sifirla() {
    // Metin alanları sıfırlanıyor
    document.getElementById('toplamGider').textContent = '0.00';
    document.getElementById('toplamPasif').textContent = '0.00';
    document.getElementById('toplamGelir').textContent = '0.00';
    document.getElementById('toplamBorc').textContent = '0.00';
    document.getElementById('netGelir').textContent = '0.00';
    document.getElementById('OranKarşılama').textContent = '0.00';
    document.getElementById('ToplamSüre').textContent = '0.00';

    const inputs = document.querySelectorAll('.miktar, .miktar2');
    inputs.forEach((input) => (input.value = ''));
   
    const dolulukElemani = document.querySelector('.doluluk');
    dolulukElemani.style.width = '0';

    const dolulukElemani2 = document.querySelector('.doluluk2');
    dolulukElemani2.style.width = '0';
    
    const triangle = document.querySelector('.triangle');
    triangle.style.left = '0';



}
function sifirlaIsimler() {
    const isimListeleri = document.querySelectorAll('.islemler, .islemler2, .islemler3');
    isimListeleri.forEach((liste) => {
        liste.innerHTML = '';
    });
}
