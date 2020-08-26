<template>
    <div class="main">
        <h3>Last transactions</h3>
        <ul>
<!--        TODO change key of elements-->
            <li
                v-for="item in transactions"
                :key="item.value"
            >
                <div class="transaction-card flex">
                    <div style="display: flex">
                        <div class="icon">
                            <v-icon medium>mdi-cart-outline</v-icon>
                        </div>
                        <div>
                            <span class="transaction-card-title">
                                {{item.title}}
                            </span>
                            <div class="transaction-card-info">
                                <span class="mr-2">
                                    {{item.date.getDate() + '/' + (item.date.getMonth()+1)}}
                                </span>
                                    <span>{{item.category}}</span>
                            </div>
                        </div>
                    </div>
                    <span class="transaction-card-value">
                        ${{item.value}}
                    </span>
                </div>
            </li>
        </ul>
        <v-btn style="float: right">Show more</v-btn>
    </div>
</template>

<script>
    export default {
        name: "right-sidebar",
        data() {
            return {

            }
        },
        computed: {
            transactions() {
                // return this.$store.getters.currentWorkspace.transactions.slice(0, 5)
                return this.$store.getters.currentWorkspace.transactions
            }
        }
    }
</script>

<style scoped>
    .flex {
        display: flex;
        justify-content: space-between;
    }

    .main {
        padding: 20px;
    }

    .main ul {
        list-style: none;
        padding-left: 0;
    }

    .transaction-card {
        padding: 16px;
        border-radius: 10px;
        border: 1px solid #2abf2a;
        margin-bottom: 10px;
    }

    .transaction-card-title {
        font-size: 1em;
        font-weight: 500;
    }

    .transaction-card-info {
        font-size: .875em;
    }

    .transaction-card-value {
        font-size: 1.4em;
        display: flex;
        align-items: center;
    }

    .icon {
        width: 45px;
        height: 45px;
        margin-right: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 255, .4);
    }
</style>