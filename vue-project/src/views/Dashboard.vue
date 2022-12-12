<template>
    <div>
        
    </div>
</template>

<script>
import {mapStores} from "pinia"
import userStore from "../stores/user.js"

export default {
    computed: {
        ...mapStores(userStore)
    }
}
</script>