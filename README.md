# Cash_Flow
Cash_Flow

** Bu Cash Flow ( nakit akımı / girişi ) uygulaması, freelance olarak yaptığım ve özelliklerinin tamamı alıcının isteklerine göre tasarlanıp, kodlanmıştır.

** Uygulamanın nasıl kullanacağı ve amacının ne olduğunu aşağıda resimli olaraktan anlatacağım.

**![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/3ebe825d-72fd-4378-993e-aa5118a0df3e)

** İlk olaraktan kullanıcı sayfaya girdiğinde görüntüdeki gibi bir görünüm elde etmekte. Kullanıcı isterse ilk olaraktan gelir ve gider ekle butonlarıyla nakit giriş ve çıkışlarını ekleyebilmektedir.

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/736d0f2e-d39a-4cc0-a27e-ec36e94ea89f)

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/584d5df5-6747-4c9c-b9cd-0c1703095e4d)

** " Giderler " kısmında yine alıcı tarafından istenen sabit tutarları olan çocuk giderleri butonu bulunmaktadır. Bu buton tıklamasıyla kullanıcının sahip olduğu çocuk veya çocuklarının yaş grubunu ve
sayısını seçerekten alıcının belirlediği sabit miktarlar yaş grubu ve sayısına bağlı olaraktan değişmektedir. ( Alıcının belirlediği sabit tutarları JavaScript Kodlarının içerisinde bulabilirsiniz. )

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/91760d80-e294-46d8-86e7-f55d3f155185)

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/719af10f-6c8e-44b2-bdcb-5bcf5f3e8d45)

** " Gelirler " ve " Giderler " kısmı dışında " Varlıklar " ve " Borçlar " kısmı uygulamanın alt tarafında yer almaktadır. Kullanıcı " Varlıklar " kısmında 3 ana başlık altında varlıklarını ekleyebilir.
İlk olarak " Hisse / Temettü " alanından bahsedelim.

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/1fdb5c08-4c5f-4e9d-a4a7-95bb7025b543)

** Bu kısımda kullanıcı sahip olduğu hisse veya temettü gelirinin adını/kodunu yazaraktan bu varlığı aldığı fiyat bilgisini ve adetini girer. Son olarakta bu hisse veya temettünün kaç aylık periyotlarda
ne kadar temettü ödemesi yaptığını girerekten, seçtiği ay sayısı kadar temettü geliri bölünerekten aylık pasif geliri bulunmaktadır.

** Ekran görüntüsünde ASTOR kodlu hisseden 78.30 fiyatından 350 adet alındığını ve bu hissenin 6 aylık periyotlarda 4.38 temettü ödemesi yaptığı söylenmiştir. " Varlıklar " kısmına alıcının isteği doğrultusunda
o hissenin sırasıyla adı,maliyeti ( Adet * Alım Fiyatı ) ve adeti yazmaktadır. Ayrıyeten seçilen periyota göre elde edilen temettü geliri ( ( Hisse Başı Temettü Getirisi * Adet ) / 6 (Seçilen Periyot))
aylık olarak " Gelirler " kısmına aktarılır. Yani örnek ekran görüntüsündeki miktar ( ( 350 * 4.38 ) / 6 ) sonucu " Gelirler " kısmına eklenmesi gerekmektedir. ( 255.5 )

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/1b740599-4853-4f3b-af01-95574092f18c)

** " Varlıklar " kısmı altındaki alt başlık olan " Emlak " kısmında kullanıcı sahip olduğu emlak tipini, gelirini ve bu gelirin kaç aylık gelir olduğunu seçer. Sonuçlar yine aynı şekilde " Emlak " kısmına
ekran görüntüsündeki gibi eklenir. Emlak gelirinin aylık geliri hesaplanarak " Gelirler " Kısmına eklenir. 

** Örnek ekran görüntüsünde kullanıcı dükkanım adlı emlakı için 138000 / 12 Ay şeklinde veri girmiştir. Gelirler kısmına aylık gelir pasif gelir olaraktan eklenir. ( 138000 / 12 = 11.500)

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/84c964c8-53bc-48b0-93d8-3cb8b2c66845)

** " Varlıklar " kısmının son alt başlığı olan " Mevduat " Kısmı kullanıcı sahip olduğu bir mevduattan elde ettiği faiz gelirini hesaplar. Kullanıcı mevduat miktarını , bankanın uyguladığı faiz miktarını
ve son olarakta vade gün sayısını girerekten girdiği gün sayısındai kazancı " Mevduat " kısmına yansırken bu gelirin aylığa oranı yani 30 güne tekabül eden miktarı " Gelirler " kısmına aktarılır.

![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/9e1d2acc-a8fa-41bc-9d7b-a0204dc104b9)

** Örnekteki ekran görüntüsünde 100000 değerinde mevduatı olan, %40 faiz uygulayan ve 32 gün vadeye koyan birisinin vergi ( Genelde %5 ) düşülerek elde ettiği gelir 3331.51'dir. Bu gelirin aylık gelire
yansıyan miktarı ise 3123.29 olması gerekmektedir.

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/23f9740e-e919-4b79-aabf-88ca327fd7d4)

** Ünlü mevduat faiz oranı hesaplayan sitelerle kıysalandığında %100 doğru sonuç elde edilmektedir. Sonraki fotoğraftada görüldüğü gibi 100000 değerindeki mevduata %40 ve 32 günlük kazanç 3331.51'dir.

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/72b01361-8ad6-46aa-baa6-5355a943d86d)

** Son olarakta " Borçlar " kısmında kullanıcı sahp olduğu her hangi bir borcu girerek ana borç miktarı ve girdiği taksit sayısına göre aylık borç miktarı hesaplanır. 

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/34231222-996f-414a-a628-0920a1099045)

** Aylık hesaplanan değer ise " Giderler " kısmına yansır. Örnek ekran görüntüsündeki 1650000 değerindeki borç 96 taksite bölünerek aylık gidere 17187.50 miktarında eklenir.

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/55c8708c-1921-41ec-bc00-0f1619916341)

** Son olarak Toplamları Hesapla butonuyla artık net gelirinizi , pasif gelirinizi , aylık gider / gelir , pasif geliriniz ile ana borcunuzu ödeyebileceğiniz süreyi, pasif gelirinizin aylık giderinizi 
ne kadar oranda karşıladığını barlar yardımıyla kolay görebilmektesiniz. Buradaki amaç pasif gelire önem verilmesi gerektiği ve pasif gelirler ile giderlerinizi karşılayabilmenizi amaçlayan bir uygulamadır.

** ![image](https://github.com/boraavcu/Cash_Flow/assets/110854353/58bd410e-68b1-4128-9a22-92da4a316ec5)

** Toplamları Hesapla butonun yanındaki Sıfırla butonuyla bütün veriler silinerek en baştan tekrar hesaplayabilir veya girilen değerleri değiştirerek değişiklikler yapabilmektesiniz.

** Uygulama tamamen alıcının isteklerini göre yapılmıştır buna tüm tasarım dahildir arka plan, yazı fontları, pop up özellikleri vs. özelleştirilebilir.






