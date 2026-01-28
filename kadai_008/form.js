$(function() {
   //class属性がcheckの要素がクリックされたら
   $('.btn').on('click', function() {
    //text-box属性にクリックしました！を追加する
    $('.text-box').val('クリックしました！');
   });
})