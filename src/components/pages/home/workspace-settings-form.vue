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

        <div class="main">
            <div class="card-title">Categories</div>
            <list
                :items="categories"
            ></list>
            <div class="add-category">
                <div>
                    <atomio-text-input
                        placeholder="Category name"
                    ></atomio-text-input>
                </div>
                <atomio-button
                    compact
                    disabled
                    class="add-category-btn"
                >
                    New category
                </atomio-button>
            </div>
        </div>

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
    .card-title {
        font-family: QuickSand, sans-serif;
        font-weight: 600;
        color: #757575;
        font-size: 1.25em;
        margin-bottom: 10px;
    }

    .main {
        padding: 16px;
        margin-bottom: 16px;
        background: #f1f1f1;
        border-radius: 15px;
    }

    .add-category {
        display: flex;
    }

    .add-category-btn {
        margin-left: 16px;
    }
</style>