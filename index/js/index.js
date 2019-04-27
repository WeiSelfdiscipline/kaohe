window.onload=function(){
    var li_1=document.getElementById("li1");
    var li_2=document.getElementById("li2");
    var li_3=document.getElementById("li3");
    var li_4=document.getElementById("li4");

    var nav2=document.getElementById("nav2");
    var nav3=document.getElementById("nav3");
    var nav4=document.getElementById("nav4");
    var nav5=document.getElementById("nav5");
    
    var li_1_img=document.getElementById("li1-img");
    var li_2_img=document.getElementById("li2_img");
    var hw_img=document.getElementById("hw_img");
    var hw2_img=document.getElementById("hw2_img");
    li_1.onclick=function()
    {
        if(nav2.style.display=="none")
        {
        nav2.style.display="block";
        nav3.style.display="none";
        li_1_img.src="images/向上箭头.png";
        }
        else
        {
            nav2.style.display="none";
            li_1_img.src="images/向上箭头 (1).png";
        }
    }
    
    li_2.onclick=function()
    {
      if(nav3.style.display=="none")
        {
        nav3.style.display="block";
        nav2.style.display="none";
        li_2_img.src="images/向上箭头.png";
        }
        else
        {
            nav3.style.display="none";
            li_2_img.src="images/向上箭头 (1).png";
        } 
    }

    li_3.onmouseover=function()
    {
        
            nav4.style.display="block";
            nav5.style.display="none";
            hw_img.src="images/向下 (1).png";
    }
    li_3.onmouseout=function(){
        nav4.style.display="none";
         hw_img.src="images/向下.png";
    }
    
    li_4.onmouseover=function()
    {
        
            nav5.style.display="block";
            nav4.style.display="none";
            hw2_img.src="images/向下 (1).png";
    }
    
    li_4.onmouseout=function()
    {
        nav5.style.display="none";
         hw2_img.src="images/向下.png";
    }


    var wheel = document.getElementById('wheel');
    var wrap = document.getElementById('wrap');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var timer;

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(wrap.style.left) + offset;
        wrap.style.left = newLeft + 'px';
        //无限滚动判断
        if (newLeft > -1200) {
            wrap.style.left = -6000 + 'px';
        }
        if (newLeft < -6000) {
            wrap.style.left = -1200 + 'px';
        }
    }

    function buttonsShow() {
        var buttons = document.getElementById('buttons').getElementsByTagName('span');
        //将之前的小圆点的样式清除
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        //数组从0开始，故index需要-1
        console.log(buttons);
        buttons[index - 1].className = "on";
    }


    for (var i = 0; i < buttons.length; i++) {
        (function (i) {
            buttons[i].onclick = function () {

                /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
                /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
                var clickIndex = parseInt(this.getAttribute('index'));
                var offset = 1200 * (index - clickIndex); //这个index是当前图片停留时的index
                animate(offset);
                index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
                buttonsShow();
                console.log(i);
            }
        })(i)
    }
    prev.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 3
        }
        animate(1200);
        buttonsShow();
    };
    next.onclick = function () {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 3) {
            index = 1;
        }
        animate(-1200);
        buttonsShow();
    };

    function play() {
        timer = setInterval(function () {
            next.onclick();
        }, 1500)
    }

    function stop() {
        clearInterval(timer);
    }

    wheel.onmouseover = stop;
    wheel.onmouseout = play;
    play();//调用函数

}



 

