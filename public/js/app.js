console.log('public-js');
const form = document.querySelector('form');
const input = document.querySelector('input');
const p1 = document.querySelector('#p1');

form.addEventListener('submit',(e)=>{
const name = input.value;
e.preventDefault();

fetch('http://localhost:3000/src?name='+name).then((response)=>{

response.json().then((res)=>{
    
    if(res.error)
    {
        document.querySelector('#error1').textContent=res.error;
            for(var i=0;i<20;i++){
                document.getElementById(('d'+i)).style.display="none";
            }
        
    }
    else{
        for(var i=0;i<20;i++){
            if(!res[i]){
                continue;
                }
                document.querySelector('#error1').textContent="";
                document.getElementById(('d'+i)).style.display="block";
                var title = res[i].title;
                if(title==null){
                    title="Not Found";
                }
                document.querySelector('#name'+i).textContent=title;
                // document.querySelector('#name'+i).textContent=res[i].attributes.titles.en_jp;
                document.querySelector('#posterImage'+i).src=res[i].image_url;

                var synopsis = res[i].synopsis;
                if(synopsis==null) synopsis="Not Found"
                document.querySelector('#content'+i).textContent=synopsis;

                var score = res[i].score;
                if(score==null) score="Not Found";
                document.querySelector('#averageRating'+i).textContent=score;

                var start_date = res[i].start_date;
                if(start_date==null)start_date="Not Found";
                document.querySelector('#startDate'+i).textContent=start_date.substr(0,10);

                var end_date = res[i].end_date;
                if(end_date==null)end_date="Not Found";
                document.querySelector('#endDate'+i).textContent=end_date.substr(0,10);

                var type = res[i].type;
                if(type==null)type="Not Found";
                document.querySelector('#type'+i).textContent=type;
                //=res[i].attributes.slug;
        }
        
       
        // for( i=0;i<res.length;i++)
        // {
        //     console.log(res[i]);
        //     console.log(368263);
        // }
    }

})


})



})