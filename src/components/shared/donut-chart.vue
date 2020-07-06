<template>
    <vc-donut
            background="white" foreground="#E5E5E5"
            :size="200" :thickness="20"
            has-legend legend-placement="right"
            :sections="sections" :total="100"
            :start-angle="0"
            @section-click="handleSectionClick">
        <div>
            <span class="text-h4">{{currentCategory}}</span> <br>
            <span>21$</span>

        </div>
    </vc-donut>
</template>
<script>
    export default {
        data() {
            return {
                currentCategory: "",
                sections: [
                    { label: 'Health', value: 17, color: '#FF6384' },
                    { label: 'Sport', value: 29, color: '#36A2EB' },
                    { label: 'Products', value: 13, color: '#FFCE56' },
                    { label: 'Other', value: 13, color: '#F58231' },
                ]
            }
        },
        methods: {
            handleSectionClick(section, event) {
                this.currentCategory = section.label
            }
        }
    }
</script>