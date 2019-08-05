(function ($) {
    var image = document.getElementById('imgSetter');
    image.src = "https://avatars2.githubusercontent.com/u/6264098?s=460&v=4";

})(jQuery)

function loadData(param) {
    var isi = document.getElementById('submission');
    isi.innerHTML = '';
    if (param == 'saya') {
        isi.innerHTML =
            "<h2>Perkenalkan Ahmad Satiri <br>yang familiar di panggil <strong>bangtiray</strong></h2>" +
            "<h3>Saat ini bekerja di PT Asuransi Jasa Tania, TBK as Fullstack Developer<h3>" +
            "<h3><strong>(Ngaku-ngaku aja fullstack pedahal cuman helpdesk)</strong></h3>" +
            "<h3>kelahiran jakarta masih di jaman Orde Baru.<br> Jakarta, 03 Maret 1985 <br>dan sekarang ini tengah berusia " + loadUmur('03/06/1985') + " Tahun <h3>"

        "<h3>Tinggal bersama istri dan raja dan putri kami yang imut2..<h3>";
    } else if (param == 'bini') {
        isi.innerHTML = "<h2>Cerita soal Istri <strong>WOWWWWW</strong><br>Si cantik yang tidak ada tandinganya setelah Emak saya</h2>" +
            "<h3>Ini <strong>Indah Sari</strong> namanya, istri saya yang pertama dan pastinya insha Allah istri yang terakhir pula Amien<h3>" +
            "<img id='imgMamah' class='imgMamah'></img>" +
            "<h3>Masih Muda loh usia sekarang " + loadUmur('09/20/1996') + " Tahun.<h3>" +
            "<h3>Banyak pengalaman pahit manis dalam keluarga<h3>";

        var imageMamah = document.getElementById('imgMamah');
        imageMamah.src = "src/mama/IMG_0036.jpg";
    } else if (param == 'bocah') {
        isi.innerHTML = "<h2>Si cantik Kakak <strong>Humaira Azzahra</strong></h2>" +
            "<h3>Anak pertama yang menjadi putri kesayangan<h3>" +
            "<video width='320' height='240' controls>  <source src='https://github.com/bangtiray/video/blob/master/VID-20190728-WA0001.mp4?raw=true' type='video/mp4'></video>" +
            "<h2>Nah kenalin nih jagoannya<br> si ganteng <strong>Muhammad Irsyad Hafidz</strong></h2>" +
            "<h3>Si bontot yang murah senyum<h3>" +
            "<video width='320' height='240' controls>  <source src='https://github.com/bangtiray/video/blob/master/VID-20190725-WA0001.mp4?raw=true' type='video/mp4'></video>";
    } else {
        isi.innerHTML = "<h2>Mau lihat-lihat silahkan klik link navigasi diatas</h2>";
    }
}

function loadUmur(tglLahir) {
    var today = new Date();
    var birthday = new Date(tglLahir);
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
        year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;

    if (age < 0) {
        age = 0;
    }

    return age;
}