<template>
  <div id="app">
    <div class="card text-center" style="width: 20rem">
      <div class="card-header">
        <h1>CAPTURA TU INFORMACIÓN</h1>
      </div>

      <div class="card-body">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Nombre"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="usuario.nombre"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Segundo Nombre"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="usuario.SegNombre"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Apellido Paterno"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="usuario.app"
          />
        </div>

        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Apellido Materno"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="usuario.apm"
          />
        </div>
      </div>
      <div class="alert alert-danger" role="alert">
        {{ usuario }}
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
    usuario: {},
  }),
};
</script>
<style scoped>
.v-tab {
  justify-content: left;
}
</style>
