<template>
    <div>
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
                                <v-card-text class="pb-0 headline">
                                    {{workspace.spentThisMonth}}$
                                </v-card-text>
                                <v-card-subtitle class="pt-0">
                                    of {{workspace.monthLimit}}$ limit
                                </v-card-subtitle>
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
                                v-for="category in categories"
                        >
                            <div>
                                <div class="flex">
                                    <span>{{category.name}}</span>
                                    <span>{{category.value}}$</span>
                                </div>
                                <v-progress-linear
                                        :value="category.value*100/workspace.spentThisMonth"
                                ></v-progress-linear>
                            </div>
                        </li>
                    </ul>
                </v-card>
            </v-col>
        </v-row>

        <div class="ma-4">
            <donut-chart :categories="workspace.categories"></donut-chart>
        </div>

        <v-card  class="general" flat>
            <v-card-title>All workspaces</v-card-title>

            <div class="flex">
                <v-card
                    v-for="item in totalBudget"
                    class="general-card text-center"
                    :color="item.color"
                    :key="item.name"
                >
                    <v-card-title>{{item.name}}</v-card-title>
                    <span class="text-h5">
                        {{item.value}}$
                    </span>
                </v-card>
            </div>
        </v-card>
    </div>
</template>

<script>
    import DonutChart from '../shared/donut-chart.vue'

    export default {
        name: "home",
        components: {
            DonutChart
        },
        data(){
            return {
                totalBudget: [
                    {
                        name: "Budget",
                        value: "990,890",
                        color: "#EBF1FF"
                    },
                    {
                        name: "Income",
                        value: "123,934",
                        color: "#BBD6A1"
                    },
                    {
                        name: "Outcome",
                        value: "12,312",
                        color: "#FFE5DA"
                    }
                ]
            }
        },
        computed: {
            workspace() {
                return this.$store.getters.currentWorkspace
            },
            categories() {
                return this.workspace.categories
            },
        }
    }
</script>

<style scoped>
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

    .general-card {
        width: 30%;
        height: 120px;
    }
</style>