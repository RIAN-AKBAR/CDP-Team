// ============================================
// KONFIGURASI CDP - SETING SEMUA DI SINI
// ============================================

const CDP_CONFIG = {
    // ============================================
    // MAINTENANCE MODE - SET true UNTUK AKTIFKAN
    // ============================================
    MAINTENANCE: {
        ENABLED: true,
        TITLE: '🛠️ SEDANG MAINTENANCE',
        MESSAGE: 'Kami sedang melakukan perbaikan sistem. Silakan kembali lagi nanti.',
        ESTIMATED: 'Akan kembali dalam waktu dekat',
        ETA_TIME: '',
        CONTACT_DISCORD: true,
        CONTACT_WA: true,
        WA_NUMBER: '6285167089251'           // ← NOMOR KHUSUS MAINTENANCE
    },

    // ============================================
    // URL TUNNEL CLOUDFLARE
    // ============================================
    TUNNEL_URL: 'https://beaches-adequate-maui-afternoon.trycloudflare.com',
    
    // ============================================
    // PATH REGISTER, ADMIN & CHAT
    // ============================================
    REGISTER_PATH: '/register_cdp/index.html',
    ADMIN_PATH: '/register_cdp/admin.php',
    CHAT_PATH: '/register_cdp/chat_simple.php',
    
    // ============================================
    // BASE URL UNTUK GITHUB
    // ============================================
    GITHUB_URL: 'https://cdp-team.github.io',
    
    // ============================================
    // LINK DISCORD UNTUK PENDAFTARAN
    // ============================================
    DISCORD_INVITE: 'https://discord.gg/kEYVZJGdk',
    
    // ============================================
    // LINK EXTERNAL
    // ============================================
    EXTERNAL_LINKS: {
        JASA_CINE: 'https://jasacinembyanzarcine.netlify.app/',
        TIKTOK: 'https://tiktok.com/@umbu2460',
        DISCORD: 'https://discord.gg/kEYVZJGdk',
        YOUTUBE: 'https://youtube.com/@teamcdpcircledragpemula?si=vQkfSAEBAx3LtTdE'
    },
    
    // ============================================
    // WHATSAPP NUMBER UNTUK COLAB & LAGA
    // ============================================
    WHATSAPP_NUMBER: '6282154329388'         // ← KHUSUS COLAB & LAGA
};

// ============================================
// FUNGSI UNTUK MENDAPATKAN URL LENGKAP
// ============================================

function getRegisterUrl() {
    return CDP_CONFIG.DISCORD_INVITE;
}

function getDiscordUrl() {
    return CDP_CONFIG.DISCORD_INVITE;
}

function getAdminUrl() {
    return CDP_CONFIG.TUNNEL_URL + CDP_CONFIG.ADMIN_PATH;
}

function getChatUrl() {
    return CDP_CONFIG.TUNNEL_URL + CDP_CONFIG.CHAT_PATH;
}

function getWhatsAppUrl(message = '') {
    // Untuk Colab & Laga
    return `https://wa.me/${CDP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function getMaintenanceWaUrl(message = '') {
    // Khusus tombol WA di halaman maintenance
    const num = (CDP_CONFIG.MAINTENANCE && CDP_CONFIG.MAINTENANCE.WA_NUMBER) 
                ? CDP_CONFIG.MAINTENANCE.WA_NUMBER 
                : CDP_CONFIG.WHATSAPP_NUMBER;
    return `https://wa.me/${num}${message ? '?text=' + encodeURIComponent(message) : ''}`;
}

function isMaintenance() {
    return CDP_CONFIG.MAINTENANCE && CDP_CONFIG.MAINTENANCE.ENABLED === true;
}

// ============================================
// EXPOSE KE GLOBAL
// ============================================
window.CDP_CONFIG = CDP_CONFIG;
window.getRegisterUrl = getRegisterUrl;
window.getDiscordUrl = getDiscordUrl;
window.getAdminUrl = getAdminUrl;
window.getChatUrl = getChatUrl;
window.getWhatsAppUrl = getWhatsAppUrl;
window.getMaintenanceWaUrl = getMaintenanceWaUrl;
window.isMaintenance = isMaintenance;
