// ============================================
// KONFIGURASI CDP - SETING SEMUA DI SINI
// ============================================

const CDP_CONFIG = {
    // ============================================
    // URL TUNNEL CLOUDFLARE - GANTI DI SINI SAJA
    // ============================================
    TUNNEL_URL: 'https://covers-waterproof-ratings-wireless.trycloudflare.com',
    
    // ============================================
    // PATH REGISTER & ADMIN
    // ============================================
    REGISTER_PATH: '/register_cdp/index.html',
    ADMIN_PATH: '/register_cdp/admin.php',
    
    // ============================================
    // BASE URL UNTUK GITHUB (INDEX UTAMA)
    // ============================================
    GITHUB_URL: 'https://cdp-team.github.io',
    
    // ============================================
    // LINK EXTERNAL
    // ============================================
    EXTERNAL_LINKS: {
        ROLXUM: 'https://rolxum-store.vercel.app/',
        CINE_UMBU: 'https://cine-umbu-store.vercel.app',
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

function getWhatsAppUrl(message = '') {
    return `https://wa.me/${CDP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ============================================
// EXPOSE KE GLOBAL (agar bisa diakses dari HTML)
// ============================================
window.CDP_CONFIG = CDP_CONFIG;
window.getRegisterUrl = getRegisterUrl;
window.getAdminUrl = getAdminUrl;
window.getWhatsAppUrl = getWhatsAppUrl;
