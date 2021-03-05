// event
 $('.page-scroll').on('click', function (e) { //membajak href agar tidak bisa di klik
// $('.page-scroll').on('click', function () {
//    console.log('ok'); cek
    // ambil isi href
    var tujuan = $(this).attr('href');
    // console.log(href); get id
    
    // tangkap elemen
    var elemenTujuan = $(tujuan);
    // pindahkan scrol
    // console.log($('body').scrollTop());
    //  $('body').scrollTop('700');//tergantung elemen yg di klik
    // $('body').scrollTop(elemenTujuan.offset().top); kaya href
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing');

    // console.log(elemenTujuan); ambil 1 elemen
    //  console.log(elemenTujuan.offset().top); jarak dari atas fixed

     e.preventDefault(); //membajak href
});