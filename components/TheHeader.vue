<template>
    <header>
        <div class="container">
            <div class="navbar" :class="isOpen ? 'open' : ''">
                <img src="../assets/img/logo.svg" class="img" alt="logo">
                <ul class="menu">
                    <li>
                        <NuxtLink class="list" to="/">Главные</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="list" to="/techniques">Наши техники</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="list" to="/services">Услуги /аренда</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="list" to="/solution">Проектные решения</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="list" to="/projects">Проекты</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="list" to="/about">О нас</NuxtLink>
                    </li>
                </ul>
                <p>
                    <NuxtLink class="contact" to="/contact">Связаться с нами</NuxtLink>
                </p>
                <!-- MENU OPEN -->
                <div class="burger">
                    <img src="../assets/img/logo.svg" class="img" alt="logo">
                    <ul class="bg-menu">
                        <li>
                            <NuxtLink class="list" to="/">Главные</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="list" to="/techniques">Наши техники</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="list" to="/services">Услуги /аренда</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="list" to="/solution">Проектные решения</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="list" to="/projects">Проекты</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink class="list" to="/about">О нас</NuxtLink>
                        </li>
                    </ul>
                    <p>
                        <NuxtLink class="contact" to="/contact">Связаться с нами</NuxtLink>
                    </p>
                </div>
                <!-- BURGER MENU -->
                <div class="top-hd__brg">
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                </div>
            </div>
        </div>
    </header>
</template>