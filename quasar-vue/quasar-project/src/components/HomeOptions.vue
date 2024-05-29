<template>
  <div class="home-container">
    <h1 class="title">EETP N°455</h1>

    <div class="home-options-container">
      <q-card class="option-card q-ma-md" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="sports_esports" size="64px" class="q-mb-md text-primary" />
          <h2>Juegos</h2>
          <q-btn @click="navigateToAbout" color="primary" label="Ir a Juegos" />
        </q-card-section>
      </q-card>

      <q-card class="option-card q-ma-md" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="school" size="64px" class="q-mb-md text-secondary" />
          <h2>Cursos</h2>
          <q-btn @click="toggleCourses" color="secondary" label="Ver Cursos" />
        </q-card-section>
      </q-card>

      <q-card class="option-card q-ma-md" flat bordered>
        <q-card-section class="text-center">
          <q-icon name="book" size="64px" class="q-mb-md text-tertiary" />
          <h2>Libros</h2>
          <q-btn @click="navigateToMaterials" class="tertiary-btn" label="Ver Materiales"/>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog v-model="showCourses" full-width full-height>
      <q-card>
        <q-card-section>
          <q-btn flat round icon="close" @click="toggleCourses" class="close-courses" />
          <h2>Cursos</h2>
        </q-card-section>
        <q-separator />
        <q-list class="courses-list">
          <q-item clickable @click="navigateToAlumnos">
            <q-item-section>
              <q-item-label>Primero "A"</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable @click="navigateToAlumnos">
            <q-item-section>
              <q-item-label>Segundo "B"</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable @click="navigateToAlumnos">
            <q-item-section>
              <q-item-label>Tercero "A" Química</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showCourses = ref(false)

function navigateToAbout() {
  router.push('/about')
}

function toggleCourses() {
  showCourses.value = !showCourses.value
}

function navigateToMaterials() {
  router.push('/services')
}

function navigateToAlumnos() {
  router.push('/products')
}
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}

.title {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.home-options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.option-card {
  width: 300px;
  padding: 20px;
}

.text-primary {
  color: #1976D2;
}

.text-secondary {
  color: rgb(156, 39, 176);
}

.text-tertiary {
  color: rgb(255, 87, 34);
}

.q-btn {
  width: 100%;
}

.tertiary-btn {
  background-color: rgb(255, 87, 34);
  color: white;
}

.courses-list {
  margin-bottom: 20px;
}

.close-courses {
  width: fit-content;
  margin-left: auto;
}
</style>

  