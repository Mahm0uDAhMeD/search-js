debugger;

var data=["mahmoud","ahmed","ali","amr","mohammed"];

function search(){
    
    var data_input = document.getElementById("search-data").value;
  
    
        
        
        for(var i = 0; i < data.length; i++){
            if(data_input==""){
        
                alert("Not Found");
                break;
            }
                
            if(data[i].indexOf(data_input) !=-1 ){
                document.getElementById("loading").style.display = "block";
        document.getElementById('search-row').innerHTML +=`<div class="search-info">
        <h4>${data[i]}</h4>
        <button>add</button> 
        </div>  <br />`;    
    }
}
        setTimeout(()=>{
            document.getElementById("loading").style.display = "none";
        },1000);
    }
    
alert(' names:mahmoud,ahmed,ali,amr,mohammed') 