<template>
    <v-overlay :value="visible">
<!--        <v-btn-->
<!--            icon-->
<!--            @click="visible = false"-->
<!--        >-->
<!--            <v-icon>mdi-close</v-icon>-->
<!--        </v-btn>-->
        <atomio-form
            class="a-form"
            :show-errors="true"
        >
            <span class="text-h4 mb-3 black--text text-center">
                {{title}}
            </span>

            <v-select
                placeholder="Category"
                outlined
                light
                filled
                no-data-text="You have no any category"
                :items="categories"
            >
            </v-select>

            <atomio-text-input
                placeholder="Name of transaction"
            >
            </atomio-text-input>

            <v-row>
                <v-col cols="7">
                    <atomio-text-input
                        placeholder="value"
                    ></atomio-text-input>
                </v-col>
                <v-col>
                    <atomio-date-time-select></atomio-date-time-select>
                </v-col>
            </v-row>

            <atomio-button
                @click="act({title: 'Test', date: new Date(), value: 148, category: 'GHFDF'})"
            >
                enter
            </atomio-button>
            <atomio-button
                style="background: #c3c3c3;"
                @click="$emit('closeForm')"
            >
                cancel
            </atomio-button>
        </atomio-form>
    </v-overlay>
</template>

<script>
export default {
    name: "a-form",
     data() {
        return {
            overlay: true,
        }
     },
    props: {
        visible: Boolean,
        title: String,
        categories: Array,
        act: Function,
    },
}
</script>

<style scoped>
    .a-form {
        background: #ffffff;
        padding: 10px 30px;
        border-radius: 10px;
    }
</style>