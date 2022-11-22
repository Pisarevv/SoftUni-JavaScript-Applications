import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../users.js';


let registerTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" @click ="${onClick}" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`;

let context = null;

export function showRegister(ctx){
    context = ctx;
    ctx.render(registerTemplate());

}


async function onClick(e){
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePass").value;

    if(email == ""){
        alert("All fields are required");
    }
    else if(password != rePassword){
        alert('Passwords mismatch');
    }
    else{
        register({email,password});
        context.page.redirect('/');

    }



    

}