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
            <div class="workspaces-card-list">
                <v-card
                    v-for="workspace in workspaces"
                    color="#EBF1FF"
                    class="workspace-card"
                    :key="workspace.name"
                    @click="changeWorkspace(workspace)"
                >
                    <div class="card-subtitle">
                        <v-card-subtitle class="workspace-title" style="color: #EBF1FF">
                            {{workspace.name}}
                        </v-card-subtitle>
                        <v-chip
                            color="#C6D5F5"
                            v-if="workspace == currentWorkspace"
                        >
                            Current
                        </v-chip>
                    </div>
                    <div class="mt-4">
                        <span class="text-h5 grey--text">$</span>
                        <span class="text-h5">{{workspace.balance}}</span>
                    </div>
                </v-card>
                <atomio-button
                    @click="addWorkspaceFormVisible=true"
                    class="add-workspace-btn"
                >
                    New workspace
                </atomio-button>
            </div>
        </v-card>
        <add-workspace-form
            v-if="addWorkspaceFormVisible"
            @closeForm="addWorkspaceFormVisible=false"
        ></add-workspace-form>
    </div>
</template>

<script>
    import AddWorkspaceForm from './add-workspace-form.vue'

    export default {
        name: "left-sidebar",
        components: {
            AddWorkspaceForm
        },
        data() {
            return {
                addWorkspaceFormVisible: false,
            }
        },
        methods: {
            changeWorkspace(item) {
                this.$store.commit('changeWorkspace', item)
            }
        },
        computed: {
            workspaces() {
                return this.$store.state.modules.workspaces
            },
            currentWorkspace() {
                return this.$store.getters.currentWorkspace
            }
        }
    }
</script>

<style scoped>
    .main {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        padding: 0 15px;
    }

    .user {
        margin-top: 30px;
    }

    .card-subtitle {
        display: flex;
        align-items: baseline;
        justify-content:space-between;
    }

    .workspaces {
        height: 55%;
    }

    .workspaces-card-list {
        display: flex;
        flex-direction: column;
    }

    .workspace-card {
        height: 25%;
        padding: 16px;
        margin-bottom: 30px;
    }

    .workspace-title {
        background-color: #8C8BF0;
        padding: 5px;
        border-radius: 10px;
    }

    .add-workspace-btn {
        z-index: 5;
    }

</style>