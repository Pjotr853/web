
function currentDate(){
    const now = new Date().toDateString();
    document.getElementById("time").innerHTML=now;
}

function posldneMeranie(){
    let request = new XMLHttpRequest();
    let urlHere = "https://api.thingspeak.com/channels/1645536/feeds.json?api_key=ZG1WHEIAYUCFAIXC&results=1";
    let data;

    console.log(urlHere);
    request.open('GET', urlHere, true);
    request.onload = ()=> {
        data=JSON.parse(request.response);
        let timesFromApi=data.feeds[0].created_at;
        console.log(timesFromApi);
        timesFromApi=timesFromApi.replace("T", " ");
        timesFromApi=timesFromApi.replace("Z", " ");
        console.log(data)
        document.getElementById("teplota").innerHTML ="teplota: " + data.feeds[0].field1 +" °C";
        document.getElementById("tlak").innerHTML ="tlak: " + data.feeds[0].field2 +" Pa";
        document.getElementById("vlhkost").innerHTML ="vlhkosť: " + data.feeds[0].field3 +" %";
        document.getElementById("svietivost").innerHTML ="intenzita osvetlenia: " + data.feeds[0].field4 +" lux";
        document.getElementById("aktualizovane").innerHTML ="Aktualizované: " + timesFromApi;

    }
    request.onerror=()=>{
        console.log(request);
    };
    request.send();
}

let labels = [];
let yValue=[];

const chartData = {
    labels: labels,
    datasets: [{
        borderColor: "red",
        data: yValue,
    }]
};

const config = {
    type: 'line',
    data: chartData,
    options: {
        legend: {display: false},
        title:{
            display:true,
            text: "name",
            fontSize: 16
        },
        scales: {
            xAxes: [{
                ticks: {
                    maxTicksLimit: 8
                }
            }]
        }


        },

};

function updateGraph(x){
    chart.destroy();

    while(labels.length > 0) {
        labels.pop();
    }
    while(yValue.length > 0) {
        yValue.pop();
    }
    let request = new XMLHttpRequest();
    if(x===1){
        let urlHere="https://api.thingspeak.com/channels/1645536/fields/1.json?api_key=ZG1WHEIAYUCFAIXC";
        let data;
        request.open('GET', urlHere, true);
        request.onload = ()=> {
            data = JSON.parse(request.response);
            for (let i in data.feeds) {
                yValue[i] = parseFloat(data.feeds[i].field1);
                let text=(data.feeds[i].created_at);
                labels[i] = text.slice(11, 16);
            }
            chartData.datasets[0].borderColor="red";
            config.options.title.text="Teplota";
            chart = new Chart(
                document.getElementById('myChart'),
                config);
        }
        request.onerror=()=>{
            console.log(request);
        };
       }else if(x===2){
        let urlHere="https://api.thingspeak.com/channels/1645536/fields/2.json?api_key=ZG1WHEIAYUCFAIXC";
        let data;
        request.open('GET', urlHere, true);
        request.onload = ()=> {
            data = JSON.parse(request.response);
            for (let i in data.feeds) {
                yValue[i] = parseFloat(data.feeds[i].field2);
                let text=(data.feeds[i].created_at);
                labels[i] = text.slice(11, 16);
            }
            chartData.datasets[0].borderColor="green";
            config.options.title.text="Tlak";
            chart = new Chart(
                document.getElementById('myChart'),
                config);

        }
        request.onerror=()=>{
            console.log(request);
        };
    }else if(x===3){
        let urlHere="https://api.thingspeak.com/channels/1645536/fields/3.json?api_key=ZG1WHEIAYUCFAIXC";
        let data;
        request.open('GET', urlHere, true);
        request.onload = ()=> {
            data = JSON.parse(request.response);
            //console.log(data);
            for (let i in data.feeds) {
                yValue[i] = parseFloat(data.feeds[i].field3);
                let text=(data.feeds[i].created_at);
                labels[i] = text.slice(11, 16);
             }
            config.options.title.text="Vlhkosť";
            chartData.datasets[0].borderColor="blue";
            chart = new Chart(
                document.getElementById('myChart'),
                config);
        }
        request.onerror=()=>{
            console.log(request);
        };
    }else if(x===4){
        let urlHere="https://api.thingspeak.com/channels/1645536/fields/4.json?api_key=ZG1WHEIAYUCFAIXC";
        let data;
        request.open('GET', urlHere, true);
        request.onload = ()=> {
            data = JSON.parse(request.response);
            for (let i in data.feeds) {
                yValue[i] = parseFloat(data.feeds[i].field4);
                let text=(data.feeds[i].created_at);
                labels[i] = text.slice(11, 16);
                console.log("som tu");
            }
            config.options.title.text="Intenzita osvetlenia";
            chartData.datasets[0].borderColor="purple";
            chart = new Chart(
                document.getElementById('myChart'),
                config);
        }
        request.onerror=()=>{
            console.log(request);
        };
    }
    request.send();
}
