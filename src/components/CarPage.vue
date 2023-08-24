<template>
  <div>
    <NavBar />
    <Form>
      <div id="form-inputs" slot="form-inputs">
        <label>Create a Car</label>
        <select v-model="newMfr">
          <option value="" selected hidden disabled>Choose a Manufacturer</option>
          <option v-for="item in manufacturers">{{ item.manufacturer }}</option>
        </select>

        <select v-model="newCarColor">
          <option value="" selected hidden disabled>Choose a Car Color</option>
          <option v-for="color in colors">{{ color.color }}</option>
        </select>
        <button @click.prevent="addCar">Create</button>
      </div>

      <div slot="form-preview" class="preview" v-for="(car, index) in cars">
        <div class="prev-item">
          <div>
            <h2>Car Entry: </h2>
            <div v-if="!car.editing">
              <p>Manufacturer: {{ car.carManufacturer }}</p>
            </div>
            <div v-else>
              <select v-model="car.carManufacturer">
                <option selected hidden disabled>Choose a Manufacturer</option>
                <option v-for="item in manufacturers">{{ item.manufacturer }}</option>
              </select>
            </div>

            <div v-if="!car.editing">
              <p>Color: {{ car.carColor }}</p>
            </div>
            <div v-else>
              <select v-model="car.carColor">
                <option value="" selected hidden disabled>Choose a Car Color</option>
                <option v-for="color in colors">{{ color.color }}</option>
              </select>
            </div>

            <div class="update-btn-color">
              <button @click="editCar(car.id)" v-show="!car.editing">Edit</button>
              <button @click="deleteCar(car.id)" v-show="!car.editing">Delete</button>
              <button @click="doneCar(car.id)" v-show="car.editing">Done</button>
            </div>
          </div>
        </div>
      </div>


    </Form>
  </div>
</template>
  
<script>
import NavBar from './NavBar.vue';
import Form from '@/components/Form.vue';

export default {
  data() {
    return {
      newMfr: '',
      newCarColor: '',
      carId: 0
    }
  },
  components: {
    Form, NavBar
  },
  methods: {
    addCar: function () {
      if (this.newMfr === '' || this.newCarColor === '') {
        return alert("Can't submit empty value")
      }
      this.$store.dispatch("addCar", this)
      this.carId++
      this.newMfr = ''
      this.newCarColor = ''
      localStorage.setItem('cars', JSON.stringify(this.cars))
    },
    editCar: function (id) {
      this.$store.dispatch("editCar", id)
    },
    doneCar: function (id) {
      this.$store.dispatch("doneCar", id)
      localStorage.setItem('cars', JSON.stringify(this.cars))
    },
    deleteCar: function (id) {
      this.$store.dispatch("deleteCar", id)
      localStorage.setItem('cars', JSON.stringify(this.cars))
    }
  },
  computed: {
    cars() {
      return this.$store.getters.getCar
    },
  },

  created() {

    this.manufacturers = JSON.parse(localStorage.getItem('manufacturers'))
    this.colors = JSON.parse(localStorage.getItem('colors'))
    this.$emit("authenticated", true);
    
  }
}
</script>
  
<style scoped>
select {
  display: block;
  width: 100%;
  padding: 8px;
  margin: 10px auto;
  color: #000000;
  border: 1px solid #000000;
  background-color: #e4e4e4;
  font-weight: 500;
  opacity: 100%;
  border-radius: 10px;
}

h1 {
  text-align: center;
  color: #fff;
}
</style>