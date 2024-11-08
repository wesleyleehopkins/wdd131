
let participent_count = 1

export default function add_participant() {
    participent_count++
     const template = `
               <section class="participant${participent_count}">
             <p>Participant ${participent_count}</p>
             <div class="item">
               <label for="fname"> First Name<span>*</span></label>
               <input id="fname${participent_count}" type="text" name="fname" value="" required />
             </div>
             <div class="item activities">
               <label for="activity">Activity #<span>*</span></label>
               <input id="activity${participent_count}" type="text" name="activity" />
             </div>
             <div class="item">
               <label for="fee">Fee ($)<span>*</span></label>
               <input id="fee${participent_count}" type="number" name="fee" />
             </div>
             <div class="item">
               <label for="date">Desired Date <span>*</span></label>
               <input id="date${participent_count}" type="date" name="date" />
             </div>
             <div class="item">
               <p>Grade</p>
               <select>
                 <option selected value="" disabled selected></option>
                 <option value="1">1st</option>
                 <option value="2">2nd</option>
                 <option value="3">3rd</option>
                 <option value="4">4th</option>
                 <option value="5">5th</option>
                 <option value="6">6th</option>
                 <option value="7">7th</option>
                 <option value="8">8th</option>
                 <option value="9">9th</option>
                 <option value="10">10th</option>
                 <option value="11">11th</option>
                 <option value="12">12th</option>
               </select>
             </div>
           </section>`
     document.querySelector("#add").insertAdjacentHTML("beforebegin", template)
     return participent_count
 }