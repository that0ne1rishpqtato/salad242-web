<template>
  <div class="browsers">
    <ul class="list">
      <span class="title">salad242</span>
      <li v-for="item in items">
        <a :href="''+item.url">
          <img :src="'https://img.shields.io/badge/-' + item.name + '-' + item.color +'.svg'" :class="'shadow'">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "salad242",
  metaInfo: {
    title: "salad242"
  },
  data: function() {
    return {
      items: [
        {
          name: "Potato",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//eikdpecakdfglplkafngboigefiojocg"
        },
        {
          name: "Avocado",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//bgkdgnahbdfddpagnmpkhbgdpepmbjbf"
        },
        {
          name: "Kermit's Meme Browser",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//jpieeijbjnjpfclbbbmfnoncedamonga"
        },
        {
          name: "Steve The Monkey",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//ldjkakppecnkjfcmbcehbmphmkdbhbkj"
        },
        {
          name: "Earls Browser",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//bajbkoongpoeddacnegpakakhemifgmk"
        },
        {
          name: "Fortnite Sans Browser",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//klkodfbmmgmfpmlgmfgfkekeilkdcdmh"
        },
        {
          name: "Patrick",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//cnhcbpmjemifplbaopldlikncpcifjgf"
        },
        {
          name: "Cherry",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//odgpbeipjlaiompgjpfjgpdddoephckk"
        },
        {
          name: "Rainboww",
          color: "red",
          url: "https://chrome.google.com/webstore/detail//ckfbmfccloijkilcokojoecmeipgdbmb"
        },
        {
          name: "Back",
          color: "blueviolet",
          url: "#/browsers"
        }
      ]
    };
  }
};
</script>
