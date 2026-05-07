// ============================================
// CDP TEAM STORE - CONFIGURATION FILE
// ============================================

const CDP_CONFIG = {
    // Informasi Tim
    team: {
        name: "CDP TEAM",
        tagline: "Rise With CDP",
        owner: {
            name: "@Dzuhh_ | CDP",
            role: "Owner & Founder",
            avatar: "👑",
            social: {
                tiktok: "https://tiktok.com/@cdp.team4",
                discord: "https://discord.gg/sFZU3J487",
                whatsapp: "https://chat.whatsapp.com/J6KhcHHx2QTGFmHDmmtogu?mode=gi_t"
            }
        },
        admin: {
            name: "@CDP_Admin",
            role: "Head Admin",
            avatar: "🛡️"
        }
    },

    // Produk Baju
    products: [
        {
            id: 1,
            name: "Kaos CDP Member V1",
            version: "V1",
            image: "https://tr.rbxcdn.com/180DAY-6465260b95fd69488cea26bfaa5e8095/420/420/Shirt/Webp/noFilter",
            robloxLink: "https://www.roblox.com/catalog/138018016357035",
            price: "Free",
            category: "Member"
        },
        {
            id: 2,
            name: "Kaos CDP Member V2",
            version: "V2",
            image: "https://tr.rbxcdn.com/180DAY-f919288a6af1f439e52aff593f87bd13/420/420/Shirt/Webp/noFilter",
            robloxLink: "https://www.roblox.com/catalog/93778780901295",
            price: "Free",
            category: "Member"
        },
        {
            id: 3,
            name: "Kaos CDP Member V3",
            version: "V3",
            image: "https://tr.rbxcdn.com/180DAY-78c7e320b7a876d02aa0efb5609eac49/420/420/Shirt/Webp/noFilter",
            robloxLink: "https://www.roblox.com/catalog/114313073714304",
            price: "Free",
            category: "Member"
        }
    ],

    // Link Social Media
    socialLinks: {
        whatsapp: "https://chat.whatsapp.com/J6KhcHHx2QTGFmHDmmtogu?mode=gi_t",
        discord: "https://discord.gg/sFZU3J487",
        tiktok: "https://tiktok.com/@cdp.team4",
        instagram: "#",
        youtube: "#"
    },

    // Aturan / Rules Team
    rules: [
        "🚫 Dilarang ngemis GP (nanti ada waktu Mimin bagi bagi GP)",
        "🚫 Dilarang ngemis minta jadi admin",
        "🔞 No share link 18+ / konten dewasa",
        "📵 No kirim foto/vidio 18+",
        "⚠️ No kirim link phising / mencurigakan",
        "💬 Toxic sewajarnya (tetap santun)",
        "📅 Cinem setiap hari minggu (wajib aktif)",
        "🚷 No share link GB lain",
        "🎭 No kirim stiker 18+ / offensive"
    ],

    // Pengaturan Tampilan
    appearance: {
        primaryColor: "#9D4EDD",
        secondaryColor: "#6a1faf",
        accentColor: "#c084fc",
        backgroundColor: "#0a0a0f",
        textColor: "#ffffff",
        animationSpeed: "normal" // slow, normal, fast
    },

    // Preloader Settings
    preloader: {
        enabled: true,
        minDisplayTime: 2500, // milliseconds
        welcomeText: "WELCOME TO CDP"
    },

    // Footer Text
    footer: {
        copyright: "© 2025 CDP TEAM | Roblox Community | Official Apparel",
        tagline: "#RiseWithCDP #UnguBerkibar"
    },

    // API Endpoints (untuk future development)
    api: {
        baseUrl: "",
        endpoints: {}
    }
};

// Export untuk digunakan di HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CDP_CONFIG;
}
