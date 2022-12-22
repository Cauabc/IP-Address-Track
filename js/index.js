

const btn = document.querySelector('.input-search')
const input = document.querySelector('#ipUser')
const ip = document.querySelector('.ip')
const locationText = document.querySelector('.location')
const time = document.querySelector('.time')
const isp = document.querySelector('.isp')
const map = document.querySelector('.map')
btn.addEventListener('click', handleAPISearch)

async function handleAPISearch(){
    if (input.value.length > 0){
        const request = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ie0VSTb5pt4B8xoICuDuX31BDFLow&ipAddress=${input.value}`)
        const response = await request.json()
        console.log(response) 
        if (response.code !== 422){
            ip.textContent = response.ip
            locationText.innerHTML = `${response.location.city}, ${response.location.country} <br> ${response.location.postalCode} `
            time.textContent = `UTC ${response.location.timezone}`
            isp.textContent = response.isp
            map.src = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7429.533733741359!2d${response.location.lng}!3d${response.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1671728669835!5m2!1spt-BR!2sbr`
            return
        } else{
            alert('IP Invalid')
            return
        } 
        
    }
    alert('Input empty')
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(e){
    if (e.key === 'Enter' && input.value.length > 0){
        handleAPISearch()
        return
    }
    return
}

window.addEventListener('load', handleLoad)

async function handleLoad(){
    const request = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ie0VSTb5pt4B8xoICuDuX31BDFLow&ipAddress=8.8.8.8`)
    const response = await request.json()
    if (response.code !== 422){
            ip.textContent = response.ip
            locationText.innerHTML = `${response.location.city}, ${response.location.country} <br> ${response.location.postalCode} `
            time.textContent = `UTC ${response.location.timezone}`
            isp.textContent = response.isp
            return
        } else{
            alert('IP Invalid')
            return
        } 
}