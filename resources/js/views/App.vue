<template>
    <div>
        <header-component></header-component>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    import HeaderComponent from '../componenets/HeaderComponent.vue';

    export default {
        components: {
            HeaderComponent
        }
    }
</script>
