<template>
    <vc-donut
            background="white" foreground="#E5E5E5"
            :size="300" :thickness="20"
            has-legend legend-placement="bottom"
            :sections="sections"
            :total="totalAmount"
            :start-angle="0"
            @section-click="handleSectionClick">
        <div>
            <span class="text-h4">{{currentCategory.name || sections[0].label}}</span> <br>
            <span class="text-h4">{{currentCategory.value || sections[0].value}}</span>
        </div>
    </vc-donut>
</template>
<script>
    export default {
        data() {
            return {
                currentCategory: {},
            }
        },
        methods: {
            handleSectionClick(section) {
                this.currentCategory = {
                    name: section.label,
                    value: section.value
                }
            },
        },
        computed: {
            totalAmount() {
                return this.transactions.reduce( (sum, current) => {
                    return sum + current.value
                }, 0)
            },
            sections() {
                let arr = []
                for (let i=0; i<this.categories.length; i++) {
                    arr.push({
                        value: this.sortedTransaction[i].reduce( (sum, current ) => {
                            return sum + current.value
                        }, 0),
                        label: this.categories[i].name,
                        color: this.categories[i].color,
                    })
                }
                return arr
            },
            sortedTransaction() {
                let arr =[]
                this.categories.forEach( category => {
                    arr.push(this.transactions.filter(item => {
                        return category.name === item.category
                    }))
                })
                return arr
            },
        },
        props: ['categories', 'transactions'],
        watch: {
            categories: function() {
                this.currentCategory = {}
            }
        },
    }
</script>