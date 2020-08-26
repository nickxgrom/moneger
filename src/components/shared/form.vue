<template>
    <v-overlay>
<!--        <v-btn-->
<!--            icon-->
<!--            @click="visible = false"-->
<!--        >-->
<!--            <v-icon>mdi-close</v-icon>-->
<!--        </v-btn>-->
        <atomio-form
            class="a-form"
            :show-errors="true"
        >
            <span class="text-h4 mb-3 black--text text-center">
                {{title}}
            </span>

            <v-select
                v-if="type=='transactions'"
                v-model="transactionCategory"
                :items="categories"
                no-data-text="no data"
                placeholder="Category"
                outlined
                light
                filled
            >
            </v-select>

            <atomio-text-input
                v-model="transactionName"
                placeholder="Name of transaction"
            >
            </atomio-text-input>

            <v-row>
                <v-col cols="7">
                    <atomio-text-input
                        v-model="transactionValue"
                    ></atomio-text-input>
                </v-col>
                <v-col>
                    <atomio-date-time-select
                        v-model="transactionDate"
                    ></atomio-date-time-select>
                </v-col>
            </v-row>

            <atomio-button
                @click="formSubmit"
            >
                enter
            </atomio-button>
            <atomio-button
                style="background: #c3c3c3;"
                @click="$emit('closeForm')"
            >
                cancel
            </atomio-button>
        </atomio-form>
    </v-overlay>
</template>

<script>
export default {
    name: "a-form",
     data() {
        return {
            transactionName: "",
            transactionCategory: "",
            transactionValue: "",
            transactionDate: new Date(),
        }
     },
    props: {
        type: String,
        title: String,
        categories: Array,
        act: Function,
    },
    methods: {
        formSubmit() {
            this.$props.act({
                title: this.transactionName,
                category: this.transactionCategory,
                value: this.transactionValue,
                date: this.transactionDate
            })
        }
    }
}
</script>

<style scoped>
    .a-form {
        background: #ffffff;
        padding: 10px 30px;
        border-radius: 10px;
    }
</style>