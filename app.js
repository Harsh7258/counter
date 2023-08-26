// intial condition
let count = 0;

const values = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(harsh){
    harsh.addEventListener("click", function(e){
       const styles = e.currentTarget.classList;
       if(styles.contains("decrease")){
        count--;
       }
       else if(styles.contains('increase')){
        count++;
       }
       else{
         count = 0;
       }
       if(count > 0){
        values.style.color = 'green';
       }
       if(count < 0){
        values.style.color = 'red';
       }
       if(count === 0){
        values.style.color = '#222';
       }
       values.textContent = count;
    });
});

