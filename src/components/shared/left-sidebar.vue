<template>

    <div class="main">
        <v-card class="user" flat>
            <div class="text-center">
                <v-avatar size="70" color="#8C8BF0">
                    <v-icon x-large dark>mdi-account-circle</v-icon>
                </v-avatar>
            </div>
            <v-card-title class="pb-0 pt-1">
                <span class="mx-auto">Username here</span>
            </v-card-title>
            <div class="text-center">
                <v-chip outlined text-color="#c3c3c3" class="px-7">
                    rank
                </v-chip>
            </div>
        </v-card>
        <v-card
            class="balance-amount"
            rounded="lg"
        >
            <div class="card-subtitle">
                <v-card-subtitle>
                    Balance amount
                </v-card-subtitle>
                <v-chip
                    class="mr-4 px-6"
                    :text-color="currentWorkspace.percents>0 ? '#68993F' : '#D96B55'"
                    :color="currentWorkspace.percents>0 ? '#BBD6A1' : '#FFE5DA'"
                >
                    <span v-if="currentWorkspace.percents>0">+</span>
                    {{currentWorkspace.percents}}%
                </v-chip>
            </div>
            <div class="ma-4">
                <span class="text-h4 grey--text">$</span>
                <span class="text-h4 mb-2">
                    {{currentWorkspace.balance}}
                </span>
            </div>
        </v-card>
        <v-card class="workspaces" flat>
            <v-card-title>Workspaces</v-card-title>
            <v-card
                v-for="item in workspace"
                color="#EBF1FF"
                class="workspace-card"
                :key="item.name"
                @click="changeWorkspace(item)"
            >
                <div class="card-subtitle">
                    <v-card-subtitle class="workspace-title" style="color: #EBF1FF">
                        {{item.name}}
                    </v-card-subtitle>
                    <v-chip
                        v-if="item.isCurrent"
                        color="#C6D5F5"
                    >
                        Current
                    </v-chip>
                </div>

                <div class="mt-4">
                    <span class="text-h5 grey--text">$</span>
                    <span class="text-h5">{{item.balance}}</span>
                </div>
            </v-card>

       </v-card>
    </div>
</template>

<script>
    export default {
        name: "left-sidebar",
        data() {
            return {
                workspace: [
                    {
                        name: "Workspace#1",
                        balance: "990,890",
                        percents: 4.2,
                        isCurrent: true
                    },
                    {
                        name: "Workspace#2",
                        balance: "0.15",
                        percents: -3.4,
                        isCurrent: false
                    },
                    {
                        name: "Workspace#3",
                        balance: "100",
                        percents: 100,
                        isCurrent: false
                    },

                ],
                currentWorkspace: {},
            }
        },
        methods: {
            changeWorkspace(item) {
                this.currentWorkspace = item
                this.workspace.forEach(item => {
                    item.isCurrent = false
                })
                item.isCurrent = true
            }
        },
        mounted() {
            this.currentWorkspace = this.workspace[0]
        }
    }
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
    }

    .user {
        margin-top: 30px;
    }

    .balance-amount {
        width: 90%;
        margin: 10px auto;
    }

    .card-subtitle {
        display: flex;
        align-items: baseline;
        justify-content:space-between;
    }

    .workspaces {
        height: 55%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .workspace-card {
        width: 90%;
        height: 25%;
        padding: 16px;
        margin: auto;
    }

    .workspace-title {
        background-color: #8C8BF0;
        padding: 5px;
        border-radius: 10px;
    }

</style>