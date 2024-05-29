<template>
  <q-page class="flex flex-center q-pa-md">
    <div class="students-table-container">
      <q-table
        :rows="students"
        :columns="columns"
        row-key="id"
        flat
        bordered
        separator="cell"
        class="students-table"
        rows-per-page-label= 'Filas por Página'
      >
        <template v-slot:body-cell="{ row, col }">
          <q-td :props="{ row, col }">
            {{ row[col.field] }}
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script setup>
import { students } from '../utils/alumnos.js'

const columns = [
  { name: 'nombre', label: 'Nombre', field: 'nombre', align: 'left', sortable: true },
  { name: 'apellido', label: 'Apellido', field: 'apellido', align: 'left', sortable: true },
  { name: 'curso', label: 'Curso', field: 'curso', align: 'left', sortable: true },
  { name: 'promedio', label: 'Promedio', field: 'promedio', align: 'right', sortable: true }
]

defineOptions({
  name: 'ProductsPage'
});
</script>

<style scoped>
.students-table-container {
  width: 100%;
  max-width: 900px;
}

.students-table {
  background-color: #00ddb865;
  border-radius: 8px;
}

.q-td {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;
}

.q-td:hover {
  background-color: #e3f2fd;
}

.text-h5 {
  font-weight: bold;
  margin-bottom: 16px;
}
</style>

