import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["about", "our", "intimate", "contact", "sub1", "sub2", "sub3"];

  connect() {
    console.log("Hello from our first Stimulus controller");
  }

  toggleDisplay1() {
    this.sub1Target.classList.toggle("display-none");
    this.aboutTarget.classList.toggle("bolder");
    this.ourTarget.classList.remove("bolder");
    this.intimateTarget.classList.remove("bolder");
    this.sub2Target.classList.add("display-none");
    this.sub3Target.classList.add("display-none");
  }


  toggleDisplay2() {
    this.sub2Target.classList.toggle("display-none");
    this.ourTarget.classList.toggle("bolder");
    this.aboutTarget.classList.remove("bolder");
    this.intimateTarget.classList.remove("bolder");
    this.sub1Target.classList.add("display-none");
    this.sub3Target.classList.add("display-none");
  }

  toggleDisplay3() {
    this.sub3Target.classList.toggle("display-none");
    this.intimateTarget.classList.toggle("bolder");
    this.aboutTarget.classList.remove("bolder");
    this.ourTarget.classList.remove("bolder");
    this.sub1Target.classList.add("display-none");
    this.sub2Target.classList.add("display-none");
  }

  contact() {
    this.aboutTarget.classList.remove("bolder");
    this.ourTarget.classList.remove("bolder");
    this.intimateTarget.classList.remove("bolder");
    this.sub1Target.classList.add("display-none");
    this.sub2Target.classList.add("display-none");
    this.sub3Target.classList.add("display-none");
  }
}
