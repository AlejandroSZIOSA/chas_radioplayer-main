// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const MAIN_CONTAINER = document.querySelector(".main-container");

async function getRadioChannels() {
  const res = await fetch(
    "http://api.sr.se/api/v2/channels?format=json&size=100/channels/"
  );
  const dataRadio = await res.json();
  showChannels(dataRadio.channels);
}

getRadioChannels();
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

function showChannels(channels) {
  channels.forEach((channel) => {
    // 1- Create elements
    const containerEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const innerContainerEl = document.createElement("div");

    //  2-Add information to the elements
    imgEl.src = channel.image;
    containerEl.style.backgroundColor = `#${channel.color}`;
    innerContainerEl.innerHTML = `<h2 class="title"> ${channel.name}</h2> 
    <audio controls>
      <source src=${channel.liveaudio.url}
      type="audio/mpeg"/>
    </audio>`;
    innerContainerEl.classList.add("inner-container");

    //  3- Add children
    MAIN_CONTAINER.appendChild(containerEl);
    containerEl.appendChild(imgEl);
    containerEl.appendChild(innerContainerEl);
  });
}

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
