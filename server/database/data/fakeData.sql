INSERT INTO
    users(
        email,
        password,
        first_name,
        last_name,
        avatar,
        shipping_address1,
        shipping_address2,
        city) VALUES
    (
        'john@gmail.com',
        'PASSWORD',
        'john',
        'doe',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'new road',
        '7682',
        'kilcoole'
    ),
(
        'morrison@gmail.com',
        'PASSWORD',
        'david',
        'morrison',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'Lovers Ln',
        '7267',
        'kilcoole'
    ),
(
        'kevin@gmail.com',
        'PASSWORD',
        'kevin',
        'ryan',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'Frances Ct',
        '86',
        'Cullman'
    ),
(
        'don@gmail.com',
        'PASSWORD',
        'don',
        'romer',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'Hunters Creek Dr',
        '6454',
        'San Antonio'
    ),
(
        'derek@gmail.com',
        'PASSWORD',
        'derek',
        'powell',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'adams St',
        '245',
        'san Antonio'
    ),
(
        'david_r@gmail.com',
        'PASSWORD',
        'david',
        'russell',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'prospect st',
        '124',
        'el paso'
    ),
(
        'miriam@gmail.com',
        'PASSWORD',
        'miriam',
        'snyder',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'saddle st',
        '1342',
        'fresno'
    ),
(
        'william@gmail.com',
        'PASSWORD',
        'william',
        'hopkins',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'vally view ln',
        '1342',
        'mesa'
    ),
(
        'kate@gmail.com',
        'PASSWORD',
        'kate',
        'hale',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'avondale ave',
        '345',
        'miami'
    ),
(
        'jimmie@gmail.com',
        'PASSWORD',
        'jimmie',
        'klein',
        'https://aui.atlassian.com/aui/8.6/docs/images/avatar-person.svg',
        'oak lawn ave',
        '526',
        'fort wayne'
    );

INSERT INTO
    products(
        name,
        description,
        img_url,
        category,
        new_price,
        rating
    )
VALUES
(
        'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        'men clothing',
        '109.95',
        '3.2366492489753718'
    ),
(
        'Mens Casual Premium Slim Fit T-Shirts ',
        'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'men clothing',
        '22.3',
        '2.4172423116498987'
    ),
(
        'Mens Cotton Jacket',
        'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        'men clothing',
        '55.99',
        '1.4277521321272235'
    ),
(
        'Mens Casual Slim Fit',
        'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        'men clothing',
        '15.99',
        '3.360767138153312'
    ),
(
        'John Hardy Women Legends Naga Gold & Silver Dragon Station Chain Bracelet',
        'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        'jewelery',
        '695',
        '0.315900419728099'
    ),
(
        'Solid Gold Petite Micropave ',
        'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        'jewelery',
        '168',
        '4.668630555300851'
    ),
(
        'White Gold Plated Princess',
        'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine Day...',
        'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        'jewelery',
        '9.99',
        '1.8965325463657423'
    ),
(
        'Pierced Owl Rose Gold Plated Stainless Steel Double',
        'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        'jewelery',
        '10.99',
        '3.869977165506956'
    ),
(
        'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
        'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
        'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        'electronics',
        '64',
        '0.3631458935812548'
    ),
(
        'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
        'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        'electronics',
        '109',
        '1.4365629042592543'
    ),
(
        'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        'electronics',
        '109',
        '2.930976629816453'
    ),
(
        'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer limited warranty',
        'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        'electronics',
        '114',
        '0.7761883552346915'
    ),
(
        'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        'electronics',
        '599',
        '1.3548439483855412'
    ),
(
        'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
        '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
        'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        'electronics',
        '999.99',
        '1.7034841837111636'
    ),
(
        'BIYLACLESEN Women 3-in-1 Snowboard Jacket Winter Coats',
        'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
        'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        'women clothing',
        '56.99',
        '2.800876267851379'
    ),
(
        'Lock and Love Women Removable Hooded Faux Leather Moto Biker Jacket',
        '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
        'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        'women clothing',
        '29.95',
        '0.8709507919374704'
    ),
(
        'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesnt overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.',
        'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        'women clothing',
        '39.99',
        '0.8293614013276662'
    ),
(
        'MBJ Women Solid Short Sleeve Boat Neck V ',
        '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        'women clothing',
        '9.85',
        '0.7494247722205838'
    ),
(
        'Opna Women Short Sleeve Moisture',
        '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        'women clothing',
        '7.95',
        '2.1535786297603297'
    ),
(
        'DANVOUY Womens T Shirt Casual Cotton Short',
        '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
        'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        'women clothing',
        '12.99',
        '0.4662170255627329'
    );









--     (
--         'حقيبة لابتوب 15 بوصة',
--         -- `حقيبتك لمثالية للاستخدام اليومي والمشي في الغابة قم بتخزين الكمبيوتر المحمول حتى 15 بوصة في الجراب المبطّن  كل يوم`,
--         'description',
--         'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
--         'fashion',
--         109.95,
--         '3.2366492489753718'
--     ),
-- (       
--         -- `تي شيرت رجالي كاجوال بريميوم بقصة ضيقة`,
--         -- `تصميم نحيف ، وأكمام طويلة راجلان متباينة ، وفتحة هينلي بثلاثة أزرار ، وخفيفة الوزن ونسيج ناعم للتنفس والارتداء المريح. وقمصان مخيطة صلبة برقبة دائرية مصنوعة من أجل المتانة ومناسبة تمامًا للملابس غير الرسمية وعشاق البيسبول. يشتمل خط العنق الدائري بنمط Henley على فتحة بثلاثة أزرار.`,
--         'name',
--         'description',
--         'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
--         'fashion',
--         22.3,
--         '2.4172423116498987'
--     );
-- (       `جاكيت من القطن للرجال`,
--         'سترات خارجية رائعة لفصل الربيع / الخريف / الشتاء ، مناسبة للعديد من المناسبات ، مثل العمل ، والمشي ، والتخييم ، وتسلق الجبال / الصخور ، وركوب الدراجات ، والسفر ، أو في الهواء الطلق. هدية جيدة لك أو لأفراد عائلتك. محبة دافئة للأب أو الزوج أو الابن في عيد الشكر أو عيد الميلاد هذا.',
--         'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
--         'fashion',
--         '55.99',
--         '1.4277521321272235'
--     ),
-- (       `Men's Casual Slim Fit`,
--         `قد يختلف اللون قليلاً بين على الشاشة وفي الممارسة. / يرجى ملاحظة أن هياكل الجسم تختلف باختلاف الشخص ، لذلك ، يجب مراجعة معلومات الحجم التفصيلية أدناه في وصف المنتج.`,
--         'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
--         'fashion',
--         '15.99',
--         '3.360767138153312'
--     ),
-- (       `سوار جون هاردي للسيدات من سلسلة أساطير النجا الذهبية والفضية`,
--         `من مجموعة Legends الخاصة بنا ، استلهم Naga من تنين الماء الأسطوري الذي يحمي لؤلؤة المحيط. البس الوجه الداخلي لينعم بالحب والوفرة ، أو بالخارج للحماية.`,
--         'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
--         'jewelery',
--         '695',
--         '0.315900419728099'
--     ),
-- (       `ميكروراف صغير من الذهب الخالص`,
--         `الرضا مضمون. استرجع أو استبدل أي طلب خلال 30 يومًا. صممه وبيعه مركز حفيظ في الولايات المتحدة. الرضا مضمون. استرجع أو استبدل أي طلب خلال 30 يومًا.`,
--         'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
--         'jewelery',
--         '168',
--         '4.668630555300851'
--     ),
-- (       `خاتم الأميرة مطلي بالذهب الأبيض`,
--         `خاتم الوعد الماس سوليتير الخطوبة الكلاسيكي الكلاسيكي لها. هدايا تفسد حبك أكثر للخطوبة والزفاف والذكرى السنوية وعيد الحب ...`,
--         'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
--         'jewelery',
--         '9.99',
--         '1.8965325463657423'
--     ),
-- (       `بومة مثقوبة مطلية بالذهب الوردي ستانلس ستيل مزدوج`,
--         `أقراط نفق مزدوجة مطلية بالذهب الوردي. مصنوعة من الفولاذ المقاوم للصدأ 316L ،`,
--         'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
--         'jewelery',
--         '10.99',
--         '3.869977165506956'
--     ),
-- (       `محرك الأقراص الصلبة الخارجي المحمول WD 2TB Elements - USB 3.0`,
--         `التوافق مع USB 3.0 و USB 2.0 نقل البيانات السريع يحسن أداء الكمبيوتر عالي السعة ؛ NTFS مهيأ التوافق لأنظمة التشغيل Windows 10 و Windows 8.1 و Windows 7 ؛ قد تكون إعادة التهيئة مطلوبة لأنظمة التشغيل الأخرى ؛ قد يختلف التوافق اعتمادًا على تكوين الأجهزة ونظام التشغيل الخاص بالمستخدم ،`,
--         'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
--         'electronics',
--         '64',
--         '0.3631458935812548'
--     ),
-- (       ` SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s`,
--         `ترقية سهلة للتمهيد والإغلاق وتحميل التطبيقات والاستجابة بشكل أسرع (مقارنة بمحرك الأقراص الثابتة 5400 RPM SATA 2.5 بوصة ؛ استنادًا إلى المواصفات المنشورة واختبارات قياس الأداء الداخلية باستخدام نتائج PCMark vantage) يعزز أداء الكتابة المتواصل ، مما يجعله مثاليًا لأحمال عمل الكمبيوتر النموذجية التوازن المثالي بين الأداء والموثوقية سرعات قراءة / كتابة تصل إلى 535 ميجابايت / ثانية / 450 ميجابايت / ثانية (بناءً على الاختبار الداخلي ؛ قد يختلف الأداء حسب سعة محرك الأقراص والجهاز المضيف ونظام التشغيل والتطبيق.)`,
--         'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
--         'electronics',
--         '109',
--         '1.4365629042592543'
--     ),
-- (       `محرك أقراص Silicon Power 256GB SSD 3D`,
--         `يتم تطبيق فلاش NAND ثلاثي الأبعاد لتقديم سرعات نقل عالية سرعات نقل ملحوظة تتيح بدء تشغيل أسرع وتحسين أداء النظام بشكل عام. تتيح تقنية SLC Cache المتقدمة تعزيز الأداء وعمر أطول بتصميم نحيف 7 مم مناسب لأجهزة Ultrabooks وأجهزة الكمبيوتر المحمولة فائقة النحافة. يدعم أمر TRIM وتقنية تجميع القمامة و RAID و ECC (فحص الأخطاء وتصحيحها) لتوفير أداء محسن وموثوقية محسنة.`,
--         'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
--         'electronics',
--         '109',
--         '2.930976629816453'
--     ),
-- (       `محرك أقراص WD 4TB للألعاب يعمل مع محرك الأقراص الصلبة الخارجي المحمول Playstation 4 ،`,
--         `قم بتوسيع تجربة ألعاب PS4 ، العب في أي مكان سريعًا وسهلاً ، الإعداد تصميم أنيق بسعة عالية ، ضمان محدود من الشركة المصنعة لمدة 3 سنوات`,
--         'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
--         'electronics',
--         '114',
--         '0.7761883552346915'
--     ),
-- (
--         'شاشة ألعاب ماركة سامسونج مقاس ٤٩ بوصة فائقة الدقة',
--         `21. شاشة عريضة 5 بوصة عالية الدقة (1920 × 1080) بتقنية IPS وتقنية Radeon free Sync. لا توافق مع معدل تحديث VESA Mount: 75 هرتز - باستخدام منفذ HDMI تصميم بدون إطار | رقيقة جدا | وقت استجابة 4 مللي ثانية | نسبة العرض إلى الارتفاع للوحة IPS - 16: 9. الألوان المدعومة - 16. 7 مليون لون. السطوع - 250 شمعة زاوية الميل - 5 درجة إلى 15 درجة. زاوية الرؤية الأفقية 178 درجة. زاوية الرؤية العمودية 178 درجة 75 هيرتز`,
--         'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
--         'electronics',
--         '599',
--         '1.3548439483855412'
--     ),
-- (
--         'شاشة ألعاب ماركة سامسونج مقاس ٤٩ بوصة فائقة الدقة ',
--         `شاشة ألعاب منحنية مقاس 49 بوصة فائقة الدقة بنسبة 32: 9 مزودة بشاشة مزدوجة مقاس 27 بوصة جنبًا إلى جنب بتقنية QUANTUM DOT (QLED) ودعم HDR ومعايرة المصنع توفر ألوانًا واقعية ودقيقة بشكل مذهل وتباين 144 هرتز معدل تحديث عالٍ ووقت استجابة سريع للغاية 1 مللي ثانية يعمل على القضاء على ضبابية الحركة والظلال وتقليل تأخر الإدخال`,
--         'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
--         'electronics',
--         '999.99',
--         '1.7034841837111636'
--     ),
-- (
--         'جاكيت نسائي لون رمادي ',
--         `ملاحظة: السترات هي المقاس القياسي للولايات المتحدة ، يرجى اختيار المقاس حسب ارتدائك المعتاد المادة: 100٪ بوليستر ؛ نسيج بطانة قابل للفصل: صوف دافئ. بطانة وظيفية قابلة للفصل: صديقة للبشرة وخفيفة الوزن ودافئة. سترة بياقة واقفة ، تبقيك دافئًا في الطقس البارد. جيوب بسحاب: 2 جيوب يد بسحاب ، جيبان بسحاب على الصندوق (يكفي للاحتفاظ بالبطاقات أو المفاتيح) ، وجيب مخفي بالداخل. جيوب يد بسحاب وجيب مخفي تحافظ على أغراضك آمنة. تصميم متوافق مع البشر: غطاء قابل للتعديل وقابل للفصل وسوار قابل للتعديل لمنع الرياح والمياه ، من أجل نوبة مريحة. يوفر التصميم القابل للفصل 3 في 1 مزيدًا من الراحة ، يمكنك فصل المعطف والداخلي حسب الحاجة ، أو ارتدائهم معًا. إنها مناسبة لمختلف المواسم وتساعدك على التكيف مع المناخات المختلفة`,
--         'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
--         'fashion',
--         '56.99',
--         '2.800876267851379'
--     ),
-- (
--         'جاكيت نسائي واقي للمطر لون أسود مصنوع من الجلد',
--         `100٪ بولي يوريثين (صدفة) 100٪ بوليستر (بطانة) 75٪ بوليستر 25٪ قطن (سترة) ، مادة جلد صناعي للأناقة والراحة / 2 جيوب أمامية ، 2-For-One مقنعين سترة من الجلد الصناعي ، تفاصيل زر على خياطة الخصر / التفاصيل على الجانبين ، غسيل يدوي فقط / لا تستخدم التبييض / تجفيف الخط / لا تقم بالحديد`,
--         'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
--         'fashion',
--         '29.95',
--         '0.8709507919374704'
--     ),
-- (
--         'جاكيت نسائي واقي للمطر ',
--         `خفيفة الوزن مثالية لرحلة أو ملابس غير رسمية - أكمام طويلة مع تصميم خصر بغطاء قابل للتعديل. معطف واق من المطر للإغلاق من الأمام بأزرار وسحاب ، وخطوط مبطنة بالكامل ومعطف واق من المطر يحتوي على جيوب جانبية بحجم جيد لاستيعاب جميع أنواع الأشياء ، ويغطي الوركين ، وغطاء المحرك سخي ولكنه لا يبالغ في ذلك. هود مرفق مبطن بالقطن مع أربطة قابلة للتعديل لمنحها مظهرًا حقيقيًا.`,
--         'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
--         'fashion',
--         '39.99',
--         '0.8293614013276662'
--     ),
-- (
--         'تي شيرت أبيض نسائي قصير الأكمام ماركة اوبنا',
--         `95٪ رايون 5٪ سباندكس ، صنع في الولايات المتحدة الأمريكية أو مستورد ، لا تستخدم المبيض ، قماش خفيف الوزن مع امتداد كبير للراحة ، مضلع على الأكمام وخط العنق / خياطة مزدوجة على الحاشية السفلية`,
--         'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
--         'fashion',
--         '9.85',
--         '0.7494247722205838'
--     ),
-- (
--         'تي شيرت احمر نسائي قصير الأكمام ماركة اوبنا',
--         `100٪ بوليستر ، يغسل بالغسالة ، 100٪ بوليستر كاتيوني داخلي ، يغسل بالغسالة ومنكمش مسبقًا للحصول على مقاس رائع وخفيف الوزن وفسيح وقابل للتهوية بدرجة عالية مع نسيج ماص للرطوبة يساعد على إبقاء الرطوبة بعيدًا ، قماش ناعم خفيف الوزن مع ياقة مريحة على شكل V مقاس أكثر نحافة ، ويوفر صورة ظلية أكثر أناقة وأكثر أنوثة وراحة إضافية`,
--         'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
--         'fashion',
--         '7.95',
--         '2.1535786297603297'
--     ),
-- (
--         'تي شيرت نسائي ماركة دانفو',
--         `95٪ قطن ، 5٪ سباندكس ، الميزات: كاجوال ، كم قصير ، طباعة حروف ، رقبة على شكل V ، تي شيرت عصري ، القماش ناعم وله بعض التمدد ، المناسبة: كاجوال / مكتب / شاطئ / مدرسة / منزل / شارع. الموسم: الربيع ، الصيف ، الخريف ، الشتاء.`,
--         'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
--         'fashion',
--         '12.99',
--         '0.4662170255627329'
--     );
