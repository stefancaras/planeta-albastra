var data="";
if(!ccm_cfg.pth) {ccm_cfg.pth="./images/moon/m";}
data+='<img src="'+ccm_cfg.pth+mimg+'.gif" width="100" height="100" border="0" align="left"></a>';
if(ccm_cfg.n) { data+='<br /><br />'+phD(ph_p)+' &nbsp;&nbsp;'; }
if(ccm_cfg.pof) { data+='<br />'+rnd(p_o_f,0)+'% din plin&#259; &nbsp;&nbsp;'; }
if(ccm_cfg.dt) { data+='<br />'+aDW[tdy.getDay()]+' '+tdy.getDate()+' '+aM2[tdy.getMonth()]+', '+tdy.getFullYear()+' &nbsp;&nbsp;'; }
document.write(data);