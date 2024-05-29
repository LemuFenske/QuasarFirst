<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header">
      <q-toolbar class="q-pa-md">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-header"
        />

        <q-toolbar-title class="text-header">
          EETP N° 455
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="drawer"
    >
      <q-list>
        <q-item-label header class="menu-header">
          Menú
        </q-item-label>

        <q-item clickable v-ripple tag="router-link" to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple tag="router-link" to="/about">
          <q-item-section avatar>
            <q-icon name="sports_esports" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Juegos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple tag="router-link" to="/services">
          <q-item-section avatar>
            <q-icon name="menu_book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Libros</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple tag="router-link" to="/products">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Alumnos</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.header {
  background-color: rgb(0, 143, 131);
}

.text-header {
  color: rgb(255, 255, 255);
}

.q-toolbar-title {
  font-weight: bold;
  font-size: 1.25rem;
}

.q-btn.text-white {
  color: rgb(41, 0, 0);
}

.q-toolbar.q-pa-md {
  padding: 16px;
}

.drawer {
  background-color: #f5f5f5;
}

.menu-header {
  font-size: 1.5rem;
  color: #008f81;
  padding: 10px;
}

.q-list .q-item {
  padding: 10px 15px;
}

.q-list .q-item-label {
  font-size: 1.1rem;
}

.q-item-section q-icon {
  font-size: 1.5rem;
}
</style>



