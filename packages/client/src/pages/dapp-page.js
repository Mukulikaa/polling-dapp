import kitty from "../assets/img/kitty.png";
import doggo from "../assets/img/doggo.png";
import { LitElement, html, customElement, property } from "lit-element";
import DappLib from "@decentology/dappstarter-dapplib";
@customElement("account-widget")
export default class AccountWidget extends LitElement{ 
render() {
    this.classList.add("mb-3", "w-full", "block");
    let content = html`
    <div class="flex flex-wrap mb-4">
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 h-full">
      <img class="w-full" src="${kitty}" alt="Miss Kitty"> // Use Kitty icon here
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Miss Kitty </div>
        <p class="text-gray-700 text-base h-20">
          Choose me as your next board member. Purr.
        </p>
      </div>
    </div>
  </div>

  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-4 h-full">
      <img class="w-full" src="${doggo}" alt="Mr Doggo"> // Use Doggo icon here
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Mr Doggo </div>
        <p class="text-gray-700 text-base h-20">
          If you choose me, we'll be ruff!
        </p>
      </div>
      </div>
    </div>
  </div>
</div>
    `;
    return content;
}

}