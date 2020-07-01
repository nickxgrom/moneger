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
                class="outlined"
                cols="6"
            >
                <v-row>
                    <v-col>
                        <v-card class="card credit-limit">
                            <v-card-title class="pa-0 mb-4">Credit limit</v-card-title>
                            <div class="flex">
                                <v-progress-circular
                                    size="120"
                                    rotate="270"
                                    value="13"
                                    color="#8C8BF0"
                                >
                                    <div class="text-center">
                                        <v-card-text class="pb-0 headline">123$</v-card-text>
                                        <v-card-subtitle class="pt-0">of 1000$ limit</v-card-subtitle>
                                    </div>
                                </v-progress-circular>

                                <div class="total-spent-info">
                                    <ul>
                                        <li>
                                            <v-card-title class="pa-0 pb-4">
                                                <v-icon small color="#68993F">mdi-circle</v-icon>
                                                6,345$
                                            </v-card-title>
                                            <v-card-subtitle class="pb-0 px-0">Total</v-card-subtitle>
                                        </li>
                                        <li>
                                            <v-card-title class="pa-0 pb-4">
                                                <v-icon small color="#D96B55">mdi-circle</v-icon>
                                                5,345$
                                            </v-card-title>
                                            <v-card-subtitle class="pb-0 px-0">Spent</v-card-subtitle>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="card categories">
                            <v-card-title class="pa-0 mb-4 flex">
                                Categories
                                <v-btn small color="primary">Show more</v-btn>
                            </v-card-title>

                            <ul>
                                <li
                                    v-for="item in categories"
                                >
                                    <div>
                                        <div class="flex">
                                            <span>{{item.name}}</span>
                                            <span>{{item.value}}$</span>
                                        </div>
                                        <v-progress-linear
                                            :value="item.value*100/thisMonthSpent"
                                        ></v-progress-linear>
                                    </div>
                                </li>
                            </ul>
                        </v-card>
                    </v-col>
                </v-row>

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
        data(){
            return {
                thisMonthSpent: 900,
                categories: [
                    {
                        name: "Health",
                        value: 200
                    },
                    {
                        name: "Products",
                        value: 450
                    },
                    {
                        name: "Shopping",
                        value: 250
                    },

                ]
            }
        }
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

    .flex {
        display: flex;
        justify-content: space-between;
        align-content: baseline;
    }

    .card {
        min-width: 250px;
        height: 200px;
        padding: 12px;
    }

    .total-spent-info {
        background-color: #EBF1FF;
        border-radius: 20px;
        width: 50%;
    }

    .card ul {
         padding-left: 0px;
         list-style: none;
    }

    .credit-limit li {
        padding: 10px 0;
        width: max-content;
        margin: auto;
    }

    .categories li {
        margin: 0 0 12px;
    }
</style>