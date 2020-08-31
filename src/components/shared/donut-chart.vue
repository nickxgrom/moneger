<template>
    <vc-donut
            background="white" foreground="#E5E5E5"
            :size="300" :thickness="20"
            has-legend legend-placement="bottom"
            :sections="categories"
            :total="total(categories)"
            :start-angle="0"
            @section-click="handleSectionClick">
        <div>
            <span class="text-h4">{{currentCategory.label || 'You have no any category yet'}}</span> <br>
            <span>{{currentCategory.label ? `${currentCategory.value}$` : ''}}</span>
        </div>
    </vc-donut>
</template>
<script>
    export default {
        data() {
            return {
                currentCategory: this.$props.categories[0]
            }
        },
        methods: {
            handleSectionClick(section) {
                this.currentCategory = section
            },
            total: (arr) => {
                return arr.reduce( (sum, current) => {
                    return sum + current.value
                }, 0)
            },
        },
        props: {
            categories: {
                type: Array,
                default: () => {
                    return [
                        {
                            label: '',
                            value: 20,
                            color: '#c3c3c3'
                        },
                    ]
                }
            }
        },
        updated() {
            this.currentCategory = this.$props.categories[0]
        },
        watch: {
            categories: function() {
                this.currentCategory = {}
            }
        },
    }
</script>