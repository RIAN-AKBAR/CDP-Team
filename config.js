// ==========================================
// PUSAT PENGATURAN CDP PORTAL
// ==========================================

const CDP_CONFIG = {
    // 1. PENGATURAN MAINTENANCE
    MAINTENANCE: {
        // Ubah ke true untuk mengaktifkan halaman maintenance (menutup web)
        // Ubah ke false untuk membuka web seperti biasa
        ACTIVE: false, 
        
        TITLE: "🛠️ SEDANG MAINTENANCE",
        MESSAGE: "Kami sedang melakukan perbaikan sistem untuk meningkatkan kualitas pelayanan. Silakan kembali lagi nanti.",
        ESTIMATED: "Akan kembali dalam waktu dekat",
        
        // Format: "YYYY-MM-DDTHH:MM:SS" (Kosongkan "" jika tidak ingin pakai hitung mundur)
        ETA_TIME: "2026-09-14T19:30:00", 
        
        CONTACT_DISCORD: true,
        CONTACT_WA: true
    },

    // 2. PENGATURAN CLOUDFLARED TUNNEL & LINK UTAMA
    LINKS: {
        // Masukkan link Cloudflared Tunnel Anda di sini (untuk game, web admin, dll)
        CLOUDFLARED_TUNNEL: "https://wants-serious-defines-traditional.trycloudflare.com/cdp-team", 
        
        // Link web utama (jika ada)
        WEBSITE_UTAMA: "-",
    },

    // 3. PENGATURAN PENDAFTARAN
    REGISTER: {
        DISCORD_INVITE: "https://discord.gg/SQNWKqRXR",
        WA_GROUP: "https://chat.whatsapp.com/GPQ52KkDoLLBfZQnThwjn6",
        WA_ADMIN_NUMBER: "6282154329388" // Format: 62xxx
    },

    // 4. PENGATURAN SOSMED (Footer & Tombol)
    SOCIAL_MEDIA: {
        TIKTOK: "https://tiktok.com/@umbu2460",
        YOUTUBE: "https://youtube.com/@cdpofficial",
        WA_CHANNEL: "https://whatsapp.com/channel/0029Vb8kyYABadmYtFb1fu26",
        JASA_CINE: "https://wa.me/6282154329388?text=Halo%20saya%20mau%20pesan%20jasa%20cinematik"
    }
};

// ==========================================
// FUNGSI BANTUAN (JANGAN DIUBAH)
// ==========================================

// Cek apakah web sedang maintenance
function isMaintenance() {
    return CDP_CONFIG.MAINTENANCE.ACTIVE === true;
}

// Dapatkan link Cloudflared
function getCloudflaredLink() {
    return CDP_CONFIG.LINKS.CLOUDFLARED_TUNNEL;
}

// Dapatkan Link Discord
function getDiscordRegisterUrl() {
    return CDP_CONFIG.REGISTER.DISCORD_INVITE;
}

// Dapatkan Link Grup WA
function getWaGroupRegisterUrl() {
    return CDP_CONFIG.REGISTER.WA_GROUP;
}

// Dapatkan Link WA Admin (Untuk pesan otomatis)
function getWhatsAppUrl(pesan) {
    const nomor = CDP_CONFIG.REGISTER.WA_ADMIN_NUMBER;
    return `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;
}
