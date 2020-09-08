<template>
    <form-wrapper
        button-title="Accept changes"
        @closeForm="$emit('closeForm')"
        disabled
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

        <list
            :items="categories"
        ></list>
    </form-wrapper>
</template>

<script>
    import FormWrapper from '../../shared/form-wrapper.vue'
    import List from '../../shared/list.vue'

    export default {
        name: "workspace-settings-form",
        components: {
            FormWrapper,
            List,
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