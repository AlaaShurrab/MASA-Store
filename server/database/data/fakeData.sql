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
        -- 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        N'حقيبة لابتوب 15 بوصة',
        -- `ةصوب بوتبال ةبيقح`,
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

INSERT INTO
    cart(
        user_id,
        product_id,
        quantity
    )
VALUES
('1','1','5'),
('1','13','1'),
('1','11','3'),
('1','5','10'),
('2','1','5'),
('2','12','1'),
('2','19','3'),
('2','4','10'),
('2','2','1'),
('2','7','1'),
('2','10','1'),
('5','2','1');

INSERT INTO
    favourite(
        user_id,
        product_id
    )
VALUES
('1','5'),
('1','13'),
('1','11'),
('1','5'),
('2','5'),
('2','12'),
('2','19'),
('2','4'),
('2','2'),
('2','7'),
('2','10'),
('5','2');


INSERT INTO
    orders(
        user_id,
        product_id,
        quantity,
        price,
        payment_method,
        order_number
    )
VALUES
('3','1','5','549.75','cash','123325'),
('3','13','1','599','cash','123325'),
('3','11','3','329.7','cash','123325'),
('3','5','10','6950','cash','123325'),
('4','1','5','549.75','cash','123325456'),
('4','12','1','114','cash','123325456'),
('4','19','3','23.85','cash','123325456'),
('4','4','10','159.9','cash','123325456'),
('4','2','1','22.3','cash','123325456'),
('4','7','1','9.99','cash','123325456'),
('4','10','1','109','cash','123325456'),
('6','2','1','22.3','cash','123');
