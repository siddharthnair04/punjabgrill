//DUBAI & ABU DHABI INSTAGRAM BUTTONS
var ele = document.querySelector('.clos');
ele.style.display = 'none';
document.querySelector('.btn2').style.display = 'none'; 
document.querySelector('.btn3').style.display = 'none';  
document.querySelector('.btn1').addEventListener('click', showBtn);

function showBtn(e) { 
    document.querySelector('.btn2').style.display = 'block'; 
    document.querySelector('.btn3').style.display = 'block';
    ele.style.display = "block"; 
    e.preventDefault(); 
   }

ele.addEventListener('click', function(){
    var clos1 = document.querySelector('.btn2');
    var clos2 = document.querySelector('.btn3');
    clos1.style.display = "none";
    clos2.style.display = "none";
    ele.style.display = "none";
});
//INSTAGRAM LIVE FEED
var userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'high_resolution',
    accessToken: 'IGQVJVREFzVVgwZAzBKZA0NoRk4yekZAPQ2FGbV96dkl1T0ZAsbDVDUVg2RFNUNkdoeEl5bnVoaXp3WmhDZAzJycVI1N1ZAfbUFMYkh2NHMzXzhZAR1cwbzhSdVBIaTIxNU1Md2JVcUxQLUhmYVdZASTZAUMTZAWWAZDZD'
  });
  userFeed.run();