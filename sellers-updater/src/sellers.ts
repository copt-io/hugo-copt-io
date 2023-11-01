export interface Data {
  sellers: Seller[];
  feature: Enabled;
  cta: Enabled;
}

interface Seller {
  title: string;
  image_url: string;
  url: string;
}

interface Enabled {
  enable: boolean;
}

export const data: Data = {
  sellers: [
    {
      title: "Find Curate",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1623122870/items/uakgylha8jexnlyxj3rn.jpg",
      url: "https://findcurate.co",
    },
    {
      title: "The Shoe Game Co",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1682114427/items/megu8sf1pdrozdj0bbi3.jpg",
      url: "https://theshoegameco.com",
    },
    {
      title: "The Era",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/w_300,h_300,c_fill,f_auto,fl_lossy,q_auto/v1667339630/items/acyjllvlyuc4ogpibfwc.jpg",
      url: "https://the-era.us",
    },
    {
      title: "Evasion",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1668368190/items/ut5zinwnpthd3kaz8kqh.png",
      url: "https://evasionkicks.com/",
    },
    {
      title: "Validd Sneakers",
      url: "https://shop.copt.io/validdsneakers",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1680133560/items/fbezxfcdcbyttboq1ulr.jpg",
    },
    {
      title: "SoleVille",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1689921385/items/qzaiquhndc7h2ktcjaid.jpg",
      url: "https://shop.copt.io/SoleVille/",
    },
    {
      title: "Shmurda",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1648175695/items/iucvwyclsqvi96p6rxod.png",
      url: "https://shmurda.co",
    },
    {
      title: "Kick Narimasu",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1674946820/items/fg0fetwf5qg3pqqjcdrv.jpg",
      url: "https://kicknarimasu.com/",
    },
    {
      title: "Elite Kickz",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1641336827/items/d9z4ipfcmixl2lkgpp3f.jpg",
      url: "https://elitekickzhoboken.com/",
    },
    {
      title: "mooskys_hype",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/w_300,h_300,c_fill,f_auto,fl_lossy,q_auto/v1673044649/items/euzqgd4ullkzk3lfi6rx.jpg",
      url: "https://copt.io/shop/mooskys_hype/",
    },
    {
      title: "Mike Deezy",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1648060083/items/n5o9gdxgx9lh39cohh0j.png",
      url: "http://mikedeezy.com",
    },
    {
      title: "fidel.ludena",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1664416270/items/hpxzjylhydi2mzi7x3st.jpg",
      url: "https://copt.io/shop/fidel.ludena/",
    },
    {
      title: "Hanginwitcoop",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1673051042/items/re3kjda67tplfaq1nsr5.jpg",
      url: "https://copt.io/shop/Hanginwitcoop/",
    },
    {
      title: "ktown.resells",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1666762551/items/r6bjey96jjtbum8ih4kf.jpg",
      url: "https://copt.io/shop/ktown.resells/",
    },
    {
      title: "Resell951",
      url: "https://copt.io/shop/Resell951/",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1644596582/items/tfcjgoyagtrlvj24uy0w.jpg",
    },
    {
      title: "506_soles",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1663594726/items/re81yhwps5rnmh0aojqz.jpg",
      url: "https://copt.io/shop/506_soles/",
    },
    {
      title: "Kickznation58",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/w_300,h_300,c_fill,f_auto,fl_lossy,q_auto/v1669911594/items/jalx8m9c2ba4vulxaiyk.jpg",
      url: "https://copt.io/shop/Kickznation586",
    },
    {
      title: "youngxflexi",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1673050714/items/pnryhjcyq4jklbc5l84t.jpg",
      url: "https://copt.io/shop/youngxflexin",
    },
    {
      title: "dannysnft",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1664853201/items/asp7ypkiupg73ftoz6e2.jpg",
      url: "https://copt.io/shop/dannysnft/",
    },
    {
      title: "snkr%20feinz%20vi",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/w_300,h_300,c_fill,f_auto,fl_lossy,q_auto/v1670926663/items/sd7hc0lcx0jzjjdbemew.jpg",
      url: "https://copt.io/shop/snkr%20feinz%20vip",
    },
    {
      title: "Nysole.swap",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1663809039/items/gz53ktmyfbiqkjzwp6zt.jpg",
      url: "https://copt.io/shop/Nysole.swap/",
    },
    {
      title: "KTSSneakers",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/w_300,h_300,c_fill,f_auto,fl_lossy,q_auto/v1663888205/items/iwljboxg2d8ttjftugay.jpg",
      url: "https://copt.io/shop/KTSSneakers/",
    },
    {
      title: "Smekick",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/w_300,h_300,c_fill,f_auto,fl_lossy,q_auto/v1669739066/items/tiglfwlg7mxyshlkhfjc.png",
      url: "https://copt.io/shop/Smekicks",
    },
    {
      title: "Filo.resell",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1672444042/items/tvvdtfv0feyryroteu5r.jpg",
      url: "https://copt.io/shop/Filo.resell/",
    },
    {
      title: "HighAltitude_snkr_c",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1671494109/items/fe9fk4l6niwbphxddhhz.jpg",
      url: "https://copt.io/shop/HighAltitude_snkr_co",
    },
    {
      title: "BackdoorL",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1673051310/items/zpurfiongojlpqnbwwos.jpg",
      url: "https://copt.io/shop/BackdoorLA",
    },
    {
      title: "Trapps.Closet",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1664998879/items/orthenwcabwanhb3nymr.jpg",
      url: "https://copt.io/shop/Trapps.Closet/",
    },
    {
      title: "ctx.sole",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1667488240/items/wdveczfj2sdnemgs0eon.jpg",
      url: "https://copt.io/shop/ctx.soles",
    },
    {
      title: "deadstock.obsessions",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/w_300,h_300,c_fill,f_auto,fl_lossy,q_auto/v1673044972/items/lhisznnylo0fyfjj0zlu.jpg",
      url: "https://copt.io/shop/deadstock.obsessions/",
    },
    {
      title: "ShaolinSoleDow",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1673051182/items/fccad2ix8gejdc9jpqnp.jpg",
      url: "https://copt.io/shop/ShaolinSoleDown",
    },
    {
      title: "SpencersKick",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/w_300,h_300,c_fill,f_auto,fl_lossy,q_auto/v1670037052/items/w8xoyqjomshgk93ongbv.png",
      url: "https://copt.io/shop/SpencersKicks",
    },
    {
      title: "pbchavi",
      image_url:
        "https://res.cloudinary.com/copt/image/upload/f_auto,fl_lossy,q_auto/v1662577223/items/i6kig0c1pp5qfmfnceau.jpg",
      url: "https://copt.io/shop/pbchavi/",
    },
  ],
  feature: {
    enable: true,
  },
  cta: {
    enable: true,
  },
};
