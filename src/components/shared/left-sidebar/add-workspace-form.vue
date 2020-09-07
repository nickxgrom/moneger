<template>
    <form-wrapper
        @closeForm="$emit('closeForm')"
        :action="addWorkspace"
        button-title="Add workspace"
    >
        <span class="form-title">Add workspace</span>
        <atomio-text-input
            v-model="name"
            class="text-input"
            placeholder="Name of workspace"
        ></atomio-text-input>

        <div class="flex-hor">
            <atomio-text-input
                v-model="balance"
                class="text-input"
                placeholder="Balance"
            ></atomio-text-input>
            <atomio-text-input
                v-model="monthLimit"
                class="text-input ml-4"
                placeholder="Month limit"
            ></atomio-text-input>
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
        margin-bottom: 16px;
        block-size: border-box;
    }

    .flex-hor {
        display: flex;
        justify-content: space-between;
    }

    #atomio-unnamed-text-input {
        padding-right: 0;
    }
</style>