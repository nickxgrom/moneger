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
            <span class="text-h4">{{currentCategory.label || categories[0].label}}</span> <br>
            <span>{{currentCategory.value || categories[0].value}}$</span>

        </div>
    </vc-donut>
</template>
<script>
    export default {
        data() {
            return {
                currentCategory: {}
            }
        },
        methods: {
            handleSectionClick(section, event) {
                this.currentCategory = section
            },
            total: (arr) => {
                return arr.reduce( (sum, current) => {
                    return sum + current.value
                }, 0)
            }
        },
        props: [
            'categories',
        ],
        watch: {
            categories: function() {
                this.currentCategory = {}
            }
        },
    }
</script>