
    var li_1=document.getElementById("li1");
    var li_2=document.getElementById("li2");


    var nav2=document.getElementById("nav2");
    var nav3=document.getElementById("nav3");



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
        li_1_img.src="images/向上箭头 (1).png";
        }
        else
        {
            nav2.style.display="none";
            li_1_img.src="images/向上箭头.png";
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


        // var li_3=document.getElementById("li3");
        // var li_4=document.getElementById("li4");
        // var nav4=document.getElementById("nav4");
        // var nav5=document.getElementById("nav5");
        //
        // var li_1_img=document.getElementById("li1-img");
        // var li_2_img=document.getElementById("li2_img");
        // var hw_img=document.getElementById("hw_img");
        // var hw2_img=document.getElementById("hw2_img");
        // li_3.onmouseover=function()
        // {
        //     nav4.style.display="block";
        //     nav5.style.display="none";
        //     hw_img.src="images/向下 (1).png";
        // }
        // li_3.onmouseout=function(){
        //     nav4.style.display="none";
        //     hw_img.src="images/向下.png";
        // }
        // li_4.onmouseover=function()
        // {
        //     nav5.style.display="block";
        //     nav4.style.display="none";
        //     hw2_img.src="images/向下 (1).png";
        // }

        // li_4.onmouseout=function()
        // {
        //     nav5.style.display="none";
        //     hw2_img.src="images/向下.png";
        // }





 

