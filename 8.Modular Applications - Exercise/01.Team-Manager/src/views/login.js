import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../util.js";


let loginTemplate = (onSubmit) => html`
<section id="login">
    <article class="narrow">
        <header class="pad-med">
            <h1>Login</h1>
        </header>
        <form @submit = ${onSubmit} id="login-form" class="main-form pad-large">
            <div class="error">Error message.</div>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input class="action cta" type="submit" value="Sign In">
        </form>
        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
        </footer>
    </article>
</section>

`

export function showLogin(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));
}



function onSubmit(ctx,data,event){
    console.log(data);
}