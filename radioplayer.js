// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const BODY_EL = document.querySelector("body");

async function getRadioChannels() {
  const res = await fetch(
    "http://api.sr.se/api/v2/channels?format=json&size=100/channels/"
  );
  const dataRadio = await res.json();
  //console.log(dataRadio.channels);
  showChannels(dataRadio.channels);
}

getRadioChannels();
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

function showChannels(channels) {
  channels.forEach((channel) => {
    //Create elements
    const containerEl = document.createElement("div");
    //radioContainerEl.classList.add("radio-container");
    const imgEl = document.createElement("img");
    //console.log(channel.image);

    const titleEl = document.createElement("h2");

    const innerContainerEl = document.createElement("div");

    //Add information to the elements
    imgEl.src = channel.image;
    titleEl.innerText = channel.name;

    // Add children
    BODY_EL.appendChild(containerEl);
    containerEl.appendChild(imgEl);
    containerEl.appendChild(innerContainerEl);
    innerContainerEl.appendChild(titleEl);
    //console.log(channel.name);
  });
}

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
