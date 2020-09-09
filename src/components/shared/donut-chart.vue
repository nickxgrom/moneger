<template>
    <vc-donut
            background="white" foreground="#E5E5E5"
            :size="300" :thickness="20"
            has-legend legend-placement="bottom"
            :sections="arr"
            :total="total(arr)"
            :start-angle="0"
            @section-click="handleSectionClick">
        <div>
            <span class="text-h4">{{currentCategory.label || 'You have no any category yet'}}</span> <br>
            <span class="text-h4">{{currentCategory.value}}</span>
        </div>
    </vc-donut>
</template>
<script>
    export default {
        data() {
            return {
                currentCategory: this.$props.categories[0],
                arr: []
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
            tt() {
                this.categories.forEach(item => {
                    item.transactions = this.transactions.filter(it => {
                        return it.category === item.name
                    })
                })

                this.categories.forEach(item => {
                    let obj = {
                        label: item.name,
                        color: item.color,
                        value: this.total(item.transactions)
                    }
                    this.arr.push(obj)
                })
            },
        },
        created() {
            this.tt()
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