<template>
    <footer class="py-3">
    <ul class="d-flex flex-row justify-content-around list-unstyled">
    <li><a class="enlace" href=""> <img src="../../public/email-logo.png" alt="logo-correo" width="20px"> hello@tools.com</a></li>
    <li><a class="enlace" href=""> <img src="../../public/facebook-logo.png" alt="logo-facebook" width="20px"> Facebook</a></li>
    <li> <a class="enlace" href=""> <img src="../../public/linkedin-logo.png" alt="logo-linkedin" width="20px"> LinkedIn</a></li>
    </ul>
<div>
    <p class="text-center text-dark">© 2011-2022 CodeKick AB. All rights reserved.</p>
    <p class="text-center text-dark"> Terms of Service | Privacy Policy</p>
</div>   
    </footer>
</template>

<script></script>

<style scoped>
footer{
    background-color: #FFE478;
}
ul{
    font-size: 12px;
}
.enlace{
    color: black;
    text-decoration-line: none;
}

p{
    font-size: 10px;
}

@media (min-width: 720px) { 
footer{
    background-color: #FFE478;
    height: fit-content;
}
ul{
    font-size: 18px;
}
.enlace{
    color: black;
    text-decoration-line: none;
}
.enlace img{
    width: 40px;
}

p{
    font-size: 15px;
}

}

</style>