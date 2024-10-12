exports.config = {
    runner: 'local',
    specs: [
        './features/login.feature' // Pastikan jalur ini benar dan sesuai dengan struktur folder
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            w3c: false,
            args: [
                '--disable-extensions',
                '--headless', // Menjalankan di mode headless (tanpa GUI)
                '--no-sandbox', // Pengaturan untuk keamanan yang lebih baik
                '--disable-dev-shm-usage', // Menghindari masalah dengan resource terbatas
                '--window-size=1920,1080' // Ukuran jendela untuk mode headless
            ]
        }
    }],
    logLevel: 'info', // Ubah menjadi 'debug' jika ingin log lebih detail saat debugging
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/loginSteps.js'], // Pastikan jalur ini benar dan file ada
        backtrace: false,
        requireModule: [],
        format: ['pretty', 'json:./reports/cucumber_report.json'], // Format untuk laporan Cucumber
        timeout: 60000, // Pastikan timeout ini cukup untuk eksekusi step
        ignoreUndefined: true,
    },
    reporters: [
        'spec', // Reporter spesifikasi untuk melihat hasil di console
        ['allure', {
            outputDir: './allure-results', // Jalur untuk menyimpan hasil Allure
            disableWebdriverStepsReporting: true, // Nonaktifkan langkah-langkah WebDriver di Allure
            disableLog: true, // Nonaktifkan log di Allure
        }]
    ],
    services: ['chromedriver'], // Tambahkan service chromedriver untuk menjalankan browser Chrome
    baseUrl: 'https://kasirdemo.belajarqa.com/', // URL dasar dari aplikasi yang akan diuji
    waitforTimeout: 10000, // Timeout menunggu elemen, bisa disesuaikan sesuai kebutuhan
    connectionRetryTimeout: 90000, // Timeout koneksi ulang jika terjadi masalah
    connectionRetryCount: 3, // Jumlah percobaan koneksi ulang

    // Pengaturan tambahan lain sesuai kebutuhan
    onPrepare: function (capabilities, specs) {
        // Fungsi ini dapat digunakan untuk melakukan pengaturan sebelum pengujian dimulai
        console.log('Starting test preparation...');
    },
    before: function (capabilities, specs) {
        // Fungsi ini dapat digunakan untuk melakukan setup sebelum setiap spesifikasi
        console.log('Running before each test...');
    },
    after: function (result, capabilities, specs) {
        // Fungsi ini dapat digunakan untuk cleanup setelah setiap spesifikasi
        console.log('Running after each test...');
    },
    onComplete: function (exitCode, config, capabilities) {
        // Fungsi ini akan dipanggil setelah semua pengujian selesai
        console.log('All tests completed with exit code: ' + exitCode);
    },
    afterSuite: function (suite) {
        // Fungsi ini akan dipanggil setelah setiap suite selesai
        console.log('Suite completed: ' + suite.title);
    },
};
