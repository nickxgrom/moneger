<template>
    <form-wrapper
        @closeForm="$emit('closeForm')"
        :action="addWorkspace"
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
                        validator: value => /^[а-яА-ЯёЁa-zA-Z0-9\s_]{2,12}$/.test(value),
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
                            validator: value => /^\d{1,3}(,|\s|)(\d{3}(,|\s|)){0,3}(\.\d{2})$/.test(value),
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
            addWorkspace() {
                this.$store.commit('addWorkspace', {
                    name: this.name,
                    balance: this.balance,
                    monthLimit: this.monthLimit,
                    percents: 0,
                    spentThisMonth: 0,
                    categories: undefined
                })
            },
            formValid() {
                console.log(/^[а-яА-ЯёЁa-zA-Z0-9\s_]{2,12}$/.test(this.name))
               // console.log(!!(this.name && this.balance && this.monthLimit))
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