<template>
    <div
         :class="{ 'two-column': twoColumn, 'scroll': true }"
    >
        <div
            v-for="item in items"
            :class="{ 'item': true, 'two-column-item': twoColumn }"
            :style="`background: ${item.color}`"
        >
            {{item.name}}
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
    .scroll {
        max-height: 156px;
        overflow: auto;
    }

    .item {
        height: 44px;
        padding: 10px 0 10px 20px;
        margin-bottom: 8px;
        border-radius: 15px;
        font-size: 1em;
    }

    .two-column {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .two-column-item {
        width: 49%;
    }
</style>