// ============================================
// KONFIGURASI CDP - SETING SEMUA DI SINI
// ============================================

const CDP_CONFIG = {
    // ============================================
    // 🔧 MAINTENANCE MODE - GANTI TRUE/FALSE DI SINI
    // ============================================
    MAINTENANCE_MODE: false,  // ← true = MAINTENANCE ON, false = MAINTENANCE OFF
    
    // ============================================
    // 🔧 PENGATURAN HALAMAN MAINTENANCE
    // ============================================
    MAINTENANCE_CONFIG: {
        TITLE: 'CDP OFFICIAL',
        MESSAGE: 'Kami sedang melakukan pemeliharaan sistem untuk memberikan pengalaman terbaik.',
        SUB_MESSAGE: 'Silakan kembali beberapa saat lagi. Terima kasih atas kesabaran Anda! 🙏',
        REFRESH_INTERVAL: 30,       // auto refresh dalam detik
        SHOW_COUNTDOWN: true,        // tampilkan countdown timer
        ESTIMATED_TIME: '30 Menit',  // estimasi selesai (kosongkan '' jika tidak mau tampil)
        CONTACT_WA: '6282154329388'  // nomor WA admin (kosongkan '' jika tidak mau tampil)
    },
    
    // ============================================
    // URL TUNNEL CLOUDFLARE - GANTI DI SINI SAJA
    // ============================================
    TUNNEL_URL: 'https://suggest-emission-broadcasting-knew.trycloudflare.com',
    
    // ============================================
    // PATH REGISTER, ADMIN, CHAT & CREW
    // ============================================
    REGISTER_PATH: '/register_cdp/index.html',
    ADMIN_PATH: '/register_cdp/admin.php',
    CHAT_PATH: '/register_cdp/chat_simple.php',
    CREW_PATH: '/register_cdp/crew.php',
    
    // ============================================
    // BASE URL UNTUK GITHUB (INDEX UTAMA)
    // ============================================
    GITHUB_URL: 'https://cdp-team.github.io',
    
    // ============================================
    // LINK EXTERNAL
    // ============================================
    EXTERNAL_LINKS: {
        ROLXUM: 'https://rolxum-store.vercel.app/',
        CINE_UMBU: 'https://cine-by-umbu-406241965492.asia-southeast1.run.app',
        JASA_CINE: 'https://jasacinembyanzarcine.netlify.app/',
        TIKTOK: 'https://tiktok.com/@umbu2460',
        DISCORD: 'https://discord.gg/kEYVZJGdk',
        YOUTUBE: 'https://youtube.com/@teamcdpcircledragpemula?si=vQkfSAEBAx3LtTdE'
    },
    
    // ============================================
    // WHATSAPP NUMBER UNTUK COLAB & LAGA
    // ============================================
    WHATSAPP_NUMBER: '6282154329388',
    
    // ============================================
    // EMAIL UNTUK PENDAFTARAN (MODAL)
    // ============================================
    EMAIL_PENDAFTARAN: 'storeumbu7@gmail.com'
};

// ============================================
// FUNGSI UNTUK MENDAPATKAN URL LENGKAP
// ============================================

function getRegisterUrl() {
    return CDP_CONFIG.TUNNEL_URL + CDP_CONFIG.REGISTER_PATH;
}

function getAdminUrl() {
    return CDP_CONFIG.TUNNEL_URL + CDP_CONFIG.ADMIN_PATH;
}

function getChatUrl() {
    return CDP_CONFIG.TUNNEL_URL + CDP_CONFIG.CHAT_PATH;
}

// ============================================
// FUNGSI UNTUK MENDAPATKAN URL CREW (BARU)
// ============================================

function getCrewUrl() {
    return CDP_CONFIG.TUNNEL_URL + CDP_CONFIG.CREW_PATH;
}

function getWhatsAppUrl(message = '') {
    return `https://wa.me/${CDP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============================================
// FUNGSI MAINTENANCE MODE
// ============================================

function isMaintenanceMode() {
    return CDP_CONFIG.MAINTENANCE_MODE === true;
}

function getMaintenanceConfig() {
    return CDP_CONFIG.MAINTENANCE_CONFIG;
}

// ============================================
// EXPOSE KE GLOBAL (agar bisa diakses dari HTML)
// ============================================
window.CDP_CONFIG = CDP_CONFIG;
window.getRegisterUrl = getRegisterUrl;
window.getAdminUrl = getAdminUrl;
window.getChatUrl = getChatUrl;
window.getCrewUrl = getCrewUrl;
window.getWhatsAppUrl = getWhatsAppUrl;
window.isMaintenanceMode = isMaintenanceMode;
window.getMaintenanceConfig = getMaintenanceConfig;
