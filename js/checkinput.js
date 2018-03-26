//检查被试是否有输入所有数值
function validate_required(field,alerttxt)
{
with (field)
  {
  if (value==null||value=="")
    {alert(alerttxt);return false}
  else {return true}
  }
}

function validate_form(thisform)
{
with (thisform)
  {
  if (validate_required(pid,"请填写被试编号！")==false)
    {pid.focus();return false}
  if (validate_required(pname,"请填写昵称！")==false)
    {pname.focus();return false}
  if (validate_required(ppoints,"请填写你的分数！")==false)
    {ppoints.focus();return false}
  }
}
