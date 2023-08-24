<template>
    <div>
        <NavBar />
        <Form>
            <div id="form-inputs" slot="form-inputs">
                <label>Manufacturer </label>
                <input type="text" placeholder="Enter the Car Manufacturer" v-model="newManufacturer" />
                <button @click.prevent="addManufacturer" class="create-btn">Submit</button>
            </div>
            <div v-for="(item, index) in manufacturers" class="preview" slot="form-preview">
                <div class="prev-item">
                    <div v-if="!item.editing">
                        <h2>Manufactured By: </h2>
                        <p>{{ item.manufacturer }}</p>
                    </div>
                    <div v-else>
                        <h2>Manufactured By: </h2>
                        <input type="text" v-model="item.manufacturer" />
                    </div>

                    <div class="update-btn">
                        <button @click="editItem(item.id)" v-show="!item.editing">Edit</button>
                        <button @click="deleteItem(item.id)" v-show="!item.editing">Delete</button>
                        <button @click="doneEdit(item.id)" v-show="item.editing">Done</button>
                    </div>
                </div>
            </div>
        </Form>
    </div>
</template>

<script>
import Form from './Form.vue';
import NavBar from './NavBar.vue';
export default {
    components: {
        Form, NavBar
    },
    data() {
        return {
            newManufacturer: '',
            newId: 0
        }
    },
    methods: {
        addManufacturer: function () {
            if (this.newManufacturer.trim().length == 0) {
                return alert("Can't submit empty value")
            }
            this.$store.dispatch("addManufacturer", this);
            this.newId++;
            this.newManufacturer = "";
            localStorage.setItem('manufacturers', JSON.stringify(this.manufacturers))
        },
        editItem: function (id) {
            this.$store.dispatch("editItem", id)
        },
        doneEdit: function (id) {
            this.$store.dispatch("doneEdit", id)
            localStorage.setItem('manufacturers', JSON.stringify(this.manufacturers))
        },

        deleteItem: function (id) {
            this.$store.dispatch("deleteItem", id)
            localStorage.setItem('manufacturers', JSON.stringify(this.manufacturers))
        }
    },
    computed: {
        manufacturers() {
            return this.$store.getters.getMfr
        }
    },
    created() {
        this.$emit("authenticated", true);
        this.manufacturers = JSON.parse(localStorage.getItem("manufacturers") || '[]')
    },
    mounted() {
        this.manufacturers = JSON.parse(localStorage.getItem("manufacturers") || '[]')
        this.$emit("authenticated", true);
    }
}
</script>

<style scoped>
/* #form-inputs {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 20px auto;
    width: 500px;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 50px 50px 20px 50px;
    border-radius: 20px;
    border: 1px solid #C69749;
    box-shadow: 0 3px 10px rgb(198 151 73 / 0.3);
}

h2 {
    text-align: center;
    color: #C69749;
}

label {
    display: block;
    color: #C69749;
}

input[type="text"] {
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



button {
    width: 80px;
    margin-top: 10px;
    margin-left: 10px;
    border: 2px solid #C69749;
    border-radius: 300px;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
    padding: 9px;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    background-color: transparent;
    position: relative;
    left: 80%;
}

button:hover {
    color: #000000;
    border: 2px solid #000000;
    background-color: #bd7603;
}



.preview {
    float: left;
    width: 300px;
    color: #C69749;
    background-color: rgb(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 20px;
    border: 1px solid #C69749;
    box-shadow: 0 3px 10px rgb(198 151 73 / 0.3);
    margin: 20px;
    padding: 20px;
}

.prev-item {
    position: relative;
    float: left;
    text-align: center;
}

.update-btn {
    position: relative;
    right: 95%;
} */
</style>