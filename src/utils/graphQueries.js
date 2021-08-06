const homeQuery = `{
    page_accueil{
    titre
    accroche
    intro
    image
    texte_lien_header
    citation
    body{
    ...on qui_suis-je__{
    non-repeat{
    ...non-repeatFields
    }
    }
    ...on les_soins{
    non-repeat{
    ...non-repeatFields
    }
    repeat{
    ...repeatFields
    }
    }
    ...on temoignages{
    repeat{
    ...repeatFields
    }
    }
    ...on nos_rendez-vous{
    non-repeat{
    ...non-repeatFields
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
    ...non-repeatFields
    }
    }
    }
    }
    }`


export { homeQuery }