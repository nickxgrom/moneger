<template>
    <div class="main">
        <h3>Last transactions</h3>
        <ul>
<!--        TODO change key of elements-->
            <li
                v-for="item in transactions"
            >
                <div
                    class="transaction-card flex"
                    :class="{ replenishment: item.type === 'replenishment', expense: item.type === 'expense' }"
                >
                    <div style="display: flex">
                        <div>
                            <span class="transaction-card-title">
                                {{item.title}}
                            </span>
                            <div class="transaction-card-info">
                                <span class="mr-2">
                                    {{`${item.date.getDate()}/${item.date.getMonth()+1}`}}
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
        <atomio-button compact>Show more</atomio-button>
    </div>
</template>

<script>
    export default {
        name: "right-sidebar",
        computed: {
            transactions() {
                // return this.$store.getters.currentWorkspace.transactions.slice(0, 5)
                return this.$store.getters.currentWorkspace.transactions
            }
        },
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

    .replenishment {
        background: #88B165;
        color: #303030
    }

    .expense {
        background: #EAA08F;
        color: #303030
    }
</style>