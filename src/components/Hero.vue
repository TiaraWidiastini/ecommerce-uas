<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="d-flex h-50">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Temukan Barang Berkualitas,</strong><br />Sesuai
                Keinginan Anda!
              </h2>
              <p>Pilih dan Pesan Barang Segera</p>
              <router-link class="btn btn-lg btn-danger" to="/barang">
                <b-icon-arrow-bar-right></b-icon-arrow-bar-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/images/hero.png"
            widht="50%"
            height="50%"
            align="right"
          />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-5">
          <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" widht="50%" height="50%" align="right"/>
        </div>
        <div class="col-md-6">
          <div class="d-flex h-50">
            <div class="justify-content-center align-self-center">
              <h2>       
                <strong>Temukan Barang Berkualitas,</strong><br />Sesuai
                Keinginan Anda!
              </h2>
              <p>Pilih dan Pesan Barang Segera</p>
              <router-link class="btn btn-lg btn-danger" to="/barang" >
                <b-icon-arrow-bar-right></b-icon-arrow-bar-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>
