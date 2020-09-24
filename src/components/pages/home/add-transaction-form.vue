<template>
    <form-wrapper
        @closeForm="$emit('closeForm')"
        :action="submitForm"
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

        <atomio-select
            v-model="transactionCategory"
            placeholder="Category"
            class="mb-5"
        >
            <atomio-select-option
                v-for="option in options"
                :key="option.name"
                :value="option.name"
            >
                {{option.name}}
            </atomio-select-option>
        </atomio-select>

        <atomio-field no-error-message>
            <atomio-text-input
                v-model="transactionName"
                placeholder="Name of transaction"
                lazy-validation
                :rules="[
                    {
                        validator: value => nameInputValid(value),
                        errorMessage: 'Field not valid'
                    }
                ]"
            >
            </atomio-text-input>
        </atomio-field>

        <div class="flex-hor">
            <atomio-field no-error-message
            >
                <atomio-text-input
                    v-model="transactionValue"
                    placeholder="Value"
                    lazy-validation
                    :rules="[
                    {
                        validator: value => balanceInputValid(value),
                        errorMessage: 'Field not valid'
                    }

                ]"
                ></atomio-text-input>
            </atomio-field>
            <atomio-date-time-select
                v-model="transactionDate"
                mode="date"
                placeholder="Date gk"
                class="ml-4"
            ></atomio-date-time-select>
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
        nameInputValid(val) {
            return /^[а-яА-ЯёЁa-zA-Z0-9\s_#]{2,12}$/.test(val)
        },
        balanceInputValid(val){
            return /^\d{1,3}((,|\s|)\d{3}){0,3}(\.\d{2})?$/.test(val)
        },
        submitForm() {
            if (this.nameInputValid(this.transactionName) && this.balanceInputValid(this.transactionValue)) {
                this.$store.commit('addTransaction', {
                    type: this.transactionType,
                    title: this.transactionName,
                    category: this.transactionCategory,
                    value: this.transactionValue,
                    date: this.transactionDate
                })
            }
        },
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