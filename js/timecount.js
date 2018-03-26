window.onload = function()
{
    if(!localStorage.getItem("playerid"))//第一次时进行有无数据验证
    {
      localStorage.setItem("playerid",pid);
      localStorage.setItem("ptimes",1);
      playtime=1;
    }
    else//有数据
    {
      if (pid==localStorage.getItem("playerid"))//id号相同相同
      {
        playtime=localStorage.getItem("ptimes");//获取游玩次数
        playtime++;
        localStorage.setItem("ptimes",playtime);
      }
      else//数据不同，同无数据处理
      {
        localStorage.setItem("playerid",pid);
        localStorage.setItem("ptimes",1);
        playtime=1;
      }
    }
    document.getElementById("ptm").value = playtime;
}
