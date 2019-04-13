$(function(){
    $("#fullpage").fullpage({
        verticalCentered:true,
        navigation:true,
        loopBottom:true,
        loopTop:true,

        // 当离开某一屏的时候，应该让元素重新添加某个样式
        onLeave:function(currentIndex,nextIndex,direction){
            // 添加所有球球的旋转
            if(nextIndex != 1){
                $("#qq_bg").addClass("qq_rotate");
            }else{
                $("#qq_bg").removeClass("qq_rotate");
            }
            // -----------------------------------------
            if(currentIndex == 1 ){
                $(".s1_main").addClass("s1_main_begin");
            }
            if(currentIndex == 2 ){
                // 现在第二屏离开的时候，不要直接添加原始的样式，而是添加了一个另外的效果
                $(".s2_main").addClass("s2_main_end");

                // 最终还是需要让第二屏回归到原始的状态，只不过等s2_main_end执行完毕之后
                setTimeout(() => {
                    $(".s2_main").removeClass("s2_main_end");
                    $(".s2_main").addClass("s2_main_begin");
                }, 1000);
            }
            if(currentIndex == 3 ){
                $(".s3_main").addClass("s3_main_begin");
            }
            if(currentIndex == 4 ){
                $(".s4_main").addClass("s4_main_begin");
            }
        },

        // 添加回调函数afterLoad：当滚动到某一屏之后触发
        // index:滚到到的这一屏的索引，索引从1开始
        afterLoad:function(anchorLink,index){
            if(index == 1){
                // 当处在第一屏的时候，将样式清除，那么元素会以过渡的形式回到原始位置
                $(".s1_main").removeClass("s1_main_begin");
            }
            if(index == 2){
                $(".s2_main").removeClass("s2_main_begin");
            }
            if(index == 3){
                $(".s3_main").removeClass("s3_main_begin");
            }
            if(index == 4){
                $(".s4_main").removeClass("s4_main_begin");
            }
        }
    });
});