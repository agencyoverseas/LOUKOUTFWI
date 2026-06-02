/* ====================================================================
   LOOKOUT — FICHIER DE CONFIG (tout editable, sans toucher a index.html)
   - Images : remplace un fichier dans /images (meme nom) OU change le chemin ci-dessous
              (un chemin "images/xxx.jpg", une URL https://..., ou un data:base64).
   - Textes / prix / produits / collections / lookbook : edite les valeurs.
   - playlist : tes sons. Pour qu'ils JOUENT chez les visiteurs, mets les vrais fichiers
                dans un dossier  audio/  (meme nom que dans 'src'), puis redeploie le dossier.
                Detail dans README.txt. Ajout rapide : admin du lecteur -> Exporter -> colle ici.
   - adminPass : le mot de passe de l'admin du lecteur (securite legere, cote navigateur).
   ==================================================================== */
window.LOOKOUT_CONFIG = {
  "adminPass": "lookout2026",
  "brand": {
    "name": "LOOKOUT",
    "tagline": "See the Unseen"
  },
  "hero": {
    "image": "images/hero.jpg",
    "kicker": "Collection 2026 — édition limitée",
    "lead": "Le streetwear des guetteurs. Coupes premium, rayures signature, broderies or — et un spectre de couleurs qui ne passe pas inaperçu.",
    "ctaPrimary": "Découvrir la boutique",
    "ctaSecondary": "Voir la campagne",
    "meta": "Worldwide shipping"
  },
  "marquee": [
    "See the Unseen",
    "Lookout Collection 2026",
    "Édition Or",
    "Livraison Monde"
  ],
  "collectionsIntro": {
    "idx": "01 — Collections",
    "title": "Six univers,<br>une signature",
    "text": "Du noir & or le plus sobre au patchwork le plus vif. Choisis ton terrain."
  },
  "collections": [
    {
      "image": "images/col-casquettes.jpg",
      "title": "Casquettes",
      "acc": "#c9a24b",
      "sub": "12 modèles"
    },
    {
      "image": "images/col-polos-rayes.jpg",
      "title": "Polos Rayés",
      "acc": "#2a5fd0",
      "sub": "Colorways"
    },
    {
      "image": "images/col-wax.jpg",
      "title": "Collection Wax",
      "acc": "#e87a2a",
      "sub": "Héritage"
    },
    {
      "image": "images/col-edition-or.jpg",
      "title": "Édition Or",
      "acc": "#e7c878",
      "sub": "Premium"
    },
    {
      "image": "images/col-leggings.jpg",
      "title": "Leggings",
      "acc": "#1f8a4c",
      "sub": "Performance"
    },
    {
      "image": "images/col-multicolore.jpg",
      "title": "Multicolore",
      "acc": "#d83a3a",
      "sub": "Statement"
    }
  ],
  "shopIntro": {
    "idx": "02 — Boutique",
    "title": "La sélection",
    "text": "Pièces phares de la collection. Ajoute au panier, le paiement arrive.",
    "note": "Prix affichés = placeholders en € — à ajuster avant mise en vente."
  },
  "products": [
    {
      "image": "images/casquette-rayee-colorways.jpg",
      "name": "Casquette Rayée Colorways",
      "category": "Casquettes",
      "price": 39,
      "colors": [
        "red",
        "orange",
        "blue",
        "green"
      ]
    },
    {
      "image": "images/casquette-bicolore.jpg",
      "name": "Casquette Bicolore",
      "category": "Casquettes",
      "price": 39,
      "colors": [
        "red",
        "orange",
        "blue",
        "green"
      ]
    },
    {
      "image": "images/polo-raye-colorways.jpg",
      "name": "Polo Rayé Colorways",
      "category": "Polos",
      "price": 89,
      "colors": [
        "red",
        "orange",
        "blue",
        "green"
      ]
    },
    {
      "image": "images/polo-wax-heritage.jpg",
      "name": "Polo Wax Héritage",
      "category": "Collection Wax",
      "price": 99,
      "colors": [
        "gold",
        "green",
        "red"
      ]
    },
    {
      "image": "images/polo-signature-or.jpg",
      "name": "Polo Signature Or",
      "category": "Édition Or",
      "price": 109,
      "colors": [
        "gold",
        "black"
      ]
    },
    {
      "image": "images/polo-blanc-tape-or.jpg",
      "name": "Polo Blanc Tape Or",
      "category": "Polos",
      "price": 89,
      "colors": [
        "white",
        "gold"
      ]
    },
    {
      "image": "images/polo-bleu-tape-or.jpg",
      "name": "Polo Bleu Tape Or",
      "category": "Polos",
      "price": 89,
      "colors": [
        "blue",
        "gold"
      ]
    },
    {
      "image": "images/polo-patchwork.jpg",
      "name": "Polo Patchwork",
      "category": "Multicolore",
      "price": 95,
      "colors": [
        "red",
        "orange",
        "blue",
        "green"
      ]
    },
    {
      "image": "images/polo-jaune-monogramme.jpg",
      "name": "Polo Jaune Monogramme",
      "category": "Multicolore",
      "price": 89,
      "colors": [
        "yellow",
        "black"
      ]
    },
    {
      "image": "images/leggings-monogramme-or.jpg",
      "name": "Leggings Monogramme Or",
      "category": "Leggings",
      "price": 59,
      "colors": [
        "black",
        "gold"
      ]
    },
    {
      "image": "images/polo-lo-minimal.jpg",
      "name": "Polo « LO » Minimal",
      "category": "Édition Or",
      "price": 95,
      "colors": [
        "black",
        "gold"
      ]
    },
    {
      "image": "images/coffret-premium-or.jpg",
      "name": "Coffret Premium Or",
      "category": "Édition Or",
      "price": 249,
      "colors": [
        "gold",
        "black"
      ]
    }
  ],
  "premium": {
    "kicker": "L'édition Or",
    "title": "Le luxe,<br><span>discret.</span>",
    "text": "Broderie fil d'or, coffret signature, finitions premium. Une capsule pour ceux qui voient ce que les autres ratent.",
    "cta": "Voir la capsule",
    "imageA": "images/premium-a.jpg",
    "imageB": "images/premium-b.jpg",
    "stats": [
      {
        "v": "24K",
        "l": "Détails or"
      },
      {
        "v": "2026",
        "l": "Édition"
      },
      {
        "v": "∞",
        "l": "Style"
      }
    ]
  },
  "campaignIntro": {
    "idx": "03 — Campagne",
    "title": "Lookbook 2026",
    "text": "Quatre couleurs, une attitude. Photographié sous néons."
  },
  "lookbook": [
    {
      "image": "images/look-1.jpg",
      "label": "Rouge / Noir"
    },
    {
      "image": "images/look-2.jpg",
      "label": "Orange / Noir"
    },
    {
      "image": "images/look-3.jpg",
      "label": "Bleu / Blanc"
    },
    {
      "image": "images/look-4.jpg",
      "label": "Vert / Jaune"
    },
    {
      "image": "images/look-5.jpg",
      "label": "Studio Bleu"
    },
    {
      "image": "images/look-6.jpg",
      "label": "Édition Or"
    }
  ],
  "manifesto": {
    "image": "images/manifeste.jpg",
    "kicker": "Le manifeste",
    "title": "See the <em>Unseen</em>",
    "p1": "LOOKOUT, ce sont les guetteurs : ceux qui observent, anticipent, et habillent la rue avant tout le monde. Trois silhouettes, un regard, une marque.",
    "p2": "Chaque pièce porte le signe — les trois guetteurs — et le slogan qui dit tout : voir ce qui échappe aux autres.",
    "cta": "Rejoindre le mouvement"
  },
  "newsletter": {
    "title": "Reste dans la boucle",
    "text": "Drops, éditions limitées et accès anticipé. Zéro spam.",
    "cta": "S'inscrire",
    "placeholder": "ton@email.com"
  },
  "footer": {
    "blurb": "Streetwear premium des guetteurs. Collection 2026 — See the Unseen.",
    "cols": [
      {
        "h": "Boutique",
        "links": [
          {
            "label": "Casquettes",
            "href": "#boutique"
          },
          {
            "label": "Polos",
            "href": "#boutique"
          },
          {
            "label": "Édition Or",
            "href": "#premium"
          },
          {
            "label": "Leggings",
            "href": "#boutique"
          }
        ]
      },
      {
        "h": "Aide",
        "links": [
          {
            "label": "Livraison",
            "href": "#"
          },
          {
            "label": "Retours",
            "href": "#"
          },
          {
            "label": "Guide des tailles",
            "href": "#"
          },
          {
            "label": "Contact",
            "href": "#"
          }
        ]
      },
      {
        "h": "Suivre",
        "links": [
          {
            "label": "Instagram",
            "href": "#"
          },
          {
            "label": "TikTok",
            "href": "#"
          },
          {
            "label": "YouTube",
            "href": "#"
          }
        ]
      }
    ],
    "copyright": "© 2026 LOOKOUT. Tous droits réservés.",
    "pays": [
      "VISA",
      "MASTERCARD",
      "PAYPAL",
      "APPLE PAY"
    ]
  },
  "playlist": [
    {
      "title": "LOOKOUT - CIEL BLEU",
      "artist": "LOOKOUT",
      "src": "audio/LOOKOUT - CIEL BLEU.mp3"
    },
    {
      "title": "LOOKOUT - QTVB QTVM",
      "artist": "LOOKOUT",
      "src": "audio/LOOKOUT - QTVB QTVM.mp3"
    },
    {
      "title": "LOoKOUT - NIGHT N DAY",
      "artist": "LOOKOUT",
      "src": "audio/LOoKOUT - NIGHT N DAY.mp3"
    },
    {
      "title": "LOOKOUT - C'EST LA MEME",
      "artist": "LOOKOUT",
      "src": "audio/LOOKOUT - C'EST LA MEME.mp3"
    },
    {
      "title": "LOOKOUT - CIEL BLE DraykOnThaBeat",
      "artist": "LOOKOUT",
      "src": "audio/LOOKOUT - CIEL BLE DraykOnThaBeat.mp3"
    },
    {
      "title": "LOOKOUT - CIEL BLEU other DraykOnThaBeat",
      "artist": "LOOKOUT",
      "src": "audio/LOOKOUT - CIEL BLEU other DraykOnThaBeat.mp3"
    },
    {
      "title": "JAMA - Doucement (PREMIX)",
      "artist": "JAMA",
      "src": "audio/JAMA - Doucement (PREMIX).mp3"
    },
    {
      "title": "JAMA - Ki Dy Sa (Ft. Mancho)-2020",
      "artist": "JAMA",
      "src": "audio/JAMA - Ki Dy Sa (Ft. Mancho)-2020.mp3"
    },
    {
      "title": "Jama - Les Cordes ( Produced By Drayk )",
      "artist": "JAMA",
      "src": "audio/Jama - Les Cordes ( Produced By Drayk ).mp3"
    },
    {
      "title": "jama - presse 2",
      "artist": "JAMA",
      "src": "audio/jama - presse 2.mp3"
    },
    {
      "title": "2-jama - presse",
      "artist": "JAMA",
      "src": "audio/2-jama - presse.mp3"
    },
    {
      "title": "EZ Wayne - Santa Maria ( Video Lyrics )",
      "artist": "EZ Wayne",
      "src": "audio/EZ Wayne - Santa Maria ( Video Lyrics ).mp3"
    },
    {
      "title": "ez wayne 1.1",
      "artist": "EZ Wayne",
      "src": "audio/ez wayne 1.1.mp3"
    },
    {
      "title": "lucid pre mix",
      "artist": "DraykOnThaBeatz",
      "src": "audio/lucid pre mix.mp3"
    },
    {
      "title": "madabad",
      "artist": "DraykOnThaBeatz",
      "src": "audio/madabad.mp3"
    },
    {
      "title": "maka kouns",
      "artist": "DraykOnThaBeatz",
      "src": "audio/maka kouns.mp3"
    },
    {
      "title": "pa viré a zero",
      "artist": "DraykOnThaBeatz",
      "src": "audio/pa viré a zero.mp3"
    },
    {
      "title": "pli en ka fe",
      "artist": "DraykOnThaBeatz",
      "src": "audio/pli en ka fe.mp3"
    },
    {
      "title": "quan tou va",
      "artist": "DraykOnThaBeatz",
      "src": "audio/quan tou va.mp3"
    },
    {
      "title": "trafiké",
      "artist": "DraykOnThaBeatz",
      "src": "audio/trafiké.mp3"
    },
    {
      "title": "hme trp 2.1",
      "artist": "DraykOnThaBeatz",
      "src": "audio/hme trp 2.1.mp3"
    },
    {
      "title": "inna pre mix",
      "artist": "DraykOnThaBeatz",
      "src": "audio/inna pre mix.mp3"
    },
    {
      "title": "kanaval gabi",
      "artist": "DraykOnThaBeatz",
      "src": "audio/kanaval gabi.mp3"
    },
    {
      "title": "la ricrié mwen",
      "artist": "DraykOnThaBeatz",
      "src": "audio/la ricrié mwen.mp3"
    },
    {
      "title": "la ricrié mwen_ambi melo",
      "artist": "DraykOnThaBeatz",
      "src": "audio/la ricrié mwen_ambi melo .wav"
    },
    {
      "title": "la ricrié mwen_c 2",
      "artist": "DraykOnThaBeatz",
      "src": "audio/la ricrié mwen_c 2.wav"
    },
    {
      "title": "com dab 455666",
      "artist": "DraykOnThaBeatz",
      "src": "audio/com dab 455666.mp3"
    },
    {
      "title": "com dab5788",
      "artist": "DraykOnThaBeatz",
      "src": "audio/com dab5788.mp3"
    },
    {
      "title": "com dab 3",
      "artist": "DraykOnThaBeatz",
      "src": "audio/com dab 3.mp3"
    },
    {
      "title": "COULY PUNI",
      "artist": "DraykOnThaBeatz",
      "src": "audio/COULY PUNI.mp3"
    },
    {
      "title": "coyly - mada",
      "artist": "DraykOnThaBeatz",
      "src": "audio/coyly - mada.mp3"
    },
    {
      "title": "di mwen",
      "artist": "DraykOnThaBeatz",
      "src": "audio/di mwen.mp3"
    },
    {
      "title": "discret",
      "artist": "DraykOnThaBeatz",
      "src": "audio/discret.mp3"
    },
    {
      "title": "en plaasss4",
      "artist": "DraykOnThaBeatz",
      "src": "audio/en plaasss4.mp3"
    },
    {
      "title": "enlo interd di blok fini",
      "artist": "DraykOnThaBeatz",
      "src": "audio/enlo interd di blok fini.mp3"
    },
    {
      "title": "enlo interd di blok",
      "artist": "DraykOnThaBeatz",
      "src": "audio/enlo interd di blok.mp3"
    },
    {
      "title": "extension an gro an deta",
      "artist": "DraykOnThaBeatz",
      "src": "audio/extension an gro an deta.mp3"
    },
    {
      "title": "al bien 2.0",
      "artist": "DraykOnThaBeatz",
      "src": "audio/al bien 2.0.mp3"
    },
    {
      "title": "AUD-20180723-WA0003",
      "artist": "DraykOnThaBeatz",
      "src": "audio/AUD-20180723-WA0003.mp3"
    },
    {
      "title": "ayin pa dou pre mix",
      "artist": "DraykOnThaBeatz",
      "src": "audio/ayin pa dou pre mix.mp3"
    },
    {
      "title": "ayin pa dou",
      "artist": "DraykOnThaBeatz",
      "src": "audio/ayin pa dou.mp3"
    },
    {
      "title": "fre mwen",
      "artist": "DraykOnThaBeatz",
      "src": "audio/fre mwen.mp3"
    },
    {
      "title": "freejam",
      "artist": "DraykOnThaBeatz",
      "src": "audio/freejam.mp3"
    },
    {
      "title": "get link 456",
      "artist": "DraykOnThaBeatz",
      "src": "audio/get link 456.mp3"
    },
    {
      "title": "get link Master DraykOnThaBeat",
      "artist": "DraykOnThaBeatz",
      "src": "audio/get link Master DraykOnThaBeat.mp3"
    },
    {
      "title": "get link",
      "artist": "DraykOnThaBeatz",
      "src": "audio/get link.mp3"
    },
    {
      "title": "LETTRE A LA FORTUNE",
      "artist": "DraykOnThaBeatz",
      "src": "audio/LETTRE A LA FORTUNE.mp3"
    }
  ]
};
