<template>
    <form-wrapper
        @closeForm="$emit('closeForm')"
        :action="addTransaction"
        button-title="Add transaction"
    >
        <span class="form-title">
                Add
                <atomio-select
                    v-model="transactionType"
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
                v-model="transactionCategory"
                placeholder="Category"
                class="mb-4"
            >
                <atomio-select-option
                    v-for="option in options"
                    :key="option.name"
                    :value="option.name"
                >
                    {{option.name}}
                </atomio-select-option>
            </atomio-select>

            <atomio-text-input
                v-model="transactionName"
                :placeholder="`Name of transaction`"
                class="mb-4"
            >
            </atomio-text-input>

            <div class="flex-hor mb-4">
                <atomio-text-input
                    v-model="transactionValue"
                    placeholder="Value"
                ></atomio-text-input>
                <atomio-date-time-select
                    v-model="transactionDate"
                    mode="date"
                    placeholder="Date"
                    class="ml-4"
                ></atomio-date-time-select>
            </div>
        </div>
    </form-wrapper>
</template>

<script>
import FormWrapper from "../../shared/form-wrapper.vue"

export default {
    name: "add-transaction-form",
    components: {
        FormWrapper,
    },
    data() {
        return {
            transactionType: "replenishment",
            transactionName: "",
            transactionCategory: "",
            transactionValue: "",
            transactionDate: new Date(),
        }
    },
    props: {
        options: Array,
    },
    methods: {
        addTransaction() {
            this.$store.commit('addTransaction', {
                type: this.transactionType,
                title: this.transactionName,
                category: this.transactionCategory,
                value: this.transactionValue,
                date: this.transactionDate
            })
        }
    }
}
</script>

<style>
    .flex-vert {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .atomio-dropdown {
        z-index: 101;
    }
</style>