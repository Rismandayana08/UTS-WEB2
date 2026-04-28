const WebSocket = require('ws');

const PORT = 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`[SERVER] WebSocket server berjalan di ws://localhost:${PORT}`);

wss.on('connection', (ws, req) => {
    const clientIp = req.socket.remoteAddress;
    console.log(`[KONEKSI BARU] Klien terhubung dari IP: ${clientIp}`);

    // Pesan selamat datang
    ws.send(JSON.stringify({ 
        type: 'system', 
        message: 'Selamat datang! Ketik sesuatu dan Bot akan otomatis membalas.' 
    }));

    // Event ketika server menerima pesan dari klien
    ws.on('message', (data) => {
        try {
            const message = data.toString();
            console.log(`[PESAN MASUK] dari Klien: ${message}`);

            // 1. Tampilkan pesan dari klien di layar chat
            ws.send(JSON.stringify({ 
                type: 'chat', 
                message: `Kamu: ${message}` 
            }));

            // 2. FITUR AUTO-REPLY DARI BOT
            // Menggunakan setTimeout agar ada jeda 1 detik (1000 milidetik) sebelum membalas
            setTimeout(() => {
                // Pastikan koneksi masih terbuka sebelum mengirim balasan
                if (ws.readyState === WebSocket.OPEN) {
                    
                    // Logika balasan bot sederhana
                    let balasanBot = "";
                    if (message.toLowerCase().includes("halo")) {
                        balasanBot = "Halo juga! Ada yang bisa saya bantu hari ini?";
                    } else if (message.toLowerCase().includes("jam berapa")) {
                        const waktu = new Date().toLocaleTimeString('id-ID');
                        balasanBot = `Sekarang menunjukkan pukul ${waktu} WIB.`;
                    } else {
                        balasanBot = `Pesan "${message}" sudah saya terima ya! Tunggu fitur AI yang lebih canggih nanti.`;
                    }

                    // Kirim balasan ke klien
                    ws.send(JSON.stringify({
                        type: 'system', // Pakai tipe 'system' agar warnanya beda di layar
                        message: `🤖 Bot: ${balasanBot}`
                    }));
                }
            }, 1000); // 1000 = 1 detik

        } catch (error) {
            console.error(`[ERROR] Gagal memproses pesan: ${error.message}`);
        }
    });

    ws.on('close', () => {
        console.log(`[KONEKSI TERPUTUS] Klien telah keluar.`);
    });
});