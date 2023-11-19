let url='https://api.dictionaryapi.dev/api/v2/entries/en/';
let btn=document.querySelector('button');
let inp=document.querySelector('#word');
let meaning=document.querySelector('#meaning');
let h3=document.querySelector('h3');
let list=document.querySelector('li');
// console.log(axios.get(url));
list.style.listStyle='none';
btn.addEventListener('click',async()=>{
    try{
        let word=inp.value;
        let res=await axios.get(url+word);
        // let mean=res.data[0].meanings[0].definitions[0].definition;
        // console.log(res.data[0].meanings.length);
        if(word){
            h3.innerText=`Meaning of ${word} is:`
        }
        // meaning.innerText=mean;
        for(let i=0; i<res.data[0].meanings.length; i++)
        {
            let mean=res.data[0].meanings[i].definitions[0].definition;
            // console.log(mean);
            let li=document.createElement('ul');
            li.innerText=mean;
            list.append(li);
        }
    }
    catch(e){
        alert(e);
    }
});