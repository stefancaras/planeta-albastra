var MSPD = 24*60*60*1000; 
var aDW = new Array('Du','Lu','Ma','Mi','Joi','Vi','S&acirc;'); 
var aM2 = new Array('ian','feb','mar','apr','mai','iun','iul','aug','sep','oct','noi','dec'); 
function phD(ph_p) { 
    var d; 
    if( (ph_p>=0) && (ph_p<=2.49) ) { d="Lun&#259; nou&#259;"; } 
    else if( (ph_p>=2.5) && (ph_p<=22.49) ) { d="Semilun&#259; &icirc;n cre&#351;tere"; } 
    else if( (ph_p>=22.5) && (ph_p<=27.49) ) { d="Primul p&#259;trar"; } 
    else if( (ph_p>=27.5) && (ph_p<=47.49) ) { d="Lun&#259; &icirc;n cre&#351;tere"; } 
    else if( (ph_p>=47.5) && (ph_p<=52.49) ) { d="Lun&#259; plin&#259;"; } 
    else if( (ph_p>=52.5) && (ph_p<=73.49) ) { d="Lun&#259; &icirc;n descre&#351;tere"; } 
    else if( (ph_p>=73.5) && (ph_p<=77.49) ) { d="Ultimul p&#259;trar"; } 
    else if( (ph_p>=77.5) && (ph_p <= 97.49) ) { d="Semilun&#259; &icirc;n descre&#351;tere"; } 
    else { d="Lun&#259; nou&#259;"; } 
    return d; 
} 
function rnd(val, prec) { 
    if(rnd.arguments.length==1) prec=0; 
    val = val * Math.pow(10,prec); 
    val = Math.round(val); 
    val = val / Math.pow(10,prec); 
    return val; 
} 
var tdy=new Date(); 
var ph_i=cmm_gPh(tdy); 
var p_o_f=rnd(ph_i.ph,0); 
var ph_p=ph_i.a; 
var ph_dec=rnd(ph_p,0)/100; 
var mimg=rnd((ph_dec*40),0); 
mimg = (mimg==40?0:(mimg+1)); 
function cmm_dAdj(x) { 
    if(x>360) { 
        while(x>360) { x -= 360; } 
    } 
    else if(x<0) { 
        while(x<0) { x += 360; } 
    } 
    return x; 
} 
function cmm_dToR(d){ 
    return d*2*Math.PI/360; 
} 
function cmm_gPh(msdate) { 
    var E = new Date(Date.UTC(1990,0,1,0,0,0,0)); 
    var dn = (msdate - E.getTime())/MSPD+1; 
    var EL_E = 279.403303; 
    var EL_P = 282.768422; 
    var N = (360/365.242191) * dn; 
    N = cmm_dAdj(N); 
    var M = N + EL_E - EL_P; 
    S_M = cmm_dAdj(M); 
    var E = (360/Math.PI)*0.016713*Math.sin(cmm_dToR(S_M)); 
    var S_L = N + E + EL_E; 
    S_L = cmm_dAdj(S_L); 
    var tmp; 
    var LO = 318.351648; 
    var PO = 36.340410; 
    var NO = 318.510107; 
    var l = cmm_dAdj(13.1763966*dn + LO); 
    var Mm = cmm_dAdj(l - 0.1114041*dn-PO); 
    var N = cmm_dAdj(NO - 0.0529539*dn); 
    tmp = (2*(l - S_L))-Mm; 
    var Ev = 1.2739*Math.sin(cmm_dToR(tmp)); 
    tmp = cmm_dToR(S_M); 
    var Ae = 0.1858*Math.sin(tmp); 
    var A3 = 0.37*Math.sin(tmp); 
    var Mm1 = Mm + Ev - Ae - A3; 
    var Ec = 6.2886*Math.sin(cmm_dToR(Mm1)); 
    var A4 = 0.214*Math.sin(2*cmm_dToR(Mm1)); 
    var l1 = l + Ev + Ec - Ae + A4; 
    var V = 0.6583*Math.sin(cmm_dToR(2*(l1-S_L))); 
    var mTL = l1 + V; 
    var D = mTL - S_L; 
    D = cmm_dAdj(D); 
    var F = 0.5*(1-Math.cos(cmm_dToR(D))); 
    F = F*100; 
    var tmp = new Object(); 
    tmp.ph = F; 
    tmp.D = D; 
    tmp.a = D/360*100; 
    return tmp; 
}