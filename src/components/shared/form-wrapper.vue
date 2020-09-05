<template>
    <v-overlay>
        <atomio-form
            class="a-form"
            :show-errors="true"
        >
            <slot></slot>
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
                    {{buttonTitle}}
                </atomio-button>
            </div>
        </atomio-form>
    </v-overlay>
</template>

<script>
export default {
    name: "form-wrapper",
    props: {
        buttonTitle: String,
        action: Function,
    },
    methods: {
        formSubmit() {
            // WARNING categories field (workspace creation) must be undefined
            this.$props.action()
            this.$emit('closeForm')
        },
    },
}
</script>

<style scoped>
    .a-form {
        background: #ffffff;
        padding: 24px 30px;
        border-radius: 10px;
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