function fun(show) {
   if('a'==show)
   {
 document.getElementById('login').style = 'display:none'
 document.getElementById('register').style = 'display:block';
 }
    if('b'==show) {
    document.getElementById('register').style = 'display:none';
    document.getElementById('login').style = 'display:block';
}
}