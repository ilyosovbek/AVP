<template>
    <section class="contact-sec">
        <div class="container">
            <div class="ct-wrapper">
                <div class="ct-top">
                    <h2 class="ct-title">Связаться с нами</h2>
                    <p class="ct-text">Связаться с нами
                        Будем рады вашим комментариям и вопросам</p>
                </div>
                <div class="ct-center">
                    <form class="form" method="POST" @submit.prevent="submit">
                        <div class="fr-names">
                            <div class="fr-left">
                                <h3 class="fr-title">First Name</h3>
                                <label for="name">
                                    <input type="text" class="name-inp" id="name" v-model="name
                                        " required placeholder="First Name">
                                </label>
                            </div>
                            <div class="fr-right">
                                <h3 class="fr-title">Last Name</h3>
                                <label for="name">
                                    <input type="text" class="name-inp surname" v-model="surname" id="name" required
                                        placeholder="Last Name">
                                </label>
                            </div>
                        </div>
                        <h3 class="fr-title">Email</h3>
                        <label for="email">
                            <input type="email" id="email" class="email" v-model="email" placeholder="email">
                        </label>
                        <h3 class="fr-title">Phone Number</h3>
                        <label for="tel">
                            <input type="tel" id="tel" class="tel" v-model="tel" placeholder="Phone number" required>
                        </label>
                        <h3 class="fr-title">Message</h3>
                        <label for="mess">
                            <input type="textarea" id="mess" v-model="mess" class="mess" placeholder="Your Message"
                                required>
                        </label>
                        <div class="btn-block">
                            <button class="btn">Send Massage</button>
                        </div>
                    </form>
                </div>
                <div class="a-top">
                    <div class="a-line"></div>
                </div>
                <div class="tech-ser-btm">
                    <!-- CARD START -->
                    <div class="ser-card">
                        <img src="../assets/img/contact/phone-book.svg" alt="icon" class="ser-card-img">
                        <h3 class="ser-card-title">Phone </h3>
                        <a href="tel:+998900045995" class="ser-card-text">+998 (90) 004 59 95</a>
                        <a href="tel:+998998089905" class="ser-card-text">+998 (99) 808 99 05</a>
                        <a href="tel:+998998089907" class="ser-card-text">+998 (99) 808 99 07</a>
                    </div>
                    <!-- CARD END -->
                    <!-- CARD START -->
                    <div class="ser-card">
                        <img src="../assets/img/contact/email.svg" alt="icon" class="ser-card-img">
                        <h3 class="ser-card-title">Email</h3>
                        <h3 class="ser-card-text">avprentalgroupuc@gmail.com</h3>
                    </div>
                    <!-- CARD END -->
                    <!-- CARD START -->
                    <div class="ser-card">
                        <img src="../assets/img/contact/location.svg" alt="icon" class="ser-card-img">
                        <h3 class="ser-card-title">Address</h3>
                        <a href="https://go.2gis.com/cge2n" class="ser-card-text">Sergeli District,Kym-Aryk Street,
                            24aTashkent, Uzbekistan</a>
                    </div>
                    <!-- CARD END -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {

    data() {
        return {
            name: "",
            surname: "",
            email: "",
            tel: "",
            mess: "",
        }
    },
    methods:{
        submit(){
         console.log('submited');
        }
    }
}

</script>
