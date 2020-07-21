<template>
    <div>
        <v-row>
            <v-col>
                <v-card class="card credit-limit">
                    <v-card-title class="pa-0 mb-4 ">
                        This month
                    </v-card-title>
                    <div class="flex">
                        <v-progress-circular
                            size="120"
                            rotate="270"
                            :value="spentThisMonth*100/limit"
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
                                    <v-card-subtitle class="pb-0 px-0">Incoming</v-card-subtitle>
                                </li>
                                <li>
                                    <v-card-title class="pa-0 pb-4">
                                        <v-icon small color="#D96B55">mdi-circle</v-icon>
                                        3,123$
                                    </v-card-title>
                                    <v-card-subtitle class="pb-0 px-0">Outgoing</v-card-subtitle>
                                </li>
                            </ul>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="card categories">
                    <v-card-title class="pa-0 pb-4">Current Workspace</v-card-title>
                    <div class="flex">
                        <v-card class="tile">
                            <v-card-subtitle class="pa-0">Total income</v-card-subtitle>
                            <span class="text-h5">321,324$</span>
                        </v-card>
                        <v-card class="tile">
                            <v-card-subtitle class="pa-0">Total spent</v-card-subtitle>
                            <span class="text-h5">1,324$</span>
                        </v-card>
                    </div>
                    <div class="flex">
                        <v-card class="tile">
                            <v-card-subtitle class="pa-0">Transactions amount</v-card-subtitle>
                            <span class="text-h5">732</span>
                        </v-card>
                        <v-card class="tile">
                            <v-card-subtitle class="pa-0">Most popular category</v-card-subtitle>
                            <span class="text-h5">Products</span>
                        </v-card>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <div class="ma-4 text-center">
            <donut-chart :categories="workspace.categories"></donut-chart>
            <v-btn
                color="primary"
            >
                Show more
            </v-btn>
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
            limit() {
                return this.$store.getters.currentWorkspace.monthLimit
            },
            spentThisMonth() {
                return this.$store.getters.currentWorkspace.spentThisMonth
            }
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

    .tile {
        width: 49%;
        margin: 0 0 5px 0;
        padding: 5px 0 5px 10px;
    }
</style>