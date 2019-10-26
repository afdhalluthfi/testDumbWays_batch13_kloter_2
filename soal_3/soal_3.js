var lebar = 8;
var panjang = 4;
for(var i =0; i <= panjang; i++){
    if(i % 2){

        for(var j = 0; j <= lebar; j++){
            if(j % 4){
                
                document.write("=");
            }else{
                document.write("*");
            }
           
        }
    }else{
        for(j =0; j<= lebar; j++){
            document.write("*");
    
        }
    }
    document.write("</br>");
}