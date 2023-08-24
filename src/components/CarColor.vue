<template>
    <div>
        <NavBar />
        <Form>
            <div id="form-inputs" slot="form-inputs">
                <label>Car Color </label>
                <input type="text" placeholder="Enter the Car Color" v-model="newColor" />
                <button @click.prevent="addColor" class="create-btn">Submit</button>
            </div>
            <div v-for="(item, index) in colors" class="preview" slot="form-preview">
                <div class="prev-item">
                    <div v-if="!item.editing">
                        <h2>Car Color: </h2>
                        <p>{{ item.color }}</p>
                    </div>
                    <div v-else>
                        <h2>Car Color:  </h2>
                        <input type="text" v-model="item.color" />
                    </div>

                    <div class="update-btn-color">
                        <button @click="editColor(item.id)" v-show="!item.editing">Edit</button>
                        <button @click="deleteColor(item.id)" v-show="!item.editing">Delete</button>
                        <button @click="doneColor(item.id)" v-show="item.editing">Done</button>
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
            newColor: '',
            colorId: 0
        }
    },
    methods: {
        addColor: function () {
            if (this.newColor.trim().length == 0) {
                return alert("Can't submit empty value")
            }
            this.$store.dispatch("addColor", this);
            this.colorId++;
            this.newColor = "";
            localStorage.setItem('colors', JSON.stringify(this.colors))
        },
        editColor: function (id) {
            this.$store.dispatch("editColor", id)
        },
        doneColor: function (id) {
            this.$store.dispatch("doneColor", id)
            localStorage.setItem('colors', JSON.stringify(this.colors))
        },

        deleteColor: function (id) {
            this.$store.dispatch("deleteColor", id)
            localStorage.setItem('colors', JSON.stringify(this.colors))
        }
    },
    computed: {
        colors() {
            return this.$store.getters.getColors
        }
    },
    created() {
        this.$emit("authenticated", true);
        JSON.parse(localStorage.getItem("colors") || '[]')
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