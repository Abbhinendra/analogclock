




setInterval(() => {
    let d=new Date();

    shr=d.getHours();
    smin=d.getMinutes();
    ssec=d.getSeconds();

    hro=30*shr+smin/2;
    mro=6*smin;
    sro=6*ssec;

    hr.style.transform=`rotate(${hro}deg)`;
    
    min.style.transform=`rotate(${mro}deg)`;
   
    sec.style.transform=`rotate(${sro}deg)`;
   
    
}, 1000);
