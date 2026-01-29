import mobileTowerImg from '../assets/products-image/moble lighting tower.jpeg';
import highMastpole from '../assets/products-image/high-mast-pole.jpg';
import streetLightPole from '../assets/products-image/street-light-pole.png';
import solarStreetLight from '../assets/products-image/Solar Street Lights.jpg';
import solarMobileLightTower from '../assets/products-image/Solar Mobile Light Tower.jpg';
import inflatableLightTower from '../assets/products-image/Inflatable Lighting Tower Panel.jpeg';

export const products = [
    {
        id: 1,
        slug: "high-mast-lighting-poles",
        category: "High Mast Poles",
        title: "High Mast Lighting Poles",
        description: "Advanced high-mast systems ranging from 12m to 50m, equipped with motorized lowering systems for easy maintenance. Designed for large area illumination such as stadiums, airports, and shipping ports.",
        sku: "TT-HM-500",
        images: [
            {
                full: highMastpole,
                alt: 'High mast lighting pole installation'
            }
        ],
        specs: {
            height: "12m - 50m",
            windLoad: "Up to 180 km/h",
            material: "Galvanized Steel",
            finish: "Hot Dip Galvanized",
            standards: "BS EN 40 / ISO 1461",
            application: "Stadiums, Ports, Highways"
        },
        technicalSpecs: [
            { parameter: "Pole Height Options", specification: "12m, 16m, 20m, 25m, 30m, 50m" },
            { parameter: "Structure Shape", specification: "Polygonal (12, 16, or 20 sided)" },
            { parameter: "Lowering System", specification: "Internal Motorized Double Drum Winch" },
            { parameter: "Galvanization", specification: "Hot Dip Galvanized to ISO 1461" },
            { parameter: "Design Life", specification: "25+ Years" }
        ],
        badge: "Best Seller"
    },
    {
        id: 2,
        slug: "street-light-poles",
        category: "Street Light Poles",
        title: "Street Light Poles",
        description: "Precision-engineered octagonal and conical poles with superior hot-dip galvanization for lifelong durability. Ideal for urban roadways, residential areas, and commercial developments.",
        sku: "TT-SL-200",
        images: [
            {
                full: streetLightPole,
                alt: 'Octagonal street light pole'
            }
        ],
        specs: {
            height: "4m - 12m",
            windLoad: "Up to 160 km/h",
            material: "Hot Rolled Steel",
            finish: "Galvanized / Powder Coated",
            standards: "EN 40",
            application: "Urban Roads, Parks"
        },
        technicalSpecs: [
            { parameter: "Pole Type", specification: "Octagonal / Conical" },
            { parameter: "Standard Height", specification: "6m, 8m, 10m, 12m" },
            { parameter: "Mounting", specification: "Single / Double / Triple Arm" },
            { parameter: "Protection", specification: "IP66 Junction Box Ready" }
        ]
    },
    {
        id: 3,
        slug: "solar-street-lights",
        category: "Solar Lighting",
        title: "Solar Street Lights",
        description: "Self-sustaining, integrated solar lighting solutions with high-efficiency PV panels and lithium-ion storage. Perfect for remote areas without grid access, promoting sustainability.",
        sku: "TT-SOL-300",
        images: [
            {
                full: solarStreetLight,
                alt: 'Solar street light installation'
            }
        ],
        specs: {
            height: "6m - 10m",
            battery: "LiFePO4",
            pvPanel: "Monocrystalline",
            autonomy: "3+ Night Backup",
            controller: "MPPT Smart Controller",
            application: "Remote Roads, Eco-Projects"
        },
        technicalSpecs: [
            { parameter: "Solar Panel", specification: "60W - 120W High Efficiency" },
            { parameter: "Battery Capacity", specification: "30Ah - 80Ah LiFePO4" },
            { parameter: "Lumen Output", specification: "3000lm - 9000lm" },
            { parameter: "Charge Time", specification: "6-8 Hours Sunlight" }
        ],
        badge: "Eco-Friendly"
    },
    {
        id: 4,
        slug: "mobile-lighting-tower",
        category: "Mobile Lighting",
        title: "Mobile Lighting Tower",
        description: "Versatile mobile units for emergency, construction, and events, providing instant high-intensity illumination with vertical hydraulic masks.",
        sku: "TT-ML-400",
        images: [
            {
                full: mobileTowerImg,
                alt: 'Mobile lighting tower'
            }
        ],
        specs: {
            height: "Up to 9m",
            power: "Diesel Generator / Electric",
            lamps: "4x 240W LED",
            coverage: "5000+ sqm",
            trailer: "Single Axle Road Towable",
            application: "Construction, Events, Mining"
        },
        technicalSpecs: [
            { parameter: "Mast Control", specification: "Hydraulic Lifting" },
            { parameter: "Rotation", specification: "359 Degrees" },
            { parameter: "Fuel Tank", specification: "100 Liters (60+ Hours Run Time)" },
            { parameter: "Stability", specification: "4 Adjustable Stabilizers" }
        ],
        badge: "Industrial"
    },
    {
        id: 5,
        slug: "solar-mobile-light-tower",
        category: "Mobile Lighting",
        title: "Solar Mobile Light Tower",
        description: "Zero-noise, zero-emission mobile towers powered entirely by solar energy. Ideal for sustainable job sites, urban areas, and quiet zones.",
        sku: "TT-SML-500",
        images: [
            {
                full: solarMobileLightTower,
                alt: 'Solar mobile light tower'
            }
        ],
        specs: {
            height: "7m - 9m",
            energy: "100% Solar Powered",
            battery: "Deep Cycle Gel / Lithium",
            lamps: "4x 100W High Efficiency LED",
            emissions: "Zero CO2",
            application: "Public Events, Urban Works"
        },
        technicalSpecs: [
            { parameter: "Solar Array", specification: "3x 350W Adjustable Panels" },
            { parameter: "Autonomy", specification: "Up to 48 Hours without Sun" },
            { parameter: "Charging", specification: "Solar + External Plug-in" },
            { parameter: "Noise Level", specification: "0 dB" }
        ],
        badge: "New"
    },
    {
        id: 6,
        slug: "inflatable-lighting-tower-panel",
        category: "Inflatable Lighting",
        title: "Inflatable Lighting Tower Panel",
        description: "Unique, portable inflatable towers for quick deployment in remote areas, providing 360-degree glare-free light. Lightweight and compact for emergency response.",
        sku: "TT-IB-600",
        images: [
            {
                full: inflatableLightTower,
                alt: 'Inflatable light tower'
            }
        ],
        specs: {
            height: "Up to 5m",
            light: "360 Degree Diffused",
            weight: "< 15 kg",
            deployment: "< 5 Minutes",
            power: "Portable Generator / Battery",
            application: "Emergency, Rescue, DIY"
        },
        technicalSpecs: [
            { parameter: "Inflation Time", specification: "90 Seconds" },
            { parameter: "Wind Stability", specification: "Up to 50 km/h (with guy ropes)" },
            { parameter: "Lamp Type", specification: "High Pressure Sodium / LED" },
            { parameter: "Fabric", specification: "High Strength Synthetic" }
        ],
        badge: "Portable"
    }
];

export const getProductBySlug = (slug) => {
    return products.find(p => p.slug === slug);
};
