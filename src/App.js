import { useState } from "react";
import "./App.css";
import "./ScrollIndicator.css";
import { useEffect } from "react";
function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
      <h1>Roma Imparatorluğu</h1>
      <p>
        Roma İmparatorluğu, Roma Cumhuriyeti döneminde Augustus'un Cumhuriyeti
        tek başına yönetebilecek yetkiler alması ve Cumhuriyet döneminde kimseye
        verilmemiş haklara sahip olmasıyla oluşan Antik Roma devletidir.[1]
        Augustus, M.Ö. 2 yılına kadar Cumhuriyeti kendisinden sonra da tek bir
        kişinin yönetebilmesini sağlayacak anayasal reformlar gerçekleştirdi ve
        Roma İmparatorluğu tam anlamıyla oluşmuş oldu. Uzun yıllar Akdeniz
        çevresinde hüküm süren imparatorluk, 375 yılındaki Kavimler Göçü'yle
        başlayan iç karışıklıklardan sonra 395 tarihinde doğu ve batı olmak
        üzere ikiye ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç
        olarak kaldı. İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu
        Kavimler Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu
        476 yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu
        veya Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun
        yedinci Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür.
        "Roma İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu
        deyişte imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır.
        Roma İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı
        için kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının
        aşılması ve yayılma politikası imparatorluk döneminden çok önce
        başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık
        5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite"
        dönemindeki en geniş imparatorluğuydu. Augustus'un hükümdarlığından
        yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan
        Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı.
        Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3.
        yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda
        değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye
        dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa
        bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine
        yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu
        ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır. Batı
        Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık
        bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu
        Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan
        Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen
        olmuş, nüfusun yarısını barındırmıştır. Roma İmparatorluğu, Roma
        Cumhuriyeti döneminde Augustus'un Cumhuriyeti tek başına yönetebilecek
        yetkiler alması ve Cumhuriyet döneminde kimseye verilmemiş haklara sahip
        olmasıyla oluşan Antik Roma devletidir.[1] Augustus, M.Ö. 2 yılına kadar
        Cumhuriyeti kendisinden sonra da tek bir kişinin yönetebilmesini
        sağlayacak anayasal reformlar gerçekleştirdi ve Roma İmparatorluğu tam
        anlamıyla oluşmuş oldu. Uzun yıllar Akdeniz çevresinde hüküm süren
        imparatorluk, 375 yılındaki Kavimler Göçü'yle başlayan iç
        karışıklıklardan sonra 395 tarihinde doğu ve batı olmak üzere ikiye
        ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç olarak kaldı.
        İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu Kavimler
        Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu 476
        yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu veya
        Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun yedinci
        Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür. "Roma
        İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu deyişte
        imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır. Roma
        İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı için
        kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının
        aşılması ve yayılma politikası imparatorluk döneminden çok önce
        başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık
        5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite"
        dönemindeki en geniş imparatorluğuydu. Augustus'un hükümdarlığından
        yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan
        Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı.
        Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3.
        yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda
        değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye
        dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa
        bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine
        yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu
        ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır. Batı
        Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık
        bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu
        Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan
        Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen
        olmuş, nüfusun yarısını barındırmıştır. Roma İmparatorluğu, Roma
        Cumhuriyeti döneminde Augustus'un Cumhuriyeti tek başına yönetebilecek
        yetkiler alması ve Cumhuriyet döneminde kimseye verilmemiş haklara sahip
        olmasıyla oluşan Antik Roma devletidir.[1] Augustus, M.Ö. 2 yılına kadar
        Cumhuriyeti kendisinden sonra da tek bir kişinin yönetebilmesini
        sağlayacak anayasal reformlar gerçekleştirdi ve Roma İmparatorluğu tam
        anlamıyla oluşmuş oldu. Uzun yıllar Akdeniz çevresinde hüküm süren
        imparatorluk, 375 yılındaki Kavimler Göçü'yle başlayan iç
        karışıklıklardan sonra 395 tarihinde doğu ve batı olmak üzere ikiye
        ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç olarak kaldı.
        İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu Kavimler
        Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu 476
        yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu veya
        Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun yedinci
        Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür. "Roma
        İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu deyişte
        imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır. Roma
        İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı için
        kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının
        aşılması ve yayılma politikası imparatorluk döneminden çok önce
        başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık
        5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite"
        dönemindeki en geniş imparatorluğuydu. Augustus'un hükümdarlığından
        yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan
        Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı.
        Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3.
        yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda
        değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye
        dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa
        bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine
        yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu
        ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır. Batı
        Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık
        bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu
        Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan
        Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen
        olmuş, nüfusun yarısını barındırmıştır. Roma İmparatorluğu, Roma
        Cumhuriyeti döneminde Augustus'un Cumhuriyeti tek başına yönetebilecek
        yetkiler alması ve Cumhuriyet döneminde kimseye verilmemiş haklara sahip
        olmasıyla oluşan Antik Roma devletidir.[1] Augustus, M.Ö. 2 yılına kadar
        Cumhuriyeti kendisinden sonra da tek bir kişinin yönetebilmesini
        sağlayacak anayasal reformlar gerçekleştirdi ve Roma İmparatorluğu tam
        anlamıyla oluşmuş oldu. Uzun yıllar Akdeniz çevresinde hüküm süren
        imparatorluk, 375 yılındaki Kavimler Göçü'yle başlayan iç
        karışıklıklardan sonra 395 tarihinde doğu ve batı olmak üzere ikiye
        ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç olarak kaldı.
        İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu Kavimler
        Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu 476
        yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu veya
        Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun yedinci
        Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür. "Roma
        İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu deyişte
        imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır. Roma
        İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı için
        kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının
        aşılması ve yayılma politikası imparatorluk döneminden çok önce
        başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık
        5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite"
        dönemindeki en geniş imparatorluğuydu. Augustus'un hükümdarlığından
        yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan
        Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı.
        Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3.
        yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda
        değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye
        dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa
        bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine
        yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu
        ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır. Batı
        Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık
        bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu
        Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan
        Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen
        olmuş, nüfusun yarısını barındırmıştır. Roma İmparatorluğu, Roma
        Cumhuriyeti döneminde Augustus'un Cumhuriyeti tek başına yönetebilecek
        yetkiler alması ve Cumhuriyet döneminde kimseye verilmemiş haklara sahip
        olmasıyla oluşan Antik Roma devletidir.[1] Augustus, M.Ö. 2 yılına kadar
        Cumhuriyeti kendisinden sonra da tek bir kişinin yönetebilmesini
        sağlayacak anayasal reformlar gerçekleştirdi ve Roma İmparatorluğu tam
        anlamıyla oluşmuş oldu. Uzun yıllar Akdeniz çevresinde hüküm süren
        imparatorluk, 375 yılındaki Kavimler Göçü'yle başlayan iç
        karışıklıklardan sonra 395 tarihinde doğu ve batı olmak üzere ikiye
        ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç olarak kaldı.
        İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu Kavimler
        Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu 476
        yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu veya
        Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun yedinci
        Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür. "Roma
        İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu deyişte
        imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır. Roma
        İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı için
        kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının
        aşılması ve yayılma politikası imparatorluk döneminden çok önce
        başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık
        5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite"
        dönemindeki en geniş imparatorluğuydu. Augustus'un hükümdarlığından
        yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan
        Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı.
        Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3.
        yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda
        değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye
        dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa
        bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine
        yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu
        ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır. Batı
        Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık
        bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu
        Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan
        Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen
        olmuş, nüfusun yarısını barındırmıştır. Roma İmparatorluğu, Roma
        Cumhuriyeti döneminde Augustus'un Cumhuriyeti tek başına yönetebilecek
        yetkiler alması ve Cumhuriyet döneminde kimseye verilmemiş haklara sahip
        olmasıyla oluşan Antik Roma devletidir.[1] Augustus, M.Ö. 2 yılına kadar
        Cumhuriyeti kendisinden sonra da tek bir kişinin yönetebilmesini
        sağlayacak anayasal reformlar gerçekleştirdi ve Roma İmparatorluğu tam
        anlamıyla oluşmuş oldu. Uzun yıllar Akdeniz çevresinde hüküm süren
        imparatorluk, 375 yılındaki Kavimler Göçü'yle başlayan iç
        karışıklıklardan sonra 395 tarihinde doğu ve batı olmak üzere ikiye
        ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç olarak kaldı.
        İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu Kavimler
        Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu 476
        yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu veya
        Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun yedinci
        Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür. "Roma
        İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu deyişte
        imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır. Roma
        İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı için
        kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının
        aşılması ve yayılma politikası imparatorluk döneminden çok önce
        başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık
        5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite"
        dönemindeki en geniş imparatorluğuydu. Augustus'un hükümdarlığından
        yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan
        Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı.
        Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3.
        yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda
        değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye
        dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa
        bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine
        yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu
        ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır. Batı
        Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık
        bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu
        Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan
        Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen
        olmuş, nüfusun yarısını barındırmıştır. Roma İmparatorluğu, Roma
        Cumhuriyeti döneminde Augustus'un Cumhuriyeti tek başına yönetebilecek
        yetkiler alması ve Cumhuriyet döneminde kimseye verilmemiş haklara sahip
        olmasıyla oluşan Antik Roma devletidir.[1] Augustus, M.Ö. 2 yılına kadar
        Cumhuriyeti kendisinden sonra da tek bir kişinin yönetebilmesini
        sağlayacak anayasal reformlar gerçekleştirdi ve Roma İmparatorluğu tam
        anlamıyla oluşmuş oldu. Uzun yıllar Akdeniz çevresinde hüküm süren
        imparatorluk, 375 yılındaki Kavimler Göçü'yle başlayan iç
        karışıklıklardan sonra 395 tarihinde doğu ve batı olmak üzere ikiye
        ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç olarak kaldı.
        İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu Kavimler
        Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu 476
        yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu veya
        Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun yedinci
        Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür. "Roma
        İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu deyişte
        imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır. Roma
        İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı için
        kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının
        aşılması ve yayılma politikası imparatorluk döneminden çok önce
        başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık
        5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite"
        dönemindeki en geniş imparatorluğuydu. Augustus'un hükümdarlığından
        yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan
        Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı.
        Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3.
        yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda
        değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye
        dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa
        bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine
        yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu
        ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır. Batı
        Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık
        bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu
        Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan
        Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen
        olmuş, nüfusun yarısını barındırmıştır.
      </p>
    </div>
  );
}

export default App;
