<template>
<div class=" divGeneral d-flex flex-column align-items-center ">
<div class="bg-light mt-5">
   <h4 class="text-center">To-do list</h4> 
   <hr>
   <input type="text" placeholder="Type a task..." class="input-group-text" id="inputGroup-sizing-default"><button type="button" >Add new task</button>
</div>
<div class="bg-light mt-5 ">
   <h4 class="text-center">Doing</h4> 
   <hr>
   <input type="text" placeholder="Type a task..." class="input-group-text" id="inputGroup-sizing-default"><button type="button" >Add new task</button>
</div>
<div class="bg-light mt-5 mb-5">
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
    background-color:#78FFE4;
    
    
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
}

.divGeneral{
    background-color: #ffe478;
}
   
    

</style>