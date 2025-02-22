const products = [
    {
        //1
            tagline: 'Top Deal', 
            id: 'product1',
            url: 'Images/product1.jpg',
            detailUrl: '/Images/product1.jpg',
            title: {
                shortTitle: 'Gold Bathroom Mirrors, Kitchen appliances, Electronic gadgets and more',
                longTitle: '22x30 Brushed Gold Bathroom Mirror, Metal Gold Framed Vanity Mirror, Modern Rectangle Wall Mirror for Entryway, Anti-Rust (Horizontal/Vertical)'
            }, 
            price: {
                mrp: 500.99,
                cost: 225.99,
                discount: '55%'
            },
            description:{
                line1:'With round corner metal frame, CHARMOR gold bathroom mirror looks elegant and feels smooth.',
                line2:'Unlike other fragile mirrors, all CHARMOR metal framed mirrors are made of 4mm tempered glass which is shatterproof and 5 times sturdier than ordinary mirrors.',
                line3:'The frame material is premium alumium alloy with brushed texture, which is stylish and more durable. CHARMOR gold framed mirrors provide 5 years warranty. We sure that our products survive the shipping, if there is any damage or any other problems, please do not hesitate to contact us in time. ',
                line4:'All CHAMROR gold vanity mirrors are designed with high quality HD tempered glass. It presents extra clear reflection image to show your beauty. Suitable for various home scenarios, like cloakroom, dressing room, powder room and so on.',
                line5:'The packing protects the mirror completely. We are committed to providing safe and all-round protection of the mirror packaging to ensure that the mirror is delivered to the customer intact. Gold is more like rose gold, with a hint of champagne rose gold. If you cannot accept it, please be careful when placing an order.',
            },
    },
    {
        //2
        tagline: 'Deals in PCs',
            id: 'product2',
            url: 'Images/product2.jpg',
            detailUrl: '/Images/product2.jpg',
            title: {
                shortTitle: '',
                longTitle: 'Gaming PC Desktop Intel 12th I5-12400F, 6 core 2.5GHz Desktop Computer, GeForce RTX3050, 32G DDR4 RAM, 1TB NVME SSD, Tower Computer for Gaming, Home and Office (Black)',
            }, 
            price: {
                mrp: 1020.98,
                cost: 816.78,
                discount: '20%'
            },
            description: {
                line1:'Processor (CPU): Intel Core i5-12400F, which is the mid-range model of Intel\'s 12th generation Core series, has 6 cores and 12 threads. This processor excels in performance and can easily handle the demands of multitasking and large games.',
                line2:'Graphics card (GPU): GeForce RTX 3050, an entry-level model of NVIDIA\'s Ampere architecture, supports real-time ray tracing and DLSS technology.',
                line3:'Memory (RAM): 32GB DDR4 RAM, which is a considerable amount of memory capacity and crucial for gaming and multitasking. High-capacity memory allows the computer to run multiple programmes at the same time without lagging, whether it\'s opening multiple browser tabs, running specialised software, or playing large games.',
                line4:'Storage: 1TB NVMe SSD, Solid State Drives (SSDs) have faster read and write speeds compared to traditional mechanical hard drives (HDDs), which means your computer boots up faster, games load faster.',
                line5:'Design & Extras: The PC is equipped with 5× RGB RGB fans and lighting effects. These lights can be set according to the user\'s preference.'
             },
    },
    {
        //3
        tagline: 'Home décor under $50', 
            id: 'product3',
            url: 'Images/product3.jpg',
            detailUrl: '/Images/product3.jpg',
            title: {
                shortTitle: '',
                longTitle: '10inches Large Clear Glass Vase for Flowers, Classic Hand Blown Glass Vase for Table, Elegant Ribbed Vase for Room, Clear'
            }, 
            price: {
                mrp: 49.56,
                cost: 41.63,
                discount: '16%'
            },
            description: {
                line1:'[Multi-function: Versatile and Elegant] Add a touch of classic and stylish elegance to your dining table or setting with this gorgeously designed glass vase.',
                line2:'[Sturdy and durable: Quality that lasts] Rest assured that your flower arrangements will stay secure in this vase, thanks to its solid and weighty base.',
                line3:'[Handcrafted beauty: Unique charm in every detail] The handcrafted touch of this glass vase is showcased through delicate imperfections that add to its distinct character.',
                line4:'[Generous capacity: Perfect for abundant blooms] With a well-balanced and sturdy bottom, this vase can hold a generous number of flowers.  Its stability not only keeps your flowers in place but also contributes to the overall quality and longevity of the product',
                line5:'[Product Size: Ideal dimensions] Measuring 10.04" in height and 5.90" in width, this flower vase is perfectly suited for showcasing 3-20 stems. Its moderate opening allows for a beautiful arrangement',
            },
    },
    {
        //4
        tagline: 'Refresh your space',             
            id: 'product4',
            url: 'Images/product4.jpg',
            detailUrl: '/Images/product4_detail.jpg',
            title: {
                shortTitle: 'Dining',
                longTitle: '60 Pieces Luxury Europe Style Bone China Tableware Sets Food Bowl Plates Top-grade Dinner Set Utensils for Home Dinner Set Dishes Plates Sets Porcelain Dinnerware and Serveware'
            }, 
            price: {
                mrp: 850.99,
                cost: 721.62,
                discount: '12%',
            },
            description: {
                line1:'Elegant high-end and affordable Bone China. Brilliant European High Quality Gold used in the Border design. More smooth than usual dinner sets, yet still sturdy, safe for the old and kid use. Take good care of it, it can be used for years over years',
                line2:'Dishwasher Safe for easy clean up. Dishes stack very well for easy storage.',
                line3:'Set includes a 6 piece place setting for 8 people. 8-10.5" Dinner Plates, 8-8.5" Soup Bowls, 8-7.5" Salad Plates, 8-5.5" Fruit or Dessert Bowls, 8- Tea Cups, 8-Tea Saucers. Tip: plan out the measurements on a ruler to give you an idea of its actual size before purchasing',
                line4:'Built to withstand daily use, these dishes are highly resistant to wear, ensuring long-term durability without compromising elegance.',
                line5:'Great for any holiday or family gathering. All the pieces you need for a great meal in 1 box. Great for Weddings, Anniversaries, Birthday, Mother\'s Day, Hanukkah, Passover, Easter, or just a regular Sunday dinner.',
            },
    },
        //5
    {   
        tagline :'',
            id: 'product5',
            url: 'Images/product5.jpg',
            detailUrl: '/Images/product5_detail.jpg',
            title: {
                shortTitle: 'Home',
                longTitle: 'Modern Chandeliers for Living Room Crystal Ceiling Light Fixture LED Dimmable Lamp with Remote Pendant Lighting Flush Mount Ceiling Lighting for Dining Room Bedrooms'
            }, 
            price: {
                mrp: 705.0,
                cost: 634.5,
                discount: '10%'
            },
            description: {
                line1:'【Crystal Chandelier】K9 crystal & polished stainless steel, can reflect and refract light to reach exquisite and opulent effect. Featuring a polished chorme finish for a sleek shine, it uses warm, add splendor and style to your home',
                line2:'【Crystal Chandelier Size】Diameter: 47.2 inches. Height: 17.7 inches. Please check the size of lighting fixtures before buying',
                line3:'【Dimmable LED Chandelier】Brightness can be freely adjusted from 10-100% via remote control offered. The color tempearature dimmable range is 2700K-6000K. The modern chandelier light fixture has built-in LED lights, which is with long service life over 50000 working hrs, can also save a lot of electricity. Power: 60W, Lumen:4800, CRI up to 90, Voltage: 110-240V.',
                line4:'【Wide Applications】Crystal ceiling light suits for any room like a living room, dining room, hallway, study room, entrance, foyer, showroom, kitchen island, hotel, etc',
                line5:'【Warranty】6-year. 24 hours service, if there any problems, we provide replacement parts for any damaged or missing accessories.',
            },
    },
    {
        //6
        tagline:'',
            id: 'product6',
            url: 'Images/product6.jpg',
            detailUrl: '/Images/product6_detail.jpg',
            title: {
                shortTitle: 'Kitchen',
                longTitle: 'Kitchen Glass Food Storage Containers with Lids - 23oz Glass Canister Set with Airtight lids for Candy Nuts Oats Flour Cereals Food Storage Jars(3PCS)'
            }, 
            price: {
                mrp: 25.80,
                cost: 21.93,
                discount: '15%'
            },
            description: {
                line1:'【Glass Material】: The love jar is made of glass, which is safe and non-toxic, and can be used repeatedly. Thickened glass is more durable.',
                line2:'【Size and capacity】: small: 5.9*3.9 inches. Small: 23oz, these sealed containers meet all your storage needs.（Data is approximate, everything is subject to the actual product, please allow a margin of error of 0.2 inch）',
                line3:'【Decorative Design】: The coffee canister has a heart-shaped design, which is cute and beautiful. It can be used as a beautiful decoration in the kitchen, living room, or office. The clear glass jar can also be used as a storage jar for candy, nuts, oats, flour, cereals, etc.',
                line4:'【Wide Application】: The coffee canister can be used as a coffee canister, sugar canister, tea canister, spice canister, etc. It is also a great gift for friends and family.',
                line5:'【Easy to Clean】: The coffee canister is easy to clean. You can wash it with water or put it in the dishwasher. The glass lid is also easy to clean, and it can be washed repeatedly.',
            },
    },
    //7
    {
        tagline:'',
            id: 'product7',
            url: 'Images/product7.jpg',
            detailUrl: '/Images/product7_detail.jpg',
            title: {
                shortTitle: 'Health and Beauty',
                longTitle: 'CHARLOTTE TILBURY 90s Pink Rose Gloss and Rose Lipstick Duo - 90s Pink K.I.S.S.I.N.G Lipstick and Ibiza Nights Lip Lustre'
            }, 
            price: {
                mrp: 57.50,
                cost: 48.00,
                discount: '17%'
            },
            description: {
                line1:'Charlotte Tilbury 90s Pink Rose Gloss and Rose Lipstick Duo',
                line2:'INCLUDES: 0.05 oz / 1.5 g Mini K.I.S.S.I.N.G Lipstick in shade 90s Pink (warm rosewood) and 0.11 fl oz / 3.5 mL Full Size Lip Lustre in shade Ibiza Nights (rose gold shine).',
                line3:'Charlotte Tilbury\'s K.I.S.S.I.N.G formula delivers a soft-satin shine finish, while Lip Lustre gloss adds a high shine lacquer for fuller-looking lips that wow. Iconic Lip Duo for a Natural Look: Features Charlotte Tilbury\'s bestselling K.I.S.S.I.N.G Fair Lipstick and Lip Cheat Lip Liner in a flattering cool pink-nude shade, perfect for enhancing fair skin tones.',
                line4:'Charlotte Tilbury\'s K.I.S.S.I.N.G lipstick smooths over lips to create a seamless line, resize, and reshape for a fuller pout. It lasts up to six hours thanks to a no-smudge, waterproof formula that won\'t feather or transfer.',
                line5:' The texture is rich and velvety to layer comfortably on your lips. With a range of 15 shades that can be matched—nudes, reds, berries, and pop colors—to perfect any lip. Wear alone or with a gloss for a lighter finish. New In Box!!',
            },
    },
    {
        //8
        tagline: 'Gifts for every Mom',
            id: 'product8',
            url: 'Images/product8.jpg',
            detailUrl: '/Images/product8_detail.jpg',
            title: {
                shortTitle: '',
                longTitle: 'Moissanite Necklace and Earring Set, 2.8 Carat Moissanite Necklace, Birthday Gifts for Women Wife, Weeding Anniversary Present for Wife Women, Jewelry Gift for Girlfriend Mom Girls'
            }, 
            price: {
                mrp: 228.83,
                cost: 194.95,
                discount: '14%'
            },
            description: {
                line1:'【Combine Love and Smile 】Moissanite pendant Necklace for women is smile as the theme, allowing the stones to form a smile curve between your collarbone. I want to tell you that my love for you will shine on our lives just like the radiance of your smile.The centerpiece of the moissanite necklace is a stunning 1 carat main drill, with additional elegance provided by D color diamond side stones totaling 2.8 carats.',
                line2:'【 Moissanite Hoop Earrings】 The hoop earrings for women feature D color VVS1 moissanite are made of S925 sterling silver, lead-free and nickel-free, friendly for your sensitive ears.',
                line3:'【Unparalleled Brilliance】Moissanite is a lab-created diamond and passes the diamond tester. It is birefringent and has a fire color that is more than 2.5 times that of a diamond. ',
                line4:'【Unique Authenticity Coding】This Moissanite necklace for women features extreme cutting that creates perfect, symmetrical facets, resulting in unprecedented brilliance. ',
                line5:'【Perfect Gift For Your Loved One】This moissanite necklace and earring set comes in a beautiful jewelry box, making it a perfect gift for your wife, girlfriend, or mom. ',
            },
    },
    {
        //9
        tagline:'Amazon Gadget Store',
            id: 'product9',
            url: 'Images/product9.jpg',
            detailUrl: '/Images/product9_detail.jpg',
            title: {
                shortTitle: 'Smartphones',
                longTitle: 'Panasonic HC-X2000 UHD 4K 3G-SDI/HDMI Pro Camcorder with 24x Zoom W/ 7" 4K Monitor + 2 x Sandisk Extreme Pro 64GB Cards + Headphones + UV and HD Filter Kit + Tripod + Mic + Soft Case + More'
            }, 
            price: {
                mrp: 2300.049,
                cost: 2254.95,
                discount: '2%'
            },
            description: {
                line1:'BUNDLE INCLUDES: 1 x Panasonic HC-X2000 UHD 4K 3G-SDI/HDMI Pro Camcorder with 24x Zoom | 1 x Sony ECM-VG1 Electret Condenser Shotgun Microphone | 1 x 7" Full HD Monitor with 4K Support |...and more',
                line2:'INDUSTRY\'S SMALLEST AND LIGHTEST 4K/60P CAMCORDER - Professional shooting everywhere: HC-X2000 packs advanced functions',
                line3:'FLEXIBLE FRAMING WITH 25MM WIDE-ANGLE AND 24X OPTICAL ZOOM - The lens covers the range from 25mm wide-angle to 600mm tele with a 24x zoom.',
                line4:'5-AXIS HYBRID IMAGE STABILISATION - In addition to the Optical Image Stabilization in the lens, Electronic Image Stabilization detects and corrects camera shake.',
                line5:'FULL-HD LIVE STREAMING - RTSP/RTP/RTMP/RTMPS-compatible HD streaming enables direct connection and distribution of relays for concerts, sports events etc.',
            },
    },
    {
        //10
        tagline:'',
            id: 'product10',
            url: 'Images/product10.jpg',
            detailUrl: '/Images/product10_detail.jpg',
            title: {
                shortTitle: 'Tablets',
                longTitle: 'SAMSUNG Galaxy Tab S10+ Plus 12.4” 256GB, Android Tablet, Circle to Search, Sketch to Image, Durability, Long Battery Life, AMOLED 2X Screen, S Pen Included, US Version, 2024, Moonstone Gray'
            }, 
            price: {
                mrp: 999.9,
                cost: 849.99,
                discount: '15%'
            },
            description: {
                line1:'INNOVATIVE ART POWER: Turn your simple sketches into works of art instantly using Sketch to Image¹ with Galaxy AI.²',
                line2:'MAKE A LONG STORY SHORT: Capture your lecture, meeting, or daily notes and let Note Assist⁴ with Galaxy AI² do the hard work of organizing and even summarizing them for you.',
                line3:'NEXT-LEVEL NOTE TAKING: Get transcripts and summaries of recorded lectures and meetings, just like that.⁵ PACKED WITH POWER: No matter what you take on or where you take your Galaxy Tab S10+.',
                line4:'BIG SCREEN. BREATHTAKING BRILLIANCE: Enjoy unbelievable brilliance with reduced glare from anywhere on a 12.4" Dynamic AMOLED 2X screen.⁶',
                line5:'CONVENIENTLY CONTROL YOUR HOME: Enhance your home life using the SmartThings Home Insight Widget to conveniently automate home controls and see more at a glance with Map View on your Galaxy Tab S10 Series device.⁷',
            },
    },
    {
        //11
        tagline:'',
            id: 'product11',
            url: 'Images/product11.jpg',
            detailUrl: '/Images/product11_detail.jpg',
            title: {
                shortTitle: 'Laptops',
                longTitle: 'HP EliteBook 840 G11 (Latest Model) 14" Notebook - Intel Core Ultra 7 155U - 32 GB - 512 GB SSD - Silver - FHD+ (1920 x 1200) Windows 11 Pro'
            }, 
            price: {
                mrp: 2550.0,
                cost: 2499.0,
                discount: '2%'
            },
            description: {
                line1:'HP Elitebook 840 G11 (Latest 2024 Model) with Core Ultra 7 Series | HP 3 Year Factory Warranty. Intel Core Ultra 7-155U (3.8 GHz, up to 4.8 GHz, 12 MB cache, 12 core) + Intel Graphics | 512GB PCIe Gen4 SSD | 32GB DDR5 5600Mhz RAM',
                line2:'14" diagonal WUXGA LED UWVA Anti-Glare for IR Webcam (1920x1200)(300 Nits) | Integrated Fingerprint Reader | Intel AX211 Wi-Fi 6E and Bluetooth 5.3, vPro | 65W USB-C Adapter | Spill Resistant Backlit Keyboard | 56Whr Battery',
                line3:'2 Thunderbolt 4 with USB Type-C 40Gbps signaling rate (USB Power Delivery, DisplayPort 1.4); 2 USB Type-A 5Gbps signaling rate (1 charging, 1 power); 1 HDMI 2.1; 1 stereo headphone/microphone combo jack',
                line4:'Wireless Wi-Fi 6E (2x2) and Bluetooth 5.3 wireless card; 2 USB Type-C 40Gbps signaling rate (USB Power Deli-very, DisplayPort 1.4); 2 USB Type-A 5Gbps signaling rate (1 charging, 1 power); 1 HDMI 2.1.',
                line5:'Operating system: Windows 11 Professional (64-bit). HP Standard Keyboard with numeric keypad, spill-resistant, Durakey keyboard - Clickpad with multi-touch gesture support; Fingerprint reader; Mouse included. Bundled with vent-hear Cable.',
            },
    },
    {
        //12
        tagline:'',
            id: 'product12',
            url: 'Images/product12.jpg',
            detailUrl: '/Images/product12_detail.jpg',
            title: {
                shortTitle: 'TVs',
                longTitle: 'Sony 85 Inch 4K Ultra HD TV X77L Series: LED Smart Google TV KD85X77L- Latest Model, Black'
            }, 
            price: {
                mrp: 1205.0,
                cost: 1144.75,
                discount: '5%'
            },
            description: {
                line1:'POWERFUL TV PROCESSING– The 4K Processor X1 delivers a lifelike picture that is full of rich colors and sharp details. ENHANCED COLOR AND FINE DETAILS– See natural and precise picture quality with a wide array of colors and dynamic contrast.',
                line2:'PREMIUM SMART TV – Get access to all your favorite streaming apps in one place with Google TV, and simply use your voice to search and ask questions with Google Assistant. Supports Apple AirPlay.',
                line3:'EXCLUSIVE FEATURES FOR PLAYSTATION 5 – Take your gaming to the next level with exclusive features Auto HDR Tone Mapping and Auto Genre Picture Mode for optimized picture quality while gaming and streaming on your PS5 console.',
                line4:'INTELLIGENT MOTION HANDLING– See blur-free picture quality in fast-moving sports and action-packed movies powered by Motionflow XR.',
                line5:'UPSCALE ALL YOUR CONTENT– Bring back lost texture and detail and see all your content upscaled to near-4K resolution with 4K XR-Reality PRO. WORKS WITH ALEXA – Through an Alexa enabled device, ask Alexa to change channels, adjust volume, and turn your TV on/off.',
            },
    },
    {
        //13
        tagline: 'Shop deals in Fashion',             
            id: 'product13',
            url: 'Images/product13.jpg',
            detailUrl: '/Images/product13_detail.jpg',
            title: {
                shortTitle: 'Jeans under $50',
                longTitle: 'Lee Women\'s Ultra Lux Comfort with Flex Motion Bootcut Jean'
            }, 
            price: {
                mrp: 30.99,
                cost: 27.89,
                discount: '10%'
            },
            description: {
                line1:'Mid rise, regular fit. The design of flared trouser style, perfect to highlight your long straight leg easily and make you more charming',
                line2:'Featuring flexible non-binding waistband. Skinny bootcut women\'s jeans are designed to show off your beautiful leg silhouette and curves',
                line3:'5 pocket denim with back pocket detail stitching. Lee carefully selects super-elastic, soft, lightweight and breathable fabrics so you can sit or squat freely in all positions',
                line4:'Rise: 10 inches, leg opening: 18 inches, n: short: 30 inches, medium: 32 inches, long: 34 inches',
                line5:'Product Measurements were taken using size 10 medium. Please note that Measurements may vary by size. Lee sweatpant jeans can be paired with T-shirts, tank tops, slingbacks and blouses, and are perfect for everyday wear, work, holidays, dating, parties, etc',
            },
    },
    {
        tagline:'',
            id: 'product14',
            url: 'Images/product14.jpg',
            detailUrl: '/Images/product14_detail.jpg',
            title: {
                shortTitle: 'Tops under $50',
                longTitle: 'GRACE KARIN Women\'s V Neck Casual Work Tops 3/4 Sleeve Office Dressy Blouse Top Asymmetrical Elegant Shirts'
            }, 
            price: {
                mrp: 40.98,
                cost: 33.60,
                discount: '18%'
            },
            description: {
                line1:'STYLISH DESIGN: Women\'s wrap V-neck 3/4 sleeve fall top has a ruched waist design that can accentuate your body curves. The asymmetric hem design is more unique and gives you an elegant feel.',
                line2:'MULTIPLE COLORS: Black Casual Business Blouse Tops/Fall Apricot 3/4 Sleeve Work Tops/Collared V Neck Dark Red Blouse Tops/Grey Blue Ruched Wrap Blouse Shirts/Dark Red Tank Top for Women/Asymmetrical Hem Elegant Teal Top.This 3/4 sleeeve wrap dressy top is made of 95%Polyester,5%Elastane',
                line3:'MATCHING: Fall collared casual blouses are suitable for all body types.You can show off your amazing charm by matching it with jeans, trousers, hip-hugging skirts, heels, leather shoes, casual shoes, etc',
                line4:'OCCASION: Elegant 3/4 sleeve top is perfect for shopping, working, traveling, going out, holidays, dating, outdoors, leisure, daily wear, birthday party, and photography show',
                line5:'Elegant and simple, this casual elegant ruched work top is sure to be a window must-have',
            },
    },
    {
        //15
        tagline:'',
            id: 'product15',
            url: 'Images/product15.jpg',
            detailUrl: '/Images/product15_detail.jpg',
            title: {
                shortTitle: 'Dresses under $55',
                longTitle: 'GRACE KARIN Women 2025 Summer V Neck Short Sleeve Button Knit Color Block A Line Elegant Formal Work Dresses with Pocket'
            }, 
            price: {
                mrp: 42.99,
                cost: 33.99,
                discount: '21%'
            },
            description: {
                line1:'Size Guide: S=US 4-6, M=US 8-10, L=US 12-14, XL=US 16-18. The women\'s formal dress is crafted from ribbed knit fabric, and enough elastic to wrap your body.',
                line2:'Features: short sleeve, v neck, decorative buttons, color-blocked design, contrasting color trim, high waist, above knee length but below mid-thigh, modest swing a line dress, slim fit, ribbed knit, solid color, 4 functional front pockets, business casual dress, formal work dresses for women 2025.',
                line3:'The women\'s spring summer dress exudes elegance and fashion, effortlessly transitioning from casual to formal. You can pair it with a necklace, hat, and heels to create a cocktail dress, a wedding guest dress, or create an office dress.',
                line4:'Occasions: This elegant dressy dress is suitable for any occasion, whether semi-formal or date night, such as work, office, business casual, profession, church, school, graduation, going out, dinner, cocktail parties, dates, engagement, travel, or holidays.',
                line5:'Garment Care: Machine wash is recommended with a laundry bag, Machine washable with like colors, do not bleach, and hang to dry.',
            },
    },
    {
        tagline:'',
            id: 'product16',
            url: 'Images/product16.jpg',
            detailUrl: '/Images/product16_detail.jpg',
            title: {
                shortTitle: 'Shoes under $50',
                longTitle: 'ERKIES Top Layer Cowhide Rhinestone Strap Fashion Sandals and high Heels (9cm) (Color : White, Size : 5.5)'
            }, 
            price: {
                mrp: 300.99,
                cost: 255.85,
                discount: '15%'
            },
            description: {
                line1:'Our products are purely hand-carved, heavy-duty and luxurious, using special materials and designing more elegant and feminine elements.',
                line2:'Appearance design: Rhinestone + cow patent leather + lambskin, fully show the feminine charm, outline the slender and graceful outline of bare feet',
                line3:'Sole design: comfortable high heel, wanton concave shape, wear out the aura, create a sense of temperament',
                line4:'Stilettos are the best gift for friends, lovers on birthdays, Valentine\'s Day, ceremonies and wedding anniversaries. You and your girlfriend/lover, tell your stories, accompanied by soft and beautiful piano music, romantic atmosphere, witness your romantic wedding.',
                line5:'Our guarantee: The price and quality of all products in this store are equal. We do not sell inferior products, so there is no need to hesitate for the price. The original intention of making this product is to make more people feel happy and share love and happiness.',
            },
    },
    {
        tagline: 'Gaming accessories',              
            id: 'product17',
            url: 'Images/product17.jpg',
            detailUrl: '/Images/product17_detail.jpg',
            title: {
                shortTitle: 'Headsets',
                longTitle: '2.4GHz Wireless Gaming Headset for PC, Ps5, Ps4 - Lossless Audio USB & Type-C Ultra Stable Gaming Headphones with Flip Microphone, 40-Hr Battery Gamer Headset for Switch, Laptop, Mobile, Mac'
            }, 
            price: {
                mrp: 49.99,
                cost: 40.99,
                discount: '18%'
            },
            description: {
                line1:'【Amazing Stable Connection-Quick Access to Games】Real-time gaming audio with our 2.4GHz USB & Type-C ultra-low latency wireless connection. With less than 30ms delay, you can enjoy smoother operation and stay ahead of the competition.',
                line2:'【Game Communication-Better Bass and Accuracy】The 50mm driver plus 2.4G lossless wireless transports you to the gaming world, letting you hear every critical step, reload, or vocal in Fortnite, Call of Duty, The Legend of Zelda and RPG. ',
                line3:'【Flexible and Convenient Design-Effortless in Game】Ideal intuitive button layout on the headphones for user. Multi-functional button controls let you instantly crank or lower volume and mute, quickly answer phone calls, cut songs, turn on lights, etc.',
                line4:'【Less plug, More Play-Dual Input From 2.4GHz & Bluetooth】 Wireless gaming headset adopts high performance dual mode design. With a 2.4GHz USB dongle, which is super sturdy, lag＜30ms, perfectly made for gamers.',
                line5:'【Wide Compatibility with Gaming Devices】Setup the perfect entertainment system by plugging in 2.4G USB. The convenience of dual USB work seamlessly with your PS5,PS4, PC, Mac, Laptop, Switch and saves you from swapping cables.',
            },
    },
    {
        tagline:'',
            id: 'product18',
            url: 'Images/product18.jpg',
            detailUrl: '/Images/product18_detail.jpg',
            title: {
                shortTitle: 'Keyboards',
                longTitle: 'Redragon K686 PRO SE 98 Keys Wireless Gasket RGB Gaming Keyboard, 3-Mode Anime Mechanical Keyboard w/Hot-Swap Socket, Dedicated Knob Control & 5-Layer Noise Dampening, Custom Hi-Fi Linear Switch'
            }, 
            price: {
                mrp: 74.99,
                cost: 54.99,
                discount: '27%'
            },
            description: {
                line1:'Redragon Anime Girl OUT - Here comes the adorable and reliable ally of Redragon, personalized waifu character Eisa reporting! 5 sides Dye-Sub PBT keycaps covered with themed patterns and elements offer unparalleled touch and vibe.',
                line2:'GASKET Design - The body structure differs from traditional screw fixing by using precision-locked covers with gaskets to assist with noise reduction and flexibility. ',
                line3:'3-Mode Connection - Geared with Redragon advanced tri-mode connection technology, USB-C wired, BT 3.0/5.0 & 2.4Ghz wireless modes which make the user experience upgraded to another level in all fields.',
                line4:'Hi-Fi Custom Switch - With thick-lubed custom linear switches combo with a gasket form factor, Eisa features faster, creamy and elastic typing feedback. The brand new upgraded socket is nearly all switches(3/5 pins) compatible.',
                line5:'Noise Dampening x 5 - Equipped with 3.5mm PO foam, IXPE switch foam, PET sound pad, bottom socket foam, silicone bottom pad along with the silicone gasket. ',
            },
    },
    {
        tagline:'',
            id: 'product19',
            url: 'Images/product19.jpg',
            detailUrl: '/Images/product19_detail.jpg',
            title: {
                shortTitle: 'Computer mice',
                longTitle: 'ASUS ROG Spatha X Wireless Gaming Mouse (Magnetic Charging Stand, 12 Programmable Buttons, 19,000 DPI, Push-fit Hot Swap Switch Sockets, ROG Micro Switches&Paracord and Aura RGB lighting),Black'
            }, 
            price: {
                mrp: 149.99,
                cost: 102.03,
                discount: '32%'
            },
            description: {
                line1:'Dual-mode Connectivity - ROG Spatha X Wireless Gaming Mouse allows you play wirelessly with 2.4 GHzRF, or with a wired USB-C cable connection.',
                line2:'Ultimate Accuracy - 19,000 DPI optical sensor provides unmatched accuracy. The DPI On-The-Scroll feature lets you easily adjust the sensitivity of the wireless mouse without accessing software',
                line3:'Durable Switches & Put-fit Switch Sockets - Gold-plated electro-junction, provides a 70-million clicks; Exclusive put-in switch sockets allow you to easily replace switches based on your preference',
                line4:'Ultra-long Battery Life - Charge it via USB-C cable or with the included magnetic charging stand. 15 minutes can provide up to 12 hours of wireless gaming; Enjoy 67 hours of play time on a full charge',
                line5:'Programmable Gaming Mouse - The 12 programmable buttons are positioned within easy reach, all designed to provide intuitive, responsive control.',
            },
    },
    {
        tagline:'',
            id: 'product20',
            url: 'Images/product20.jpg',
            detailUrl: '/Images/product20_detail.jpg',
            title: {
                shortTitle: 'Chairs',
                longTitle: 'OneGame Ergonomic Gaming Chair, Racing Style PU Leather Gamer Chair, Adjustable Backrest Swivel Office Game Chair with Lumbar Support, LvoryBlack'
            }, 
            price: {
                mrp: 139.99,
                cost: 129.99,
                discount: '7%'
            },
            description: {
                line1:'✔【SCIENTIFIC STRUCTURE】- The ergonomic human-centered structural design and high-quality molded foam can maintain a soft touch while giving you a good support for your neck, lumbar and back.',
                line2:'✔【SELECTED MATERIALS】- Made of high quality, multi-layer, wear-resistant PU leather with detailed embroidery, stain-resistant and easy to clean. High quality molded sponge makes this gaming chair sit for a long time without collapsing, strong rebound.',
                line3:'✔【MULTI-FUNCTION】- 360° swivel, reinforced base with a maximum weight capacity of 330lbs. Rear tilt 155° with getaway function. 3D armrests, seat height adjustable.',
                line4:'✔【EASY ASSEMBLY】- Detailed instructions and installation videos are provided, easy to install. Most people can finish the installation within 20 minutes.',
                line5:'✔【PROFESSIONAL CUSTOMER SERVICE】: Our customer service team is available 24 hours a day to provide you with professional product advice and service.',
            },
    },
    {
        tagline: 'Shop activity trackers and smartwatches',
            id: 'product21',
            url: 'Images/product21.jpg',
            detailUrl: '/Images/product21_detail.jpg',
            title: {
                shortTitle: '',
                longTitle: 'Smart Watch for Women iPhone & Android, 1.8" Smartwatch with Bluetooth (Answer/Makes) Built-in Alexa, Fitness & Sleep Tracker with 110+ Sport Modes, Heart Rate/SpO2 Monitor, IP68 Waterproof',
            }, 
            price: {
                mrp: 69.99,
                cost: 59.49,
                discount: '15%'
            },
            description: {
                line1:'【BLUETOOTH CALLS & SMART NOTIFICATIONS】The smartwatch comes equipped with a speaker and microphone, on-wrist Bluetooth calls, view call logs, and set up frequently used contacts.',
                line2:'【110+ SPORT MODES & IP68 WATERPROOF】This fitness tracker supports over 110 mainstream sports modes, providing accurate and scientific data for various indoor and outdoor activities, including running, cycling, swimming, baseball, fitness, yoga, and free workouts.',
                line3:'【1.8“ HD SCREEN & PERSONALIZED DIAL】This sports watch for women men is equipped with a 1.8” inch HD LCD touch screen featuring high touch sensitivity and superb picture quality.',
                line4:'【24/7 ACCURATE HEALTH MONITORING】This smart watch is equipped with cutting-edge sensors that accurately track your steps, distance, and calories.',
                line5:'【WIDELY COMPATIBILITY & LONG BATTERY LIFE】This smart watch is compatible with smartphones running iOS and Android systems, quick and stable pairing.',
            }, 
    },
    {
        tagline: 'Gaming merchandise',           
            id: 'product22',
            url: 'Images/product22.jpg',
            detailUrl: '/Images/product22_detail.jpg',
            title: {
                shortTitle: 'Apparel',
                longTitle: 'Deyeek Men\'s Polo Shirts Long Sleeve Golf Polo Shirts for Men Quick Dry UPF 50+ Sun Protection Polos Casual Collared Shirts'
            }, 
            price: {
                mrp: 24.99,
                cost: 19.99,
                discount: '20%'
            },
            description: {
                line1:'【Material】：The mens long sleeve polo are made of 99.99%polyester, which is quick dry, lightweight and breathable fabric. it\'s dries quickly and is next-to-skin comfort, ensures stay cool all the day in spring, summe, autumn.',
                line2:'【Classic Design】：Our mens polo shirts design with classical three-button and polo collar, also there is a pocket on the left sleeve.',
                line3:'【Sun Protection】：Mens polo shirts fabric in addition to breathable, also have sun protection. it can prevent your skin from the UPF 50+, UV rays, protects your skin from sunburn in summer.',
                line4:'【Flexibility】：The polo shirt is elastic as a whole, elastic stretch will move with you for added movement comfort. Small slits in the hemline designed to reduce bunching and perfectly reflect the figure.',
                line5:'【Note】：If you want more looser fit, it is recommended to choose one size larger to buy. If you have any questions, please contact us in any time, we will reply your message as soon as possible.',
            }, 
    },
    {
        tagline:'',
            id: 'product23',
            url: 'Images/product23.jpg',
            detailUrl: '/Images/product23_detail.jpg',
            title: {
                shortTitle: 'Hats',
                longTitle: 'Lucky Brand Cotton Embroidered Baseball Cap with Adjustable Straps for Men and Women (One Size Fits Most)'
            }, 
            price: {
                mrp: 36.50,
                cost: 29.20,
                discount: '20%'
            },
            description: {
                line1:'COTTON TWILL: The Lucky Brand 1990 Embroidered Dad Hat in Red is made of high quality brushed cotton twill construction, providing a comfortable fit and stylish appearance',
                line2:'EMBROIDERED LOGO DESIGN: This hat features an eye-catching embroidered logo for an unmistakable look',
                line3:'ADJUSTABLE: This Lucky hat features an adjustable back closure that comes with a brass finish metal logo clover clamp',
                line4:'TRUSTED BRAND: Lucky Brand is a well-known and respected brand that has been producing high quality clothing and accessories for decades. With a commitment to craftsmanship and attention to detail, Lucky Brand has built a reputation for producing stylish and durable products that stand the test of time.',
                line5:'HIGH QUALITY MATERIAL: A-Z Personalized Gifts Baseball Cap for Women Is Made Of 100 Precent Cotton. Our A-Z Personalized Gifts Baseball Hat Has a Printing on the Surface. Full A-Z Big Letters Are Optional, With Interesting Patterns and Nice Color To Keep You In a Good Mood Every Day, Highlight Your Personality, This Personalized Gifts Hats Is An Excellent Choice for Your Own Use Or for Your Friends and Family, Making Every Gifts Personal and Memorable.',
            }, 
    },
    {
        tagline:'',
            id: 'product24',
            url: 'Images/product24.jpg',
            detailUrl: '/Images/product24_detail.jpg',
            title: {
                shortTitle: 'Action Figures',
                longTitle: 'Surreal Entertainment The Office Double Dwight Resin Bobblehead | Collectible Action Figure Statue, Desk Toy Accessories | Novelty Gifts for Home Office Decor | 5 Inches Tall'
            }, 
            price: {
                mrp: 27.95,
                cost: 19.95,
                discount: '29%'
            },
            description: {
                line1:'Double The Dwight: Designed in the likeness of Dwight Schrute, this must-have bobblehead figure provides twice the comic relief with a bonus Dwight bobblehead in his hand. During stressful days at the office, this figurine is sure to make you smile.',
                line2:'Made For Fans Of The Office: Designed with fans of the comedy series in mind, this Double Dwight bobblehead figure is perfect for keeping an eye on the "Jim" at your work. ',
                line3:'Premium Construction: Built to far surpass Dunder Mifflin\'s quality standards, this Dwight Schrute figure stands at approximately 5 inches tall. ',
                line4:'Novelty Desk Decor: The collectible size of this bobblehead character figure is ideal for displaying. Express your favorite fandom in your home and office space with this Dwight resin figurine from the smash-hit TV series The Office.',
                line5:'Official Collectible: Fans of the hit comedy series will love adding this officially licensed Dwight Schrute bobblehead to their collection of The Office merchandise.',
            }, 
    },
    {
        tagline:'',
            id: 'product25',
            url: 'Images/product25.jpg',
            detailUrl: '/Images/product25_detail.jpg',
            title: {
                shortTitle: 'Mugs',
                longTitle: 'Bosmarlin Large Ceramic Coffee Mug, 20 Oz, Big Tea Cup for Office and Home, Dishwasher and Microwave Safe (Pink, 20 Oz)'
            }, 
            price: {
                mrp: 18.99,
                cost: 17.99,
                discount: '5%'
            },
            description: {
                line1:'STURDY & DURABLE: Designed with strong ceramic construction, made of lead-free, cadmium-free, high quality ceramic. Suitable for hot and cold drinks. Dishwasher and microwave safe.',
                line2:'EASY TO HOLD: Big handle can keep it from rotating when you try to hold the mug, which helps you enjoy your tea/coffee comfortably.',
                line3:'UNIQUE GLAZE: So simple but classic design. Every mug is unique because of the special reactive glaze technique. A choice of four stylish colors makes a great gift for the Holidays, birthdays and special occasions.',
                line4:'NOTICE: This is a reactive glaze mug and every one is different. This mug has a large capacity(20 oz), which will definitely meet your needs for office and home.',
                line5:'If you have any problem with our mug after received, just contact us! We promise that we will make every effort to solve it. We care deeply for our customers and make you our top priority! Thank you!',
            }, 
    },
    {
        tagline: 'Player\'s paradise starts here',
            id: 'product26',
            url: 'Images/product26.jpg',
            detailUrl: '/Images/product26_detail.jpg',
            title: {
                shortTitle: '',
                longTitle: 'KTC 27" 240hz Gaming Monitor 1440p(2560× 1440) 144Hz 1ms Fast HVA HDR400 130% sRGB HDMI & DisplayPort AdaptiveSync VESA Tilt Eye Care',
            }, 
            price: {
                mrp: 349.99,
                cost: 299.99,
                discount: '14%'
            },
            description: {
                line1:'【QHD& 240Hz】This 27 Inch Monitor offers a remarkable 240Hz Gaming Monitor refresh rate and a 1ms response time, ensuring ultra-smooth gameplay. With a 1440p Monitor resolution.',
                line2:'【Versatile Connectivity 】This Computer Monitor provides flexible connection choices. The HDMI 2.0 port supports up to 144Hz Monitor, while the DisplayPort connection enables a high 240Hz Monitor refresh rate. ',
                line3:'【AdaptiveSync Technology】 Experience a seamless gaming session with this 240hz 1440p gaming monitor’s AdaptiveSync technology. Compatible with 240Hz Gaming Monitor G-SYNC, this monitor minimizes screen tearing and stuttering, making it perfect for a smooth PC Monitor Gaming setup.',
                line4:'【Vibrant and Accurate Colors】Equipped with a FAST HVA panel, this 27 Inch Gaming Monitor offers exceptional color accuracy, a wide viewing angle, and a high contrast ratio. ',
                line5:'【Eye-Friendly Gaming】 Designed for extended sessions, this KTC 27 Inch Monitor features Low Blue Light and Flicker-Free technologies.',
            }, 
    },
    {
        tagline: 'Laptops for every need',
            id: 'product27',
            url: 'Images/product27.jpg',
            detailUrl: '/Images/product27_detail.jpg',
            title: {
                shortTitle: '',
                longTitle: 'Dell Latitude 7330 Laptop (2022) | 13.3" 1920x1080 FHD | Core i7-1265U - 256GB SSD Hard Drive - 16GB RAM | 10 cores @ 4.8 GHz Win 11 Pro Black',
            }, 
            price: {
                mrp: 3150,
                cost: 2047.5,
                discount: '35%'
            },
            description: {
                line1:'[ New But Upgraded ] This is a new computer in the original retail packaging but might have been opened by the seller to upgrade the Hard Drive. Released in 2022 The Latitude 7330 Laptop is DELL\'s latest release in the 13" Latitude 7000 family.',
                line2:'[ Display & Graphics ] This Latitude 7330 Laptop comes with a 13.3" Non-Touch Screen with (1920x1080) resolution for stunningly clear visuals and a integrated graphics card built into the INTEL Core i7-1265U processor which will use the computer\'s 16GB of RAM for the graphics memory.',
                line3:'[ High Speed RAM And Processor ] The 16GB DDR4 RAM Running @ 3200MHz and the 10 cores on the 12th generation INTEL 10-core Processor will let you smoothly run multiple applications and browser tabs all at once and a 256GB PCIe NVMe M.2 Solid State Drive will provide fast startup, data transfers, and large file storage!',
                line4:'[ Operating System ] Windows 11 is Microsoft\'s latest Operating System released in 2022 and if you want to downgrade to the older windows 10, you can downgrade with an easy download from Microsoft\'s website.',
                line5:'[ Extra Details ] A Wecbam comes integrated. Wifi and Bluetooth come integrated.',
            }, 
    },
    {
        tagline: 'Creating business solutions',
            id: 'product28',
            url: 'Images/product28.jpg',
            detailUrl: '/Images/product28_detail.jpg',
            title: {
                shortTitle: '',
                longTitle: 'Solution Business: Building a Platform for Organic Growth (Management for Professionals)',
            }, 
            price: {
                mrp: 69.99,
                cost: 62.99,
                discount: '10%'
            },
            description: {
                line1:'Success in solution business starts by accepting that solutionbusiness is a separate business model, not simply another product category or an extension of the existing product business.',
                line2:'This book identifies the business model areas that firms need to focus on when transforming into solution business. It further organizes these areas into three sets of capabilities and practices: commercialization, industrialization and solution platforms.',
                line3:'This is the first book to take a comprehensive view of success in solution business and its relevance therefore extends to all functions of firms wanting to become solution providers as well as to many managerial levels.',
                line4:'Commercialization refers to a firm’s ability to understand customers’ value-creating processes and to create solutions that enable improved value creation for customers. It also refers to a firm’s ability to sell the solutions and to receive compensation based on customers’ value-in-use.',
                line5:'Industrialization refers to a firm’s ability to standardize the solution in order to create repeatability and scalability. To support repeatability, firms need to develop common processes so that the solutions can be efficiently replicated across regions and time.',
            }, 
    },
    {
        tagline: 'A whole new way to work',
            id: 'product29',
            url: 'Images/product29.jpg',
            detailUrl: '/Images/product29_detail.jpg',
            title: {
                shortTitle: '',
                longTitle: 'Griffin Elevator Laptop Stand - Ergonomic Computer Riser & Laptop Mount Made of Sturdy Brushed Aluminum - Supports Posture & Elevates Workspace with a Minimal Design, Space Grey Clear (2.5 Oz)',
            }, 
            price: {
                mrp: 69.99,
                cost: 59.99,
                discount: '14%'
            },
            description: {
                line1:'Elevate Your Workspace - Take your comfort and productivity to the next level with Griffin\'s Elevator Laptop Stand.',
                line2:'Exceptional Design Meets Functionality - This laptop riser, crafted from high-quality aluminum, ensures durability and adds elegance to your workspace. A versatile accessory that supports all computer models, including MacBook and more.',
                line3:'Multi-Use Features - The perfect multi-functional addition to your ergonomic desk accessories. Doubling as a computer stand and keyboard mount the minimal design was created to keep your laptop safter and offer comfortable all day use.',
                line4:'Simple and Convenient Usage - Experience the difference from one of Griffin\'s work from home must haves. The elevated angle promotes better posture and viewing comfort.',
                line5:'Trust In Griffin - As a leading provider of laptop accessories, Griffin is committed to enhancing your convenience and productivity. ',
            },  
    },
    {
        tagline: 'Warm & welcoming decor',             
            id: 'product30',
            url: 'Images/product30.jpg',
            detailUrl: '/Images/product30_detail.jpg',
            title: {
                shortTitle: 'Wreaths & garlands',
                longTitle: '30 Inch Diwali Decorations Artificial Jasmine Garland with Lotus Buds Pooja Decoration Indian Traditional Mogra Jasmine Garland Wall Hanging for Varalakshmi Puja (White,5 Pcs)'
            }, 
            price: {
                mrp: 19.99,
                cost: 16.99,
                discount: '15%'
            },
            description: {
                line1:'Festival Finesse: enjoy an instant embellishment with our set of 5 artificial jasmine garlands, with vibrant, delightfully eye catching lotus buds.',
                line2:'Captivating Handcrafted Creation: step into a world that brings alive the intricacies of traditional Indian craftsmanship, our Diwali toran bandhanwars are intricately handmade.',
                line3:'Reliable Material Use: crafted keeping longevity in mind, our Diwali toran bandhanwars are made from quality polyester, ensure the stunning decor piece retains its charm and stays endearing for years.',
                line4:'Ideal Size for Striking Presence: measuring approximately 30 inches or 76 cm in length, our Diwali decoration fits gracefully in your indoor spaces, making a charismatic statement.',
                line5:'Light up Your Diwali: revel in the extraordinary spirit of Diwali with our uniquely designed toran wall hung bandhanwars, radiating the essence of this grand festival.',
            }, 
    },
    {
        tagline:'',
            id: 'product31',
            url: 'Images/product31.jpg',
            detailUrl: '/Images/product31_detail.jpg',
            title: {
                shortTitle: 'Outdoor decor',
                longTitle: 'Solar Pathway Lights Outdoor, 6 Pack Upgraded Outdoor Solar Lights for Outside Super Bright Up to 12Hrs, IP65 Waterproof Solar Garden Lights for Yard Landscape Path Walkway Decoration'
            }, 
            price: {
                mrp: 59.99,
                cost: 39.97,
                discount: '33%'
            },
            description: {
                line1:'MODERN SOLAR PATHWAY LIGHTS OUTDOOR: Featuring a stylish stripe transparent shade, and upgraded brighter LED tungsten filament.',
                line2:'HIGH BRIGHTNESS & LONG LASTING: The solar outdoor lights use upgraded high-powered LED tungsten lamp beads which provide higher brightness and longer working time compared with other solar pathway lights.',
                line3:'100% SOLAR POWERED & AUTO ON/OFF: No external power supply or wiring needed. The outdoor solar lights equipped with highly efficient monocrystalline solar panel have 20% higher energy converting rate than other solar garden lights.',
                line4:'LONG SERVICE LIFE SOLAR PATH LIGHTS: The transparent shade of the solar lights for yard is made of super thick and sturdy PC material.',
                line5:'TWO HEIGHT OPTIONS & EASY INSTALLATION: Choose one pole or two for installation, adjustable height of the solar pathway lights can greatly meet your different lighting and decoration needs.',
            }, 
    },
    {
        tagline:'',
            id: 'product32',
            url: 'Images/product32.jpg',
            detailUrl: '/Images/product32_detail.jpg',
            title: {
                shortTitle: 'Pillows & throws',
                longTitle: 'Fancy Homi 4 Packs Neutral Decorative Throw Pillow Covers 22x22 Inch for Living Room Couch Bed Sofa, Rustic Farmhouse Boho Home Decor, Soft Plush Striped Corduroy Square Cushion Case 55x55 cm'
            }, 
            price: {
                mrp: 32.99,
                cost: 28.04,
                discount: '15%'
            },
            description: {
                line1:'Package: 4 pcs pillow covers (NO INSERT).Perfectly fit for the same size pillow insert. Please Note: Hidden zipper is well disguised and stitched in across one side.',
                line2:'Exquisite Chic Design: Unique striped pattern adds cuteness to these pillow covers. It\'s a nice gift for your families and friends.',
                line3:'Softness & Durability: The soft fabric is silky hand-feel, can keep you feel comfy and cozy. The cases are well made without loose threads and tightly sewn stitching. A great support for you to lean or lay on.',
                line4:'Easy for Replacing: This cushion cover has a super long invisible zipper which improves the appearance and provides easy insertion and removal.',
                line5:'Washing Tips: Machine Washable in gentle mode. Tumble Dry Low, Do not iron and it\'ll look brand new.',
            }, 
    },
    {
        tagline:'',
            id: 'product33',
            url: 'Images/product33.jpg',
            detailUrl: '/Images/product33_detail.jpg',
            title: {
                shortTitle: 'Wall art & mirrors',
                longTitle: '64PCS 1 MM Thick 6x6 Inch Flexible Safety Mirror Stickers Acrylic Mirror Tiles for Home Wall Decoration Removable Mirror Wall Sticker Square Mirror Silver Mirror Sheet Wall Decoration'
            }, 
            price: {
                mrp: 49.99,
                cost: 39.99,
                discount: '20%'
            },
            description: {
                line1:'【Light Weight】: Easy to carry and install, just peel off the glue dot and stick it to the back of the mirror and tear off protective film for use on Any Smooth and Dry Wall.',
                line2:'【Safe and Non-Fragile】: Our flexible mirror stickers is made of high-quality Acrylic material. It is NOT a glass mirror, so it can be bent flexibly without break &The safe edge will not hurt your hands,very safe.',
                line3:'【Perfect DIY】：Total 64 PCS in a pack with Real size about (6 X 6 Inch/ 15x15x0.1 CM). Give yourself an opportunity to use imagination, creativity, You can cut it into any shape you want and YOU will bring Surprises to your family and friends! ',
                line4:'【Reflective Effect】: The mirror wall stickers are gorgeous and fashionable, and they will be Slightly Deformed from a distance, ONLY Used for HOME Decoration.',
                line5:'【Kindly Note】: There is a protective film on the surface of the mirror to prevent the mirror from being scratched. Remove the protective film after sticking it.',
            }, 
    },
    {
        tagline: 'Upgrade your office furniture',
            id: 'product34',
            url: 'Images/product34.jpg',
            detailUrl: '/Images/product34_detail.jpg',
            title: {
                shortTitle: '',
                longTitle: 'Executive Office Leather Chair with Footrest,Ergonomic Home Office Desk Computer Rolling Chairs, 90°-135°Reclining High Back Chair with Lumbar Support, Adjustable Tilt Lock (Black)',
            }, 
            price: {
                mrp: 189.99,
                cost: 149.99,
                discount: '21%'
            },
            description: {
                line1:'[Ergonomic High Back Office Desk Chair]: The curved backrest with wing design offers comfy lumbar support, hugging your back and reducing your strain.',
                line2:'[Premium PU Leather Executive Chair]: Our chair is designed to be soft and skin-friendly providing the utmost comfort for your life.',
                line3:'[Personalize Your Space with Our Chair]: With seat height adjustment spanning 4", you can find the perfect seating position. Adjust the backrest to recline between 90° and 135°, making sure work, rest are all comfortably catered to.',
                line4:'[Ultimate Comfort for Work, Study or Play]: Suffering from cervical or lumbar spine pain? Our chair has got you covered with its widened headrest and lumbar support, which help relieve pain while working or playing.',
                line5:'[Easy Installation & Comprehensive Aftersales Service]: The package includes detailed installation instructions and tools so that you can assemble the chair yourself.',
            }, 
    },
    {
        tagline:'',
        id: 'product35',
        url: 'Images/product35.jpg',
        detailUrl: '/Images/product35_detail.jpg',
        title: {
            shortTitle: '',
            longTitle: 'BEDELITE Satin Pillowcase for Hair and Skin, Super Soft and Cooling Similar to Silk Pillow Cases 2 Pack with Envelope Closure, Gift for Women Men(20"x26" Standard Size, Coral)'
        }, 
        price: {
            mrp: 8.55,
            cost: 6.59,
            discount: '22%'
        },
        description:{
            line1:'【Silky Soft Satin】: BEDELITE Satin Pillowcases are made of 100% satin polyester fabric for optimal softness and easy care used is as soft as a silk pillowcase.',
            line2:'【The Easiest Way to Keep Beautiful Hairstyle】: BEDELITE Satin Pillowcase creates less friction for your curly hair and reduces hair breakage than sleeping on cotton pillowcases.',
            line3:'【Great Beauty Aide for Your Facial Skin】: Recommended by esthetician! BEDELITE satin pillow cover is much softer and less harsh than any thread count of cotton, no more creases or pulling on your skin.',
            line4:'【A Must Have and Easy to Wash】: Cool in the summer and warm in the winter. No zipper envelope design, simple and stylish. No hurt to the pillowcase and easy to put in or take out the pillow. ',
            line5:'【What You Can Get】: A modern envelope type of package containing BEDELITE Satin Pillowcases Set of 2, Pillow Covers with Envelope Closure, Standard Size 20"x26", Coral(pillows are not included). ',
        },
    },
    {
        tagline:'',
        id: 'product36',
        url: 'Images/product36.jpg',
        detailUrl: '/Images/product36.jpg',
        title: {
            shortTitle: '',
            longTitle: 'CHARLOTTE TILBURY Pillow Talk Beautifying Lip & Cheek Secrets Set - Matte Revolution Lipstick, Lip Cheat Lip Liner, Collagen Lip Bath Gloss and Beauty Highlighter Wand.'
        }, 
        price: {
            mrp: 89.99,
            cost: 80.52,
            discount: '11%'
        },
        description: {
            line1:'Charlotte Tilbury Pillow Talk Beautifying Lip & Cheek Secrets Set',
            line2:'The Charlotte Tilbury Pillow Talk Beautifying Lip & Cheek Secrets Set is a curated collection of makeup products from the renowned beauty brand Charlotte Tilbury, centered around the beloved "Pillow Talk" shade. The Pillow Talk range is known for its universally flattering, natural rosy hues that suit a wide range of skin tones.',
            line3:'Here\'s what you can find in this set: Pillow Talk Lip Cheat Lip Liner: A lip liner in the iconic Pillow Talk shade, designed to enhance and define your lips, creating a fuller, more luscious pout. Pillow Talk Matte Revolution Lipstick: A lipstick in the Pillow Talk shade, featuring a soft, matte finish for a natural yet polished look.',
            line4:'Collagen Lip Bath Gloss in Pillow Talk: Get fresh lips in a flash with this high-shine gloss that helps to put moisture back into the lips for a healthier-looking lip look.',
            line5:'Beauty Highlighter Wand in Pillow Talk: A multi-use illuminating gel that can be worn as a highlighter or blush for buildable color and an instant glow. Dot and blend for easy application. The set is intended to provide a complete makeup look using the popular Pillow Talk shade range.',
        },
    },
    {
        tagline:'',
        id: 'product37',
        url: 'Images/product37.jpg',
        detailUrl: '/Images/product37.jpg',
        title: {
            shortTitle: '',
            longTitle: 'DriftAway Khaki Linen Curtains 96 Inches Long for Living Room Thick Semi Sheer 2 Panels Farmhouse 3 Inch Rod Pocket Back Tab Boho Rustic Light Filtering Window Drapes for Bedroom Privacy Assured',
        }, 
        price: {
            mrp: 42.99,
            cost: 32.24,
            discount: '25%'
        },
        description: {
            line1:'Package Includes: 2 linen textured panels per package. Each panel measures 52 inches wide by 84 inches long. 3 in 1 hanging options to choose: back tab, rod pocket, with clips (Clips are not included).',
            line2:'Premium Material: The curtains are crafted from high-quality linen textured fabric that breathable, soft, durable, and wrinkle-free.',
            line3:'Balance of Privacy and Light: The lightweight linen textured curtains will softly filter the light and provide sufficient privacy.',
            line4:'Versatile Placement: These aesthetic curtains could bring bright cheeriness in a variety of spaces, such as living room, bedroom, dining room, nursery room etc.',
            line5:'Easy Care: Machine washable in cold water, use only non-chlorine bleach when needed, tumble dry low and cool iron on front side as needed. To better protect the coating, avoid using the dryer.',
        },
    },
    {
        tagline:'',
        id: 'product38',
        url: 'Images/product38.jpg',
        detailUrl: '/Images/product38.jpg',
        title: {
            shortTitle: '',
            longTitle: 'Coutgo Womens Bow Heels Mules Pointed Closed Toe Sandals Rhinestone Satin Backless Wedding Shoes',
        }, 
        price: {
            mrp:59.99,
            cost: 52.99,
            discount: '12%'
        },
        description: {
            line1:'Features: Women\'s pointed toe heels, stiletto heeled sandals for ladies, decorated with rhinestone bow, cute and elegant. Heel Measures Approximately 3.15 Inches',
            line2:'High Quality: This backless high heel sandals is suitable for all seasons. Padded insole and non-slip rubber sole can keep your feet easeful and comfortable. Classic Design: This lace-up high-heeled sandal has a classic design, satin upper, rhinestone strip decoration with rhinestone bow, almond-shaped pointed toe, stiletto heel, rubber sole and metal adjustable buckle',
            line3:'Occasion: These stylish pointed toe mules are suitable for walking, wedding, shopping, office, home and other events. Perfect gift for female friends, girl friends, colleagues,etc',
            line4:'Pair with: These kitten heel slippers are well paired with dress, short T shirt dress, skinny jean or jeans, uniforms, etc',
            line5:'Quality Assurance: If you have any questions about our womens sandals, please feel free to contact us, we will provide you with the best solution as soon as possible',
        },
    },
    {
        tagline:'',
        id: 'product39',
        url: 'Images/product39.jpg',
        detailUrl: '/Images/product39.jpg',
        title: {
            shortTitle: '',
            longTitle: 'Dokotoo Work Dresses for Women 2024 Trendy Fall Dresses V Neck Knit A Line Long Sleeve Dress Sweater Dress',
        }, 
        price: {
            mrp: 43.99,
            cost: 38.88,
            discount: '12%'
        },
        description: {
            line1:'V-Neck Design: The V-neckline adds a touch of allure to this womens dresses, effortlessly enhancing your neckline and collarbones. This sophisticated design detail adds a hint of femininity and elegance to your overall appearance.',
            line2:'Stylish: The A-line silhouette of this pullover sweater dress is designed to flatter various body types. The cinched waist gracefully highlights your curves, while the flowy skirt skims over any imperfections, giving you a flattering and confident look.',
            line3:'Cozy:Crafted from high-quality knit fabric, this sweater dress offers a luxurious softness that will keep you feeling cozy and comfortable all day long. Enjoy the perfect balance of elegance and comfort as you stand out in this must-have women dresses.',
            line4:'Versatility:This chic and casual dress effortlessly blends comfort and fashion, making it perfect for a wide range of occasions. ',
            line5:'Wash Recommended With Cold Water/Do Not Bleach/Hang Or Line Dry/Wash with like colours,that will increase the durability of your clothes.',
        },
    },
    {
        tagline:'',
        id: 'product40',
        url: 'Images/product40.jpg',
        detailUrl: '/Images/product40.jpg',
        title: {
            shortTitle: '',
            longTitle: 'Beats Solo 4 - Wireless Bluetooth On-Ear Headphones, Apple & Android Compatible, Up to 50 Hours of Battery Life - Cloud Pink',
        }, 
        price: {
            mrp: 219.99,
            cost: 149.60,
            discount: '32%'
        },
        description: {
            line1:'Custom acoustic architecture and updated drivers for powerful Beats sound. Personalized Spatial Audio with dynamic head tracking.',
            line2:'Ultralight ergonomic design for all-day comfort. Flex-grip headband and ergonomically angled, adjustable ear cups for a stable fit. UltraPlush ear cushions are designed for comfort and durability.',
            line3:'Up to 50 hours of battery life. Fast Fuel means a quick 10-minute charge gives up to 5 hours of playback.',
            line4:'High-resolution lossless audio via USB-C or 3.5 mm audio cable. Dual compatibility including one-touch pairing for both iOS and Android. Pairing mode is automatically enabled the first time you power on Beats Solo 4. To pair an iPhone running the latest iOS, simply hold the headphones near an unlocked phone and follow the on-screen instructions. Or, go to the Bluetooth menu and select “Beats Solo 4”.',
            line5:'High-quality call performance and voice assistant interaction via built-in microphone. Industry-leading Class 1 Bluetooth for extended range and fewer dropouts. ',
        },
    },
    {
        tagline:'',
        id: 'product41',
        url: 'Images/product41.jpg',
        detailUrl: '/Images/product41.jpg',
        title: {
            shortTitle: '',
            longTitle: 'Knife Set 15 Pcs Japanese High Carbon Stainless Steel Kitchen Knife Sets with Block and Sharpener, Premium Razor Sharp Black Knives Block Set for Kitchen with Ergonomic Full-tang Handle',
        }, 
        price: {
            mrp: 169.99,
            cost: 119.99,
            discount: '29%'
        },
        description: {
            line1:'ULTRA RAZOR-SHARP: ZWILLING knives start out razor-sharp and stay sharper longer, even with minimal care. 57 Rockwell Hardness = excellent edge retention. Edge angle 15 degrees per side.',
            line2:'THE LAST KNIFE YOU’LL EVER NEED TO BUY: Zwilling knives are built to last. They are German engineered informed by almost 300 Years of masterful knife making.',
            line3:'WE KNOW MORE ABOUT KNIVES THAN ANYONE ELSE IN THE WORLD: ZWILLING has been making knives since 1731 in the renowned “City of Blades” Solingen.',
            line4:'LARGEST MANUFACTURER OF KNIVES GLOBALLY: As the largest manufacturer of knives globally, we own our factories so we can control the quality at every step of production.',
            line5:'SUPERIOR CRAFTMANSHIP: Special formulated German stainless steel perfected for almost 300 years.',
        },
    },
    {
        tagline:'',
        id: 'product42',
        url: 'Images/product42.jpg',
        detailUrl: '/Images/product42.jpg',
        title: {
            shortTitle: '',
            longTitle: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker, Warmer & Sterilizer, Includes App With Over 800 Recipes, Stainless Steel, 6 Quart',
        }, 
        price: {
            mrp: 69.99,
            cost: 99.99,
            discount: '30%'
        },
        description: {
            line1:'7-IN-1 FUNCTIONALITY: Pressure cook, slow cook, rice cooker, yogurt maker, steamer, sauté pan and food warmer. QUICK ONE-TOUCH COOKING: 13 customizable Smart Programs for pressure cooking ribs, soups, beans, rice, poultry, yogurt, desserts and more.',
            line2:'COOK FAST OR SLOW: Pressure cook delicious one-pot meals up to 70% faster than traditional cooking methods or slow cook your favorite traditional recipes – just like grandma used to make. QUICK AND EASY CLEAN UP: Finger-print resistant, stainless-steel sides and dishwasher-safe lid, inner pot, and accessories.',
            line3:'SAFETY FEATURES: Includes over 10 safety features, plus overheat protection and safe-locking lid',
            line4:'GREAT FOR GROWING FAMILIES: Cook for up to 6 people – perfect for growing families, or meal prepping and batch cooking for singles.',
            line5:'VERSATILE INNER COOKING POT: We use food-grade stainless-steel, a tri-ply bottom for more even cooking and perfect for sautéing',
        },
    },
    {
        tagline:'',
        id: 'product43',
        url: 'Images/product43.jpg',
        detailUrl: '/Images/product43.jpg',
        title: {
            shortTitle: '',
            longTitle: 'SAMSUNG Galaxy S24 Ultra Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Zoom Camera, Long Battery Life, S Pen, US Version, 2024, Titanium Yellow',
        }, 
        price: {
            mrp: 1299.99,
            cost: 949.99,
            discount: '27%'
        },
        description: {
            line1:'CIRCLE & SEARCH¹ IN A SNAP: What’s your favorite influencer wearing? Where’d they go on vacation? What’s that word mean? Don’t try to describe it — use Circle to Search1 with Google to get the answer; With S24 Series, circle it on your screen and learn more',
            line2:'REAL EASY, REAL-TIME TRANSLATIONS: Speak foreign languages on the spot with Live Translate',
            line3:'NOTE SMARTER, NOT HARDER: Focus on capturing your notes and spend less time perfecting them',
            line4:'BRING DETAILS OUT OF THE DARKNESS: Brighten up your night with Nightography on S24 Ultra',
            line5:'OUR MOST POWERFUL GALAXY SMARTPHONE YET: Jump seamlessly between apps without the wait and see content in high quality with our fastest processor yet, Snapdragon 8 Gen 3 for Galaxy.',
        },
    },
    {
        tagline:'',
        id: 'product44',
        url: 'Images/product44.jpg',
        detailUrl: '/Images/product44.jpg',
        title: {
            shortTitle: '',
            longTitle: 'COOFANDY Men\'s Short Sleeve Knit Shirts Vintage Button Down Polo Shirt Casual Beach Tops'
        }, 
        price: {
            mrp: 29.99,
            cost: 23.99,
            discount: '20%'
        },
        description: {
            line1:'Lightweight & Breathable Material:The casual button down shirts for men is made of knit fabric.',
            line2:'Features: The mens knit button down short sleeve shirt comes with short sleeve, turn down collar, real chest pocket, hallow out design,vintage color contrast for a stylish and cool looking. Making your four seasons more shining, especially in summer and spring',
            line3:'Classic & Vintage: The mens vintage polo shirts short sleeve looks well with daily/summer wear.It will be fashion to match with shorts，jeans and dress pants . You can switch between beach and vintage styles at will.',
            line4:'Fashion Style for Any Occasion: Mens short sleeve button up shirt is perfect for all occasions, especially beach, wedding, vacation, cruises, office, yoga, work or daily casual wear. Whether it is hot summer or spring, it will be the first choice in your wardrobe',
            line5:'Best Gift: Our polo knit shirts for men for men is a perfect gift for yourselves, families, boy friend, friends. It will make you or people who gets this gift look exquisite for any occasion.',    
        },
    },
    {
        tagline:'',
        id: 'product45',
        url: 'Images/product45.jpg',
        detailUrl: '/Images/product45.jpg',
        title: {
            shortTitle: '',
            longTitle: 'LOréal Paris Colour Riche Original Creamy, Hydrating Satin Lipstick with Argan Oil and Vitamin E, Saucy Mauve , 1 Count',
        }, 
        price: {
            mrp: 9.99,
            cost: 6.99,
            discount: '31%'
        },
        description: {
            line1:'The Houses of Colour Riche: Introducing four vibrant lipstick families of Reds, Berries, Pinks and Nudes.',
            line2:'Moisturizing Lipstick Formula: Smooth your lips in just 1 coat with 75% caring ingredients like Argan Oil & Vitamin E. Our lip stick leaves lips feeling soft and moisturized for a long lasting lipstick look that doesn\'t smudge, smear or migrate',
            line3:'For The Ultimate Lip Make Up Look: Start in the center of your upper lip, work from the center to outer edges, following the contour of your mouth. Then glide across the bottom lip. Available in 52 lip makeup shades, pair with Colour Riche Lip Liner.',
            line4:'Because You\'re Worth It: Create the look you want with our full line of makeup including foundations, concealers, highlighter makeup, brow pencils, eyeshadow palettes, lipsticks and much more',
            line5:'L\'Oreal Paris Beauty: A leading total beauty care company based in Paris, we offer innovative products and unique expertise from beauty experts in makeup, skin care, hair care, styling and hair color',
        },
    },
]
module.exports = products