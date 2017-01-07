//Accept user input of account value, then divide it by four.
  //Give that value to allowedPerTrade
//Accept user input of desired entry price for a stock trade
  //Give that value to sharesPerTrade
//Calculate entry and exit price points based on user input
//Based upon those points possible profit and possible losses are configured and displayed

$( document ).ready(function() {
  $('#outputSection').hide();
    var possibleProfit;
    var possibleLoss;
   $('#enter').on('click', function calculation(){
     $('#outputSection').show();
     //Calculate the amount allowed per trade based off of the account balance
     var userAccount = $("#userAccount").val();
     var allowedPerTrade = userAccount / 4;
     $("#allowedPerTrade").html(function(){
       allowedPerTrade = Math.floor(allowedPerTrade);
       return allowedPerTrade;
     });

     //Calculate the amount of shares allowed to be traded with allowedPerTrade
     var entryPrice = $("#entryPrice").val();
     var sharesPerTrade = allowedPerTrade / entryPrice;
     $("#sharesPerTrade").html(function(){
       sharesPerTrade = Math.floor(sharesPerTrade);
       return sharesPerTrade;
     });

     //Calculate limit exit price at 3% above entry
     var limit = (userAccount * .03) / sharesPerTrade;
     var targetLimit = Number.parseFloat(limit) + Number.parseInt(entryPrice);
     $("#targetLimit").html(function(){
       targetLimit = targetLimit.toFixed(2);
       return targetLimit;
     });

     //Calculate stop exit price at 1% below entry
     var stop = (userAccount * .01) / sharesPerTrade;
     var targetStop = Number.parseInt(entryPrice) - Number.parseFloat(stop);
     $("#targetStop").html(function(){
       targetStop = targetStop.toFixed(2);
       return targetStop;
     });

     //Calculate the amount of profit from the trade
     var possibleProfit = limit * sharesPerTrade;
     $('#possibleProfit').html(function(){
       possibleProfit = possibleProfit.toFixed(2);
       return possibleProfit;
     });

     //Calculate the amount of the possbile loss from the trade
     var possibleLoss = stop * sharesPerTrade;
     $('#possibleLoss').html(function(){
       possibleLoss = possibleLoss.toFixed(2);
       return possibleLoss;
     });
     return false;
   });
 });
