<template>
    <v-app id="app">
        <v-row class="ma-0">
            <v-col
                    class="pa-0 outlined"
                    cols="3"
            >
                <left-sidebar></left-sidebar>
            </v-col>

            <v-col
                    class="outlined"
                    cols="6"
            >
                <router-view></router-view>
            </v-col>

            <v-col
                    class="pa-0 outlined"
                    cols="3"
            >
                right side bar
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
    import LeftSidebar from './components/shared/left-sidebar.vue'
    export default {
        name: "app",
        components: {
            LeftSidebar,
        }
    }
</script>

<style>
    .outlined {
        border: 1px solid black;
    }
</style>