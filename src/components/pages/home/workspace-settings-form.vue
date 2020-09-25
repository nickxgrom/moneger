<template>
    <form-wrapper
        button-title="Accept changes"
        @closeForm="$emit('closeForm')"
        disabled
    >
        <span class="form-title">Change workspace</span>
        <atomio-field
            no-error-message
            class="text-input"
        >
            <atomio-text-input
                :placeholder="workspaceName"
            ></atomio-text-input>
        </atomio-field>
        <atomio-field
            no-error-message
            class="text-input"
        >
            <atomio-text-input
                placeholder="Month limit"
            ></atomio-text-input>
        </atomio-field>

        <div class="main">
            <div class="card-title">Categories</div>
            <list
                :items="categories"
                two-column
            ></list>
            <div class="add-category">
                <div class="add-category-input">
                    <atomio-field
                        no-error-message
                        class="ma-0"
                    >
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
                    :disabled="categories.length >= 12"
                >
                    {{categories.length >= 12 ? '12 categories is max' : 'Add category'}}
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
                colors: ['#845EC2', '#2C73D2', '#008F7A', '#C34A36', '#4B4453', '#338BA7',
                        '#56BC2E', '#1B3D2F', '#FF6E46', '#00A9F8', '#DF4D75', '#008A61']
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
                    color: this.colors[this.$props.categories.length]
                })
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
        flex-basis: 40%;
    }

    .add-category-input {
        flex-basis: 60%;
    }

    .text-input {
        margin: 0 0 16px 0;
    }
</style>