<template>
  <div class="browsers">
    <ul class="list">
      <span class="title">Browsers</span>
      <li v-for="item in items">
        <a v-bind:href="''+item.url">
          <img v-bind:src="'https://img.shields.io/badge/-' + item.name + '-' + item.color +'.svg'" class="shadow">
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Browsers",
  metaInfo: {
    title: "Browsers"
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
          color: "success",
          url: "https://chrome.google.com/webstore/detail//bgkdgnahbdfddpagnmpkhbgdpepmbjbf"
        },
        {
          name: "Kermit's Meme Browser",
          color: "success",
          url: "https://chrome.google.com/webstore/detail//jpieeijbjnjpfclbbbmfnoncedamonga"
        },
        {
          name: "Steve The Monkey",
          color: "success",
          url: "https://chrome.google.com/webstore/detail//ldjkakppecnkjfcmbcehbmphmkdbhbkj"
        },
        {
          name: "Earls Browser",
          color: "success",
          url: "https://chrome.google.com/webstore/detail//bajbkoongpoeddacnegpakakhemifgmk"
        },
        {
          name: "Fortnite Sans Browser",
          color: "success",
          url: "https://chrome.google.com/webstore/detail//klkodfbmmgmfpmlgmfgfkekeilkdcdmh"
        },
        {
          name: "Patrick",
          color: "success",
          url: "https://chrome.google.com/webstore/detail//cnhcbpmjemifplbaopldlikncpcifjgf"
        },
        {
          name: "Cherry",
          color: "success",
          url: "https://chrome.google.com/webstore/detail//odgpbeipjlaiompgjpfjgpdddoephckk"
        },
        {
          name: "Rainboww",
          color: "success",
          url: "https://chrome.google.com/webstore/detail//ckfbmfccloijkilcokojoecmeipgdbmb"
        }
      ]
    };
  }
};
</script>