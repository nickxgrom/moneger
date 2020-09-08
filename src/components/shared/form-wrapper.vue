<template>
    <v-overlay>
        <atomio-form
            class="form-sheet"
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
                    :disabled="disabled"
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
        disabled: Boolean,
    },
    methods: {
        formSubmit() {
            this.$props.action()
            this.$emit('closeForm')
        },
    },
}
</script>

<style scoped>
    .form-sheet {
        width: 600px;
        margin: auto;
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