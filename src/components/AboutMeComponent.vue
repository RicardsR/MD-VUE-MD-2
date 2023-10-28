<template>
    <div class="comp-container">
        <div class="about-me-header">
            <h1>ABOUT ME</h1>
            <div class="about-me-devider"></div>
            <button class="button" :class="{ 'button-logout': isEditMode }" @click="toggleEditMode">
                {{ isEditMode ? 'CANCEL' : 'EDIT FORM' }}
            </button>
        </div>
        <FormComponent :disabled="!isEditMode" />
    </div>
</template>

<script>
import FormComponent from "./FormComponent.vue";

export default {
    components: {
        FormComponent,
    },
    data() {
        return {
            isEditMode: false,
        };
    },
    methods: {
        toggleEditMode() {
            this.isEditMode = !this.isEditMode;
        },
    },
};
</script>