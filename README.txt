LOOKOUT - AJOUTER TES SONS (playlist du lecteur)
================================================

Tes 47 sons sont deja listes dans config.js (champ "playlist").
MAIS ils ne joueront QUE si les vrais fichiers audio sont presents dans le site.

ETAPES (pour que tout le monde les entende) :
1. Dans le dossier lookout-site, cree un dossier nomme :  audio
2. Copie tes fichiers dedans, avec EXACTEMENT le meme nom que dans "src".
   Exemple : la piste 1 attend le fichier   audio/LOOKOUT - CIEL BLEU.mp3
3. Redeploie le dossier ENTIER sur Netlify (glisse lookout-site sur app.netlify.com/drop).
   -> La playlist joue pour tous les visiteurs.

REGLE CLE : le nom dans "src" doit etre identique au vrai fichier (majuscules, accents, espaces).
Si une piste ne joue pas = le nom ne correspond pas. Corrige "src" dans config.js OU renomme le fichier.

A VERIFIER / RENOMMER (noms coupes a l'ecran ou caracteres bizarres) :
  - LOoKOUT - NIGHT N DAY.mp3        (le vrai fichier commence peut-etre par un caractere special)
  - LOOKOUT - CIEL BLE DraykOnThaBeat.mp3        (nom coupe a l'ecran - verifie le nom complet)
  - LOOKOUT - CIEL BLEU other DraykOnThaBeat.mp3 (nom coupe a l'ecran - verifie le nom complet)
  - Jama - Les Cordes ( Produced By Drayk ).mp3  (nom coupe a l'ecran - verifie le nom complet)
  - EZ Wayne - Santa Maria ( Video Lyrics ).mp3  (nom coupe a l'ecran - verifie le nom complet)
  - get link Master DraykOnThaBeat.mp3           (il y a peut-etre un espace avant .mp3)
  - la ricrie mwen_ambi melo .wav                (espace avant .wav + fichier 42 Mo)
  Conseil : renomme ces fichiers en noms simples (sans espace ni accent),
  ex.  lookout-night-n-day.mp3 , et mets le meme nom dans "src".

POIDS : 47 sons = environ 330 Mo. C'est lourd pour un site web.
Conseil : garde seulement tes morceaux phares dans audio/, ou heberge les autres ailleurs
et mets l'URL https:// dans "src". Les 2 .wav font 42 Mo chacun -> convertis-les en MP3.

AJOUT RAPIDE (sans editer le code) : lecteur en bas du site -> icone cadenas ->
mot de passe (champ adminPass de config.js) -> Ajouter (URL) ou Importer -> Exporter ->
colle le bloc dans config.js, champ "playlist".

SUPPRIMER / REORDONNER : change l'ordre dans le tableau "playlist" de config.js,
ou utilise les fleches / la croix dans l'admin du lecteur.

LISTE ACTUELLE (titre -> fichier attendu) :
   1. LOOKOUT - CIEL BLEU
       -> fichier attendu : audio/LOOKOUT - CIEL BLEU.mp3
   2. LOOKOUT - QTVB QTVM
       -> fichier attendu : audio/LOOKOUT - QTVB QTVM.mp3
   3. LOoKOUT - NIGHT N DAY
       -> fichier attendu : audio/LOoKOUT - NIGHT N DAY.mp3
   4. LOOKOUT - C'EST LA MEME
       -> fichier attendu : audio/LOOKOUT - C'EST LA MEME.mp3
   5. LOOKOUT - CIEL BLE DraykOnThaBeat
       -> fichier attendu : audio/LOOKOUT - CIEL BLE DraykOnThaBeat.mp3
   6. LOOKOUT - CIEL BLEU other DraykOnThaBeat
       -> fichier attendu : audio/LOOKOUT - CIEL BLEU other DraykOnThaBeat.mp3
   7. JAMA - Doucement (PREMIX)
       -> fichier attendu : audio/JAMA - Doucement (PREMIX).mp3
   8. JAMA - Ki Dy Sa (Ft. Mancho)-2020
       -> fichier attendu : audio/JAMA - Ki Dy Sa (Ft. Mancho)-2020.mp3
   9. Jama - Les Cordes ( Produced By Drayk )
       -> fichier attendu : audio/Jama - Les Cordes ( Produced By Drayk ).mp3
  10. jama - presse 2
       -> fichier attendu : audio/jama - presse 2.mp3
  11. 2-jama - presse
       -> fichier attendu : audio/2-jama - presse.mp3
  12. EZ Wayne - Santa Maria ( Video Lyrics )
       -> fichier attendu : audio/EZ Wayne - Santa Maria ( Video Lyrics ).mp3
  13. ez wayne 1.1
       -> fichier attendu : audio/ez wayne 1.1.mp3
  14. lucid pre mix
       -> fichier attendu : audio/lucid pre mix.mp3
  15. madabad
       -> fichier attendu : audio/madabad.mp3
  16. maka kouns
       -> fichier attendu : audio/maka kouns.mp3
  17. pa viré a zero
       -> fichier attendu : audio/pa viré a zero.mp3
  18. pli en ka fe
       -> fichier attendu : audio/pli en ka fe.mp3
  19. quan tou va
       -> fichier attendu : audio/quan tou va.mp3
  20. trafiké
       -> fichier attendu : audio/trafiké.mp3
  21. hme trp 2.1
       -> fichier attendu : audio/hme trp 2.1.mp3
  22. inna pre mix
       -> fichier attendu : audio/inna pre mix.mp3
  23. kanaval gabi
       -> fichier attendu : audio/kanaval gabi.mp3
  24. la ricrié mwen
       -> fichier attendu : audio/la ricrié mwen.mp3
  25. la ricrié mwen_ambi melo
       -> fichier attendu : audio/la ricrié mwen_ambi melo .wav
  26. la ricrié mwen_c 2
       -> fichier attendu : audio/la ricrié mwen_c 2.wav
  27. com dab 455666
       -> fichier attendu : audio/com dab 455666.mp3
  28. com dab5788
       -> fichier attendu : audio/com dab5788.mp3
  29. com dab 3
       -> fichier attendu : audio/com dab 3.mp3
  30. COULY PUNI
       -> fichier attendu : audio/COULY PUNI.mp3
  31. coyly - mada
       -> fichier attendu : audio/coyly - mada.mp3
  32. di mwen
       -> fichier attendu : audio/di mwen.mp3
  33. discret
       -> fichier attendu : audio/discret.mp3
  34. en plaasss4
       -> fichier attendu : audio/en plaasss4.mp3
  35. enlo interd di blok fini
       -> fichier attendu : audio/enlo interd di blok fini.mp3
  36. enlo interd di blok
       -> fichier attendu : audio/enlo interd di blok.mp3
  37. extension an gro an deta
       -> fichier attendu : audio/extension an gro an deta.mp3
  38. al bien 2.0
       -> fichier attendu : audio/al bien 2.0.mp3
  39. AUD-20180723-WA0003
       -> fichier attendu : audio/AUD-20180723-WA0003.mp3
  40. ayin pa dou pre mix
       -> fichier attendu : audio/ayin pa dou pre mix.mp3
  41. ayin pa dou
       -> fichier attendu : audio/ayin pa dou.mp3
  42. fre mwen
       -> fichier attendu : audio/fre mwen.mp3
  43. freejam
       -> fichier attendu : audio/freejam.mp3
  44. get link 456
       -> fichier attendu : audio/get link 456.mp3
  45. get link Master DraykOnThaBeat
       -> fichier attendu : audio/get link Master DraykOnThaBeat.mp3
  46. get link
       -> fichier attendu : audio/get link.mp3
  47. LETTRE A LA FORTUNE
       -> fichier attendu : audio/LETTRE A LA FORTUNE.mp3
