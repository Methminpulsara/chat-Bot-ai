

let list =[];

async function send(){
    let inputtext = document.getElementById("msgtext").value
    
    list.push(inputtext);

    let result = await ai(inputtext);
    

    document.getElementById("print").innerHTML +=`
    
    <div class=" d-flex flex-row justify-content-end mb-4 text-light fw-semibold">
                      
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                          alt="avatar 1" style="width: 45px; height: 100%;">
                        <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(108, 13, 234, 0.3);">
                          <p class="small mb-0">${inputtext}</p>
                        </div>
                      </div>
          
    
    `

    document.getElementById("print").innerHTML+=`
    <div class="d-flex flex-row justify-content-start mb-4 ">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        alt="avatar 1" style="width: 45px; height: 100%;">
                        <div class="p-3 me-3 border-0 text-light" style="border-radius: 15px; background-color: rgba(13, 201, 234, 0.2);">
                        <p>${result}<\p>
                       
                      </div>`




}


async function ai(text) {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "contents": [
    {
      "parts": [
        {
          "text": text
        }
      ]
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

let response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCy0az2acRN2mrJ0lsz1GUtnlJSjonF3Hc", requestOptions)
let result = await response.json()
let returnResult = result.candidates[0].content.parts[0].text

return returnResult;



    
}