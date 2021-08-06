const homeQuery = `{
home{
titre
accroche
intro
image
texte_lien_header
citation
body{
...on qui_suis-je__{
non-repeat{
titre_presentation
presentation
texte_lien_presentation
photo
}
}
...on les_soins{
non-repeat{
titre_soins
intro_soins
texte_lien_soins
}
repeat{
citation_soin
texte
}
}
...on temoignages{
repeat{
temoignage
prenom
}
}
...on nos_rendez-vous{
non-repeat{
titre_agenda
intro_agenda
}
repeat{
evenement_a_lier{
...on even{
uid
titre
extrait_description
date_debut
photo
}
}
}
}
...on contact{
non-repeat{
titre_contact
intro_contact
}
}
}
}
}`

export { homeQuery }