<template>
    <form-wrapper
        button-title="Accept changes"
        @closeForm="$emit('closeForm')"
    >
        <span class="form-title">Change workspace</span>
        <atomio-text-input
            :placeholder="workspaceName"
            class="text-input"
        ></atomio-text-input>
        <atomio-text-input
            class="text-input"
            placeholder="Month limit"
        ></atomio-text-input>

        <div>
            <div
                v-for="category in categories"
                :style="`background: ${category.color}`"
                class="categories-list"
            >
                {{category.label}}
            </div>
        </div>
    </form-wrapper>
</template>

<script>
    import FormWrapper from '../../shared/form-wrapper.vue'

    export default {
        name: "workspace-settings-form",
        components: {
            FormWrapper,
        },
        props: ['workspaceName', 'categories']
    }
</script>

<style scoped>
    .categories-list {
        color: black;
        margin-bottom: 16px;
    }
</style>