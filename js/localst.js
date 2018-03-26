window.onload = function()
{
  var pid = document.getElementById("pid");
  var ppoints = document.getElementById("ppoints");
  var originPoints=0;
  var highestpoints=0;
  //randnum改为使用pid%3得到

  subbut.onclick = function()
  {
    if(!localStorage.getItem("player"))//第一次时进行有无数据验证
    {
      localStorage.setItem("player",pid.value);
      localStorage.setItem("score",ppoints.value);
      localStorage.setItem("hiscore",ppoints.value);
      originPoints=ppoints.value;
      highestpoints=ppoints.value;
    }
    else//有数据
    {
      if (pid.value==localStorage.getItem("player"))//id号相同相同
      {
        originPoints=localStorage.getItem("score");//分数等于id号的第一个分数
        var pp0 = parseInt(ppoints.value, 10);
        var hi0 = parseInt(localStorage.getItem("hiscore"), 10);
        if (pp0 > hi0)
        //if(ppoints.value>localStorage.getItem("hiscore"))
          {
            localStorage.setItem("hiscore",ppoints.value);
            highestpoints = ppoints.value;
        }
        else
          {highestpoints = localStorage.getItem("hiscore");}
      }
      else//数据不同，同无数据处理
      {
        localStorage.setItem("player",pid.value);
        localStorage.setItem("score",ppoints.value);
        localStorage.setItem("hiscore",ppoints.value);
        originPoints=ppoints.value;
        highestpoints=ppoints.value;
      }
    }
    document.getElementById("ori").value = originPoints;
    document.getElementById("hip").value = highestpoints;
    document.getElementById("upup").submit();
 }
}
