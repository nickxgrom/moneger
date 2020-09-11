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
            <span class="text-h4">{{'work still in progress'}}</span> <br>
            <span class="text-h4">{{currentCategory.value}}</span>
        </div>
    </vc-donut>
</template>
<script>
    export default {
        data() {
            return {
                currentCategory: this.$props.categories[0],
            }
        },
        methods: {
            handleSectionClick(section) {
                this.currentCategory = section
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
        props: {
            categories: {
                type: Array,
                default: () => {
                    return [
                        {
                            name: '',
                            value: 20,
                            color: '#c3c3c3'
                        },
                    ]
                }
            },
            transactions: {
                type: Array,
            }
        },
        watch: {
            categories: function() {
                this.currentCategory = this.$props.categories[0]
            }
        },
    }
</script>