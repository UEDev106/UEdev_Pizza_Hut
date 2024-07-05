export function formatCurrency(value){
    return new Intl.NumberFormat("en",{
        style:'currency',
        currency:'EUR',

    }).format(value)
}


export function formatDate(datestr){
    return new Intl.DateTimeFormat("en",{
        day:'numeric',
        month:'short',
        hour:'2-digit',
        minute:'2-digit'
    }).format(new Date(datestr))
}

export function calMinutesLeft(datestr){
    const d1=new Date().getTime();
    const d2=new Date(datestr).getTime();
    return Math.round(d1 - d2)/60000;
}