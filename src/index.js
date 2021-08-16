module.exports = function toReadable (number) {
  var arrUnits = ["zero", "one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    var arrDec = ["twenty","thirty","forty", "fifty","sixty","seventy","eighty","ninety"];
    if(number<20){return arrUnits[number]}
    if(number>=20 && number<100){
        var dec = number/10;
        dec = Math.trunc(dec);
        if(number%10==0){return arrDec[dec-2]}
        return arrDec[dec-2]+" "+ arrUnits[number%10];
    }
    if(number>=100 && number<1000){
        var output;
        var hun = number/100;
        var dec = number%100;
        hun = Math.trunc(hun);
        switch(hun){
            case 1:
                output = arrUnits[hun]+" hundred";
                break;
            default:
                output =  arrUnits[hun]+" hundreds";
                break;
        }
        if(dec>0&&dec<20){
            output+=" "+arrUnits[dec];
        }
        if(dec>=20&&dec<100){
            if(dec%10==0){
                output+=" "+arrDec[(dec/10)-2];
            }
            else{
                var n = Math.trunc(dec/10);
                output+=" "+arrDec[n-2]+" "+ arrUnits[dec%10]
            }
        }
        return output;
    }
}
}
