<template>
    <div class="main">
        <div class="card-title">Categories</div>
        <div class="scroll">
            <div
                v-for="item in items"
                class="item"
                :style="`background: ${item.color}`"
            >
                {{item.label}}
            </div>
        </div>
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
</template>

<script>
    export default {
        name: "list",
        props: {
            items: Array,
            twoColumn: Boolean,
        }
    }
</script>

<style scoped>
    .main {
        padding: 16px;
        margin-bottom: 16px;
        background: #f1f1f1;
        border-radius: 15px;
    }

    .scroll {
        height: 156px;
        overflow: auto;
    }

    .item {
        padding: 10px 0 10px 20px;
        margin-bottom: 8px;
        border-radius: 15px;
        font-size: 1em;
    }

    .card-title {
        font-family: QuickSand, sans-serif;
        font-weight: 600;
        color: #757575;
        font-size: 1.25em;
        margin-bottom: 10px;
    }

    .add-category {
        display: flex;
    }

    .add-category-btn {
        margin-left: 16px;
    }
</style>