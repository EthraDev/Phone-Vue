<template>
    <div class="flex-div">
        <div class="CarteContact">
            <h2>{{ contact.name }}</h2>
            <span>{{ contact.numero }}</span>
            <Phone />
        </div>
    </div>
</template>
<script>
import Phone from '@/components/Phone.vue'
export default {
    name: 'CarteContactView',
    components: {
        Phone
    },
    props: [
        'contact'
    ]
}
</script>
<style scoped>
    .CarteContact {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        border-bottom: 1px solid black;
        margin-bottom: 13px;
        gap: 10em;
        align-items: center;
        padding-left: 1em;
        padding-right: 1em;
    }

    span {
        color: gray;
    }

    h2 {
        color: white;
        font-weight: 100;
    }

    img {
        width: 20px;
        height: 20px;
    }

    .flex-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>