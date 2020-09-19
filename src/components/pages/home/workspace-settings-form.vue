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
                two-column
            ></list>
            <div class="add-category">
                <div>
                    <atomio-field>
                        <atomio-text-input
                            v-model="categoryName"
                            placeholder="Category name"
                            :maxlength="16"
                            lazy-validation
                            :rules="[
                                {
                                    validator: value => categoryNameValid(value),
                                    errorMessage: 'Field not valid'
                                }
                            ]"
                        ></atomio-text-input>
                    </atomio-field>

                </div>
                <atomio-button
                    @click="addCategory"
                    compact
                    class="add-category-btn"
                >
                    Add category
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
        data() {
            return {
                categoryName: "",
            }
        },
        props: ['workspaceName', 'categories'],
        methods: {
            addCategory() {
                if (!this.categoryNameValid(this.categoryName)) {
                    console.error('input value is not valid')
                    return
                }
                this.$store.commit('addCategory', {
                    name: this.categoryName,
                    color: '#000000'})
                this.categoryName = ""
            },
            categoryNameValid(val) {
                return /^[а-яА-ЯёЁa-zA-Z0-9\s_]{2,12}$/.test(val)
            }
        }
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