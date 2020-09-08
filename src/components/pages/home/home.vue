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
                        <div class="tile">
                            <atomio-button
                                compact
                                @click="addTransactionFormVisible=true"
                                color="success"
                                class="add-transaction-button"
                            >
                                Add transaction
                            </atomio-button>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>

        <div class="ma-4">
            <donut-chart :categories="workspace.categories"></donut-chart>
        </div>
        <atomio-button
            class="show-more-btn"
            @click="workspaceSettingsFormVisible=true"
        >
            Workspace settings
        </atomio-button>

        <add-transaction-form
            v-if="addTransactionFormVisible"
            @closeForm="addTransactionFormVisible=false"
        ></add-transaction-form>

        <workspace-settings-form
            v-if="workspaceSettingsFormVisible"
            :workspaceName="workspace.name"
            :categories="workspace.categories"
            @closeForm="workspaceSettingsFormVisible=false"
        >
        </workspace-settings-form>
    </div>
</template>

<script>
    import DonutChart from '../../shared/donut-chart.vue'
    import AddTransactionForm from './add-transaction-form.vue'
    import WorkspaceSettingsForm from './workspace-settings-form.vue'

    export default {
        name: "home",
        components: {
            DonutChart,
            AddTransactionForm,
            WorkspaceSettingsForm
        },
        data(){
            return {
                addTransactionFormVisible: false,
                workspaceSettingsFormVisible: false,
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
        },
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

    .tile {
        width: 49%;
        margin: 0 0 5px 0;
        padding: 5px 10px;
    }

    .add-transaction-button {
        background: #67a734;
        z-index: 4;
    }

    .add-transaction-button:before {
        background: #3d8602;
    }

    .show-more-btn {
        margin: auto;
        z-index: 4;
    }
</style>