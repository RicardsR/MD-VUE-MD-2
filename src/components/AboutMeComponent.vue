<template>
    <div>
        <h1>ABOUT ME</h1>
        <div class="about-me">
            <p>Name:</p><h3> {{ user.name }}</h3>
        </div>
        <div class="about-me">
            <p>Surname:</p><h3> {{ user.surname }}</h3>
        </div>
        <div class="about-me">
            <p>Code:</p><h3> {{ user.code }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "Ričards",
                surname: "Reinsons",
                code: "IT21016",
            },
        };
    },
};
</script>
