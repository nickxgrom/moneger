<template>
    <v-overlay>
        <atomio-form
            class="a-form"
            :show-errors="true"
        >
            <span class="form-title">
                Add <span v-if="!transactionForm">workspace</span>
                <atomio-select
                    v-model="transactionType"
                    v-if="transactionForm"
                >
                    <atomio-select-option
                        v-for="title in ['replenishment', 'expense']"
                        :key="title"
                        :value="title"
                        :selected="title==='replenishment'"
                    >{{title}}</atomio-select-option>
                </atomio-select>
            </span>

            <div class="flex-vert">
                <atomio-select
                    v-if="transactionForm"
                    v-model="transactionCategory"
                    placeholder="Category"
                    class="mb-4"
                >
                    <atomio-select-option
                        v-for="category in categories"
                        :key="category"
                        :value="category"
                    >
                        {{category}}
                    </atomio-select-option>
                </atomio-select>

                <atomio-text-input
                    v-model="transactionName"
                    :placeholder="`Name of ${transactionForm ? 'transaction' : 'workspace'}`"
                    class="mb-4"
                >
                </atomio-text-input>

                <div class="flex-hor mb-4">
                    <atomio-text-input
                        v-model="transactionValue"
                        :placeholder="`${transactionForm ? 'Value' : 'Balance'}`"
                    ></atomio-text-input>
                    <atomio-date-time-select
                        v-if="transactionForm"
                        v-model="transactionDate"
                        mode="date"
                        placeholder="Date"
                        class="ml-4"
                    ></atomio-date-time-select>
                </div>

                <div class="flex-hor">
                    <atomio-button
                        style="background: #CAA8DB;"
                        @click="$emit('closeForm')"
                        class="form-btn"
                    >
                        Cancel
                    </atomio-button>
                    <atomio-button
                        @click="formSubmit"
                        class="form-btn"
                    >
                        Add {{transactionForm ? "transaction" : "workspace"}}
                    </atomio-button>
                </div>
            </div>
        </atomio-form>
    </v-overlay>
</template>

<script>
export default {
    name: "a-form",
     data() {
        return {
            transactionType: this.$props.type,
            transactionName: "",
            transactionCategory: "",
            transactionValue: "",
            transactionDate: new Date(),
        }
     },
    props: {
        type: String,
        categories: Array,
        act: Function,
    },
    methods: {
        formSubmit() {
            let item;
            if (this.transactionForm) {
                item = {
                    title: this.transactionName,
                    type: this.transactionType,
                    category: this.transactionCategory,
                    value: this.transactionValue,
                    date: this.transactionDate
                }
            } else {
                item = {
                    name: this.transactionName,
                    balance: this.transactionValue,
                    percents: 0,
                    monthLimit: 0,
                    spentThisMonth: 0,
                    categories: undefined,
                    transactions: []
                }
            }
            this.$props.act(item)
            this.$emit('closeForm')
        },
    },
    computed: {
        transactionForm() {
            return this.$props.type === 'replenishment' || this.$props.type === 'expense'
        }
    }
}
</script>

<style scoped>
    .a-form {
        background: #ffffff;
        padding: 24px 30px;
        border-radius: 10px;
    }

    .form-title {
        font-size: 2em;
        font-family: QuickSand, sans-serif;
        color: #000;
        margin: 0 auto 16px;
    }

    .flex-vert {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .flex-hor {
        display: flex;
        justify-content: space-between;
    }

    .form-btn:last-child {
        width: 100%;
        margin-left: 16px;
    }
</style>