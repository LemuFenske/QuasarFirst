<template>
  <q-page class="flex flex-center">
    <h2 class="page-title">Materiales de Estudio</h2>

    <div class="books-container">
      <div class="book-card" v-for="book in library" :key="book.id" @click="openModal(book)">
        <div class="book-content">
          <q-icon name="menu_book" class="icon" />
          <h6 class="title">{{ book.title }}</h6>
          <p class="author">{{ book.author }}</p>
        </div>
      </div>
    </div>

    <q-dialog v-model="showModal" persistent class="modal">
      <q-card class="modal-card">
        <q-card-section>
          <q-icon name="close" class="close-btn" @click="closeModal" />
          <h3>{{ selectedBook.title }}</h3>
          <p class="textBook">{{ selectedBook.text }}</p>
          <p class="author">Autor: {{ selectedBook.author }}</p>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { library } from '../utils/library'

const showModal = ref(false)
const selectedBook = ref(null)

function openModal(book) {
  selectedBook.value = book
  showModal.value = true
}

function closeModal() {
  selectedBook.value = null
  showModal.value = false
}
</script>

<style scoped>
.page-title {
  margin-bottom: 20px;
  text-align: center;
}

.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.book-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  width: 200px;
}

.book-card:hover {
  transform: translateY(-5px);
}

.book-content {
  padding: 20px;
  text-align: center;
}

.title {
  font-weight: bold;
}

.author {
  font-style: italic;
  color: #555;
}

.icon {
  font-size: 24px;
  color: rgb(255, 87, 34);
}

.modal {
  max-width: 600px;
}

.modal-card {
  background-color: #fff;
  color: #333;
  
  position: relative;
}

.modal-card h3 {
  margin-bottom: 10px;
  text-align: center;
}

.modal-card p {
  margin-bottom: 20px;
}

.modal-card .author {
  font-style: italic;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.close-btn:hover {
  color: red;
}
</style>

