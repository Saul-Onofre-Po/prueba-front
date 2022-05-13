<template>
  <div id="app">
    <div class="card text-center" style="width: 20rem">
      <div class="card-header">
        <h1>¿Cúal es tu fecha de nacimiento?</h1>
      </div>

      <div class="card-body">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Día"
            aria-describedby="basic-addon1"
            v-model="fecha.nombre"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Mes"
            aria-describedby="basic-addon1"
            v-model="fecha.SegNombre"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Año"
            aria-describedby="basic-addon1"
            v-model="fecha.SegNombre"
          />
        </div>
      </div>
      <div class="alert alert-danger" role="alert">
        {{ fecha }}
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button">Button</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    fecha: {},
  }),
};
</script>
<style scoped>
.v-tab {
  justify-content: left;
}
</style>
