<template>
<div class=" divGeneral d-flex flex-column align-items-center ">
<div class="divIndividual1  mt-5 w-75 text-center">
   <h4 class="text-center">To-do list</h4> 
   <hr>
   <input type="text" placeholder="Type a task..." class="input-group-text" id="inputGroup-sizing-default"><button type="button" >Add new task</button>
</div>
<div class="divIndividual2 bg-light mt-5 w-75 text-center">
   <h4 class="text-center">Doing</h4> 
   <hr>
   <input type="text" placeholder="Type a task..." class="input-group-text" id="inputGroup-sizing-default"><button type="button" >Add new task</button>
</div>
<div class="divIndividual3 bg-light mt-5 mb-5 w-75 text-center">
   <h4 class="text-center">Done</h4> 
   <hr>
   <input type="text" placeholder="Type a task..." class="input-group-text" id="inputGroup-sizing-default"><button type="button" > Add new task</button>
</div>
</div>
  </template>


<script>

</script>

<style scoped>
button{
    padding: 5px 10px;
    margin: 10px;
    border-radius: 50px;
    border: none;
    background-color:#282a2aac;
    color: white;
    
    
}
h4{
    margin-top: 10px;
    background-color:  ;
  
}

hr{
    margin: 5px 0;
}

input{
    margin-top: 10px;
    width: 100%;
    border: none;
    background-color:;
}

.divGeneral{
    background: #f1f7fe;

}
.divIndividual1{
    background-color: white;
    box-shadow: 0 0 2em #c0b3264a;
}
.divIndividual2{
    background-color: white;
    box-shadow: 0 0 2em #15658a6f;
}
.divIndividual3{
    background-color: white;
    box-shadow: 0 0 2em #d55ac556;
}
   
    

</style>