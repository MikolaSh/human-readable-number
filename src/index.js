module.exports = function toReadable (num) {
    var arrUnits = ["zero", "one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    var arrDec = ["twenty","thirty","forty", "fifty","sixty","seventy","eighty","ninety"];
    if(num<20){return arrUnits[num]}
    if(num>=20 && num<100){
        var dec = num/10;
        dec = Math.trunc(dec);
        if(num%10==0){return arrDec[dec-2]}
        return arrDec[dec-2]+" "+ arrUnits[num%10];
    }
    if(num>=100 && num<1000){
        var output;
        var hun = num/100;
        var dec = num%100;
        hun = Math.trunc(hun);
        switch(hun){
            case 1:
                output = arrUnits[hun]+" hundred";
                break;
            default:
                output =  arrUnits[hun]+" hundred";
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

