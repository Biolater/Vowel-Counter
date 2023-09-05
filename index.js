const btn = $(".btn");
const input = $(".form-control")
let vowelCount = 0;
$(btn).on("click", function () {
    const inputValue = input.val();
    const currentCount = (inputValue.match(/[aeiou]/gi) || []).length;
    currentCount > 1 ? alert(`You have ${currentCount} vowels`) : currentCount <= 0 ? alert("You dont have any vowels") : alert(`You have ${currentCount} vowel`) 
});