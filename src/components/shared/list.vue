<template>
    <div class="scroll">
        <div
            v-for="item in items"
            class="item"
            :style="`background: ${item.color}`"
        >
            {{item.label}}
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
        height: 156px;
        overflow: auto;
    }

    .item {
        padding: 10px 0 10px 20px;
        margin-bottom: 8px;
        border-radius: 15px;
        font-size: 1em;
    }
</style>