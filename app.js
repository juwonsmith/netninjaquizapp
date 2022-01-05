const correctAnswers  = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    //check answers
    userAnswers.forEach((answer,index) =>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })
    scrollTo(0,0);
    //result.querySelector('span').textContent = `${score}%`; //this queries the scope of the result div all elements in it
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 30);
});

//windom object(global object)
// setTimeout(() => {
//     alert('hello world');
// }, 5000);
// let i = 0;
// const timer = setInterval(()=> {
//     console.log('hell0');
//     i++;
//     if(i===5){
//         clearInterval(timer);
//     }
// },2000);