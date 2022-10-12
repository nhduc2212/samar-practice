const counters=document.querySelectorAll('.counter');
const speed=50;

counters.forEach(counter => {
    const updateCount = () =>{
        const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target/speed;
    if(count<target){
counter.innerText = Math.ceil(count +inc);
setTimeout(updateCount,50/inc); 
    }else{
        count.innerText=target
    }
    }
updateCount();
})