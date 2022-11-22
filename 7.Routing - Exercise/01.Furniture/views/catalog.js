import {html} from '../../node_modules/lit-html/lit-html.js';
import { getAllFurniture } from '../data.js';

let dashboardTemplate = (data) => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
    ${data.map(furnitureTemplate)}
    `



export async function showDashboard(ctx){
    let furniture = await getAllFurniture();
    ctx.render(dashboardTemplate(furniture));
}




let furnitureTemplate = (furniture) => html`
<div class="col-md-4">
         <div class="card text-white bg-primary">
             <div class="card-body">
                   <img src="01.Furniture/${furniture.img}" />
                   <p>Description here</p>
                   <footer>
                      <p>Price: <span>${furniture.price} $</span></p>
                   </footer>
                   <div>
                      <a href=”#” class="btn btn-info">Details</a>
                   </div>
              </div>
         </div>
    </div>`