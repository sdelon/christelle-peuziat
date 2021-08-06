const months = [
    {
        id: '01',
        mois: 'janvier'
    },
    {
        id: '02',
        mois: 'février'
    },
    {
        id: '03',
        mois: 'mars'
    },
    {
        id: '04',
        mois: 'avril'
    },
    {
        id: '05',
        mois: 'mai'
    },
    {
        id: '06',
        mois: 'juin'
    },
    {
        id: '07',
        mois: 'juillet'
    },
    {
        id: '08',
        mois: 'août'
    },
    {
        id: '09',
        mois: 'septembre'
    },
    {
        id: '10',
        mois: 'octobre'
    },
    {
        id: '11',
        mois: 'novembre'
    },
    {
        id: '12',
        mois: 'décembre'
    }  
]

export const getDay = (date) => {
    return date.split('-')[2]
}

export const getMonth = (date) => {
    let month = months.filter(m => m.id === date.split('-')[1])
    return month[0].mois
}