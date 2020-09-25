<template>
    <form-wrapper
        @closeForm="$emit('closeForm')"
        :action="submitForm"
        button-title="Add workspace"
    >
        <span class="form-title">Add workspace</span>
        <atomio-field no-error-message>
            <atomio-text-input
                v-model="name"
                class="text-input"
                placeholder="Name of workspace"
                lazy-validation
                :rules="[
                    {
                        validator: value => nameInputValid(value),
                        errorMessage: 'Name of workspace is not valid'
                    }
                ]"
            ></atomio-text-input>
        </atomio-field>
        <div class="flex-hor">
            <atomio-field no-error-message>
                <atomio-text-input
                    v-model="balance"
                    placeholder="Balance"
                    lazy-validation
                    :rules="[
                        {
                            validator: value => balanceInputValid(value),
                            errorMessage: 'Wrong pattern of value'
                        },
                    ]"
                ></atomio-text-input>
            </atomio-field>
            <atomio-field
                class="text-input ml-4"
                no-error-message
            >
                <atomio-text-input
                    v-model="monthLimit"
                    placeholder="Month limit"
                    lazy-validation
                    :rules="[
                        {
                            validator: value => balanceInputValid(value),
                            errorMessage: 'Wrong pattern of value'
                        },
                    ]"
                ></atomio-text-input>
            </atomio-field>
        </div>
    </form-wrapper>
</template>

<script>
    import FormWrapper from '../form-wrapper.vue'

    export default {
        name: "add-workspace-form",
        components: {
            FormWrapper
        },
        data() {
            return {
                name: '',
                balance: '',
                monthLimit: '',
            }
        },
        methods: {
            nameInputValid(val) {
                return /^[а-яА-ЯёЁa-zA-Z0-9\s_#]{2,12}$/.test(val)
            },
            balanceInputValid(val){
                return /^\d{1,3}((,|\s|)\d{3}){0,3}(\.\d{2})?$/.test(val)
            },
            formValid() {
                return this.nameInputValid(this.name) && this.balanceInputValid(this.balance) && this.balanceInputValid(this.monthLimit)
            },
            submitForm() {
                if (this.formValid()) {
                    this.$store.commit('addWorkspace', {
                        name: this.name,
                        balance: this.balance.replace(/[,.\s]/, ''),
                        percents: 0,
                        monthLimit: this.monthLimit.replace(/[,.\s]/, ''),
                        spentThisMonth: 0,
                        categories: [],
                        transactions: []
                    })
                }
            }
        }
    }
</script>

<style>
    .form-title {
        font-size: 2em;
        font-family: QuickSand, sans-serif;
        color: #000;
        margin: 0 auto 16px;
    }

    .text-input {
        /*margin-bottom: 16px;*/
        block-size: border-box;
        width: 100%;
    }

    .flex-hor {
        display: flex;
        justify-content: space-between;
    }

    #atomio-unnamed-text-input {
        padding-right: 0;
    }
</style>