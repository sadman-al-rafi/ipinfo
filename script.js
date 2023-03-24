function getip(){
    

var printl=document.querySelector("#printl")
     fetch('https://api.ipify.org/?format=json')
        .then(res => res.json())

        .then(data => {


            var ipval = data['ip']
            
            printl.innerHTML=`Your ip is: <a style="text-decoration:none;color:White;" href="#">${ipval}</a>`

        })
        }
        
        function getloc() {
        var locprint=document.querySelector("#locprint")
            var ipinp=document.querySelector("#print").value
            fetch('http://ip-api.com/json/'+ipinp)
        .then(res => res.json())

        .then(data => {
var ipget=data['query']
            var country = data['country']
            var region = data['regionName']
            var city = data['city']
            var isp = data['isp']
            var org = data['org']
            var as = data['as']
            var zip = data['zip']
            var lat = data['lat']
            var lon = data['lon']
            var timezone = data['timezone']
            locprint.style=`padding:10px`
            locprint.innerHTML=`
            <p><b>IP:</b> ${ipget}</p>
            <p><b>ISP:</b> ${isp}</p>
            <p><b>Organisation:</b> ${org}</p>
            <p><b>Known as:</b> ${as}</p>
            <p><b>Country:</b> ${country}</p>
            <p><b>Region:</b> ${region}</p>
            <p><b>City:</b> ${city}</p>
            <p><b>ZIP:</b> ${zip}</p>
            <p><b>LAT. :</b> ${lat}</p>
            <p><b>LONG. :</b> ${lon}</p>
         <p><b>TimeZone:</b> ${timezone}</p>
            
            `
     })
    }
