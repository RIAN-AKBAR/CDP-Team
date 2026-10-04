/* =====================================================
   CDP OFFICIAL - CONFIG
   Semua konfigurasi portal & maintenance di sini
   ===================================================== */

const CDP_CONFIG = {

    // =================================================
    // 🚧 MAINTENANCE MODE
    // =================================================
    MAINTENANCE: {
        // true = tampilkan halaman maintenance
        // false = tampil portal loading normal
        AKTIF: true,
        
        // Pesan yang ditampilkan di halaman maintenance
        PESAN: 'Mohon maaf, website CDP Official sedang dalam perbaikan untuk meningkatkan kualitas layanan kami. Kami akan segera kembali dalam waktu dekat!',
        
        // Durasi countdown maintenance (menit)
        // 60 = 1 jam, 120 = 2 jam
        DURASI_MENIT: 60,
        
        // ⭐ AUTO REFRESH - refresh halaman tiap N detik
        // 10 = refresh tiap 10 detik (recommended)
        AUTO_REFRESH_DETIK: 10,
        
        // Nama admin yang bisa dihubungi
        ADMIN: 'Admin CDP',
        
        // Link WA admin
        WA_ADMIN: 'https://wa.me/6282154329388',
        
        // Note di bawah halaman
        NOTE: 'Terima kasih atas kesabaran Anda 🙏'
    },

    // =================================================
    // 🌐 CLOUDFLARE TUNNEL
    // =================================================
    TUNNEL: {
        // URL Cloudflare Tunnel kamu
        // Contoh: 'https://cdp-register.trycloudflare.com'
        URL: 'https://biography-shelf-canberra-ethics.trycloudflare.com/cdp-team',
        
        // Durasi loading portal (ms)
        // 3500 = 3.5 detik
        DELAY: 3500,
        
        // true = auto redirect setelah loading selesai
        // false = user harus klik tombol manual
        AUTO_REDIRECT: true,
        
        // true = buka di tab baru
        // false = redirect di tab yang sama
        NEW_TAB: false
    },

    // =================================================
    // 🎨 BRANDING
    // =================================================
    BRAND: {
        NAMA: 'CDP OFFICIAL',
        LOGO: 'https://files.catbox.moe/7thi53.jpg'
    }
};
