<script>
import * as fb from "@/firebase/firebase";

export default {
  data() {
    return {
      user: [{ login: "", password: "", email: "" }],
    };
  },
  methods: {
    async login() {
      await fb.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      this.$router.push("/"); 
    },
    async criarNovaConta() {
      await fb.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      this.registrar();
      this.login();
      console.log("Cadastro Realizado");
    },
    async registrar() {
      const res = await fb.PerfilCollection.add({
        Nome: this.user.login,
        Email: this.user.email,
      });
      const idPerfil = res.id;
      await fb.PerfilCollection.doc(idPerfil).update({
        idPerfil: idPerfil,
      });
    },
  },
};
</script>

<template>
  <main id="main">
    <div class="login-area">
      <h1>Cadastrar-se</h1>
      <div class="login-inputs">
        <p>E-mail</p>
        <input type="text" placeholder="e-mail" v-model="this.user.email" />
        <div>
          <p>Login</p>
        </div>
        <div>
          <input type="text" placeholder="Login" v-model="this.user.login" />
          <p>Senha</p>
        </div>
        <input
          type="password"
          placeholder="Senha"
          v-model="this.user.password"
        />
        <button @click="criarNovaConta()">Cadastrar</button>
      </div>
      <p>Ou então entre utilizando:</p>
      <section class="login-with">
        <span class="login-with-item">Facebook</span>
        <span class="login-with-item">Google</span>
      </section>
    </div>
  </main>
</template>

<style scoped>
#main {
  background-image: url(../assets/registro-bg.jpg);
}
.login-area {
  margin: 5vh;
  padding: 80px 120px;
  cursor: default;

  background-color: rgba(255, 255, 255);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 5px;
  flex-wrap: wrap;
}
input {
  text-align: center;
  color: black;
  padding: 8px;
  border: 0px;
  border-bottom: 2px solid black;
}
.login-inputs {
  display: flex;
  flex-direction: column;
  column-gap: 5px;
}
h1 {
  font-size: 1.8rem;
  font-weight: bolder;
}
p {
  font-size: 1.2rem;
  font-weight: bolder;
}
.login-with {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
}
.login-with-item {
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
}
.login-with-item:hover {
  background-color: rgba(0, 0, 0, 0.6);
  color: red;
}
.redirect-cadastro {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}
.redirect-cadastro:hover {
  color: red;
}
button {
  align-self: center;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  margin-top: 5px;

  border: 2px solid black;
  background-color: blue;
  color: white;
}
button:active {
  border-color: yellow;
}
</style>
