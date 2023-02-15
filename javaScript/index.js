
function getInputValue(elementId){
    const inputValue = document.getElementById(elementId);
    const inputValueString = inputValue.value;
    const value = parseInt(inputValueString);
    return value;
}
function getTextValue(textId){
    const afterBalance = document.getElementById(textId);
    const afterBalanceString = afterBalance.innerText;
    const balanceValue = parseInt(afterBalanceString);
    return balanceValue;
}
function setElementInnerText(elementId, value){
    const elementInnerText = document.getElementById(elementId);
    const elementString = elementInnerText.innerText;
    const elementText = parseInt(elementString);
    elementInnerText.innerText = value;
    return elementText;
}



document.getElementById("btnCalculate").addEventListener("click", function () {
  const income = getInputValue('incomeField');
  const food = getInputValue('foodField');
  const rent = getInputValue('rentField')  
  const clothes = getInputValue('clothesField');
  
  const expenses = food + rent + clothes;
  const balance = income - expenses;
 
  if(income > expenses){
    setElementInnerText('totalExpenses', expenses);
    setElementInnerText('afterBalance', balance);
  }
   else{
    alert("Expenses cannot be more than income");
   }
  
});

document.getElementById('btn-save').addEventListener('click', function(){
    
    const income = getInputValue('incomeField');
    const savePercentage = getInputValue('saveField');


    if(savePercentage < 0){
        alert("Provide positive saving value");
    }

    const saveAmount = (savePercentage / 100) * income;
      const balanceValue =   getTextValue('afterBalance');
    const remainingBalance = balanceValue - saveAmount;

    if(saveAmount < balanceValue ){
    setElementInnerText('savingAmount', saveAmount);
    setElementInnerText('remainingBalance', remainingBalance);
    }
    else{
        alert("SavingAmount is greater than balance");
    }
})