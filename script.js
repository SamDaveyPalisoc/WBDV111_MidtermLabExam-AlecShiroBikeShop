const products = [

    {
        id: 1,
        cat: 'drivetrain',
        name: 'Shimano Deore XT RD-M8100 Rear Derailleur',
        img: 'drivetrain/deorerd.webp',
        desc: 'SHIMANO SHADOW RD+ 1x12-speed rear derailleur with decreased chain tension in low gear, new pulley cage bumper, and bigger 13T pulleys for efficient chain management and silent shifting on any trail.',
        price: 5200,
        badge: '',
        specs: {
            speed: '12 Speed',
            weight: '284g',
            pulley: '13T Sealed Bearing',
            range: '10-51T (41T Capacity)'
        }
    },


    {
        id: 2,
        cat: 'drivetrain',
        name: 'BUCKLOS 9-Speed Cassette',
        img: 'drivetrain/bucklos.webp',
        desc: 'Nickel-plated steel 9-speed cassette compatible with Shimano and SRAM HG hubs. Lightweight, corrosion-resistant, and suitable for MTB, road, XC, and DH riding.',
        price: 451,
        badge: '',
        specs: {
            speed: '9-Speed',
            teeth: '11-32T',
            weight: '298g',
            compatibility: 'Shimano / SRAM HG Hubs'
        }
    },

    {
        id: 3,
        cat: 'drivetrain',
        name: 'Shimano Claris FC-R2000 / Sora FC-R3000 Crankset',
        img: 'drivetrain/crankclaris.webp',
        desc: 'Hollowtech 2 road crankset with 50-34T chainrings. Available in 2x8-speed (Claris) and 2x9-speed (Sora). Includes BB-RS500 bottom bracket with sealed cups for dirt and water resistance.',
        price: 4315,
        badge: '',
        specs: {
            teeth: '50-34T',
            crankLength: '165 / 170mm',
            speed: '2x8 / 2x9 Speed',
            weight: '1100g'
        }
    },

    {
        id: 4,
        cat: 'drivetrain',
        name: 'KMC Z9 9-Speed Chain',
        img: 'drivetrain/chain.webp',
        desc: 'Nickel-plated 9-speed chain with stretch-proof treatment for smooth and quiet shifting. Includes reusable Missing Link. Compatible with Shimano, SRAM, and Campagnolo 9-speed systems.',
        price: 633,
        badge: '',
        specs: {
            speed: '9-Speed',
            links: '116 Links',
            weight: '305g',
            compatibility: 'Shimano / SRAM / Campagnolo'
        }
    },

    {
        id: 5,
        cat: 'drivetrain',
        name: 'Shimano CN-HG601 11-Speed Chain',
        img: 'drivetrain/shimchain.webp',
        desc: 'Shimano Deore 105 / SLX 11-speed chain compatible with MTB and road bikes. Works with Shimano Deore, 105, and SLX groupsets.',
        price: 488,
        badge: '',
        specs: {
            model: 'CN-HG601',
            speed: '11-Speed',
            weight: '287g',
            compatibility: 'MTB / Road 11-Speed'
        }
    },

    {
        id: 6,
        cat: 'drivetrain',
        name: 'Shimano SPD-SL PD-R540 Road Pedals',
        img: 'drivetrain/cleats.webp',
        desc: 'SPD-SL road pedals with ultra-wide platform for efficient power transfer and stability. Includes SH11 cleats. Improves pedaling efficiency and corrects riding posture especially on climbs.',
        price: 2043,
        badge: '',
        specs: {
            model: 'PD-R540',
            material: 'Aluminum Alloy',
            weight: '330g',
            cleat: 'SH11 (Included)'
        }
    },

    {
        id: 7,
        cat: 'brakes',
        name: 'SRAM Level Hydraulic Disc Brakes',
        img: 'brakes/sram1.webp',
        desc: 'Lightweight 2-piston hydraulic disc brakes, SwingLink technology for consistent lever feel.',
        price: 3500,
        badge: 'New',
        specs: {
            type: 'Hydraulic',
            piston: '2-pot',
            rotor: '160-180mm',
            weight: '310g'
        }
    },

    {
        id: 8,
        cat: 'brakes',
        name: 'Shimano Claris BR-R2000 Brake Caliper',
        img: 'brakes/claris.webp',
        desc: 'Dual pivot brake with SLR technology for faster response and optimized braking. Includes R50T2 brake shoes for reliable performance in dry and wet conditions.',
        price: 1699, //
        badge: 'sale',
        specs: {
            type: 'Mechanical',
            reach: '51mm',
            compatibility: 'Road Bike',
            maxTire: '28mm'
        }
    },

    {
        id: 9,
        cat: 'brakes',
        name: 'Shimano XT SM-RT86 Ice-Tech Disc Rotor',
        img: 'brakes/rotor1.jpeg',
        desc: 'Ice-Tech 6-bolt rotor with aluminum core construction. Compatible with SLX, XT, XTR, and Deore.',
        price: 1499,
        badge: '',
        specs: {
            type: '6-Bolt Rotor',
            sizes: '160mm / 180mm',
            weight: '135g (160mm) / 154g (180mm)',
            compatibility: 'SLX / XT / XTR / Deore'
        }
    },


    {
        id: 10,
        cat: 'fork',
        name: 'MountainPeak XS-1 Air Fork 27.5/29er',
        img: 'fork/peak.webp',
        desc: 'Air suspension fork with 120mm travel and 32mm stanchion tubes. Adjustable air pressure for rider weight and conditions. Independent front fork bridge design prevents dust contamination. Manual lockout included.',
        price: 3399,
        badge: '',
        specs: {
            travel: '120mm / 32mm Stanchion',
            axle: 'QR 9x100mm',
            weight: '1.65kg',
            material: 'Magnesium + Aluminum Alloy'
        }
    },

    {
        id: 11,
        cat: 'fork',
        name: 'Kocevlo Carbon Fiber Road Gravel Fork',
        img: 'fork/kocevlo.webp',
        desc: 'Full carbon T700S road/gravel fork with internal cable routing and flat mount disc brake. Tapered steerer 1-1/8" to 1-1/2" with 12mm through axle dropout. Max tire clearance 700x45mm.',
        price: 3552,
        badge: '',
        specs: {
            material: 'Carbon T700S',
            weight: '560g',
            axle: '12mm Through Axle',
            clearance: '700x45mm'
        }
    },

    {
        id: 12,
        cat: 'fork',
        name: 'TOSEEK Lutu Rigid MTB Fork',
        img: 'fork/toseek.webp',
        desc: 'Ultralight aluminum alloy rigid fork for 26", 27.5", and 29" MTB wheels. 9mm QR axle with 45mm rake offset. Max tire width 2.4 inches.',
        price: 1899,
        badge: '',
        specs: {
            material: 'Aluminum Alloy',
            weight: '560g',
            axle: '9mm QR / 100mm spacing',
            wheelSize: '26 / 27.5 / 29"'
        }
    },

    {
        id: 13,
        cat: 'fork',
        name: 'Alpina Alu Carbon Fork 700c',
        img: 'fork/alpina.webp',
        desc: 'Aluminum carbon road fork for 700c wheels. Lightweight and rigid build ideal for road cycling. Max tire clearance 700x25c.',
        price: 4190,
        badge: '',
        specs: {
            material: 'Alu Carbon',
            wheelSize: '700c',
            maxTire: '700x25c',
            brake: 'Rim Brake'
        }
    },

    {
        id: 14,
        cat: 'wheels',
        name: 'Black Cat Bicycle Inner Tube',
        img: 'wheels/catinner.webp',
        desc: 'Durable inner tube for MTB and road bikes. Available in 26", 27.5", and 28/29" sizes with Schrader (AV) or Presta (FV) valve options. Easy to install and puncture-resistant.',
        price: 137,
        badge: '',
        specs: {
            sizes: '26 / 27.5 / 28/29"',
            width: '1.75 / 2.125"',
            valve: 'AV (Schrader) / FV (Presta)',
            use: 'MTB / Road Bike'
        }
    },

    {
        id: 15,
        cat: 'wheels',
        name: 'Maxxis Minion DHF 26x2.50WT MTB Tire',
        img: 'wheels/maxxis.png',
        desc: 'Aggressive DH/AM front tire with 3C Maxx Terra compound, EXO puncture protection, and Tubeless Ready casing. Low rolling resistance with excellent cornering stability for downhill and all-mountain riding.',
        price: 2999,
        badge: '',
        specs: {
            size: '26x2.50WT',
            compound: '3C Maxx Terra',
            tpi: '60 TPI',
            protection: 'EXO / Tubeless Ready'
        }
    },

    {
        id: 16,
        cat: 'wheels',
        name: 'TANKE TH-31 MTB Hub Set 36H',
        img: 'wheels/hubs1.webp',
        desc: 'Aluminum alloy 36-hole MTB hub set with 6-pawl freehub and sealed bearings. Compatible with 7-12 speed cassettes. Available in QR and 142mm thru-axle versions.',
        price: 1375,
        badge: '',
        specs: {
            holes: '36H / 6 Pawls',
            axle: 'QR 100/135mm or TA 100/142mm',
            weight: '480-590g',
            cassette: '7-12 Speed'
        }
    },

    {
        id: 17,
        cat: 'wheels',
        name: 'Speedone Sniper 150T Ratchet Hub Set',
        img: 'wheels/hubs2.png',
        desc: 'CNC machined AL6061 T6 hub set with 150T ratchet system and Japan S&S bearings. Compatible with 8-12 speed cassettes. Suitable for XC, Trail, All Mountain, and Downhill riding.',
        price: 8388,
        badge: '',
        specs: {
            system: '150T Ratchet / 8 Pawls',
            holes: '32H',
            axle: 'F:15x100 / R:12x142 (Non-Boost)',
            cassette: '8-12 Speed HG'
        }
    },

    {
        id: 18,
        cat: 'wheels',
        name: 'Sagmit Brooklyn Double Wall Rim 32H',
        img: 'wheels/wheelsagmit.webp',
        desc: 'Al6066 T6 double wall rim with eyelet for MTB, XC, and gravel riding. Presta and Schrader valve compatible. Available in 26", 27.5", and 29". Made in Taiwan.',
        price: 1228,
        badge: '',
        specs: {
            material: 'Al6066 T6',
            size: '26 / 27.5 / 29"',
            holes: '32H',
            width: '20mm Inner / 26mm Outer'
        }
    },

    {
        id: 19,
        cat: 'cockpit',
        name: 'UNO Aluminum Bike Stem 31.8mm',
        img: 'cockpit/uno.webp',
        desc: 'Ultralight 6061 aluminum stem for MTB and road bikes. Available in multiple lengths from 60-130mm with ±7° or 17° rise angle. Fits 31.8mm handlebars and 28.6mm steerer tubes.',
        price: 602,
        badge: '',
        specs: {
            material: 'AL6061',
            clamp: '31.8mm Handlebar',
            steerer: '28.6mm Fork',
            angle: '±7° / 17°'
        }
    },

    {
        id: 20,
        cat: 'cockpit',
        name: 'Carbon Track Sprinter Drop Bar 31.8mm',
        img: 'cockpit/dropbar.png',
        desc: 'Full carbon fiber aero drop bar designed for track and road sprinting. Reinforced brake lever zones with 3K/UD carbon weave finish. Reduces wind resistance for maximum sprint performance.',
        price: 2155,
        badge: '',
        specs: {
            material: 'Full Carbon 3K/UD',
            clamp: '31.8mm',
            length: '370 / 385mm',
            weight: '310-340g'
        }
    },

    {
        id: 21,
        cat: 'cockpit',
        name: 'Sagmit Evo 2 / Evo 3 Headset 44mm',
        img: 'cockpit/headset.png',
        desc: 'Alloy MTB headset with carbon design finish and sealed bearings. Available in 34-34mm straight tube and 44-44mm oversized versions. Comes in multiple color options.',
        price: 281,
        badge: '',
        specs: {
            model: 'Evo 2 / Evo 3',
            size: '34-34mm / 44-44mm',
            material: 'Alloy / Sealed Bearing',
            type: 'Internal / Non-Tapered'
        }
    },

    {
        id: 22,
        cat: 'cockpit',
        name: 'Sensah Reflex Road STI Shifter 2x8',
        img: 'cockpit/sti.webp',
        desc: 'Road brake/shift lever combo with THREE-IN-ONE technology for faster and easier gear changes. Compatible with Shimano 7/8/9-speed road derailleurs. Anti-slip hood cover with extended lever reach.',
        price: 1900,
        badge: '',
        specs: {
            speed: '2x7 / 2x8 / 2x9',
            compatibility: 'Shimano Road 7/8/9S',
            type: 'STI Brake/Shift Lever',
            color: 'Black'
        }
    },

    {
        id: 23,
        cat: 'frame',
        name: 'MountainPeak Everest Pro MTB Frame 2024',
        img: 'frame/peak.png',
        desc: 'Superlight AL6061 hardtail MTB frame with tapered headtube and thru axle. Available for 27.5" and 29" wheels. Non-boost with estimated weight of only 1.65kg.',
        price: 7799,
        badge: '',
        specs: {
            material: 'Alloy 6061',
            weight: '1.65kg',
            headtube: 'Tapered 42-52mm',
            axle: 'Thru Axle / Non-Boost'
        }
    },

    {
        id: 24,
        cat: 'frame',
        name: 'Sagmit Brooklyn V2R MTB Frame 2023',
        img: 'frame/sagmit.png',
        desc: 'Triple butted AL6066 T6 hardtail MTB frame with tapered headtube and full internal cable routing. Available in 27.5" and 29". Lightweight at only 1.7kg. Made in Taiwan.',
        price: 6698,
        badge: '',
        specs: {
            material: 'AL6066 T6 Triple Butted',
            weight: '1.7kg',
            headtube: 'Tapered 44-55mm',
            axle: 'QR 9mm'
        }
    },

    {
        id: 25,
        cat: 'frame',
        name: 'Tsunami SNM100 Fixed Gear Frameset',
        img: 'frame/tsunami.png',
        desc: 'Aluminum alloy fixed gear / track bike frameset with glossy finish. Available in 49cm and 52cm sizes. Lightweight racing geometry for road and track use.',
        price: 9499,
        badge: '',
        specs: {
            model: 'SNM100',
            material: 'Aluminum Alloy',
            weight: '2150g',
            sizes: '49cm / 52cm'
        }
    },


    {
        id: 26,
        cat: 'frame',
        name: 'Aeroic X7 MTB Frame 29er',
        img: 'frame/aeroic.png',
        desc: 'AL6061 hardtail MTB frame with tapered headtube and internal cable routing. Hollow chainstay for reduced weight. Built for aggressive terrain and smooth singletrack with optimal control.',
        price: 4216,
        badge: '',
        specs: {
            material: 'Alloy 6061',
            headtube: 'Tapered 44x55mm',
            seatpost: '31.6mm',
            axle: 'Quick Release'
        }
    },

    {
        id: 27,
        cat: 'accessories',
        name: 'HJC IBEX Aero Road/MTB Helmet',
        img: 'accessories/hjc.webp',
        desc: 'Ultralight aero helmet for road and MTB cycling. EPS+PC construction with 12 ventilation holes for optimal airflow. Suitable for men and women.',
        price: 1025,
        badge: '',
        specs: {
            size: '54-60cm',
            weight: '245g',
            vents: '12 Ventilation Holes',
            material: 'EPS + PC'
        }
    },

    {
        id: 28,
        cat: 'accessories',
        name: 'Fox MTB/DH Cycling Helmet',
        img: 'accessories/fox.webp',
        desc: 'Integrally-molded ultralight MTB and DH helmet. PC+EPS construction with removable washable lining and moisture-wicking pads for all-day comfort.',
        price: 700,
        badge: '',
        specs: {
            size: '54-60cm',
            material: 'PC + EPS',
            gender: 'Unisex',
            use: 'MTB / DH / Road'
        }
    },

    {
        id: 29,
        cat: 'accessories',
        name: 'V400 Cycling Sunglasses UV400',
        img: 'accessories/shades.webp',
        desc: 'Unisex cycling sunglasses with UV400 protection against UVA, UVB, and UVC rays. Photochromic lenses auto-adjust to changing light conditions. Lightweight PC frame for all-day comfort.',
        price: 136,
        badge: '',
        specs: {
            protection: 'UV400',
            lens: 'Photochromic',
            frame: 'PC Lightweight',
            gender: 'Unisex'
        }
    },

    {
        id: 30,
        cat: 'accessories',
        name: 'SPOT Ice Silk Cycling Gloves',
        img: 'accessories/gloves.png',
        desc: 'Breathable half-finger cycling gloves made with ice silk fabric for comfort and ventilation. Features anti-slip silicone palm, touch-screen compatible finger design, and UV protection for riding and outdoor activities.',
        price: 300,
        badge: '',
        specs: {
            material: 'Breathable Ice Silk Fabric',
            feature: 'Anti-Slip / Touch Screen',
            type: 'Half-Finger Gloves',
            size: 'Unisex'
        }
    },

    {
        id: 31,
        cat: 'whole bike',
        name: 'Foxter Lincoln 29er 1x10 Speed MTB 2026',
        img: 'bike/wholebike1.png',
        desc: 'Full build 29er hardtail MTB with Shimano Deore 1x10 speed drivetrain and hydraulic brakes. Full internal cabling, double wall rims, and Kenda tires. Includes freebies.',
        price: 16800,
        badge: '',
        specs: {
            drivetrain: 'Shimano Deore 1x10 Speed',
            brakes: 'Shimano MT200 Hydraulic',
            wheel: '29er Double Wall Rim',
            tires: 'Kenda 29x2.10'
        }
    },

    {
        id: 32,
        cat: 'whole bike',
        name: 'Promax PR40 Aero Road Bike 2023',
        img: 'bike/wholebike4.png',
        desc: 'Aero road bike with smooth welding alloy frame and fork. LTwoo 2x8 speed drivetrain with drop bar setup. Tanwall 700x25c tires on double wall 32H rims. Available in 46/48/50cm.',
        price: 11800,
        badge: '',
        specs: {
            drivetrain: 'LTwoo R3 2x8 Speed',
            brakes: 'Alloy C Brake',
            wheel: '700c Double Wall 32H',
            sizes: '46 / 48 / 50cm'
        }
    },

    {
        id: 33,
        cat: 'whole bike',
        name: 'Tirich FG25 Fixed Gear Bike 700c',
        img: 'bike/wholebike3.png',
        desc: 'Aero fixed gear bike with smooth weld alloy frame and fork. Equipped with 44T alloy crankset, 60mm alloy rims, and Chaoyang 700x23c tires. Lightweight urban setup with fixed/freewheel drivetrain and olive chain.',
        price: 13554,
        badge: '',
        specs: {
            drivetrain: 'Fixed Gear 18T / Freewheel 18T',
            brakes: 'Front Caliper Brake',
            wheel: '700c Alloy 60mm 32H',
            sizes: '46cm Seat Tube / 52cm Top Tube'
        }
    },

    {
        id: 35,
        cat: 'whole bike',
        name: 'Myth Aero Type Roadbike',
        img: 'bike/wholebike2.png',
        desc: 'Aero type road bike with lightweight alloy frame and integrated drop bar setup. Equipped with PFIT 2x8 speed drivetrain, mechanical disc brakes, and 700x28c skinwall tires for smooth city and endurance rides.',
        price: 9900,
        badge: '',
        specs: {
            drivetrain: 'PFIT 2x8 Speed STI',
            brakes: 'Mechanical Disc Brakes',
            wheel: '700x28c Skinwall Tires',
            sizes: '50cm'
        }
    },

    {
        id: 36,
        cat: 'whole bike',
        name: 'Mountainpeak Expert 4700 Road Bike',
        img: 'bike/wholebike5.png',
        desc: 'Performance road bike with X6 super light alloy frame and full internal cable routing. Equipped with Shimano Tiagra 2x10 speed drivetrain, mechanical disc brakes, and Aeroic 700c alloy wheelset for fast and smooth riding.',
        price: 32489,
        badge: '',
        specs: {
            drivetrain: 'Shimano Tiagra 2x10 Speed',
            brakes: 'Mechanical Disc Brake',
            wheel: '700c Aeroic H38 Alloy Rim',
            sizes: '12x142mm Thru-Axle Frame'
        }
    },

];

let cart = [];
let activeFilter = 'all';
let searchTerm = '';

function renderGrid() {
    const grid = document.getElementById('grid');
    const empty = document.getElementById('empty-state');
    const count = document.getElementById('results-count');

    const filtered = products.filter(p => {
        const catMatch = activeFilter === 'all' || p.cat === activeFilter;
        const searchMatch = !searchTerm || p.name.toLowerCase().includes(searchTerm) || p.cat.includes(searchTerm);
        return catMatch && searchMatch;
    });

    count.textContent = filtered.length + ' product' + (filtered.length !== 1 ? 's' : '');

    const existing = grid.querySelectorAll('.product-card');
    existing.forEach(el => el.remove());

    if (filtered.length === 0) {
        empty.classList.add('show');
    } else {
        empty.classList.remove('show');
        filtered.forEach((p, i) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animationDelay = (i * 0.04) + 's';
            card.innerHTML = `
        <div class="card-img">
          <img src="${p.img}" alt="${p.name}">
          ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
        </div>
        <div class="card-body">
          <div class="card-category">${p.cat}</div>
          <div class="card-name">${p.name}</div>
          <div class="card-desc">${p.desc}</div>
          <div class="card-footer">
            <div class="card-price">₱${p.price.toLocaleString()} <span>/ pc</span></div>
            <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">+ Add</button>
          </div>
        </div>
      `;
            card.addEventListener('click', () => openModal(p));
            grid.appendChild(card);
        });
    }
}

function openModal(p) {
    document.getElementById('modal-img').innerHTML = `<img src="${p.img}" alt="${p.name}" class="modal-product-img">`;
    document.getElementById('modal-category').textContent = p.cat.toUpperCase();
    document.getElementById('modal-name').textContent = p.name;
    document.getElementById('modal-desc').textContent = p.desc;
    document.getElementById('modal-price').innerHTML = `₱${p.price.toLocaleString()} <small>/ piece</small>`;
    document.getElementById('modal-add-btn').onclick = () => { addToCart(p.id); closeModalDirect(); };

    const specs = document.getElementById('modal-specs');
    specs.innerHTML = Object.entries(p.specs).map(([k, v]) =>
        `<div class="spec-item"><strong>${k}</strong><span>${v}</span></div>`
    ).join('');

    document.getElementById('modal-bg').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {
    if (e.target === document.getElementById('modal-bg')) closeModalDirect();
}
function closeModalDirect() {
    document.getElementById('modal-bg').classList.remove('open');
    document.body.style.overflow = '';
}

function addToCart(id) {
    cart.push(id);
    document.getElementById('cart-count').textContent = cart.length;
    showToast('Added to cart!');
}

function openCart() {
    showToast(`${cart.length} item${cart.length !== 1 ? 's' : ''} in your cart`);
}

let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.cat;
        renderGrid();
    });
});

document.getElementById('search-input').addEventListener('input', e => {
    searchTerm = e.target.value.toLowerCase().trim();
    renderGrid();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModalDirect();
});

const modalImg = document.getElementById('modal-img');

modalImg.addEventListener('mousemove', (e) => {
    const img = modalImg.querySelector('.modal-product-img');
    const rect = modalImg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(1.5)';
});

modalImg.addEventListener('mouseleave', () => {
    const img = modalImg.querySelector('.modal-product-img');
    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center center';
});

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('open');
}

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

if (category) {

    const targetBtn = document.querySelector(`[data-cat="${category}"]`);

    if (targetBtn) {
        targetBtn.click();
    }
}

renderGrid();
