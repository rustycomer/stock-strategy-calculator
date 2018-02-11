const form = document.getElementById("form");
$("#display").hide();



$("form").submit(function () {
    
    $("form").hide();

    const accountBalance = $("#accountBalance").val();
    const stockPrice = $("#stockPrice").val(); 
      
    
    
    let amountPerTrade = function amountPerTrade() {
        return accountBalance / 4;
    }
    
    // Returns shares that are allowed per trade
    let sharesPerTrade = function sharesPerTrade() {
        const amountPerTrade = accountBalance / 4;
        return Math.floor(amountPerTrade / stockPrice);
    }
    
    // Returns amount that should be calculated for limit and stop amounts
    function getExitAmount(percentage) {
        return ((accountBalance * percentage) / sharesPerTrade());
        
    }
    
    
    
    let limitPrice = function limitPrice() {
        return (parseFloat(stockPrice) + getExitAmount(.03)).toFixed(2);
        
    }
    
    let stopPrice = function stopPrice() {
        return (stockPrice - getExitAmount(.01)).toFixed(2);
        
    }
    
    let possibleProfit = function possibleProfit() {
        return (getExitAmount(.03) * sharesPerTrade()).toFixed(2);
    }
    
    let possibleLoss = function possibleLoss() {
        return (getExitAmount(.01) * sharesPerTrade()).toFixed(2);
    }
    

    $("#amountPerTrade").html(amountPerTrade);
    $("#sharesPerTrade").html(sharesPerTrade);
    $("#limitPrice").html(limitPrice);
    $("#stopPrice").html(stopPrice);
    $("#possibleProfit").html(possibleProfit);
    $("#possibleLoss").html(possibleLoss);


    $("#display").show();
    return false;
});

$("#reset").click(function (){
  $("form").show();

  $("#display").hide();
  return false;
});


