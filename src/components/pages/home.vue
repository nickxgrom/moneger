<template>
    <div class="page">
        <v-row  class="ma-0">
            <v-col
                class="pa-0 outlined"
                cols="3"

            >
               <left-sidebar></left-sidebar>

            </v-col>

            <v-col
                class="pa-0 outlined"
                cols="6"
            >
                    content
            </v-col>

            <v-col
                class="pa-0 outlined"
                cols="3"
            >
                    right side bar
            </v-col>
        </v-row>

    </div>
</template>

<script>
    import LeftSidebar from '../shared/left-sidebar.vue'
    export default {
        name: "home",
        components: {
            LeftSidebar,
        },
    }
</script>

<style scoped>
    .page {
        display: flex;
        margin: 0;
        padding: 0;

    }

    .outlined {
        border: 1px solid black;
    }

</style>