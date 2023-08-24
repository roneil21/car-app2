<template>
    <div id="login">
        <h1>Login <br /><span>Username: 'admin', Password: 'admin'</span></h1>

        <label>Username</label>
        <input type="text" name="username" v-model="acc.user" placeholder="Username" />

        <label>Password</label>
        <input type="password" name="password" v-model="acc.pass" placeholder="Password" />

        <button type="button" @click="login()">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            acc: {
                user: "",
                pass: ""
            }
        }
    },
    methods: {
        login() {
            if (this.acc.user != "" && this.acc.pass != "") {
                if (this.acc.user == this.$parent.adminAccess.username && this.acc.pass == this.$parent.adminAccess.password) {

                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "carpage" }).catch(() => { });

                } else {
                    alert("The username and / or password is incorrect");
                }
            } else {
                alert("A username and password cannot be empty");
            }
          
        }
    },


}
</script>

<style scoped>
h1 {
    margin-top: auto;
    color: #C69749;
    text-align: center;
}

#login {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    margin: auto;
    width: 500px;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 50px 50px 20px 50px;
    display: block;
    border-radius: 20px;
    border: 1px solid #C69749;
    box-shadow: 0 3px 10px rgb(198 151 73 / 0.3);
}

label {
    color: #C69749;
}

input {
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

span {
    font-size: 18px;
}
</style>