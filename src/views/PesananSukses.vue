<template>
    <div class="pesanan-sukses">
        <Navbar />
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col text-center">
                     <img src="../assets/images/Sukses.png" widht="270" height="270" />
                    <h2><strong>Terimakasih</strong></h2>
                    <h4>Pesanan Anda Segera Diproses <br>Mohon Menunggu</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "PesananSukses",
    components: {
    Navbar,
  },
    
}
</script>

<style>

</style>