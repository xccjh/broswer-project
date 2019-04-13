$(function () {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        loopBottom: true,
        loopTop: true,
        afterLoad:function(anchorLink,index){
            // index:当前屏的索引，索引从1开始
            if(index == 1){
                $('.s1').removeClass('s1_begin')
            }
            if(index == 2){
                $('.s2').removeClass('s2_begin')
            }
        },
        onLeave:function(index ,nextIndex ,direction ){
            if(index == 1){
                $('.s1').addClass('s1_begin')
            }
            if(index == 2){
                $('.s2').addClass('s2_end')
                // 当上面的效果结束之后，应该将这个效果移除，同时回到起始状态
                setTimeout(() => {
                    $('.s2').removeClass('s2_end')
                    $('.s2').addClass('s2_begin')
                }, 1000);
            }
        }
    });
})