<template>
    <div>
        <div>
            <slot name="form-inputs"></slot>
        </div>
        <div>
            <slot name="form-preview"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#form-inputs {
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
    background-color: rgb(0, 0, 0, 0.9);
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
}
.update-btn-color {
    position: relative;
    right: 88.3%;
}


</style>